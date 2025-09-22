import { Button } from "@/components/ui/Button";
import CourseCard from "./CourseCard";
import { useCourses } from "@/hooks/useCourses";

const coursesData = [
  {
    id: "1",
    title: "أساسيات الرياضيات للصف الثالث الابتدائي",
    instructor: "أحمد محمد",
    level: "ابتدائي",
    subject: "رياضيات",
    duration: "12 ساعة",
    students: 1250,
    rating: 4.8,
    price: "2500",
    isLive: true,
  },
  {
    id: "2",
    title: "قواعد اللغة العربية للصف الأول الإعدادي",
    instructor: "فاطمة العلي",
    level: "إعدادي",
    subject: "لغة عربية",
    duration: "18 ساعة",
    students: 987,
    rating: 4.9,
    price: "3200",
  },
  {
    id: "3",
    title: "الفيزياء للصف الثاني الثانوي",
    instructor: "محمد بن سالم",
    level: "ثانوي",
    subject: "علوم",
    duration: "25 ساعة",
    students: 756,
    rating: 4.7,
    price: "4500",
  },
  {
    id: "4",
    title: "اللغة الإنجليزية - المستوى المتقدم",
    instructor: "سارة أحمد",
    level: "ثانوي",
    subject: "لغات",
    duration: "20 ساعة",
    students: 1100,
    rating: 4.8,
    price: "3800",
    isLive: true,
  },
  {
    id: "5",
    title: "التاريخ الإسلامي للصف الثالث الإعدادي",
    instructor: "عبد الرحمن الزهراني",
    level: "إعدادي",
    subject: "تاريخ",
    duration: "15 ساعة",
    students: 634,
    rating: 4.6,
    price: "2800",
  },
  {
    id: "6",
    title: "الكيمياء العضوية للبكالوريا",
    instructor: "ليلى المنصوري",
    level: "ثانوي",
    subject: "علوم",
    duration: "30 ساعة",
    students: 892,
    rating: 4.9,
    price: "5200",
  },
];

const FeaturedCourses = () => {
  const { data: courses, isLoading } = useCourses({ limit: 6 });

  if (isLoading) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">جاري تحميل الدورات...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            الدروس الأكثر شعبية
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف الدروس الأكثر طلباً من طلابنا في جميع المراحل التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses?.courses?.map((course: any) => (
            <CourseCard 
              key={course._id} 
              id={course._id}
              title={course.title}
              instructor={course.instructorName}
              level={course.level}
              subject={course.subject}
              duration={course.duration}
              students={course.studentCount || 0}
              rating={course.rating?.average || 0}
              price={course.price.toString()}
              isLive={course.isLive}
              image={course.thumbnail}
            />
          )) || coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all">
            عرض جميع الدروس
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;