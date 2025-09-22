import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id?: string;
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
  id,
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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video bg-slate-100">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
          {isLive && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs shadow-lg">
              مباشر
            </Badge>
          )}
          <Badge className="absolute top-2 left-2 text-xs bg-white/90 text-slate-700 shadow-md">
            {level}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
            {subject}
          </Badge>
          <h3 className="font-semibold text-base text-foreground group-hover:text-blue-600 transition-colors line-clamp-2">
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
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <span className="text-sm text-muted-foreground mr-1">دج</span>
        </div>
        {id ? (
          <Link to={`/course/${id}`}>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all">
              {isLive ? "انضم الآن" : "اشترك"}
            </Button>
          </Link>
        ) : (
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all">
            {isLive ? "انضم الآن" : "اشترك"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;