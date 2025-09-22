import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectItem } from '@/components/ui/Select';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, AlertCircle, Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@eduflow.com', 'support@eduflow.com'],
      description: 'نرد خلال 24 ساعة'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 50 123 4567', '+966 11 234 5678'],
      description: 'متاح من 8 صباحاً إلى 10 مساءً'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الرياض، المملكة العربية السعودية', 'شارع الملك فهد، حي العليا'],
      description: 'مكتبنا الرئيسي'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['الأحد - الخميس: 8 ص - 10 م', 'الجمعة - السبت: 10 ص - 6 م'],
      description: 'بتوقيت المملكة العربية السعودية'
    }
  ];

  const departments = [
    {
      name: 'الدعم الفني',
      email: 'tech@eduflow.com',
      phone: '+966 50 111 1111',
      description: 'للمساعدة التقنية والمشاكل الفنية'
    },
    {
      name: 'التسجيل والقبول',
      email: 'admissions@eduflow.com',
      phone: '+966 50 222 2222',
      description: 'للاستفسارات حول التسجيل والدورات'
    },
    {
      name: 'الشؤون الأكاديمية',
      email: 'academic@eduflow.com',
      phone: '+966 50 333 3333',
      description: 'للاستفسارات الأكاديمية والمناهج'
    },
    {
      name: 'التسويق والشراكات',
      email: 'marketing@eduflow.com',
      phone: '+966 50 444 4444',
      description: 'للشراكات والفرص التجارية'
    }
  ];

  const categories = [
    'استفسار عام',
    'مشكلة تقنية',
    'استفسار أكاديمي',
    'شكوى أو اقتراح',
    'طلب شراكة',
    'استفسار مالي',
    'أخرى'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 3000);
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
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نحن هنا لمساعدتك في أي وقت. تواصل معنا وسنرد عليك في أقرب وقت ممكن
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                <CardDescription>
                  املأ النموذج أدناه وسنتواصل معك قريباً
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-600 mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-600">سنرد عليك في أقرب وقت ممكن</p>
                  </div>
                ) : (
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
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+966 50 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">نوع الاستفسار *</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange('category', value)}
                        >
                          <SelectItem value="">اختر نوع الاستفسار</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">الموضوع *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        placeholder="موضوع رسالتك"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">معلومات التواصل</CardTitle>
                  <CardDescription>
                    طرق مختلفة للتواصل معنا
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">الدعم المباشر</CardTitle>
                  <CardDescription>
                    احصل على مساعدة فورية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4 ml-2" />
                      دردشة مباشرة
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Headphones className="h-4 w-4 ml-2" />
                      طلب اتصال
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أقسامنا المختلفة
            </h2>
            <p className="text-lg text-gray-600">
              تواصل مع القسم المناسب لاستفسارك
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{dept.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-lg text-gray-600">
              إجابات سريعة على أكثر الأسئلة شيوعاً
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">كم من الوقت يستغرق الرد على استفساري؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نرد على جميع الاستفسارات خلال 24 ساعة في الأيام العادية، 
                  وخلال 48 ساعة في عطلة نهاية الأسبوع.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">هل يمكنني الحصول على دعم فني مباشر؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نعم، نوفر دعم فني مباشر عبر الدردشة الحية من الساعة 8 صباحاً 
                  إلى 10 مساءً بتوقيت المملكة العربية السعودية.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ما هي أفضل طريقة للتواصل معكم؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  يمكنك التواصل معنا عبر البريد الإلكتروني للاستفسارات العامة، 
                  أو الدردشة المباشرة للمساعدة الفورية، أو الهاتف للاستفسارات العاجلة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
