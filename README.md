# EduFlow - Educational Platform

A comprehensive educational platform built with React, TypeScript, Node.js, and MongoDB. Features JWT authentication, role-based access control, and a clean, minimal UI inspired by shadcn design.

## 🚀 Features

### Frontend
- **Modern React 18** with TypeScript
- **Clean UI Design** inspired by shadcn/ui (without dependencies)
- **JWT Authentication** with protected routes
- **Role-based Access Control** (Student, Teacher, Admin)
- **Responsive Design** with RTL support for Arabic
- **State Management** with React Context and TanStack Query
- **Form Validation** with comprehensive error handling

### Backend
- **Node.js/Express.js** RESTful API
- **MongoDB** with Mongoose ODM
- **JWT Authentication** with secure token handling
- **Password Hashing** with bcryptjs
- **Input Validation** and error handling
- **CORS** configuration for frontend integration
- **Environment Configuration** with dotenv

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite (Build tool)
- React Router DOM (Routing)
- TanStack Query (Data fetching)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Axios (HTTP client)

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- CORS (Cross-origin requests)
- dotenv (Environment variables)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Create .env file with the following variables:
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/eduflow
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:8080
   ```

4. **Start the backend server:**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Or production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/logout` - Logout user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create new course (Teacher/Admin)
- `PUT /api/courses/:id` - Update course (Teacher/Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Users
- `GET /api/users/stats` - Get user statistics
- `GET /api/users/courses` - Get user's enrolled courses
- `POST /api/users/enroll` - Enroll in course

## 🔐 Authentication & Authorization

### User Roles
- **Student**: Can view courses, enroll, and access learning materials
- **Teacher**: Can create and manage courses, view student progress
- **Admin**: Full system access and user management

### JWT Token
- Tokens are stored in localStorage
- Automatic token refresh and validation
- Protected routes with role-based access control

## 🎨 UI Components

The project uses custom UI components inspired by shadcn/ui design:

- **Button** - Various variants and sizes
- **Card** - Content containers
- **Input** - Form inputs with validation
- **Select** - Dropdown selections
- **Badge** - Status indicators
- **Progress** - Progress bars
- **Tabs** - Tab navigation

## 📱 Pages & Routes

### Public Routes
- `/` - Landing page
- `/login` - User login
- `/register` - User registration
- `/course/:id` - Course details (public view)

### Protected Routes
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/course/:id/learn` - Course learning interface
- `/teacher-dashboard` - Teacher dashboard (Teacher role only)

## 🚀 Development

### Project Structure
```
eduflow-live/
├── backend/
│   ├── middleware/          # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main app component
│   └── package.json
└── README.md
```

### Key Features Implemented

1. **JWT Authentication System**
   - Secure token-based authentication
   - Automatic token validation
   - Role-based access control

2. **Protected Routes**
   - Route protection based on authentication status
   - Role-based route access
   - Automatic redirects

3. **Error Handling**
   - Comprehensive error handling on both frontend and backend
   - User-friendly error messages
   - Validation error display

4. **State Management**
   - React Context for global state
   - TanStack Query for server state
   - Local state management

5. **UI/UX**
   - Clean, minimal design
   - Responsive layout
   - RTL support for Arabic
   - Loading states and error boundaries

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/eduflow
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:8080
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 📝 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ for education**
