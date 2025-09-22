import { BookOpen, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">منصة التعلم</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              منصة تعليمية شاملة تهدف إلى تقديم أفضل تجربة تعلم للطلاب في جميع المراحل التعليمية
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">الدروس</Link></li>
              <li><Link to="/teachers" className="text-muted-foreground hover:text-primary transition-colors">المعلمون</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">الأسعار</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Educational Levels */}
          <div>
            <h3 className="font-semibold text-base mb-3">المراحل التعليمية</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المرحلة الابتدائية</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المرحلة الإعدادية</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المرحلة الثانوية</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">التحضير للبكالوريا</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-base mb-3">الدعم</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">الدعم</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">مركز المساعدة</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/tech-support" className="text-muted-foreground hover:text-primary transition-colors">الدعم الفني</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-3">قانوني</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">شروط الاستخدام</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 منصة التعلم الرقمية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;