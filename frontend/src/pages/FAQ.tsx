import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { 
  Search, ChevronDown, ChevronUp, HelpCircle, 
  BookOpen, CreditCard, User, Settings, Shield
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { name: 'عام', count: 15 },
    { name: 'التسجيل', count: 8 },
    { name: 'الدورات', count: 12 },
    { name: 'الدفع', count: 6 },
    { name: 'التقني', count: 10 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'عام',
      question: 'ما هي منصة التعلم؟',
      answer: 'منصة التعلم هي منصة تعليمية إلكترونية تهدف إلى تقديم دورات تعليمية عالية الجودة في مختلف المجالات الأكاديمية والمهنية. نحن نقدم تجربة تعليمية تفاعلية مع معلمين متميزين ومواد تعليمية متطورة.'
    },
    {
      id: 2,
      category: 'التسجيل',
      question: 'كيف يمكنني التسجيل في المنصة؟',
      answer: 'يمكنك التسجيل بسهولة من خلال النقر على زر "ابدأ التعلم" في الصفحة الرئيسية، ثم ملء النموذج بالبيانات المطلوبة. ستحتاج إلى إدخال اسمك الكامل، البريد الإلكتروني، كلمة المرور، وتحديد نوع المستخدم (طالب أو معلم).'
    },
    {
      id: 3,
      category: 'التسجيل',
      question: 'هل التسجيل مجاني؟',
      answer: 'نعم، التسجيل في المنصة مجاني تماماً. يمكنك إنشاء حساب والوصول إلى بعض الدورات المجانية. للوصول إلى جميع الدورات والدورات المميزة، ستحتاج إلى الاشتراك في إحدى خططنا المدفوعة.'
    },
    {
      id: 4,
      category: 'الدورات',
      question: 'كيف يمكنني التسجيل في دورة؟',
      answer: 'بعد تسجيل الدخول، انتقل إلى صفحة "الدورات" واختر الدورة التي تريدها. اضغط على "عرض التفاصيل" لمعرفة المزيد عن الدورة، ثم اضغط على "سجل الآن" واتبع خطوات التسجيل والدفع.'
    },
    {
      id: 5,
      category: 'الدورات',
      question: 'هل يمكنني الوصول للدورة في أي وقت؟',
      answer: 'نعم، بمجرد التسجيل في دورة، يمكنك الوصول إليها في أي وقت من خلال حسابك. الدورات المسجلة متاحة 24/7، بينما الدورات المباشرة لها أوقات محددة يمكنك معرفتها من صفحة الدورة.'
    },
    {
      id: 6,
      category: 'الدورات',
      question: 'هل يمكنني الحصول على شهادة إكمال؟',
      answer: 'نعم، يمكنك الحصول على شهادة إكمال عند إنهاء الدورة بنجاح. يجب أن تحصل على 70% على الأقل في الاختبار النهائي. يمكنك تحميل الشهادة من صفحة "الشهادات" في لوحة التحكم.'
    },
    {
      id: 7,
      category: 'الدفع',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل جميع طرق الدفع الرئيسية بما في ذلك البطاقات الائتمانية (فيزا، ماستركارد)، التحويل البنكي، والدفع الإلكتروني (أبل باي، جوجل باي). جميع المعاملات محمية بتشفير SSL.'
    },
    {
      id: 8,
      category: 'الدفع',
      question: 'هل يمكنني استرداد المبلغ إذا لم أكن راضياً؟',
      answer: 'نعم، نقدم ضمان استرداد المبلغ خلال 30 يوماً من تاريخ الشراء إذا لم تكن راضياً عن الدورة. يمكنك طلب الاسترداد من خلال صفحة "الطلبات" في حسابك أو التواصل مع فريق الدعم.'
    },
    {
      id: 9,
      category: 'التقني',
      question: 'ما هي متطلبات النظام للوصول للمنصة؟',
      answer: 'تحتاج إلى متصفح حديث (Chrome، Firefox، Safari، Edge) مع اتصال بالإنترنت. نوصي بسرعة إنترنت لا تقل عن 2 ميجابايت للفيديو عالي الجودة. المنصة تعمل على جميع الأجهزة (كمبيوتر، تابلت، هاتف).'
    },
    {
      id: 10,
      category: 'التقني',
      question: 'ماذا أفعل إذا واجهت مشكلة تقنية؟',
      answer: 'يمكنك التواصل مع فريق الدعم الفني من خلال الدردشة المباشرة، البريد الإلكتروني، أو الهاتف. نوفر دعم فني 24/7 لمساعدتك في حل أي مشاكل تقنية قد تواجهها.'
    },
    {
      id: 11,
      category: 'عام',
      question: 'هل المنصة متاحة باللغة العربية فقط؟',
      answer: 'حالياً، المنصة متاحة باللغة العربية بشكل أساسي، لكن بعض الدورات قد تحتوي على محتوى باللغة الإنجليزية. نحن نعمل على إضافة المزيد من اللغات في المستقبل.'
    },
    {
      id: 12,
      category: 'عام',
      question: 'هل يمكنني التواصل مع المعلمين؟',
      answer: 'نعم، يمكنك التواصل مع المعلمين من خلال منتدى الدورة، أو إرسال رسائل خاصة لهم. بعض المعلمين يقدمون ساعات مكتبية للرد على استفسارات الطلاب.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'عام': return HelpCircle;
      case 'التسجيل': return User;
      case 'الدورات': return BookOpen;
      case 'الدفع': return CreditCard;
      case 'التقني': return Settings;
      default: return HelpCircle;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              إجابات على أكثر الأسئلة شيوعاً حول منصتنا
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث في الأسئلة الشائعة..."
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
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => {
              const IconComponent = getCategoryIcon(category.name);
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                  <Badge variant="secondary">{category.count}</Badge>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => {
              const IconComponent = getCategoryIcon(faq.category);
              const isOpen = openItems.includes(faq.id);
              
              return (
                <Card key={faq.id} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{faq.question}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isOpen && (
                    <CardContent className="pt-0">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              فريق الدعم لدينا جاهز لمساعدتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <HelpCircle className="h-4 w-4 ml-2" />
                تواصل مع الدعم
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="h-4 w-4 ml-2" />
                إرسال طلب دعم
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
