import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  PlayCircle, 
  Download, 
  Share2, 
  Heart,
  Calendar,
  Globe
} from 'lucide-react';
import { mockCourses, mockLessons, Course } from '@/lib/mockData';
import Header from '@/components/Header';

const CourseDetail = () => {
  const { id } = useParams();
  const [course] = useState<Course | undefined>(
    mockCourses.find(c => c.id === id)
  );
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">الدورة غير موجودة</h1>
            <Link to="/">
              <Button>العودة للرئيسية</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolled(true);
    // Here you would make API call to enroll user
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                  {course.isLive && <Badge className="hero-gradient text-white">مباشر</Badge>}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {course.title}
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.studentsCount} طالب)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PlayCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{course.lessons} درس</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>العربية</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={course.instructorAvatar} />
                    <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">مدرس معتمد</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button 
                      size="icon"
                      className="absolute inset-0 m-auto h-16 w-16 rounded-full hero-gradient text-white"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {course.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {course.originalPrice} د.ج
                          </span>
                        )}
                        <span className="text-3xl font-bold">
                          {course.price} د.ج
                        </span>
                      </div>
                      {course.originalPrice && (
                        <p className="text-sm text-green-600 font-medium">
                          وفر {course.originalPrice - course.price} د.ج
                        </p>
                      )}
                    </div>
                    
                    {isEnrolled ? (
                      <div className="space-y-2">
                        <Link to={`/course/${course.id}/learn`}>
                          <Button className="w-full hero-gradient text-white">
                            ابدأ التعلم الآن
                          </Button>
                        </Link>
                        <p className="text-center text-sm text-green-600 flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>مسجل في الدورة</span>
                        </p>
                      </div>
                    ) : (
                      <Button 
                        onClick={handleEnroll}
                        className="w-full hero-gradient text-white"
                      >
                        التسجيل في الدورة
                      </Button>
                    )}
                    
                    {course.isLive && (
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-2 text-blue-800">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            الجلسة التالية: {course.liveDate} في 2:00 م
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-4 border-t">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 ml-2" />
                        حفظ
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 ml-2" />
                        مشاركة
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 ml-2" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto p-6">
        <Tabs defaultValue="curriculum" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="curriculum">المنهج</TabsTrigger>
            <TabsTrigger value="about">عن الدورة</TabsTrigger>
            <TabsTrigger value="instructor">المدرس</TabsTrigger>
            <TabsTrigger value="reviews">التقييمات</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>محتوى الدورة</CardTitle>
                <CardDescription>
                  {course.lessons} درس • {course.duration} من المحتوى
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockLessons.map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{lesson.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>عن هذه الدورة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">ماذا ستتعلم</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>فهم المفاهيم الأساسية في {course.category}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>تطبيق المعرفة النظرية في حل المسائل العملية</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>الاستعداد للامتحانات والاختبارات</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>بناء أساس قوي للمراحل التعليمية التالية</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">المتطلبات</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• لا توجد متطلبات مسبقة</li>
                    <li>• الرغبة في التعلم والممارسة</li>
                    <li>• جهاز كمبيوتر أو هاتف ذكي مع اتصال إنترنت</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>عن المدرس</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={course.instructorAvatar} />
                    <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{course.instructor}</h3>
                    <p className="text-muted-foreground">
                      خبير في تدريس {course.category} مع أكثر من 10 سنوات من الخبرة
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.9 تقييم المدرس</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>5,432 طالب</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PlayCircle className="h-4 w-4" />
                        <span>12 دورة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>تقييمات الطلاب</CardTitle>
                <CardDescription>
                  {course.rating} من 5 • {course.studentsCount} تقييم
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>ط{review}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium">طالب {review}</h4>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">منذ أسبوعين</p>
                          <p className="text-sm">
                            دورة ممتازة ومفيدة جداً. الشرح واضح والأمثلة عملية. أنصح بها بشدة!
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;