import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  BookOpen, 
  Trophy, 
  Settings,
  Camera,
  Bell,
  Shield,
  CreditCard
} from 'lucide-react';
import { mockUser, mockCourses } from '@/lib/mockData';
import Header from '@/components/Header';

const Profile = () => {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const enrolledCourses = mockCourses.slice(0, 3); // Mock enrolled courses
  const completedCourses = mockCourses.slice(0, 1); // Mock completed courses

  const updateUser = (field: string, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to backend
    console.log('Saving user data:', user);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  variant="outline"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="flex space-x-2">
                    {isEditing ? (
                      <>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          إلغاء
                        </Button>
                        <Button onClick={handleSave} className="hero-gradient text-white">
                          حفظ
                        </Button>
                      </>
                    ) : (
                      <Button onClick={() => setIsEditing(true)} variant="outline">
                        تحرير الملف الشخصي
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>انضم في {new Date(user.joinDate).toLocaleDateString('ar-DZ')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{enrolledCourses.length} دورة مسجلة</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span>{completedCourses.length} دورة مكتملة</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="info">المعلومات الشخصية</TabsTrigger>
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>المعلومات الأساسية</CardTitle>
                <CardDescription>تحديث معلوماتك الشخصية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      value={user.name}
                      onChange={(e) => updateUser('name', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => updateUser('email', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="05xxxxxxxx"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">الموقع</Label>
                    <Input
                      id="location"
                      placeholder="المدينة، الولاية"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">نبذة عني</Label>
                  <Textarea
                    id="bio"
                    placeholder="اكتب نبذة مختصرة عن نفسك..."
                    disabled={!isEditing}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Courses */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>الدورات الجارية</CardTitle>
                  <CardDescription>{enrolledCourses.length} دورة مسجلة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {course.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {Math.floor(Math.random() * 50) + 30}% مكتمل
                            </span>
                          </div>
                        </div>
                        <Button size="sm">متابعة</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الدورات المكتملة</CardTitle>
                  <CardDescription>{completedCourses.length} دورة مكتملة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-green-50">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className="text-xs bg-green-500 text-white">مكتملة</Badge>
                            <Trophy className="h-4 w-4 text-yellow-500" />
                          </div>
                        </div>
                        <Button size="sm" variant="outline">تحميل الشهادة</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إنجازاتي</CardTitle>
                <CardDescription>الشارات والجوائز التي حصلت عليها</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center bg-gradient-to-br from-yellow-50 to-orange-50">
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-medium">المتعلم المجتهد</h4>
                    <p className="text-sm text-muted-foreground">أكمل 5 دورات</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center bg-gradient-to-br from-blue-50 to-cyan-50">
                    <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-medium">عاشق الرياضيات</h4>
                    <p className="text-sm text-muted-foreground">أكمل 3 دورات في الرياضيات</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center bg-gradient-to-br from-green-50 to-emerald-50">
                    <User className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-medium">الطالب النشط</h4>
                    <p className="text-sm text-muted-foreground">تفاعل في 20 جلسة مباشرة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>الإشعارات</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات البريد الإلكتروني</p>
                      <p className="text-sm text-muted-foreground">تلقي تحديثات الدورات والإعلانات</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تذكير الجلسات المباشرة</p>
                      <p className="text-sm text-muted-foreground">تذكير قبل بدء الجلسات</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات التقدم</p>
                      <p className="text-sm text-muted-foreground">تحديثات حول تقدمك في الدورات</p>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>الخصوصية والأمان</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    تغيير كلمة المرور
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    تفعيل المصادقة الثنائية
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    تحميل بياناتي
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>الفوترة والدفع</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    طرق الدفع
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    تاريخ الفواتير
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    إدارة الاشتراك
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;