import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // If no token and this is a protected route, reject the request
      const protectedRoutes = ['/users/', '/auth/me'];
      const isProtectedRoute = protectedRoutes.some(route => config.url?.includes(route));
      if (isProtectedRoute) {
        return Promise.reject(new Error('No authentication token available'));
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Don't automatically clear localStorage and redirect
    // Let the AuthContext handle this logic
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (data: any) => api.put('/auth/profile', data),
  changePassword: (data: any) => api.post('/auth/change-password', data),
};

// Courses API
export const coursesAPI = {
  getCourses: (params?: any) => api.get('/courses', { params }),
  getCourse: (id: string) => api.get(`/courses/${id}`),
  createCourse: (data: any) => api.post('/courses', data),
  updateCourse: (id: string, data: any) => api.put(`/courses/${id}`, data),
  enrollCourse: (id: string) => api.post(`/courses/${id}/enroll`),
  addReview: (id: string, data: any) => api.post(`/courses/${id}/review`, data),
  getSubjects: () => api.get('/courses/categories/subjects'),
  getLevels: () => api.get('/courses/categories/levels'),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
  getUserCourses: () => api.get('/users/courses'),
  getTeachers: (params?: any) => api.get('/users/teachers', { params }),
  getTeacher: (id: string) => api.get(`/users/teachers/${id}`),
  getUserStats: () => api.get('/users/stats'),
  completeLesson: (data: any) => api.post('/users/complete-lesson', data),
};

export default api;
