import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Target, Users, Award, BookOpen, GraduationCap, 
  Star, Clock, Globe, Heart, Lightbulb, Shield, Zap
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const stats = [
    { number: '10,000+', label: 'طالب نشط', icon: Users },
    { number: '500+', label: 'دورة تعليمية', icon: BookOpen },
    { number: '100+', label: 'معلم متميز', icon: GraduationCap },
    { number: '50+', label: 'دولة حول العالم', icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: 'التميز الأكاديمي',
      description: 'نلتزم بتقديم أعلى مستويات الجودة التعليمية من خلال مناهج متطورة ومعلمين متميزين.'
    },
    {
      icon: Heart,
      title: 'الشغف بالتعلم',
      description: 'نؤمن بأن التعلم رحلة مستمرة ونسعى لإلهام الطلاب لاستكشاف آفاق جديدة.'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نستخدم أحدث التقنيات والطرق التعليمية لتقديم تجربة تعليمية فريدة ومتطورة.'
    },
    {
      icon: Shield,
      title: 'الموثوقية',
      description: 'نلتزم بأعلى معايير الجودة والأمان في جميع خدماتنا التعليمية.'
    }
  ];

  const team = [
    {
      name: 'د. أحمد محمد',
      position: 'الرئيس التنفيذي',
      image: '/placeholder.svg',
      bio: 'خبير في التعليم الإلكتروني مع 20 سنة من الخبرة في تطوير المناهج التعليمية.'
    },
    {
      name: 'د. فاطمة علي',
      position: 'مديرة الأكاديمية',
      image: '/placeholder.svg',
      bio: 'متخصصة في تصميم المناهج التعليمية مع خبرة واسعة في التعليم عن بُعد.'
    },
    {
      name: 'أ. محمد حسن',
      position: 'مدير التكنولوجيا',
      image: '/placeholder.svg',
      bio: 'خبير في تقنيات التعليم الرقمي وتطوير المنصات التعليمية المتطورة.'
    },
    {
      name: 'أ. نورا سعد',
      position: 'مديرة التسويق',
      image: '/placeholder.svg',
      bio: 'متخصصة في التسويق الرقمي مع خبرة في بناء المجتمعات التعليمية.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'تأسيس المنصة',
      description: 'بداية رحلتنا مع رؤية واضحة لتطوير التعليم العربي'
    },
    {
      year: '2021',
      title: 'أول 1000 طالب',
      description: 'تجاوزنا حاجز الألف طالب في السنة الأولى'
    },
    {
      year: '2022',
      title: 'توسع إقليمي',
      description: 'انتشارنا في 10 دول عربية مع 50 معلم متميز'
    },
    {
      year: '2023',
      title: 'الذكاء الاصطناعي',
      description: 'إطلاق ميزات الذكاء الاصطناعي في التعلم الشخصي'
    },
    {
      year: '2024',
      title: 'المنصة الجديدة',
      description: 'إطلاق النسخة المطورة مع ميزات متقدمة'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              من نحن
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              منصة تعليمية رائدة تهدف إلى تطوير التعليم العربي من خلال تقنيات متطورة 
              ومعلمين متميزين لبناء جيل واعٍ ومتعلم
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون المنصة التعليمية الرائدة في العالم العربي، ونكون السبب في 
                  إلهام ملايين الطلاب لتحقيق أحلامهم الأكاديمية والمهنية من خلال 
                  تعليم عالي الجودة ومتاح للجميع.
                </p>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h2>
                <p className="text-gray-600 leading-relaxed">
                  تطوير وتقديم تجربة تعليمية استثنائية تجمع بين أحدث التقنيات 
                  وأفضل الممارسات التعليمية، مع التركيز على التفاعل والتفاعل 
                  الشخصي لضمان نجاح كل طالب في رحلته التعليمية.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أرقام تتحدث عن نفسها
            </h2>
            <p className="text-lg text-gray-600">
              إنجازاتنا في الأرقام
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-lg text-gray-600">
              المبادئ التي نؤمن بها ونعمل بها
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فريقنا المتميز
            </h2>
            <p className="text-lg text-gray-600">
              نخبة من الخبراء والمتخصصين في التعليم والتكنولوجيا
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              رحلتنا عبر الزمن
            </h2>
            <p className="text-lg text-gray-600">
              أهم المحطات في مسيرتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            انضم إلى رحلتنا التعليمية
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            كن جزءاً من مجتمعنا التعليمي المتنامي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              ابدأ التعلم الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
