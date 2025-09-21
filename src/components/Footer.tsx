import { BookOpen, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">منصة التعلم</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              منصة تعليمية شاملة تهدف إلى تقديم أفضل تجربة تعلم للطلاب في جميع المراحل التعليمية
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">الدروس</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">المعلمون</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">الأسعار</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Educational Levels */}
          <div>
            <h3 className="font-bold text-lg mb-4">المراحل التعليمية</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">المرحلة الابتدائية</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">المرحلة الإعدادية</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">المرحلة الثانوية</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">التحضير للبكالوريا</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">الدعم</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">الدعم الفني</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-8 text-center text-sm text-muted">
          <p>&copy; 2024 منصة التعلم الرقمية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;