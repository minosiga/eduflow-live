const express = require('express');
const User = require('../models/User');
const Course = require('../models/Course');
const { authenticateToken, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('enrolledCourses.course', 'title thumbnail instructorName subject level')
      .populate('certificates.course', 'title thumbnail')
      .select('-password');

    res.json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile',
      error: error.message
    });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, phone, location, bio, avatar } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, phone, location, bio, avatar },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: error.message
    });
  }
});

// @route   GET /api/users/courses
// @desc    Get user's enrolled courses
// @access  Private
router.get('/courses', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: 'enrolledCourses.course',
        select: 'title thumbnail instructorName subject level duration rating price isLive'
      })
      .select('enrolledCourses');

    res.json({
      success: true,
      data: { courses: user.enrolledCourses }
    });
  } catch (error) {
    console.error('Get user courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses',
      error: error.message
    });
  }
});

// @route   GET /api/users/teachers
// @desc    Get all teachers
// @access  Public
router.get('/teachers', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const filter = { role: 'teacher', isActive: true };
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { bio: { $regex: search, $options: 'i' } }
      ];
    }

    const teachers = await User.find(filter)
      .select('name email bio avatar')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(filter);

    res.json({
      success: true,
      data: {
        teachers,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    console.error('Get teachers error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch teachers',
      error: error.message
    });
  }
});

// @route   GET /api/users/teachers/:id
// @desc    Get teacher profile
// @access  Public
router.get('/teachers/:id', async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id)
      .select('name email bio avatar location');

    if (!teacher || teacher.role !== 'teacher') {
      return res.status(404).json({
        success: false,
        message: 'Teacher not found'
      });
    }

    // Get teacher's courses
    const courses = await Course.find({ instructor: req.params.id, isPublished: true })
      .select('title thumbnail subject level rating price isLive')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { 
        teacher,
        courses
      }
    });
  } catch (error) {
    console.error('Get teacher error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch teacher',
      error: error.message
    });
  }
});

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Private
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('enrolledCourses.course', 'title')
      .select('enrolledCourses certificates');

    const stats = {
      totalCourses: user.enrolledCourses.length,
      completedCourses: user.enrolledCourses.filter(course => course.progress === 100).length,
      certificates: user.certificates.length,
      totalHours: user.enrolledCourses.reduce((total, course) => {
        // This would need to be calculated based on course duration
        return total + 0; // Placeholder
      }, 0)
    };

    res.json({
      success: true,
      data: { stats }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch stats',
      error: error.message
    });
  }
});

// @route   POST /api/users/complete-lesson
// @desc    Mark lesson as completed
// @access  Private
router.post('/complete-lesson', authenticateToken, async (req, res) => {
  try {
    const { courseId, lessonId } = req.body;

    // Check if user is enrolled in course
    const user = await User.findOne({
      _id: req.user._id,
      'enrolledCourses.course': courseId
    });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: 'Not enrolled in this course'
      });
    }

    // Add lesson to completed lessons
    await User.updateOne(
      { 
        _id: req.user._id,
        'enrolledCourses.course': courseId
      },
      {
        $addToSet: { 'enrolledCourses.$.completedLessons': lessonId }
      }
    );

    // Update progress
    const course = await Course.findById(courseId).populate('lessons');
    const totalLessons = course.lessons.length;
    const completedLessons = user.enrolledCourses.find(
      ec => ec.course.toString() === courseId
    ).completedLessons.length + 1;

    const progress = Math.round((completedLessons / totalLessons) * 100);

    await User.updateOne(
      { 
        _id: req.user._id,
        'enrolledCourses.course': courseId
      },
      {
        $set: { 'enrolledCourses.$.progress': progress }
      }
    );

    // If course is 100% complete, add certificate
    if (progress === 100) {
      await User.findByIdAndUpdate(req.user._id, {
        $addToSet: {
          certificates: {
            course: courseId,
            issuedAt: new Date()
          }
        }
      });
    }

    res.json({
      success: true,
      message: 'Lesson marked as completed',
      data: { progress }
    });
  } catch (error) {
    console.error('Complete lesson error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to complete lesson',
      error: error.message
    });
  }
});

module.exports = router;
