import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;