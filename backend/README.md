# EduFlow Backend API

Educational platform backend built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Course management
- Lesson management
- User enrollment and progress tracking
- Reviews and ratings
- Teacher profiles

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/eduflow
FRONTEND_URL=http://localhost:8080
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Teachers only)
- `PUT /api/courses/:id` - Update course
- `POST /api/courses/:id/enroll` - Enroll in course
- `POST /api/courses/:id/review` - Add course review

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/courses` - Get user's courses
- `GET /api/users/teachers` - Get all teachers
- `GET /api/users/stats` - Get user statistics

## Database Models

- **User**: Student, teacher, and admin accounts
- **Course**: Course information and metadata
- **Lesson**: Individual lessons within courses

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
