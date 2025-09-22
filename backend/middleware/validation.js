// Input validation middleware
const validateRegistration = (req, res, next) => {
  const { name, email, password, role, grade } = req.body;
  const errors = [];

  // Name validation
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please provide a valid email address');
  }

  // Password validation
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  // Role validation
  const validRoles = ['student', 'teacher', 'admin'];
  if (!role || !validRoles.includes(role)) {
    errors.push('Please select a valid role (student, teacher, or admin)');
  }

  // Grade validation for students
  if (role === 'student' && (!grade || grade.trim().length === 0)) {
    errors.push('Grade is required for students');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email || !email.trim()) {
    errors.push('Email is required');
  }

  if (!password || !password.trim()) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

const validateCourse = (req, res, next) => {
  const { title, description, instructor, level, subject, duration, price } = req.body;
  const errors = [];

  if (!title || title.trim().length < 3) {
    errors.push('Course title must be at least 3 characters long');
  }

  if (!description || description.trim().length < 10) {
    errors.push('Course description must be at least 10 characters long');
  }

  if (!instructor || instructor.trim().length < 2) {
    errors.push('Instructor name must be at least 2 characters long');
  }

  if (!level || !['ابتدائي', 'إعدادي', 'ثانوي'].includes(level)) {
    errors.push('Please select a valid level');
  }

  if (!subject || subject.trim().length < 2) {
    errors.push('Subject is required');
  }

  if (!duration || duration.trim().length < 3) {
    errors.push('Duration is required');
  }

  if (!price || isNaN(price) || price < 0) {
    errors.push('Price must be a valid positive number');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  validateCourse
};
