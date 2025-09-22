import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectItem } from '@/components/ui/Select';
import { Badge } from '@/components/ui/Badge';
import { 
  Headphones, Search, AlertTriangle, CheckCircle, 
  Clock, MessageCircle, Phone, Mail, Monitor, 
  Smartphone, Wifi, Download, Settings
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TechnicalSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    browser: '',
    issue: '',
    description: '',
    priority: ''
  });

  const commonIssues = [
    {
      icon: Monitor,
      title: 'مشاكل في تشغيل الفيديو',
      description: 'الفيديو لا يعمل أو يتوقف',
      solutions: [
        'تأكد من اتصال الإنترنت',
        'حدث المتصفح',
        'امسح ذاكرة التخزين المؤقت',
        'جرب متصفح آخر'
      ]
    },
    {
      icon: Wifi,
      title: 'مشاكل الاتصال',
      description: 'صعوبة في تحميل الصفحات',
      solutions: [
        'تحقق من اتصال الإنترنت',
        'أعد تشغيل الراوتر',
        'جرب شبكة أخرى',
        'اتصل بمزود الخدمة'
      ]
    },
    {
      icon: Download,
      title: 'مشاكل التحميل',
      description: 'لا يمكن تحميل الملفات',
      solutions: [
        'تحقق من مساحة التخزين',
        'أعد المحاولة',
        'جرب متصفح آخر',
        'تحقق من إعدادات الأمان'
      ]
    },
    {
      icon: Settings,
      title: 'مشاكل في الإعدادات',
      description: 'لا يمكن تغيير الإعدادات',
      solutions: [
        'تأكد من تسجيل الدخول',
        'امسح الكوكيز',
        'حدث الصفحة',
        'اتصل بالدعم'
      ]
    }
  ];

  const systemRequirements = [
    {
      category: 'المتصفحات المدعومة',
      items: [
        'Google Chrome 90+',
        'Mozilla Firefox 88+',
        'Safari 14+',
        'Microsoft Edge 90+'
      ]
    },
    {
      category: 'نظام التشغيل',
      items: [
        'Windows 10+',
        'macOS 10.15+',
        'iOS 13+',
        'Android 8+'
      ]
    },
    {
      category: 'متطلبات الإنترنت',
      items: [
        'سرعة لا تقل عن 2 ميجابايت',
        'اتصال مستقر',
        'دعم HTML5',
        'JavaScript مفعل'
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'الدردشة المباشرة',
      description: 'احصل على مساعدة فورية',
      availability: '24/7',
      responseTime: 'دقائق',
      status: 'متاح'
    },
    {
      icon: Phone,
      title: 'الدعم الهاتفي',
      description: 'تحدث مع خبير تقني',
      availability: '8 ص - 10 م',
      responseTime: 'فوري',
      status: 'متاح'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'أرسل تفاصيل المشكلة',
      availability: '24/7',
      responseTime: '4 ساعات',
      status: 'متاح'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Technical support request:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Headphones className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              الدعم الفني
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نحن هنا لحل جميع المشاكل التقنية التي تواجهها
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المشاكل الشائعة
            </h2>
            <p className="text-lg text-gray-600">
              حلول سريعة للمشاكل التقنية الأكثر شيوعاً
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {commonIssues.map((issue, index) => {
              const IconComponent = issue.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">الحلول المقترحة:</h4>
                        <ul className="space-y-1">
                          {issue.solutions.map((solution, solIndex) => (
                            <li key={solIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              متطلبات النظام
            </h2>
            <p className="text-lg text-gray-600">
              تأكد من أن جهازك يلبي المتطلبات الأساسية
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {systemRequirements.map((req, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">طلب دعم فني</CardTitle>
                <CardDescription>
                  املأ النموذج أدناه وسنتواصل معك لحل مشكلتك
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="device">نوع الجهاز</Label>
                      <Select
                        value={formData.device}
                        onValueChange={(value) => handleInputChange('device', value)}
                      >
                        <SelectItem value="">اختر نوع الجهاز</SelectItem>
                        <SelectItem value="desktop">كمبيوتر مكتبي</SelectItem>
                        <SelectItem value="laptop">لابتوب</SelectItem>
                        <SelectItem value="tablet">تابلت</SelectItem>
                        <SelectItem value="mobile">هاتف ذكي</SelectItem>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="browser">المتصفح المستخدم</Label>
                      <Select
                        value={formData.browser}
                        onValueChange={(value) => handleInputChange('browser', value)}
                      >
                        <SelectItem value="">اختر المتصفح</SelectItem>
                        <SelectItem value="chrome">Google Chrome</SelectItem>
                        <SelectItem value="firefox">Mozilla Firefox</SelectItem>
                        <SelectItem value="safari">Safari</SelectItem>
                        <SelectItem value="edge">Microsoft Edge</SelectItem>
                        <SelectItem value="other">آخر</SelectItem>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="issue">نوع المشكلة *</Label>
                    <Select
                      value={formData.issue}
                      onValueChange={(value) => handleInputChange('issue', value)}
                    >
                      <SelectItem value="">اختر نوع المشكلة</SelectItem>
                      <SelectItem value="video">مشكلة في تشغيل الفيديو</SelectItem>
                      <SelectItem value="login">مشكلة في تسجيل الدخول</SelectItem>
                      <SelectItem value="download">مشكلة في التحميل</SelectItem>
                      <SelectItem value="payment">مشكلة في الدفع</SelectItem>
                      <SelectItem value="other">مشكلة أخرى</SelectItem>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">أولوية المشكلة</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) => handleInputChange('priority', value)}
                    >
                      <SelectItem value="">اختر الأولوية</SelectItem>
                      <SelectItem value="low">منخفضة</SelectItem>
                      <SelectItem value="medium">متوسطة</SelectItem>
                      <SelectItem value="high">عالية</SelectItem>
                      <SelectItem value="urgent">عاجلة</SelectItem>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">وصف المشكلة *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                      placeholder="اشرح المشكلة بالتفصيل..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Headphones className="h-4 w-4 ml-2" />
                    إرسال طلب الدعم
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قنوات الدعم المتاحة
            </h2>
            <p className="text-lg text-gray-600">
              اختر الطريقة المناسبة لك للتواصل معنا
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline">{channel.availability}</Badge>
                    <p className="text-sm text-gray-500">وقت الاستجابة: {channel.responseTime}</p>
                    <Badge className="bg-green-100 text-green-800">{channel.status}</Badge>
                  </div>
                  <Button className="w-full">
                    {channel.title}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">
                      دعم فني عاجل
                    </h3>
                    <p className="text-red-700 mb-4">
                      إذا كانت مشكلتك عاجلة وتؤثر على تعلمك، يمكنك الاتصال بنا مباشرة:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Phone className="h-4 w-4 ml-2" />
                        +966 50 123 4567
                      </Button>
                      <Button variant="outline" className="border-red-300 text-red-700">
                        <MessageCircle className="h-4 w-4 ml-2" />
                        دردشة عاجلة
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalSupport;
