import { Button } from "@/components/ui/button";
import { Search, User, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">منصة التعلم</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث عن الدروس..."
              className="w-full rounded-lg border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            الدروس
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            المعلمون
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            حسابي
          </Button>
          <Button className="hero-gradient text-white">
            ابدأ التعلم
          </Button>
          
          {/* User Avatar */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;