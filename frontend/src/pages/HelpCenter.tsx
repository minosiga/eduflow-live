import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { 
  Search, BookOpen, Video, FileText, MessageCircle, 
  Phone, Mail, Headphones, ChevronRight, Star, Clock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      icon: BookOpen,
      title: 'بدء الاستخدام',
      description: 'تعلم كيفية البدء مع منصتنا',
      articles: 12,
      color: 'blue'
    },
    {
      icon: Video,
      title: 'الدورات والفيديوهات',
      description: 'كيفية الوصول للمحتوى التعليمي',
      articles: 8,
      color: 'green'
    },
    {
      icon: FileText,
      title: 'الحساب والدفع',
      description: 'إدارة حسابك وطرق الدفع',
      articles: 6,
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'التواصل والدعم',
      description: 'كيفية التواصل معنا',
      articles: 4,
      color: 'orange'
    }
  ];

  const popularArticles = [
    {
      title: 'كيف أسجل في دورة جديدة؟',
      category: 'بدء الاستخدام',
      views: 1250,
      rating: 4.8,
      readTime: '5 دقائق'
    },
    {
      title: 'كيف أحصل على شهادة إكمال؟',
      category: 'الدورات والفيديوهات',
      views: 980,
      rating: 4.9,
      readTime: '3 دقائق'
    },
    {
      title: 'كيف أغير كلمة المرور؟',
      category: 'الحساب والدفع',
      views: 756,
      rating: 4.7,
      readTime: '2 دقيقة'
    },
    {
      title: 'كيف أتواصل مع المعلم؟',
      category: 'التواصل والدعم',
      views: 634,
      rating: 4.6,
      readTime: '4 دقائق'
    }
  ];

  const videoTutorials = [
    {
      title: 'جولة سريعة في المنصة',
      duration: '3:45',
      views: 2500,
      thumbnail: '/placeholder.svg'
    },
    {
      title: 'كيفية التسجيل في دورة',
      duration: '2:30',
      views: 1800,
      thumbnail: '/placeholder.svg'
    },
    {
      title: 'استخدام لوحة التحكم',
      duration: '4:15',
      views: 1200,
      thumbnail: '/placeholder.svg'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'الدردشة المباشرة',
      description: 'احصل على مساعدة فورية',
      status: 'متاح الآن',
      responseTime: 'دقائق'
    },
    {
      icon: Phone,
      title: 'الدعم الهاتفي',
      description: 'تحدث مع خبير دعم',
      status: '8 ص - 10 م',
      responseTime: 'فوري'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'أرسل استفسارك',
      status: '24/7',
      responseTime: '24 ساعة'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              مركز المساعدة
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              كل ما تحتاجه لاستخدام منصتنا بسهولة
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث عن المساعدة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تصفح حسب الموضوع
            </h2>
            <p className="text-lg text-gray-600">
              اختر الموضوع الذي تحتاج مساعدة فيه
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className={`mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center ${
                    category.color === 'blue' ? 'bg-blue-100' :
                    category.color === 'green' ? 'bg-green-100' :
                    category.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      category.color === 'blue' ? 'text-blue-600' :
                      category.color === 'green' ? 'text-green-600' :
                      category.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{category.articles} مقال</Badge>
                    <Button variant="ghost" size="sm">
                      تصفح
                      <ChevronRight className="h-4 w-4 mr-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المقالات الأكثر شعبية
            </h2>
            <p className="text-lg text-gray-600">
              أكثر المواضيع التي يبحث عنها المستخدمون
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {popularArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <Badge variant="outline" className="mb-2">{article.category}</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{article.rating}</span>
                  </span>
                  <span>{article.views} مشاهدة</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دروس فيديو
            </h2>
            <p className="text-lg text-gray-600">
              شاهد وتعلم من خلال الفيديوهات التعليمية
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {videoTutorials.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} مشاهدة</span>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4 ml-1" />
                      شاهد
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لا تزال تحتاج مساعدة؟
            </h2>
            <p className="text-lg text-gray-600">
              تواصل مع فريق الدعم المتخصص
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Badge variant="outline" className="mb-4">{option.status}</Badge>
                  <p className="text-sm text-gray-500 mb-4">وقت الاستجابة: {option.responseTime}</p>
                  <Button className="w-full">
                    {option.title}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                الأسئلة الشائعة
              </h2>
              <p className="text-gray-600 mb-6">
                إجابات سريعة على أكثر الأسئلة شيوعاً
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <FileText className="h-4 w-4 ml-2" />
                  تصفح الأسئلة الشائعة
                </Button>
                <Button size="lg" variant="outline">
                  <Headphones className="h-4 w-4 ml-2" />
                  طلب دعم فني
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
