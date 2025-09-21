import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  Settings, 
  Maximize,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { mockCourses, mockLessons, Lesson } from '@/lib/mockData';

const CourseLearning = () => {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);
  const [currentLesson, setCurrentLesson] = useState<Lesson>(mockLessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45); // Mock progress

  if (!course) {
    return <div>الدورة غير موجودة</div>;
  }

  const currentLessonIndex = mockLessons.findIndex(l => l.id === currentLesson.id);
  const completedLessons = mockLessons.filter(l => l.completed).length;
  const courseProgress = Math.round((completedLessons / mockLessons.length) * 100);

  const nextLesson = () => {
    if (currentLessonIndex < mockLessons.length - 1) {
      setCurrentLesson(mockLessons[currentLessonIndex + 1]);
    }
  };

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLesson(mockLessons[currentLessonIndex - 1]);
    }
  };

  const markAsCompleted = () => {
    // In real app, this would update the backend
    console.log('Marking lesson as completed:', currentLesson.id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ChevronRight className="h-4 w-4" />
              العودة للدورة
            </Button>
            <div>
              <h1 className="font-bold truncate max-w-md">{course.title}</h1>
              <p className="text-sm text-muted-foreground">
                {currentLessonIndex + 1} من {mockLessons.length} دروس
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Progress value={courseProgress} className="w-32" />
            <span className="text-sm font-medium">{courseProgress}%</span>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          {/* Video Area */}
          <div className="flex-1 bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{currentLesson.title}</h3>
                <p className="text-white/80">مدة الدرس: {currentLesson.duration}</p>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="space-y-3">
                <Progress value={progress} className="bg-white/20" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={prevLesson}
                      disabled={currentLessonIndex === 0}
                    >
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={nextLesson}
                      disabled={currentLessonIndex === mockLessons.length - 1}
                    >
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <span className="text-white text-sm">
                      {Math.floor(progress * 0.6)}:{String(Math.floor((progress * 0.6 % 1) * 60)).padStart(2, '0')} / {currentLesson.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="bg-background border-t p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">{currentLesson.title}</h2>
                <p className="text-muted-foreground">{currentLesson.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                {!currentLesson.completed && (
                  <Button onClick={markAsCompleted} className="hero-gradient text-white">
                    <CheckCircle className="h-4 w-4 ml-2" />
                    تم الانتهاء
                  </Button>
                )}
                {currentLesson.completed && (
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="h-3 w-3 ml-1" />
                    مكتمل
                  </Badge>
                )}
              </div>
            </div>
            
            <Tabs defaultValue="notes" className="w-full">
              <TabsList>
                <TabsTrigger value="notes">الملاحظات</TabsTrigger>
                <TabsTrigger value="resources">الموارد</TabsTrigger>
                <TabsTrigger value="discussion">النقاش</TabsTrigger>
              </TabsList>
              <TabsContent value="notes" className="mt-4">
                <div className="space-y-3">
                  <div className="p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      <span>05:30</span>
                    </div>
                    <p className="text-sm">تعريف الجبر: هو فرع من الرياضيات يتعامل مع الرموز والمتغيرات</p>
                  </div>
                  <div className="p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      <span>12:15</span>
                    </div>
                    <p className="text-sm">المعادلة الخطية: ax + b = 0 حيث a و b ثوابت و x متغير</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resources" className="mt-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">كتاب الجبر الأساسي</p>
                        <p className="text-sm text-muted-foreground">PDF - 2.5 MB</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">تحميل</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">تمارين إضافية</p>
                        <p className="text-sm text-muted-foreground">PDF - 1.2 MB</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">تحميل</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="discussion" className="mt-4">
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                        س
                      </div>
                      <span className="font-medium text-sm">سارة محمد</span>
                      <span className="text-xs text-muted-foreground">منذ ساعتين</span>
                    </div>
                    <p className="text-sm">هل يمكن توضيح الفرق بين المعادلة والمتطابقة؟</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-accent/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                        د
                      </div>
                      <span className="font-medium text-sm">د. أحمد محمد</span>
                      <span className="text-xs text-muted-foreground">منذ ساعة</span>
                    </div>
                    <p className="text-sm">المعادلة صحيحة لقيم معينة من المتغير، بينما المتطابقة صحيحة لجميع القيم.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="w-80 border-l bg-background overflow-y-auto">
          <Card className="rounded-none border-0 border-b">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">محتوى الدورة</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{completedLessons} من {mockLessons.length} دروس</span>
                <span>•</span>
                <span>{courseProgress}% مكتمل</span>
              </div>
            </CardHeader>
          </Card>
          
          <div className="p-4 space-y-2">
            {mockLessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  lesson.id === currentLesson.id 
                    ? 'bg-primary/10 border-primary/20 border' 
                    : 'hover:bg-accent/50'
                }`}
                onClick={() => setCurrentLesson(lesson)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        lesson.id === currentLesson.id ? 'border-primary' : 'border-muted-foreground'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm truncate ${
                      lesson.id === currentLesson.id ? 'text-primary' : ''
                    }`}>
                      {index + 1}. {lesson.title}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;