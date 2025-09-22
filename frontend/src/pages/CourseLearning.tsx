import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  PlayCircle, 
  ArrowLeft,
  Download,
  BookOpen
} from 'lucide-react';
import { mockCourses, mockLessons, Course } from '@/lib/mockData';
import Header from '@/components/Header';

const CourseLearning = () => {
  const { id } = useParams();
  const [course] = useState<Course | undefined>(
    mockCourses.find(c => c.id === id)
  );
  const [currentLesson, setCurrentLesson] = useState(0);

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

  const progress = ((currentLesson + 1) / mockLessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto p-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link to={`/course/${course.id}`}>
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 ml-2" />
              العودة للدورة
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {mockLessons[currentLesson]?.title || 'اختر درساً للبدء'}
                      </h3>
                      <p className="text-muted-foreground">
                        {mockLessons[currentLesson]?.description || 'اضغط على درس من القائمة الجانبية'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Info */}
            <Card>
              <CardHeader>
                <CardTitle>معلومات الدرس</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">التقدم</span>
                    <span className="text-sm font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{mockLessons[currentLesson]?.duration || '0 دقيقة'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>درس {currentLesson + 1} من {mockLessons.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">التقدم الإجمالي</span>
                  <span className="font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">الدروس المكتملة</span>
                  <span className="font-medium">
                    {mockLessons.filter(l => l.completed).length} من {mockLessons.length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Lessons List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">قائمة الدروس</CardTitle>
                <CardDescription>
                  {course.lessons} درس • {course.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockLessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        index === currentLesson 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-accent'
                      }`}
                      onClick={() => setCurrentLesson(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : index === currentLesson ? (
                            <Play className="h-5 w-5" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{lesson.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                      {index === currentLesson && (
                        <Badge variant="secondary" className="text-xs">
                          الآن
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 ml-2" />
                    تحميل المواد
                  </Button>
                  <Button variant="outline" className="w-full">
                    إضافة للمفضلة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;