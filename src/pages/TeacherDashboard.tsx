import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Eye, 
  Edit, 
  Calendar,
  Play,
  BarChart3,
  Settings
} from 'lucide-react';
import { mockTeacher, mockCourses, Course } from '@/lib/mockData';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [teacherCourses] = useState<Course[]>(mockCourses.slice(0, 4)); // Mock teacher's courses

  const stats = {
    totalCourses: teacherCourses.length,
    totalStudents: 1250,
    totalRevenue: 45600,
    monthlyGrowth: 12
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">مرحباً، {mockTeacher.name}</h1>
          <p className="text-muted-foreground">إدارة دوراتك وطلابك من مكان واحد</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الدورات</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">
                +2 دورة هذا الشهر
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.monthlyGrowth}% نمو شهري
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الإيرادات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} د.ج</div>
              <p className="text-xs text-muted-foreground">
                +8% من الشهر الماضي
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل التقييم</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9</div>
              <p className="text-xs text-muted-foreground">
                من 5 نجوم
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="students">الطلاب</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="schedule">الجدول</TabsTrigger>
          </TabsList>

          {/* My Courses */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>دوراتي</CardTitle>
                  <CardDescription>إدارة وتحرير دوراتك التعليمية</CardDescription>
                </div>
                <Button className="hero-gradient text-white">
                  <Plus className="h-4 w-4 ml-2" />
                  دورة جديدة
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {teacherCourses.map((course) => (
                    <div key={course.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium mb-1 truncate">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {course.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{course.studentsCount} طالب</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Play className="h-3 w-3" />
                            <span>{course.lessons} درس</span>
                          </span>
                          <span>{course.price} د.ج</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={course.isLive ? "default" : "secondary"}>
                            {course.isLive ? "مباشر" : "مسجل"}
                          </Badge>
                          <Badge variant="outline">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 ml-2" />
                          عرض
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 ml-2" />
                          تحرير
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="h-4 w-4 ml-2" />
                          إحصائيات
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>طلابي</CardTitle>
                <CardDescription>متابعة تقدم الطلاب في دوراتك</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((student) => (
                    <div key={student} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          ط{student}
                        </div>
                        <div>
                          <h4 className="font-medium">طالب رقم {student}</h4>
                          <p className="text-sm text-muted-foreground">
                            مسجل في {Math.floor(Math.random() * 3) + 1} دورات
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{Math.floor(Math.random() * 40) + 60}%</p>
                          <p className="text-xs text-muted-foreground">معدل الإنجاز</p>
                        </div>
                        <Button size="sm" variant="outline">
                          عرض التفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات الأداء</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>إجمالي المشاهدات</span>
                    <span className="font-bold">12,345</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>معدل الإكمال</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>متوسط التقييم</span>
                    <span className="font-bold">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>الإيرادات الشهرية</span>
                    <span className="font-bold">15,400 د.ج</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>الدورات الأكثر شعبية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {teacherCourses.slice(0, 3).map((course, index) => (
                    <div key={course.id} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{course.title}</p>
                        <p className="text-xs text-muted-foreground">{course.studentsCount} طالب</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الجلسات المباشرة</CardTitle>
                <CardDescription>جدولة وإدارة الجلسات المباشرة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacherCourses.filter(c => c.isLive).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg hero-gradient">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {course.liveDate} في 2:00 م • {course.studentsCount} طالب مسجل
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4 ml-2" />
                          إعدادات
                        </Button>
                        <Button size="sm" className="hero-gradient text-white">
                          بدء الجلسة
                        </Button>
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