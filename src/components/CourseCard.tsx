import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  level: string;
  subject: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  isLive?: boolean;
  image?: string;
}

const CourseCard = ({ 
  title, 
  instructor, 
  level, 
  subject, 
  duration, 
  students, 
  rating, 
  price, 
  isLive = false,
  image 
}: CourseCardProps) => {
  return (
    <Card className="group hover-lift card-shadow overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <BookOpen className="w-16 h-16 text-primary/40" />
            </div>
          )}
          {isLive && (
            <Badge className="absolute top-3 right-3 bg-red-500 text-white">
              مباشر
            </Badge>
          )}
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {level}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {subject}
          </Badge>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            الأستاذ {instructor}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString('ar')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground mr-1">دج</span>
        </div>
        <Button className="hero-gradient text-white">
          {isLive ? "انضم الآن" : "اشترك"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;