import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Select, SelectItem } from '@/components/ui/select';
import { BookOpen, Eye, EyeOff, User, Mail, Lock, GraduationCap } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    grade: ''
  });

  const { register, isAuthenticated, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  const from = location.state?.from?.pathname || '/dashboard';
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحقق من حالة تسجيل الدخول...</p>
        </div>
      </div>
    );
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }
    
    if (formData.role === 'student' && !formData.grade) {
      setError('يرجى اختيار الصف الدراسي');
      return;
    }
    
    setLoading(true);
    
    try {
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
      // Navigation will be handled by useEffect
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500 shadow-lg">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-semibold">إنشاء حساب جديد</CardTitle>
          <CardDescription>
            انضم إلى منصة التعلم وابدأ رحلتك التعليمية
          </CardDescription>
        </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {error}
                  </div>
                )}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="name"
                  type="text"
                  placeholder="ادخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="pr-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ادخل بريدك الإلكتروني"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="pr-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium text-foreground">
                نوع الحساب
              </label>
              <Select value={formData.role} onValueChange={(value) => updateFormData('role', value)}>
                <SelectItem value="student">طالب</SelectItem>
                <SelectItem value="teacher">معلم</SelectItem>
              </Select>
            </div>
            {formData.role === 'student' && (
              <div className="space-y-2">
                <label htmlFor="grade" className="text-sm font-medium text-foreground">
                  الصف الدراسي
                </label>
                <div className="relative">
                  <GraduationCap className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Select value={formData.grade} onValueChange={(value) => updateFormData('grade', value)}>
                    <SelectItem value="grade1">الصف الأول</SelectItem>
                    <SelectItem value="grade2">الصف الثاني</SelectItem>
                    <SelectItem value="grade3">الصف الثالث</SelectItem>
                    <SelectItem value="grade4">الصف الرابع</SelectItem>
                    <SelectItem value="grade5">الصف الخامس</SelectItem>
                    <SelectItem value="grade6">الصف السادس</SelectItem>
                    <SelectItem value="grade7">الصف السابع</SelectItem>
                    <SelectItem value="grade8">الصف الثامن</SelectItem>
                    <SelectItem value="grade9">الصف التاسع</SelectItem>
                    <SelectItem value="grade10">الصف العاشر</SelectItem>
                    <SelectItem value="grade11">الصف الحادي عشر</SelectItem>
                    <SelectItem value="grade12">الصف الثاني عشر</SelectItem>
                  </Select>
                </div>
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="ادخل كلمة المرور"
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="أعد إدخال كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {loading ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
                </Button>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">لديك حساب بالفعل؟ </span>
              <Link to="/login" className="text-primary hover:underline">
                سجل الدخول
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;