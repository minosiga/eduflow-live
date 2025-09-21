import { Button } from "@/components/ui/button";
import { Play, Users, BookOpen, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                تعلم بطريقة
                <span className="block bg-gradient-to-l from-primary to-purple-600 bg-clip-text text-transparent">
                  تفاعلية وممتعة
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                منصة تعليمية شاملة للمراحل الابتدائية والإعدادية والثانوية مع دروس مباشرة ومسجلة من أفضل المعلمين
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90">
                <Play className="ml-2 h-5 w-5" />
                ابدأ التعلم الآن
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                جولة مجانية
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15,000+</div>
                <div className="text-sm text-muted-foreground">طالب نشط</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success/10 mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">درس تفاعلي</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warning/10 mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-warning" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">نسبة النجاح</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 card-shadow">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                  <p className="text-foreground font-medium">شاهد درس تجريبي</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-success rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-warning rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;