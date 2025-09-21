// Mock data for the educational platform

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  duration: string;
  lessons: number;
  category: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  isLive: boolean;
  liveDate?: string;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'teacher' | 'admin';
  joinDate: string;
  coursesCount?: number;
  studentsCount?: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string;
  description: string;
}

// Mock courses data
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'الرياضيات للصف الثامن - الجبر والهندسة',
    description: 'دورة شاملة في الرياضيات تغطي الجبر والهندسة للطلاب في الصف الثامن',
    instructor: 'د. أحمد محمد',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 150,
    originalPrice: 200,
    rating: 4.8,
    studentsCount: 324,
    duration: '12 ساعة',
    lessons: 24,
    category: 'الرياضيات',
    level: 'متوسط',
    isLive: false,
    tags: ['جبر', 'هندسة', 'حل المسائل']
  },
  {
    id: '2',
    title: 'اللغة العربية - النحو والصرف',
    description: 'تعلم قواعد النحو والصرف في اللغة العربية بطريقة مبسطة وممتعة',
    instructor: 'أ. فاطمة علي',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 120,
    rating: 4.9,
    studentsCount: 256,
    duration: '15 ساعة',
    lessons: 30,
    category: 'اللغة العربية',
    level: 'مبتدئ',
    isLive: true,
    liveDate: '2024-01-15',
    tags: ['نحو', 'صرف', 'قواعد']
  },
  {
    id: '3',
    title: 'العلوم الطبيعية - الفيزياء والكيمياء',
    description: 'استكشف عالم الفيزياء والكيمياء من خلال التجارب والشرح المبسط',
    instructor: 'د. محمد حسن',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 180,
    originalPrice: 220,
    rating: 4.7,
    studentsCount: 189,
    duration: '18 ساعة',
    lessons: 36,
    category: 'العلوم',
    level: 'متقدم',
    isLive: false,
    tags: ['فيزياء', 'كيمياء', 'تجارب']
  },
  {
    id: '4',
    title: 'التاريخ الإسلامي - العصور الذهبية',
    description: 'رحلة في التاريخ الإسلامي والحضارة العربية عبر العصور',
    instructor: 'أ. خالد أحمد',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 100,
    rating: 4.6,
    studentsCount: 412,
    duration: '10 ساعة',
    lessons: 20,
    category: 'التاريخ',
    level: 'مبتدئ',
    isLive: true,
    liveDate: '2024-01-20',
    tags: ['تاريخ', 'حضارة', 'إسلام']
  },
  {
    id: '5',
    title: 'اللغة الإنجليزية - المستوى المتوسط',
    description: 'تطوير مهارات اللغة الإنجليزية في القراءة والكتابة والمحادثة',
    instructor: 'أ. سارة محمود',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 160,
    rating: 4.8,
    studentsCount: 298,
    duration: '20 ساعة',
    lessons: 40,
    category: 'اللغات',
    level: 'متوسط',
    isLive: false,
    tags: ['إنجليزية', 'محادثة', 'قواعد']
  },
  {
    id: '6',
    title: 'الجغرافيا - قارات العالم',
    description: 'تعرف على قارات العالم وخصائصها الجغرافية والمناخية',
    instructor: 'د. عمر الزهراني',
    instructorAvatar: '/api/placeholder/50/50',
    thumbnail: '/api/placeholder/300/200',
    price: 110,
    originalPrice: 140,
    rating: 4.5,
    studentsCount: 167,
    duration: '8 ساعات',
    lessons: 16,
    category: 'الجغرافيا',
    level: 'مبتدئ',
    isLive: true,
    liveDate: '2024-01-25',
    tags: ['جغرافيا', 'قارات', 'مناخ']
  }
];

// Mock user data
export const mockUser: User = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed@example.com',
  avatar: '/api/placeholder/100/100',
  role: 'student',
  joinDate: '2023-09-15',
};

// Mock teacher data
export const mockTeacher: User = {
  id: '2',
  name: 'د. فاطمة علي',
  email: 'fatima@example.com',
  avatar: '/api/placeholder/100/100',
  role: 'teacher',
  joinDate: '2022-03-10',
  coursesCount: 5,
  studentsCount: 1250,
};

// Mock lessons data
export const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'مقدمة في الجبر',
    duration: '25 دقيقة',
    completed: true,
    videoUrl: 'https://example.com/video1',
    description: 'تعريف الجبر والمتغيرات الأساسية'
  },
  {
    id: '2',
    title: 'العمليات الجبرية',
    duration: '30 دقيقة',
    completed: true,
    videoUrl: 'https://example.com/video2',
    description: 'الجمع والطرح والضرب في الجبر'
  },
  {
    id: '3',
    title: 'حل المعادلات الخطية',
    duration: '35 دقيقة',
    completed: false,
    videoUrl: 'https://example.com/video3',
    description: 'طرق حل المعادلات من الدرجة الأولى'
  },
  {
    id: '4',
    title: 'مقدمة في الهندسة',
    duration: '28 دقيقة',
    completed: false,
    videoUrl: 'https://example.com/video4',
    description: 'الأشكال الهندسية الأساسية'
  }
];

// Categories data
export const categories = [
  { id: '1', name: 'الرياضيات', icon: '🔢', coursesCount: 45 },
  { id: '2', name: 'اللغة العربية', icon: '📚', coursesCount: 32 },
  { id: '3', name: 'العلوم', icon: '🔬', coursesCount: 28 },
  { id: '4', name: 'التاريخ', icon: '🏛️', coursesCount: 22 },
  { id: '5', name: 'الجغرافيا', icon: '🌍', coursesCount: 18 },
  { id: '6', name: 'اللغات', icon: '🗣️', coursesCount: 35 },
  { id: '7', name: 'الفنون', icon: '🎨', coursesCount: 15 },
  { id: '8', name: 'التربية الإسلامية', icon: '☪️', coursesCount: 26 }
];