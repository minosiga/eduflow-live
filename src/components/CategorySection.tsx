import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Globe, Beaker, Palette, Music } from "lucide-react";

const categories = [
  {
    name: "الرياضيات",
    icon: Calculator,
    count: 125,
    color: "bg-blue-500",
  },
  {
    name: "العلوم الطبيعية",
    icon: Beaker,
    count: 89,
    color: "bg-green-500",
  },
  {
    name: "اللغة العربية",
    icon: BookOpen,
    count: 156,
    color: "bg-purple-500",
  },
  {
    name: "اللغات الأجنبية",
    icon: Globe,
    count: 78,
    color: "bg-orange-500",
  },
  {
    name: "الفنون",
    icon: Palette,
    count: 45,
    color: "bg-pink-500",
  },
  {
    name: "الموسيقى",
    icon: Music,
    count: 32,
    color: "bg-indigo-500",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            اختر مجال دراستك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعة واسعة من المواد الدراسية من الابتدائي إلى الثانوي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="h-auto p-6 flex flex-col items-center space-y-3 group hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} درس
                </p>
              </div>
            </Button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            عرض جميع المواد
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;