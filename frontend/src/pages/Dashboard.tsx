import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { BookOpen, Clock, Trophy, Calendar, Play, Star, Users, TrendingUp, LogOut, Award, Target, BookMarked } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserStats, useUserCourses } from '@/hooks/useUsers';
import { useCourses } from '@/hooks/useCourses';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, isAuthenticated, token, loading: authLoading } = useAuth();
  const { data: allCourses } = useCourses({ limit: 6 });

  // Only use user-specific hooks when fully authenticated
  const { data: stats, isLoading: statsLoading } = useUserStats();
  const { data: enrolledCourses, isLoading: coursesLoading } = useUserCourses();

  // Show loading if auth is still loading
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-muted-foreground">جاري التحقق من حالة تسجيل الدخول...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (statsLoading || coursesLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-muted-foreground">جاري تحميل البيانات...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

      return (
        <div className="min-h-screen bg-background">
          <Header />
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً، {user?.name}</h1>
              <p className="text-muted-foreground">استكمل رحلتك التعليمية واكتشف مواد جديدة</p>
            </div>
            <Button onClick={logout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">الدورات المسجلة</CardTitle>
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">{stats?.totalCourses || 0}</div>
              <p className="text-xs text-blue-600">
                +2 هذا الشهر
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">الدورات المكتملة</CardTitle>
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Trophy className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">{stats?.completedCourses || 0}</div>
              <p className="text-xs text-green-600">
                {stats?.totalCourses ? Math.round((stats.completedCourses / stats.totalCourses) * 100) : 0}% معدل الإنجاز
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">ساعات التعلم</CardTitle>
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{stats?.totalHours || 0}</div>
              <p className="text-xs text-purple-600">
                +12 ساعة هذا الأسبوع
              </p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-800">الشهادات</CardTitle>
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-700">{stats?.certificates || 0}</div>
              <p className="text-xs text-amber-600">
                شهادات مكتسبة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="schedule">الجدول</TabsTrigger>
            <TabsTrigger value="progress">التقدم</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
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
                      {enrolledCourses && enrolledCourses.length > 0 ? (
                        enrolledCourses.map((enrollment: any) => (
                          <div key={enrollment.course._id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                            <img
                              src={enrollment.course.thumbnail || '/placeholder.svg'}
                              alt={enrollment.course.title}
                              className="w-20 h-14 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-sm mb-1 truncate">{enrollment.course.title}</h3>
                              <p className="text-xs text-muted-foreground mb-2">{enrollment.course.instructorName}</p>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                                <span className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{enrollment.course.duration}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Play className="h-3 w-3" />
                                  <span>{enrollment.course.lessonCount || 0} درس</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 fill-current text-yellow-500" />
                                  <span>{enrollment.course.rating?.average || 0}</span>
                                </span>
                              </div>
                              <div className="space-y-2">
                                <Progress value={enrollment.progress || 0} className="h-2" />
                                <p className="text-xs text-muted-foreground">
                                  {enrollment.progress || 0}% مكتمل
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <Link to={`/course/${enrollment.course._id}`}>
                                <Button size="sm" className="w-full">
                                  متابعة
                                </Button>
                              </Link>
                              {enrollment.course.isLive && (
                                <Badge variant="secondary" className="text-xs">
                                  جلسة مباشرة
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">لم تسجل في أي دورة بعد</p>
                          <Link to="/">
                            <Button className="mt-4">استكشف الدورات</Button>
                          </Link>
                        </div>
                      )}
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
                  {allCourses?.courses?.filter((course: any) => course.isLive).map((course: any) => (
                    <div key={course._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary">
                          <Calendar className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {course.instructorName} • {course.liveDate || 'قريباً'} في 2:00 م
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        انضم الآن
                      </Button>
                    </div>
                  )) || (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">لا توجد جلسات مباشرة مجدولة</p>
                    </div>
                  )}
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
                  <CardTitle>أهداف هذا الشهر</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>إكمال 5 دروس</span>
                      <span>3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>دراسة 20 ساعة</span>
                      <span>18/20</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>الحصول على 3 شهادات</span>
                      <span>2/3</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>الإنجازات المكتسبة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="font-medium">أكمل 5 دورات</p>
                      <p className="text-sm text-muted-foreground">حصلت على هذا الإنجاز في 15 يناير</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Star className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium">حصل على معدل 90%+</p>
                      <p className="text-sm text-muted-foreground">حصلت على هذا الإنجاز في 10 يناير</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-medium">شارك في 10 جلسات مباشرة</p>
                      <p className="text-sm text-muted-foreground">حصلت على هذا الإنجاز في 5 يناير</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>الإنجازات القادمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Award className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="font-medium">أكمل 10 دورات</p>
                      <p className="text-sm text-muted-foreground">5 دورات متبقية</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Target className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="font-medium">دراسة 100 ساعة</p>
                      <p className="text-sm text-muted-foreground">82 ساعة متبقية</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <BookMarked className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="font-medium">الحصول على 10 شهادات</p>
                      <p className="text-sm text-muted-foreground">7 شهادات متبقية</p>
                    </div>
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