import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Shield, Eye, Lock, Database, UserCheck, 
  FileText, AlertTriangle, CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'مقدمة',
      content: 'نحن في منصة التعلم نلتزم بحماية خصوصيتك وبياناتك الشخصية. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عندما تستخدم منصتنا التعليمية.',
      lastUpdated: '15 يناير 2024'
    },
    {
      title: 'المعلومات التي نجمعها',
      content: 'نجمع أنواع مختلفة من المعلومات لتحسين تجربتك التعليمية:',
      subsections: [
        {
          subtitle: 'المعلومات الشخصية',
          items: [
            'الاسم الكامل',
            'البريد الإلكتروني',
            'رقم الهاتف',
            'تاريخ الميلاد',
            'الجنسية',
            'المستوى التعليمي'
          ]
        },
        {
          subtitle: 'معلومات الحساب',
          items: [
            'اسم المستخدم',
            'كلمة المرور المشفرة',
            'صورة الملف الشخصي',
            'تفضيلات الإشعارات'
          ]
        },
        {
          subtitle: 'معلومات الاستخدام',
          items: [
            'الدورات المسجلة',
            'التقدم في التعلم',
            'الوقت المستغرق في كل درس',
            'الاختبارات والدرجات',
            'التفاعل مع المحتوى'
          ]
        }
      ]
    },
    {
      title: 'كيف نستخدم معلوماتك',
      content: 'نستخدم معلوماتك للأغراض التالية:',
      items: [
        'تقديم الخدمات التعليمية المطلوبة',
        'تخصيص تجربة التعلم حسب احتياجاتك',
        'تتبع تقدمك الأكاديمي',
        'إرسال إشعارات مهمة حول دوراتك',
        'تحسين جودة المحتوى التعليمي',
        'توفير الدعم الفني والأكاديمي',
        'الامتثال للقوانين واللوائح المعمول بها'
      ]
    },
    {
      title: 'حماية البيانات',
      content: 'نطبق أعلى معايير الأمان لحماية معلوماتك:',
      items: [
        'تشفير SSL لجميع البيانات المنقولة',
        'تشفير قوي لكلمات المرور',
        'خوادم آمنة ومحمية',
        'مراجعة دورية لأنظمة الأمان',
        'تدريب فريق العمل على حماية البيانات',
        'نسخ احتياطية آمنة للبيانات'
      ]
    },
    {
      title: 'مشاركة المعلومات',
      content: 'نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية فقط:',
      items: [
        'مع موافقتك الصريحة',
        'للمعلمين لمساعدتك في التعلم',
        'مع مزودي الخدمات الموثوقين',
        'للامتثال للقوانين المحلية',
        'لحماية حقوقنا أو حقوق المستخدمين الآخرين'
      ]
    },
    {
      title: 'حقوقك',
      content: 'لديك الحقوق التالية فيما يتعلق ببياناتك:',
      items: [
        'الوصول إلى بياناتك الشخصية',
        'تصحيح البيانات غير الصحيحة',
        'حذف حسابك وبياناتك',
        'تصدير بياناتك',
        'الاعتراض على معالجة بياناتك',
        'سحب الموافقة في أي وقت'
      ]
    },
    {
      title: 'ملفات تعريف الارتباط (Cookies)',
      content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك:',
      items: [
        'ملفات تعريف الارتباط الأساسية للوظائف الأساسية',
        'ملفات تعريف الارتباط التحليلية لفهم سلوك المستخدم',
        'ملفات تعريف الارتباط التسويقية (بموافقتك)',
        'يمكنك إدارة تفضيلات ملفات تعريف الارتباط من إعدادات المتصفح'
      ]
    },
    {
      title: 'الاحتفاظ بالبيانات',
      content: 'نحتفظ ببياناتك طالما كان حسابك نشطاً. قد نحتفظ ببعض البيانات لفترات أطول للأغراض التالية:',
      items: [
        'الامتثال للقوانين المحلية',
        'حل النزاعات',
        'منع الاحتيال',
        'التحليل الإحصائي المجهول'
      ]
    },
    {
      title: 'الأطفال',
      content: 'منصتنا مخصصة للأشخاص الذين تزيد أعمارهم عن 13 عاماً. لا نجمع معلومات شخصية من الأطفال دون سن 13 عاماً دون موافقة الوالدين.',
      items: []
    },
    {
      title: 'التغييرات على السياسة',
      content: 'قد نحدث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو إشعار في المنصة.',
      items: []
    },
    {
      title: 'تواصل معنا',
      content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا:',
      items: [
        'البريد الإلكتروني: privacy@eduflow.com',
        'الهاتف: +966 11 234 5678',
        'العنوان: الرياض، المملكة العربية السعودية'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
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
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
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
                  
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="border-r-4 border-blue-200 pr-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {subsection.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">
                      إشعار مهم
                    </h3>
                    <p className="text-yellow-700 leading-relaxed">
                      من خلال استخدام منصتنا، فإنك توافق على سياسة الخصوصية هذه. 
                      إذا كنت لا توافق على أي جزء من هذه السياسة، يرجى عدم استخدام منصتنا. 
                      نحن نحتفظ بالحق في تحديث هذه السياسة في أي وقت، وسنقوم بإشعارك بأي تغييرات مهمة.
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
              أسئلة حول الخصوصية؟
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              فريقنا جاهز للإجابة على أي استفسارات حول حماية بياناتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Shield className="h-4 w-4 ml-2" />
                تواصل معنا
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="h-4 w-4 ml-2" />
                تحميل السياسة
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
