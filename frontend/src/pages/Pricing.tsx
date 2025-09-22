import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Check, Star, Crown, Zap, Users, BookOpen, 
  Award, Clock, MessageCircle, Shield, Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      id: 'basic',
      name: 'الخطة الأساسية',
      description: 'مثالية للطلاب المبتدئين',
      price: 99,
      period: 'شهرياً',
      popular: false,
      icon: BookOpen,
      features: [
        'وصول إلى 50+ دورة مسجلة',
        'شهادات إكمال الدورات',
        'دعم فني عبر البريد الإلكتروني',
        'تتبع التقدم الشخصي',
        'وصول لمدة 30 يوم'
      ],
      limitations: [
        'لا توجد دورات مباشرة',
        'دعم محدود',
        'لا توجد ميزات متقدمة'
      ]
    },
    {
      id: 'premium',
      name: 'الخطة المميزة',
      description: 'الأكثر شعبية للطلاب الجادين',
      price: 199,
      period: 'شهرياً',
      popular: true,
      icon: Star,
      features: [
        'وصول إلى جميع الدورات المسجلة',
        'دورات مباشرة حصرية',
        'دعم فني 24/7',
        'شهادات معتمدة',
        'تتبع التقدم المتقدم',
        'وصول للمواد الإضافية',
        'مجتمع الطلاب المميز',
        'تخفيضات حصرية على الدورات الجديدة'
      ],
      limitations: []
    },
    {
      id: 'pro',
      name: 'الخطة الاحترافية',
      description: 'للمعلمين والمحترفين',
      price: 399,
      period: 'شهرياً',
      popular: false,
      icon: Crown,
      features: [
        'جميع ميزات الخطة المميزة',
        'إنشاء دورات خاصة',
        'أدوات التدريس المتقدمة',
        'إحصائيات مفصلة',
        'دعم أولوية',
        'استشارات شخصية',
        'وصول للمنصات الاحترافية',
        'شهادات تدريب المعلمين',
        'دعم تسويق الدورات'
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: 'دروس خصوصية',
      description: 'دروس فردية مع المعلمين',
      price: 150,
      period: 'للساعة',
      icon: Users
    },
    {
      name: 'مراجعة الامتحانات',
      description: 'مراجعة شاملة للامتحانات',
      price: 200,
      period: 'للمراجعة',
      icon: Award
    },
    {
      name: 'الدعم الفني المميز',
      description: 'دعم فني متخصص 24/7',
      price: 50,
      period: 'شهرياً',
      icon: Headphones
    }
  ];

  const faqs = [
    {
      question: 'هل يمكنني تغيير خطتي في أي وقت؟',
      answer: 'نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. التغييرات ستصبح فعالة في بداية دورة الفوترة التالية.'
    },
    {
      question: 'هل هناك فترة تجريبية مجانية؟',
      answer: 'نعم، نقدم فترة تجريبية مجانية لمدة 7 أيام لجميع الخطط. يمكنك إلغاء الاشتراك في أي وقت خلال هذه الفترة.'
    },
    {
      question: 'ماذا يحدث إذا لم أعد أريد الاشتراك؟',
      answer: 'يمكنك إلغاء اشتراكك في أي وقت. ستحتفظ بوصولك للخدمات حتى نهاية دورة الفوترة الحالية.'
    },
    {
      question: 'هل الشهادات معتمدة؟',
      answer: 'نعم، جميع شهاداتنا معتمدة ومعترف بها من قبل المؤسسات التعليمية والشركات في المنطقة.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              اختر الخطة المناسبة لك
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              خطط مرنة تناسب جميع احتياجاتك التعليمية
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={plan.id} 
                  className={`relative overflow-hidden ${
                    plan.popular 
                      ? 'border-2 border-purple-500 shadow-lg scale-105' 
                      : 'hover:shadow-lg'
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                      الأكثر شعبية
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-lg">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                      <span className="text-gray-600"> ر.س {plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      {plan.popular ? 'ابدأ الآن' : 'اختر هذه الخطة'}
                    </Button>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-900">المميزات:</h4>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-900">القيود:</h4>
                        {plan.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0">✗</span>
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خدمات إضافية
            </h2>
            <p className="text-lg text-gray-600">
              أضف خدمات إضافية لتعزيز تجربتك التعليمية
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{addon.name}</CardTitle>
                        <CardDescription>{addon.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{addon.price}</span>
                        <span className="text-gray-600"> ر.س {addon.period}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        إضافة
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600">
              إجابات على أكثر الأسئلة شيوعاً
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ابدأ رحلتك التعليمية اليوم
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            انضم إلى آلاف الطلاب الذين يثقون بنا في تعليمهم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              ابدأ التجربة المجانية
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
