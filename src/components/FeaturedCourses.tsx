import CourseCard from "./CourseCard";

const coursesData = [
  {
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
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            الدروس الأكثر شعبية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف الدروس الأكثر طلباً من طلابنا في جميع المراحل التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            عرض جميع الدروس
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;