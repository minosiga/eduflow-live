import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit, 
  Save, 
  X,
  BookOpen,
  Trophy,
  Clock
} from 'lucide-react';
import { mockUser } from '@/lib/mockData';
import Header from '@/components/Header';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: '+213 123 456 789',
    location: 'الجزائر، الجزائر',
    bio: 'طالب متفوق في المرحلة الثانوية، أحب التعلم والاستكشاف'
  });

  const handleSave = () => {
    // Here you would save the data to your backend
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: '+213 123 456 789',
      location: 'الجزائر، الجزائر',
      bio: 'طالب متفوق في المرحلة الثانوية، أحب التعلم والاستكشاف'
    });
    setIsEditing(false);
  };

  const stats = {
    coursesCompleted: 12,
    totalHours: 180,
    certificates: 5,
    currentStreak: 7
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-primary-foreground" />
                  </div>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold">{formData.name}</h1>
                      <p className="text-muted-foreground">{formData.email}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      {isEditing ? (
                        <div className="flex space-x-2">
                          <Button onClick={handleSave} size="sm">
                            <Save className="h-4 w-4 ml-2" />
                            حفظ
                          </Button>
                          <Button onClick={handleCancel} variant="outline" size="sm">
                            <X className="h-4 w-4 ml-2" />
                            إلغاء
                          </Button>
                        </div>
                      ) : (
                        <Button onClick={() => setIsEditing(true)} size="sm">
                          <Edit className="h-4 w-4 ml-2" />
                          تعديل الملف الشخصي
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{formData.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <Calendar className="h-3 w-3 ml-1" />
                      عضو منذ {new Date(mockUser.joinDate).toLocaleDateString('ar')}
                    </Badge>
                    <Badge variant="secondary">
                      <Trophy className="h-3 w-3 ml-1" />
                      {stats.certificates} شهادة
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>المعلومات الشخصية</CardTitle>
                <CardDescription>إدارة معلوماتك الشخصية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم الكامل</label>
                  {isEditing ? (
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">رقم الهاتف</label>
                  {isEditing ? (
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.phone}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">الموقع</label>
                  {isEditing ? (
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.location}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">نبذة شخصية</label>
                  {isEditing ? (
                    <textarea
                      className="w-full min-h-[80px] px-3 py-2 border border-input rounded-md text-sm"
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>إحصائيات التعلم</CardTitle>
                <CardDescription>تتبع تقدمك في التعلم</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">الدورات المكتملة</p>
                        <p className="text-sm text-muted-foreground">إجمالي الدورات</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold">{stats.coursesCompleted}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <p className="font-medium">ساعات التعلم</p>
                        <p className="text-sm text-muted-foreground">إجمالي الساعات</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold">{stats.totalHours}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-warning" />
                      </div>
                      <div>
                        <p className="font-medium">الشهادات</p>
                        <p className="text-sm text-muted-foreground">الشهادات المكتسبة</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold">{stats.certificates}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">سلسلة التعلم</p>
                        <p className="text-sm text-muted-foreground">أيام متتالية</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold">{stats.currentStreak}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;