import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Play, Users, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                تعلم بطريقة
                <span className="block text-blue-600">
                  تفاعلية وممتعة
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                منصة تعليمية شاملة للمراحل الابتدائية والإعدادية والثانوية مع دروس مباشرة ومسجلة من أفضل المعلمين
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg">
                  <Play className="ml-2 h-4 w-4" />
                  ابدأ التعلم الآن
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline">
                  <BookOpen className="ml-2 h-4 w-4" />
                  تصفح الدورات
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500 mx-auto mb-3 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground">15,000+</div>
                <div className="text-sm text-muted-foreground">طالب نشط</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500 mx-auto mb-3 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">درس تفاعلي</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 mx-auto mb-3 shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">نسبة النجاح</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Play className="w-6 h-6 text-primary-foreground fill-current" />
                    </div>
                    <p className="text-foreground font-medium">شاهد درس تجريبي</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;