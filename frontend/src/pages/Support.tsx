import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { 
  Search, MessageCircle, Phone, Mail, Headphones, 
  BookOpen, Video, FileText, Download, Clock, CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'الدردشة المباشرة',
      description: 'احصل على مساعدة فورية من فريق الدعم',
      status: 'متاح الآن',
      color: 'green',
      action: 'بدء الدردشة'
    },
    {
      icon: Phone,
      title: 'الدعم الهاتفي',
      description: 'تحدث مع خبير دعم مباشرة',
      status: 'متاح 8 ص - 10 م',
      color: 'blue',
      action: 'طلب اتصال'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'أرسل استفسارك وسنرد خلال 24 ساعة',
      status: 'متاح 24/7',
      color: 'purple',
      action: 'إرسال رسالة'
    },
    {
      icon: Headphones,
      title: 'الدعم الفني',
      description: 'مساعدة متخصصة في المشاكل التقنية',
      status: 'متاح الآن',
      color: 'orange',
      action: 'طلب دعم فني'
    }
  ];

  const quickHelp = [
    {
      title: 'كيف أسجل في دورة جديدة؟',
      category: 'التسجيل',
      steps: [
        'انتقل إلى صفحة الدورات',
        'اختر الدورة المناسبة',
        'اضغط على "سجل الآن"',
        'اتبع خطوات التسجيل'
      ]
    },
    {
      title: 'كيف أصل إلى محتوى الدورة؟',
      category: 'الوصول للمحتوى',
      steps: [
        'سجل دخول إلى حسابك',
        'انتقل إلى لوحة التحكم',
        'اختر "دوراتي"',
        'اضغط على الدورة المطلوبة'
      ]
    },
    {
      title: 'كيف أحصل على شهادة إكمال؟',
      category: 'الشهادات',
      steps: [
        'أكمل جميع دروس الدورة',
        'احصل على 70% في الاختبار النهائي',
        'انتقل إلى صفحة الشهادات',
        'حمل شهادتك'
      ]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'دليل المستخدم',
      description: 'دليل شامل لاستخدام المنصة',
      type: 'PDF',
      size: '2.5 MB'
    },
    {
      icon: Video,
      title: 'فيديو تعليمي',
      description: 'شاهد كيفية استخدام المنصة',
      type: 'MP4',
      size: '15 MB'
    },
    {
      icon: FileText,
      title: 'الأسئلة الشائعة',
      description: 'إجابات على أكثر الأسئلة شيوعاً',
      type: 'HTML',
      size: '1.2 MB'
    }
  ];

  const tickets = [
    {
      id: 'T-001',
      title: 'مشكلة في تشغيل الفيديو',
      status: 'مفتوح',
      priority: 'عالي',
      date: '2024-01-15',
      category: 'تقني'
    },
    {
      id: 'T-002',
      title: 'استفسار عن الشهادة',
      status: 'تم الحل',
      priority: 'متوسط',
      date: '2024-01-14',
      category: 'أكاديمي'
    },
    {
      id: 'T-003',
      title: 'طلب استرداد مالي',
      status: 'قيد المراجعة',
      priority: 'عالي',
      date: '2024-01-13',
      category: 'مالي'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              مركز الدعم
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نحن هنا لمساعدتك في أي وقت. اختر الطريقة المناسبة لك
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث عن حل لمشكلتك..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              طرق التواصل معنا
            </h2>
            <p className="text-lg text-gray-600">
              اختر الطريقة المناسبة لك للحصول على المساعدة
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportOptions.map((option, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                <div className={`mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center ${
                  option.color === 'green' ? 'bg-green-100' :
                  option.color === 'blue' ? 'bg-blue-100' :
                  option.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <option.icon className={`h-8 w-8 ${
                    option.color === 'green' ? 'text-green-600' :
                    option.color === 'blue' ? 'text-blue-600' :
                    option.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <Badge variant="outline" className="mb-4">{option.status}</Badge>
                <Button className="w-full">
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مساعدة سريعة
            </h2>
            <p className="text-lg text-gray-600">
              حلول سريعة للمشاكل الشائعة
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {quickHelp.map((help, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{help.title}</CardTitle>
                    <Badge variant="outline">{help.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {help.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الموارد والدلائل
            </h2>
            <p className="text-lg text-gray-600">
              أدلة وموارد مفيدة لمساعدتك
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {resource.type} • {resource.size}
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 ml-1" />
                          تحميل
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Tickets */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تذاكر الدعم
            </h2>
            <p className="text-lg text-gray-600">
              تتبع حالة استفساراتك وطلبات الدعم
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>طلبات الدعم السابقة</CardTitle>
                <Button>طلب دعم جديد</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="font-medium">{ticket.title}</h3>
                        <Badge variant="outline">{ticket.category}</Badge>
                        <Badge 
                          variant={
                            ticket.priority === 'عالي' ? 'destructive' :
                            ticket.priority === 'متوسط' ? 'default' : 'secondary'
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>#{ticket.id}</span>
                        <span>•</span>
                        <span>{ticket.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={
                          ticket.status === 'تم الحل' ? 'default' :
                          ticket.status === 'مفتوح' ? 'destructive' : 'secondary'
                        }
                      >
                        {ticket.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
