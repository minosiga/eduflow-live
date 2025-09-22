import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Select, SelectItem } from '@/components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { 
  Search, Filter, Star, Clock, Users, BookOpen, 
  Play, Award, TrendingUp, Calendar, MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const subjects = [
    'رياضيات', 'علوم', 'لغة عربية', 'لغات', 'تاريخ', 
    'جغرافيا', 'فلسفة', 'فنون', 'موسيقى'
  ];

  const levels = ['ابتدائي', 'إعدادي', 'ثانوي'];

  const courses = [
    {
      id: '1',
      title: 'الرياضيات للصف الثامن - الجبر والهندسة',
      instructor: 'أ. أحمد محمد',
      subject: 'رياضيات',
      level: 'إعدادي',
      grade: 'الثامن',
      duration: '8 أسابيع',
      price: 299,
      rating: 4.8,
      students: 324,
      thumbnail: '/placeholder.svg',
      isLive: true,
      liveDate: '2024-01-15',
      description: 'دورة شاملة في الجبر والهندسة للصف الثامن مع شرح مفصل وأمثلة عملية'
    },
    {
      id: '2',
      title: 'اللغة العربية - النحو والصرف',
      instructor: 'د. فاطمة علي',
      subject: 'لغة عربية',
      level: 'ثانوي',
      grade: 'الأول الثانوي',
      duration: '12 أسبوع',
      price: 399,
      rating: 4.9,
      students: 256,
      thumbnail: '/placeholder.svg',
      isLive: false,
      description: 'تعلم قواعد النحو والصرف بطريقة سهلة ومبسطة مع تمارين تطبيقية'
    },
    {
      id: '3',
      title: 'العلوم الطبيعية - الفيزياء والكيمياء',
      instructor: 'أ. محمد حسن',
      subject: 'علوم',
      level: 'ثانوي',
      grade: 'الثاني الثانوي',
      duration: '10 أسابيع',
      price: 349,
      rating: 4.7,
      students: 189,
      thumbnail: '/placeholder.svg',
      isLive: true,
      liveDate: '2024-01-20',
      description: 'دورة متقدمة في الفيزياء والكيمياء مع تجارب عملية وتطبيقات حقيقية'
    },
    {
      id: '4',
      title: 'التاريخ الإسلامي',
      instructor: 'د. خالد أحمد',
      subject: 'تاريخ',
      level: 'إعدادي',
      grade: 'السابع',
      duration: '6 أسابيع',
      price: 199,
      rating: 4.6,
      students: 145,
      thumbnail: '/placeholder.svg',
      isLive: false,
      description: 'رحلة عبر التاريخ الإسلامي من البعثة إلى الخلافة الراشدة'
    },
    {
      id: '5',
      title: 'الجغرافيا الطبيعية',
      instructor: 'أ. نورا سعد',
      subject: 'جغرافيا',
      level: 'ثانوي',
      grade: 'الثالث الثانوي',
      duration: '8 أسابيع',
      price: 279,
      rating: 4.5,
      students: 98,
      thumbnail: '/placeholder.svg',
      isLive: false,
      description: 'دراسة شاملة للجغرافيا الطبيعية والتضاريس والمناخ'
    },
    {
      id: '6',
      title: 'البرمجة للمبتدئين',
      instructor: 'أ. سارة محمد',
      subject: 'علوم',
      level: 'ثانوي',
      grade: 'جميع المراحل',
      duration: '16 أسبوع',
      price: 499,
      rating: 4.9,
      students: 412,
      thumbnail: '/placeholder.svg',
      isLive: true,
      liveDate: '2024-01-25',
      description: 'تعلم أساسيات البرمجة من الصفر مع مشاريع عملية وتطبيقات حقيقية'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !selectedSubject || course.subject === selectedSubject;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    
    return matchesSearch && matchesSubject && matchesLevel;
  });

  const liveCourses = filteredCourses.filter(course => course.isLive);
  const recordedCourses = filteredCourses.filter(course => !course.isLive);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              اكتشف دوراتنا التعليمية
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              تعلم من أفضل المعلمين في جميع المواد والمستويات
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="ابحث عن الدورة أو المعلم..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10 h-12"
                    />
                  </div>
                </div>
                <Select 
                  placeholder="اختر المادة" 
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectItem value="">جميع المواد</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </Select>
                <Select 
                  placeholder="اختر المستوى" 
                  value={selectedLevel}
                  onValueChange={setSelectedLevel}
                >
                  <SelectItem value="">جميع المستويات</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">جميع الدورات ({filteredCourses.length})</TabsTrigger>
              <TabsTrigger value="live">الدورات المباشرة ({liveCourses.length})</TabsTrigger>
              <TabsTrigger value="recorded">الدورات المسجلة ({recordedCourses.length})</TabsTrigger>
            </TabsList>

            {/* All Courses */}
            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      {course.isLive && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          <Play className="h-3 w-3 ml-1" />
                          مباشر
                        </Badge>
                      )}
                      <Badge variant="outline" className="absolute top-2 left-2">
                        {course.subject}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{course.instructor}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{course.rating}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-green-600">
                            {course.price} ر.س
                          </span>
                        </div>
                        <Link to={`/course/${course.id}`}>
                          <Button>
                            <BookOpen className="h-4 w-4 ml-1" />
                            عرض التفاصيل
                          </Button>
                        </Link>
                      </div>

                      {course.isLive && (
                        <div className="flex items-center space-x-2 text-sm text-blue-600">
                          <Calendar className="h-4 w-4" />
                          <span>الجلسة القادمة: {course.liveDate}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Live Courses */}
            <TabsContent value="live" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {liveCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow border-red-200">
                    <div className="relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        <Play className="h-3 w-3 ml-1" />
                        مباشر
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          {course.price} ر.س
                        </span>
                        <Button>
                          <Play className="h-4 w-4 ml-1" />
                          انضم الآن
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recorded Courses */}
            <TabsContent value="recorded" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recordedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          {course.price} ر.س
                        </span>
                        <Button>
                          <BookOpen className="h-4 w-4 ml-1" />
                          ابدأ التعلم
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
