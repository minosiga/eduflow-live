import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { 
  Search, User, BookOpen, Menu, LogOut, Settings, 
  GraduationCap, BarChart3, Users, Home, 
  ChevronDown, UserCheck, HelpCircle, Phone, 
  FileText, Shield, DollarSign, Info
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'student': return 'طالب';
      case 'teacher': return 'معلم';
      case 'admin': return 'مدير';
      default: return 'مستخدم';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'teacher': return 'bg-green-100 text-green-800';
      case 'admin': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDashboardPath = () => {
    if (!user) return '/dashboard';
    switch (user.role) {
      case 'student': return '/dashboard';
      case 'teacher': return '/teacher-dashboard';
      case 'admin': return '/admin-dashboard';
      default: return '/dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to={isAuthenticated ? getDashboardPath() : "/"} className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-blue-600">منصة التعلم</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="ابحث عن الدروس..."
              className="pr-10"
            />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-2">
          {!isAuthenticated ? (
            // Public Navigation
            <>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 ml-1" />
                  الرئيسية
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="ghost" size="sm">
                  <BookOpen className="h-4 w-4 ml-1" />
                  الدروس
                </Button>
              </Link>
              <Link to="/teachers">
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4 ml-1" />
                  المعلمون
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="ghost" size="sm">
                  <DollarSign className="h-4 w-4 ml-1" />
                  الأسعار
                </Button>
              </Link>
              
              {/* About Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                  className="flex items-center space-x-1"
                >
                  <Info className="h-4 w-4 ml-1" />
                  من نحن
                  <ChevronDown className="h-3 w-3" />
                </Button>
                {isAboutMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-1">
                      <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        من نحن
                      </Link>
                      <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        اتصل بنا
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Support Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSupportMenuOpen(!isSupportMenuOpen)}
                  className="flex items-center space-x-1"
                >
                  <HelpCircle className="h-4 w-4 ml-1" />
                  الدعم
                  <ChevronDown className="h-3 w-3" />
                </Button>
                {isSupportMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-1">
                      <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Phone className="h-4 w-4 inline ml-2" />
                        الدعم
                      </Link>
                      <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <HelpCircle className="h-4 w-4 inline ml-2" />
                        مركز المساعدة
                      </Link>
                      <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FileText className="h-4 w-4 inline ml-2" />
                        الأسئلة الشائعة
                      </Link>
                      <Link to="/tech-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="h-4 w-4 inline ml-2" />
                        الدعم الفني
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/login">
                <Button variant="ghost" size="sm">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">
                  ابدأ التعلم
                </Button>
              </Link>
            </>
          ) : (
            // Authenticated Navigation
            <>
              <Link to={getDashboardPath()}>
                <Button variant="ghost" size="sm">
                  <BarChart3 className="h-4 w-4 ml-1" />
                  لوحة التحكم
                </Button>
              </Link>
              
              {user?.role === 'teacher' && (
                <Link to="/teacher-dashboard">
                  <Button variant="ghost" size="sm">
                    <GraduationCap className="h-4 w-4 ml-1" />
                    إدارة الدورات
                  </Button>
                </Link>
              )}
              
              <Link to="/courses">
                <Button variant="ghost" size="sm">
                  <BookOpen className="h-4 w-4 ml-1" />
                  الدورات
                </Button>
              </Link>
              
              {/* Support Dropdown for Authenticated Users */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSupportMenuOpen(!isSupportMenuOpen)}
                  className="flex items-center space-x-1"
                >
                  <HelpCircle className="h-4 w-4 ml-1" />
                  الدعم
                  <ChevronDown className="h-3 w-3" />
                </Button>
                {isSupportMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-1">
                      <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Phone className="h-4 w-4 inline ml-2" />
                        الدعم
                      </Link>
                      <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <HelpCircle className="h-4 w-4 inline ml-2" />
                        مركز المساعدة
                      </Link>
                      <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FileText className="h-4 w-4 inline ml-2" />
                        الأسئلة الشائعة
                      </Link>
                      <Link to="/tech-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="h-4 w-4 inline ml-2" />
                        الدعم الفني
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <Badge variant="outline" className={`text-xs ${getRoleColor(user?.role || '')}`}>
                        {getRoleDisplayName(user?.role || '')}
                      </Badge>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-1">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <UserCheck className="h-4 w-4 inline ml-2" />
                        الملف الشخصي
                      </Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="h-4 w-4 inline ml-2" />
                        الإعدادات
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 inline ml-2" />
                        تسجيل الخروج
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ابحث عن الدروس..."
                className="pr-10"
              />
            </div>
            
            {!isAuthenticated ? (
              // Public Mobile Menu
              <div className="space-y-1">
                <Link to="/" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="h-4 w-4 ml-2" />
                    الرئيسية
                  </Button>
                </Link>
                <Link to="/courses" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 ml-2" />
                    الدروس
                  </Button>
                </Link>
                <Link to="/teachers" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="h-4 w-4 ml-2" />
                    المعلمون
                  </Button>
                </Link>
                <Link to="/pricing" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 ml-2" />
                    الأسعار
                  </Button>
                </Link>
                <Link to="/about" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <Info className="h-4 w-4 ml-2" />
                    من نحن
                  </Button>
                </Link>
                <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <Phone className="h-4 w-4 ml-2" />
                    اتصل بنا
                  </Button>
                </Link>
                <Link to="/support" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 ml-2" />
                    الدعم
                  </Button>
                </Link>
                <Link to="/help" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 ml-2" />
                    مركز المساعدة
                  </Button>
                </Link>
                <Link to="/faq" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="h-4 w-4 ml-2" />
                    الأسئلة الشائعة
                  </Button>
                </Link>
                <Link to="/login" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link to="/register" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">
                    ابدأ التعلم
                  </Button>
                </Link>
              </div>
            ) : (
              // Authenticated Mobile Menu
              <div className="space-y-1">
                <div className="px-3 py-2 border-b">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <Badge variant="outline" className={`text-xs ${getRoleColor(user?.role || '')}`}>
                    {getRoleDisplayName(user?.role || '')}
                  </Badge>
                </div>
                
                <Link to={getDashboardPath()} className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 ml-2" />
                    لوحة التحكم
                  </Button>
                </Link>
                
                {user?.role === 'teacher' && (
                  <Link to="/teacher-dashboard" className="block" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      <GraduationCap className="h-4 w-4 ml-2" />
                      إدارة الدورات
                    </Button>
                  </Link>
                )}
                
                <Link to="/courses" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 ml-2" />
                    الدورات
                  </Button>
                </Link>
                <Link to="/support" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 ml-2" />
                    الدعم
                  </Button>
                </Link>
                <Link to="/help" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 ml-2" />
                    مركز المساعدة
                  </Button>
                </Link>
                <Link to="/faq" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="h-4 w-4 ml-2" />
                    الأسئلة الشائعة
                  </Button>
                </Link>
                
                <Link to="/profile" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <UserCheck className="h-4 w-4 ml-2" />
                    الملف الشخصي
                  </Button>
                </Link>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-right px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="h-4 w-4 inline ml-2" />
                  تسجيل الخروج
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;