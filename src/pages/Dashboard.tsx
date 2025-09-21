import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, Trophy, Calendar, Play, Star, Users, TrendingUp } from 'lucide-react';
import { mockUser, mockCourses, Course } from '@/lib/mockData';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [enrolledCourses] = useState<Course[]>(mockCourses.slice(0, 3)); // Mock enrolled courses

  const stats = {
    totalCourses: enrolledCourses.length,
    completedCourses: 1,
    totalHours: 45,
    certificates: 2
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">مرحباً، {mockUser.name}</h1>
          <p className="text-muted-foreground">استكمل رحلتك التعليمية واكتشف مواد جديدة</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الدورات المسجلة</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">
                +2 هذا الشهر
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الدورات المكتملة</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedCourses}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((stats.completedCourses / stats.totalCourses) * 100)}% معدل الإنجاز
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ساعات التعلم</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHours}</div>
              <p className="text-xs text-muted-foreground">
                +12 ساعة هذا الأسبوع
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الشهادات</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.certificates}</div>
              <p className="text-xs text-muted-foreground">
                شهادات مكتسبة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="schedule">الجدول</TabsTrigger>
            <TabsTrigger value="progress">التقدم</TabsTrigger>
          </TabsList>

          {/* My Courses */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الدورات الجارية</CardTitle>
                <CardDescription>استكمل دراسة دوراتك المسجلة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm mb-1 truncate">{course.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{course.instructor}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Play className="h-3 w-3" />
                            <span>{course.lessons} درس</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            <span>{course.rating}</span>
                          </span>
                        </div>
                        <div className="space-y-2">
                          <Progress value={Math.random() * 100} className="h-2" />
                          <p className="text-xs text-muted-foreground">
                            {Math.round(Math.random() * 100)}% مكتمل
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link to={`/course/${course.id}`}>
                          <Button size="sm" className="w-full">
                            متابعة
                          </Button>
                        </Link>
                        {course.isLive && (
                          <Badge variant="secondary" className="text-xs">
                            جلسة مباشرة
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الجلسات المباشرة القادمة</CardTitle>
                <CardDescription>الدروس المجدولة لهذا الأسبوع</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCourses.filter(c => c.isLive).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg hero-gradient">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {course.instructor} • {course.liveDate} في 2:00 م
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        انضم الآن
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>الإحصائيات الشهرية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>الدروس المكتملة</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ساعات الدراسة</span>
                    <span className="font-bold">18 ساعة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>متوسط الدرجات</span>
                    <span className="font-bold">87%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>الإنجازات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>أكمل 5 دورات</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-500" />
                    <span>حصل على معدل 90%+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-500" />
                    <span>شارك في 10 جلسات مباشرة</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;