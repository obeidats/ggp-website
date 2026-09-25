import type { L } from '@/i18n/ui';
import type { PhotoKey } from './photos';

export interface Service {
  id: string;
  group: 'core' | 'support';
  icon: string; // lucide icon name
  photo: PhotoKey;
  title: L;
  summary: L;
  intro: L;
  points: { title: L; text?: L }[];
  benefits: { icon: string; title: L; text: L }[];
  highlight?: L;
}

export const serviceGroups = {
  core: { en: 'Core Services', ar: 'الخدمات الأساسية' },
  support: { en: 'Support Services', ar: 'الخدمات المساندة' },
} satisfies Record<Service['group'], L>;

export const services: Service[] = [
  {
    id: 'business-development',
    group: 'core',
    icon: 'ChartNoAxesCombined',
    photo: 'muttrahWaterfront',
    title: { en: 'Business Development', ar: 'تطوير الأعمال' },
    summary: {
      en: 'Helping organisations explore opportunities in Oman and turn them into sustainable growth.',
      ar: 'نساعد المؤسسات على استكشاف الفرص في عُمان وتحويلها إلى نمو مستدام.',
    },
    intro: {
      en: 'We create value through connection. Using local market insight, we help organisations find the right opportunities in Oman and the wider Gulf, and build practical routes to sustainable growth.',
      ar: 'نصنع القيمة من خلال التواصل. بفضل معرفتنا بالسوق المحلي، نساعد المؤسسات على الوصول إلى الفرص المناسبة في عُمان ومنطقة الخليج، ونرسم لها مسارات عملية نحو نمو مستدام.',
    },
    points: [
      { title: { en: 'Market access', ar: 'الوصول إلى السوق' }, text: { en: 'Helping organisations explore local opportunities.', ar: 'مساعدة المؤسسات على استكشاف الفرص المحلية.' } },
      { title: { en: 'Opportunity development', ar: 'تطوير الفرص' }, text: { en: 'Identifying and developing practical business opportunities.', ar: 'تحديد فرص الأعمال العملية وتطويرها.' } },
      { title: { en: 'Commercial coordination', ar: 'التنسيق التجاري' }, text: { en: 'Supporting communication and commercial processes.', ar: 'دعم التواصل والإجراءات التجارية.' } },
      { title: { en: 'Growth pathways', ar: 'مسارات النمو' }, text: { en: 'Creating pathways for sustainable business development.', ar: 'بناء مسارات لتطوير أعمال مستدام.' } },
    ],
    benefits: [
      { icon: 'MapPinned', title: { en: 'Market access', ar: 'الوصول إلى السوق' }, text: { en: 'Local opportunities', ar: 'فرص محلية' } },
      { icon: 'Handshake', title: { en: 'Connections', ar: 'علاقات' }, text: { en: 'Relevant partners', ar: 'شركاء مناسبون' } },
      { icon: 'Cog', title: { en: 'Coordination', ar: 'تنسيق' }, text: { en: 'Smooth processes', ar: 'إجراءات سلسة' } },
      { icon: 'TrendingUp', title: { en: 'Growth', ar: 'نمو' }, text: { en: 'Sustainable results', ar: 'نتائج مستدامة' } },
    ],
  },
  {
    id: 'commercial-representation',
    group: 'core',
    icon: 'BriefcaseBusiness',
    photo: 'boardroom',
    title: { en: 'Commercial Representation', ar: 'التمثيل التجاري' },
    summary: {
      en: 'Professional local representation and support in building market-facing relationships across Oman.',
      ar: 'تمثيل محلي احترافي ودعم في بناء علاقات مباشرة مع السوق في جميع أنحاء عُمان.',
    },
    intro: {
      en: 'We provide professional local representation and support organisations in building market-facing relationships across Oman, acting as your trusted presence on the ground.',
      ar: 'نقدّم تمثيلاً محلياً احترافياً وندعم المؤسسات في بناء علاقات مباشرة مع السوق في جميع أنحاء عُمان، لنكون حضوركم الموثوق على أرض الواقع.',
    },
    points: [
      { title: { en: 'Local representation', ar: 'التمثيل المحلي' } },
      { title: { en: 'Client introductions', ar: 'التعريف بالعملاء' } },
      { title: { en: 'Business meetings', ar: 'اجتماعات الأعمال' } },
      { title: { en: 'Commercial discussions', ar: 'المباحثات التجارية' } },
      { title: { en: 'Market communication', ar: 'التواصل مع السوق' } },
      { title: { en: 'Relationship management', ar: 'إدارة العلاقات' } },
    ],
    benefits: [
      { icon: 'UsersRound', title: { en: 'Local knowledge', ar: 'معرفة محلية' }, text: { en: 'Oman-based insight', ar: 'فهم نابع من عُمان' } },
      { icon: 'Handshake', title: { en: 'Strong relationships', ar: 'علاقات قوية' }, text: { en: 'Built on trust', ar: 'مبنية على الثقة' } },
      { icon: 'Globe', title: { en: 'Market access', ar: 'الوصول إلى السوق' }, text: { en: 'The right doors', ar: 'الأبواب الصحيحة' } },
      { icon: 'Target', title: { en: 'Practical results', ar: 'نتائج عملية' }, text: { en: 'Focused outcomes', ar: 'مخرجات واضحة' } },
    ],
    highlight: { en: 'Your local connection in Oman', ar: 'حلقة وصلكم المحلية في عُمان' },
  },
  {
    id: 'regional-partnerships',
    group: 'core',
    icon: 'Waypoints',
    photo: 'grandMosque',
    title: { en: 'Regional Partnerships', ar: 'الشراكات الإقليمية' },
    summary: {
      en: 'Connecting organisations with trusted partners and complementary capabilities across Oman and the Gulf.',
      ar: 'نربط المؤسسات بشركاء موثوقين وقدرات متكاملة في عُمان ومنطقة الخليج.',
    },
    intro: {
      en: 'We connect organisations with trusted partners and complementary capabilities to create new commercial opportunities across Oman and the Gulf.',
      ar: 'نربط المؤسسات بشركاء موثوقين وقدرات متكاملة لخلق فرص تجارية جديدة في عُمان ومنطقة الخليج.',
    },
    points: [
      { title: { en: 'Partner identification', ar: 'تحديد الشركاء' }, text: { en: 'Finding relevant organisations and capabilities.', ar: 'الوصول إلى المؤسسات والقدرات المناسبة.' } },
      { title: { en: 'Strategic introductions', ar: 'التعارف الاستراتيجي' }, text: { en: 'Connecting the right parties.', ar: 'الربط بين الأطراف المناسبة.' } },
      { title: { en: 'Relationship development', ar: 'تطوير العلاقات' }, text: { en: 'Supporting long-term cooperation.', ar: 'دعم التعاون طويل الأمد.' } },
      { title: { en: 'Opportunity coordination', ar: 'تنسيق الفرص' }, text: { en: 'Helping move discussions toward practical opportunities.', ar: 'المساعدة في تحويل النقاشات إلى فرص عملية.' } },
    ],
    benefits: [
      { icon: 'UsersRound', title: { en: 'Strong partners', ar: 'شركاء أقوياء' }, text: { en: 'A trusted network across Oman and the Gulf', ar: 'شبكة موثوقة في عُمان والخليج' } },
      { icon: 'Globe', title: { en: 'Wider reach', ar: 'انتشار أوسع' }, text: { en: 'Connecting opportunities across borders', ar: 'فرص تتجاوز الحدود' } },
      { icon: 'ShieldCheck', title: { en: 'Trusted relationships', ar: 'علاقات موثوقة' }, text: { en: 'Reliable and capable partners', ar: 'شركاء موثوقون وأكفاء' } },
      { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Real opportunities', ar: 'فرص حقيقية' }, text: { en: 'Pathways to sustainable commercial growth', ar: 'مسارات لنمو تجاري مستدام' } },
    ],
  },
  {
    id: 'manpower-solutions',
    group: 'support',
    icon: 'HardHat',
    photo: 'constructionSupervisor',
    title: { en: 'Manpower Solutions', ar: 'حلول القوى العاملة' },
    summary: {
      en: 'Technical, specialised and non-technical manpower supply that is skilled, reliable and ready for your project.',
      ar: 'توفير قوى عاملة فنية ومتخصصة وغير فنية تتميز بالكفاءة والموثوقية والجاهزية للمشاريع.',
    },
    intro: {
      en: 'We supply qualified manpower for projects and operations across all sectors, with a workforce that is skilled, reliable and ready for your project, coordinated to match your schedule.',
      ar: 'نوفّر قوى عاملة مؤهلة للمشاريع والعمليات في مختلف القطاعات، تتميز بالكفاءة والموثوقية والجاهزية، ونُنسّق عملها بما يتوافق مع جداولكم الزمنية.',
    },
    points: [
      { title: { en: 'Technical & specialised manpower supply', ar: 'توفير القوى العاملة الفنية والمتخصصة' } },
      { title: { en: 'Non-technical manpower supply', ar: 'توفير القوى العاملة غير الفنية' } },
      { title: { en: 'Workforce coordination', ar: 'تنسيق القوى العاملة' } },
      { title: { en: 'Project-based staffing', ar: 'التوظيف حسب المشروع' } },
    ],
    benefits: [
      { icon: 'UsersRound', title: { en: 'Qualified workforce', ar: 'قوى عاملة مؤهلة' }, text: { en: 'Skilled. Reliable. Project-ready.', ar: 'كفاءة وموثوقية وجاهزية للمشاريع.' } },
      { icon: 'Handshake', title: { en: 'Flexible solutions', ar: 'حلول مرنة' }, text: { en: 'Adapting to your project needs', ar: 'تتكيف مع احتياجات مشروعكم' } },
    ],
  },
  {
    id: 'operational-support',
    group: 'support',
    icon: 'Settings',
    photo: 'siteTeam',
    title: { en: 'Operational Support', ar: 'الدعم التشغيلي' },
    summary: {
      en: 'Site and operational support that keeps projects running safely and efficiently.',
      ar: 'دعم ميداني وتشغيلي يضمن سير المشاريع بأمان وكفاءة.',
    },
    intro: {
      en: 'Our operational support services help keep projects and sites running smoothly, with safe practices and efficient delivery at every stage.',
      ar: 'تساعد خدمات الدعم التشغيلي لدينا على سير المشاريع والمواقع بسلاسة، مع الالتزام بممارسات آمنة وتنفيذ فعّال في كل مرحلة.',
    },
    points: [
      { title: { en: 'Operational support services', ar: 'خدمات الدعم التشغيلي' } },
      { title: { en: 'Site & operational support', ar: 'الدعم الميداني والتشغيلي' } },
      { title: { en: 'Workforce coordination on site', ar: 'تنسيق فرق العمل في الموقع' } },
      { title: { en: 'Support at every project stage', ar: 'الدعم في جميع مراحل المشروع' } },
    ],
    benefits: [
      { icon: 'ShieldCheck', title: { en: 'Operational excellence', ar: 'تميّز تشغيلي' }, text: { en: 'Safe practices. Efficient delivery.', ar: 'ممارسات آمنة وتنفيذ فعّال.' } },
      { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Focus on results', ar: 'التركيز على النتائج' }, text: { en: 'Supporting success at every stage', ar: 'دعم النجاح في كل مرحلة' } },
    ],
  },
  {
    id: 'consultation',
    group: 'support',
    icon: 'MessagesSquare',
    photo: 'meetingRoom',
    title: { en: 'Consultation', ar: 'الاستشارات' },
    summary: {
      en: 'Practical guidance on the Omani market, its business environment and the right partnership approach.',
      ar: 'إرشاد عملي حول السوق العُماني وبيئة الأعمال ونموذج الشراكة الأنسب.',
    },
    intro: {
      en: 'We share our local understanding of the market, its culture and business environment to help organisations make informed decisions before entering or expanding in Oman.',
      ar: 'نشارك فهمنا المحلي للسوق وثقافته وبيئة الأعمال فيه، لمساعدة المؤسسات على اتخاذ قرارات مدروسة قبل دخول السوق العُماني أو التوسع فيه.',
    },
    points: [
      { title: { en: 'Market and business-environment insight', ar: 'فهم السوق وبيئة الأعمال' } },
      { title: { en: 'Opportunity assessment', ar: 'تقييم الفرص' } },
      { title: { en: 'Flexible partnership models', ar: 'نماذج شراكة مرنة' } },
      { title: { en: 'Commercial guidance', ar: 'الإرشاد التجاري' } },
    ],
    benefits: [
      { icon: 'MapPin', title: { en: 'Local understanding', ar: 'فهم محلي' }, text: { en: 'Oman-based market perspective', ar: 'منظور للسوق من داخل عُمان' } },
      { icon: 'SlidersHorizontal', title: { en: 'Flexible approach', ar: 'نهج مرن' }, text: { en: 'Adapted to different needs', ar: 'يتكيف مع مختلف الاحتياجات' } },
    ],
  },
];

export const coreServices = services.filter((s) => s.group === 'core');
export const supportServices = services.filter((s) => s.group === 'support');
