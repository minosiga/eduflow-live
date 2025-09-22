import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectItem } from '@/components/ui/Select';
import { 
  BookOpen, Users, Clock, TrendingUp, Plus, Edit, Eye, Trash2, 
  BarChart3, Calendar, Star, Award, FileText, CheckCircle, 
  XCircle, AlertCircle, UserCheck, GraduationCap, DollarSign,
  MessageSquare, Settings, LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user, logout } = useAuth();
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  const [isApplyCourseOpen, setIsApplyCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const stats = {
    totalCourses: 5,
    totalStudents: 1250,
    totalHours: 180,
    rating: 4.9,
    monthlyEarnings: 15000,
    pendingApplications: 3,
    completedLessons: 45
  };

  const courses = [
    {
      id: '1',
      title: 'الرياضيات للصف الثامن - الجبر والهندسة',
      students: 324,
      rating: 4.8,
      status: 'نشط',
      lastUpdated: 'منذ يومين',
      earnings: 8500,
      completionRate: 78
    },
    {
      id: '2',
      title: 'اللغة العربية - النحو والصرف',
      students: 256,
      rating: 4.9,
      status: 'مباشر',
      lastUpdated: 'منذ ساعة',
      earnings: 6200,
      completionRate: 85
    },
    {
      id: '3',
      title: 'العلوم الطبيعية - الفيزياء والكيمياء',
      students: 189,
      rating: 4.7,
      status: 'مسجل',
      lastUpdated: 'منذ أسبوع',
      earnings: 4800,
      completionRate: 72
    }
  ];

  const enrolledStudents = [
    {
      id: '1',
      name: 'أحمد محمد',
      course: 'الرياضيات للصف الثامن',
      progress: 75,
      lastActive: 'منذ ساعتين',
      grade: 'أ'
    },
    {
      id: '2',
      name: 'فاطمة علي',
      course: 'اللغة العربية',
      progress: 90,
      lastActive: 'منذ 30 دقيقة',
      grade: 'أ+'
    },
    {
      id: '3',
      name: 'محمد حسن',
      course: 'العلوم الطبيعية',
      progress: 60,
      lastActive: 'منذ يوم',
      grade: 'ب+'
    }
  ];

  const courseApplications = [
    {
      id: '1',
      title: 'الفيزياء المتقدمة للثانوية',
      subject: 'علوم',
      level: 'ثانوي',
      status: 'معلق',
      submittedAt: 'منذ 3 أيام'
    },
    {
      id: '2',
      title: 'التاريخ الإسلامي',
      subject: 'تاريخ',
      level: 'إعدادي',
      status: 'مرفوض',
      submittedAt: 'منذ أسبوع'
    },
    {
      id: '3',
      title: 'البرمجة للمبتدئين',
      subject: 'علوم',
      level: 'ثانوي',
      status: 'موافق عليه',
      submittedAt: 'منذ أسبوعين'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً، {user?.name}</h1>
              <p className="text-muted-foreground">إدارة دوراتك وطلابك وتحليل الأداء</p>
            </div>
            <Button onClick={logout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">الدورات</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">{stats.totalCourses}</div>
              <p className="text-xs text-blue-600">+1 هذا الشهر</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">الطلاب</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">{stats.totalStudents.toLocaleString('ar')}</div>
              <p className="text-xs text-green-600">+45 هذا الأسبوع</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">ساعات التدريس</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{stats.totalHours}</div>
              <p className="text-xs text-purple-600">+12 ساعة هذا الأسبوع</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-800">التقييم</CardTitle>
              <Star className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-700">{stats.rating}</div>
              <p className="text-xs text-amber-600">من 5 نجوم</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-800">الأرباح الشهرية</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{stats.monthlyEarnings.toLocaleString('ar')} ر.س</div>
              <p className="text-xs text-emerald-600">+15% من الشهر الماضي</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">الطلبات المعلقة</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">{stats.pendingApplications}</div>
              <p className="text-xs text-orange-600">في انتظار الموافقة</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isCreateCourseOpen} onOpenChange={setIsCreateCourseOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="ml-2 h-4 w-4" />
                  إنشاء دورة جديدة
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>إنشاء دورة جديدة</DialogTitle>
                  <DialogDescription>
                    املأ البيانات المطلوبة لإنشاء دورة جديدة
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">عنوان الدورة</Label>
                    <Input id="title" placeholder="أدخل عنوان الدورة" />
                  </div>
                  <div>
                    <Label htmlFor="description">وصف الدورة</Label>
                    <Textarea id="description" placeholder="أدخل وصف الدورة" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subject">المادة</Label>
                      <Select placeholder="اختر المادة">
                        <SelectItem value="math">رياضيات</SelectItem>
                        <SelectItem value="science">علوم</SelectItem>
                        <SelectItem value="arabic">لغة عربية</SelectItem>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="level">المستوى</Label>
                      <Select placeholder="اختر المستوى">
                        <SelectItem value="elementary">ابتدائي</SelectItem>
                        <SelectItem value="middle">إعدادي</SelectItem>
                        <SelectItem value="high">ثانوي</SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateCourseOpen(false)}>
                      إلغاء
                    </Button>
                    <Button onClick={() => setIsCreateCourseOpen(false)}>
                      إنشاء الدورة
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isApplyCourseOpen} onOpenChange={setIsApplyCourseOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <FileText className="ml-2 h-4 w-4" />
                  التقدم لدورة جديدة
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>التقدم لدورة جديدة</DialogTitle>
                  <DialogDescription>
                    قدم طلب لإنشاء دورة جديدة تحتاج موافقة الإدارة
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="courseTitle">عنوان الدورة المقترحة</Label>
                    <Input id="courseTitle" placeholder="أدخل عنوان الدورة المقترحة" />
                  </div>
                  <div>
                    <Label htmlFor="courseDescription">وصف الدورة</Label>
                    <Textarea id="courseDescription" placeholder="أدخل وصف مفصل للدورة" />
                  </div>
                  <div>
                    <Label htmlFor="justification">مبرر إنشاء الدورة</Label>
                    <Textarea id="justification" placeholder="اشرح لماذا هذه الدورة مهمة ومفيدة" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsApplyCourseOpen(false)}>
                      إلغاء
                    </Button>
                    <Button onClick={() => setIsApplyCourseOpen(false)}>
                      تقديم الطلب
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <Calendar className="ml-2 h-4 w-4" />
              جدولة جلسة مباشرة
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="students">الطلاب</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="applications">الطلبات</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>الدورات الأكثر شعبية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.students} طالب</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{course.rating}</p>
                        <p className="text-sm text-muted-foreground">تقييم</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>الطلاب النشطين</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledStudents.slice(0, 3).map((student) => (
                    <div key={student.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{student.progress}%</p>
                        <p className="text-sm text-muted-foreground">تقدم</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الدورات</CardTitle>
                <CardDescription>عرض وتعديل جميع دوراتك</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <Badge variant={course.status === 'مباشر' ? 'default' : course.status === 'نشط' ? 'secondary' : 'outline'}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students} طالب</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{course.rating} تقييم</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{course.earnings.toLocaleString('ar')} ر.س</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="h-4 w-4" />
                            <span>{course.completionRate}% إكمال</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link to={`/course/${course.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 ml-1" />
                            عرض
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 ml-1" />
                          تعديل
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4 ml-1" />
                          حذف
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الطلاب</CardTitle>
                <CardDescription>عرض تقدم الطلاب المسجلين في دوراتك</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium">{student.name}</h3>
                          <Badge variant="outline">{student.grade}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{student.course}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>التقدم</span>
                            <span>{student.progress}%</span>
                          </div>
                          <Progress value={student.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">آخر نشاط: {student.lastActive}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 ml-1" />
                          مراسلة
                        </Button>
                        <Button variant="outline" size="sm">
                          <UserCheck className="h-4 w-4 ml-1" />
                          تفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات الأداء</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>متوسط تقييم الدورات</span>
                    <span className="font-bold text-green-600">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>معدل إكمال الطلاب</span>
                    <span className="font-bold text-blue-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>إجمالي الأرباح</span>
                    <span className="font-bold text-emerald-600">19,500 ر.س</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>عدد الشهادات الممنوحة</span>
                    <span className="font-bold text-purple-600">156</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>التقييمات الأخيرة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm">دورة ممتازة ومفيدة جداً</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm">شرح واضح ومفهوم</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm">أنصح بها بشدة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>طلبات الدورات</CardTitle>
                <CardDescription>عرض حالة طلبات إنشاء الدورات الجديدة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium">{application.title}</h3>
                          <Badge 
                            variant={
                              application.status === 'موافق عليه' ? 'default' : 
                              application.status === 'مرفوض' ? 'destructive' : 
                              'secondary'
                            }
                          >
                            {application.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{application.subject}</span>
                          <span>•</span>
                          <span>{application.level}</span>
                          <span>•</span>
                          <span>تم التقديم: {application.submittedAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {application.status === 'معلق' && (
                          <Button variant="outline" size="sm">
                            <AlertCircle className="h-4 w-4 ml-1" />
                            في الانتظار
                          </Button>
                        )}
                        {application.status === 'موافق عليه' && (
                          <Button variant="outline" size="sm" className="text-green-600">
                            <CheckCircle className="h-4 w-4 ml-1" />
                            موافق عليه
                          </Button>
                        )}
                        {application.status === 'مرفوض' && (
                          <Button variant="outline" size="sm" className="text-red-600">
                            <XCircle className="h-4 w-4 ml-1" />
                            مرفوض
                          </Button>
                        )}
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

export default TeacherDashboard;