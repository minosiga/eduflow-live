import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Select, SelectItem } from '@/components/ui/Select';
import { 
  Search, Star, Users, BookOpen, Award, 
  GraduationCap, Clock, MessageCircle, MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    'رياضيات', 'علوم', 'لغة عربية', 'لغات', 'تاريخ', 
    'جغرافيا', 'فلسفة', 'فنون', 'موسيقى'
  ];

  const teachers = [
    {
      id: '1',
      name: 'أ. أحمد محمد',
      title: 'خبير الرياضيات',
      subject: 'رياضيات',
      experience: '15 سنة',
      rating: 4.9,
      students: 1250,
      courses: 12,
      avatar: '/placeholder.svg',
      bio: 'خبير في الرياضيات مع 15 سنة من الخبرة في التدريس. متخصص في الجبر والهندسة والتفاضل والتكامل.',
      specialties: ['الجبر', 'الهندسة', 'التفاضل والتكامل', 'الإحصاء'],
      education: 'دكتوراه في الرياضيات - جامعة الملك سعود',
      location: 'الرياض، المملكة العربية السعودية',
      languages: ['العربية', 'الإنجليزية'],
      achievements: ['جائزة أفضل معلم 2023', 'شهادة التميز في التدريس']
    },
    {
      id: '2',
      name: 'د. فاطمة علي',
      title: 'أستاذة اللغة العربية',
      subject: 'لغة عربية',
      experience: '12 سنة',
      rating: 4.8,
      students: 980,
      courses: 8,
      avatar: '/placeholder.svg',
      bio: 'أستاذة متخصصة في اللغة العربية والنحو والصرف. لديها خبرة واسعة في تدريس المراحل المختلفة.',
      specialties: ['النحو', 'الصرف', 'الأدب', 'البلاغة'],
      education: 'دكتوراه في اللغة العربية - جامعة الأزهر',
      location: 'القاهرة، مصر',
      languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
      achievements: ['جائزة التميز الأكاديمي 2022', 'شهادة معلم متميز']
    },
    {
      id: '3',
      name: 'أ. محمد حسن',
      title: 'خبير العلوم الطبيعية',
      subject: 'علوم',
      experience: '10 سنة',
      rating: 4.7,
      students: 756,
      courses: 10,
      avatar: '/placeholder.svg',
      bio: 'متخصص في الفيزياء والكيمياء مع خبرة في التدريس العملي والتجارب المختبرية.',
      specialties: ['الفيزياء', 'الكيمياء', 'الأحياء', 'التجارب العملية'],
      education: 'ماجستير في الفيزياء - جامعة الملك عبدالعزيز',
      location: 'جدة، المملكة العربية السعودية',
      languages: ['العربية', 'الإنجليزية'],
      achievements: ['جائزة الابتكار في التدريس 2023']
    },
    {
      id: '4',
      name: 'د. خالد أحمد',
      title: 'أستاذ التاريخ',
      subject: 'تاريخ',
      experience: '18 سنة',
      rating: 4.9,
      students: 634,
      courses: 6,
      avatar: '/placeholder.svg',
      bio: 'خبير في التاريخ الإسلامي والعربي مع قدرة فائقة على رواية القصص التاريخية بشكل مشوق.',
      specialties: ['التاريخ الإسلامي', 'التاريخ العربي', 'الجغرافيا التاريخية'],
      education: 'دكتوراه في التاريخ - جامعة أم القرى',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      languages: ['العربية', 'الإنجليزية', 'التركية'],
      achievements: ['جائزة أفضل محاضر 2021', 'شهادة التميز في البحث العلمي']
    },
    {
      id: '5',
      name: 'أ. نورا سعد',
      title: 'خبيرة الجغرافيا',
      subject: 'جغرافيا',
      experience: '8 سنة',
      rating: 4.6,
      students: 423,
      courses: 5,
      avatar: '/placeholder.svg',
      bio: 'متخصصة في الجغرافيا الطبيعية والبشرية مع استخدام التقنيات الحديثة في التدريس.',
      specialties: ['الجغرافيا الطبيعية', 'الجغرافيا البشرية', 'الخرائط الرقمية'],
      education: 'ماجستير في الجغرافيا - جامعة الملك سعود',
      location: 'الدمام، المملكة العربية السعودية',
      languages: ['العربية', 'الإنجليزية'],
      achievements: ['جائزة الابتكار التقني 2022']
    },
    {
      id: '6',
      name: 'أ. سارة محمد',
      title: 'خبيرة البرمجة والتكنولوجيا',
      subject: 'علوم',
      experience: '6 سنة',
      rating: 4.9,
      students: 892,
      courses: 15,
      avatar: '/placeholder.svg',
      bio: 'متخصصة في البرمجة وتطوير التطبيقات مع خبرة في تدريس البرمجة للمبتدئين.',
      specialties: ['البرمجة', 'تطوير التطبيقات', 'قواعد البيانات', 'الذكاء الاصطناعي'],
      education: 'ماجستير في علوم الحاسب - جامعة الملك فهد',
      location: 'الرياض، المملكة العربية السعودية',
      languages: ['العربية', 'الإنجليزية'],
      achievements: ['جائزة المطور المتميز 2023', 'شهادة Microsoft Certified']
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesSubject = !selectedSubject || teacher.subject === selectedSubject;
    
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              تعرف على معلمينا المتميزين
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نخبة من أفضل المعلمين والخبراء في مختلف التخصصات
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="ابحث عن المعلم أو التخصص..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10 h-12"
                    />
                  </div>
                </div>
                <Select 
                  placeholder="اختر التخصص" 
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectItem value="">جميع التخصصات</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500">
                    {teacher.subject}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-green-600">
                    {teacher.title}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {teacher.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{teacher.rating}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{teacher.students} طالب</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{teacher.courses} دورة</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{teacher.experience}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">التخصصات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {teacher.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span className="line-clamp-1">{teacher.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{teacher.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      <span>اللغات: </span>
                      <span>{teacher.languages.join(', ')}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 ml-1" />
                        مراسلة
                      </Button>
                      <Button size="sm">
                        <BookOpen className="h-4 w-4 ml-1" />
                        الدورات
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إحصائيات معلمينا
            </h2>
            <p className="text-lg text-gray-600">
              أرقام تتحدث عن جودة تعليمنا
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">معلم متميز</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة متوسطة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">طالب راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">متوسط التقييم</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
