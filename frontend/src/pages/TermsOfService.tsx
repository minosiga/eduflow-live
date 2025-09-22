import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  FileText, Scale, AlertTriangle, CheckCircle, 
  User, CreditCard, Shield, BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const sections = [
    {
      title: 'مقدمة',
      content: 'مرحباً بك في منصة التعلم. هذه الشروط والأحكام تحكم استخدامك لمنصتنا التعليمية. من خلال الوصول إلى المنصة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط.',
      lastUpdated: '15 يناير 2024'
    },
    {
      title: 'قبول الشروط',
      content: 'باستخدامك لمنصتنا، فإنك تؤكد أنك:',
      items: [
        'تقرأ وفهمت هذه الشروط والأحكام',
        'توافق على الالتزام بها',
        'لديك الحق القانوني للدخول في هذه الاتفاقية',
        'تتعهد باستخدام المنصة وفقاً للقوانين المعمول بها'
      ]
    },
    {
      title: 'وصف الخدمة',
      content: 'منصة التعلم تقدم:',
      items: [
        'دورات تعليمية عبر الإنترنت',
        'مواد تعليمية تفاعلية',
        'شهادات إكمال الدورات',
        'منتديات للنقاش والتفاعل',
        'دعم فني وأكاديمي',
        'خدمات إضافية حسب الحاجة'
      ]
    },
    {
      title: 'حساب المستخدم',
      content: 'عند إنشاء حساب، يجب عليك:',
      items: [
        'تقديم معلومات صحيحة ومحدثة',
        'الحفاظ على سرية كلمة المرور',
        'إشعارنا فوراً بأي استخدام غير مصرح به',
        'أن تكون مسؤولاً عن جميع الأنشطة في حسابك',
        'عدم مشاركة حسابك مع الآخرين',
        'تحديث معلوماتك عند الحاجة'
      ]
    },
    {
      title: 'الدفع والاشتراكات',
      content: 'بخصوص الدفع والاشتراكات:',
      items: [
        'جميع الأسعار بالريال السعودي وتشمل الضرائب',
        'الدفع مطلوب مقدماً للخدمات المدفوعة',
        'يمكنك إلغاء الاشتراك في أي وقت',
        'الاسترداد يخضع لسياسة الاسترداد الخاصة بنا',
        'نحتفظ بالحق في تغيير الأسعار مع إشعار مسبق',
        'الدفع غير المكتمل قد يؤدي إلى تعليق الخدمة'
      ]
    },
    {
      title: 'الاستخدام المقبول',
      content: 'يُسمح لك بـ:',
      allowed: [
        'استخدام المنصة للأغراض التعليمية الشخصية',
        'تحميل المواد التعليمية للاستخدام الشخصي',
        'المشاركة في المناقشات بشكل محترم',
        'طلب المساعدة من فريق الدعم',
        'تقييم الدورات والمعلمين'
      ],
      prohibited: [
        'استخدام المنصة لأغراض غير قانونية',
        'انتهاك حقوق الملكية الفكرية',
        'إرسال محتوى مسيء أو غير لائق',
        'محاولة اختراق أو تعطيل المنصة',
        'استخدام برامج آلية للوصول للمنصة',
        'بيع أو إعادة توزيع المحتوى'
      ]
    },
    {
      title: 'الملكية الفكرية',
      content: 'جميع المحتويات محمية بحقوق الطبع والنشر:',
      items: [
        'نحن نملك جميع حقوق المحتوى التعليمي',
        'لا يمكنك نسخ أو توزيع المحتوى دون إذن',
        'يمكنك استخدام المحتوى للاستخدام الشخصي فقط',
        'المعلمون يحتفظون بحقوق محتواهم الأصلي',
        'انتهاك حقوق الملكية الفكرية محظور'
      ]
    },
    {
      title: 'إلغاء الحساب',
      content: 'يمكن إلغاء حسابك في الحالات التالية:',
      items: [
        'طلبك الشخصي للإلغاء',
        'انتهاكك لهذه الشروط',
        'عدم دفع الرسوم المستحقة',
        'استخدامك المنصة لأغراض غير قانونية',
        'إشعارنا بإلغاء الخدمة'
      ]
    },
    {
      title: 'الضمانات والمسؤولية',
      content: 'نحن نقدم الخدمة "كما هي" ولا نضمن:',
      items: [
        'عدم انقطاع الخدمة',
        'خلو المحتوى من الأخطاء',
        'تحقيق نتائج تعليمية محددة',
        'توافق المحتوى مع احتياجاتك الخاصة'
      ]
    },
    {
      title: 'تعديل الشروط',
      content: 'نحتفظ بالحق في:',
      items: [
        'تعديل هذه الشروط في أي وقت',
        'إشعارك بالتغييرات المهمة',
        'تطبيق التغييرات فوراً أو بعد إشعار',
        'إيقاف الخدمة إذا لزم الأمر'
      ]
    },
    {
      title: 'القانون الحاكم',
      content: 'هذه الشروط تحكمها قوانين المملكة العربية السعودية. أي نزاعات تُحل في محاكم المملكة العربية السعودية.',
      items: []
    },
    {
      title: 'تواصل معنا',
      content: 'للاستفسارات حول هذه الشروط:',
      items: [
        'البريد الإلكتروني: legal@eduflow.com',
        'الهاتف: +966 11 234 5678',
        'العنوان: الرياض، المملكة العربية السعودية'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Scale className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              شروط الاستخدام
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              الشروط والأحكام التي تحكم استخدام منصتنا التعليمية
            </p>
            <Badge variant="outline" className="text-sm">
              آخر تحديث: 15 يناير 2024
            </Badge>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      {section.lastUpdated && (
                        <Badge variant="outline" className="mt-2">
                          آخر تحديث: {section.lastUpdated}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.allowed && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-green-700 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>مسموح</span>
                      </h4>
                      <ul className="space-y-2">
                        {section.allowed.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.prohibited && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-red-700 flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5" />
                        <span>محظور</span>
                      </h4>
                      <ul className="space-y-2">
                        {section.prohibited.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-red-50 py-16">
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
                      تنبيه مهم
                    </h3>
                    <p className="text-red-700 leading-relaxed">
                      من خلال استخدام منصتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                      انتهاك أي من هذه الشروط قد يؤدي إلى تعليق أو إلغاء حسابك. 
                      نحن نحتفظ بالحق في اتخاذ الإجراءات القانونية المناسبة في حالة الانتهاك.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أسئلة حول الشروط؟
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              فريقنا القانوني جاهز للإجابة على استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Scale className="h-4 w-4 ml-2" />
                تواصل معنا
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="h-4 w-4 ml-2" />
                تحميل الشروط
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
