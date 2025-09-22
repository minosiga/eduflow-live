import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { BookOpen, Calculator, Globe, Beaker, Palette, Music } from "lucide-react";

const categories = [
  {
    name: "الرياضيات",
    icon: Calculator,
    count: 125,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    name: "العلوم الطبيعية",
    icon: Beaker,
    count: 89,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    name: "اللغة العربية",
    icon: BookOpen,
    count: 156,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    name: "اللغات الأجنبية",
    icon: Globe,
    count: 78,
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
  {
    name: "الفنون",
    icon: Palette,
    count: 45,
    color: "bg-pink-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
  },
  {
    name: "الموسيقى",
    icon: Music,
    count: 32,
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            اختر مجال دراستك
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعة واسعة من المواد الدراسية من الابتدائي إلى الثانوي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className={`group cursor-pointer hover:shadow-lg transition-all duration-300 ${category.bgColor} hover:scale-105`}>
              <CardContent className="p-4 flex flex-col items-center space-y-3">
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className={`font-semibold text-sm ${category.textColor} group-hover:scale-105 transition-transform`}>
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    {category.count} درس
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">
            عرض جميع المواد
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;