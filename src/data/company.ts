import type { L } from '@/i18n/ui';

type Item = { icon: string; title: L; text: L };

export const whoWeAre = {
  title: { en: 'Who We Are', ar: 'من نحن' } satisfies L,
  paragraphs: [
    {
      en: 'Global Gulf Pulse is an Oman-based company focused on business development, commercial representation and regional partnership coordination.',
      ar: 'نبض الخليج العالمية شركة عُمانية تُركّز على تطوير الأعمال والتمثيل التجاري وتنسيق الشراكات الإقليمية.',
    },
    {
      en: 'We connect organisations with the local knowledge, relationships and commercial pathways they need to explore opportunities and grow across Oman and the wider Gulf region.',
      ar: 'نربط المؤسسات بالمعرفة المحلية والعلاقات والمسارات التجارية التي تحتاجها لاستكشاف الفرص والنمو في عُمان ومنطقة الخليج.',
    },
  ] satisfies L[],
  highlights: [
    { icon: 'Globe', title: { en: 'Regional Focus', ar: 'تركيز إقليمي' }, text: { en: 'Oman & GCC', ar: 'عُمان ودول الخليج' } },
    { icon: 'Handshake', title: { en: 'Strategic Partnerships', ar: 'شراكات استراتيجية' }, text: { en: 'Built on trust', ar: 'مبنية على الثقة' } },
    { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Commercial Excellence', ar: 'تميّز تجاري' }, text: { en: 'Results that matter', ar: 'نتائج ملموسة' } },
    { icon: 'UsersRound', title: { en: 'Local Insight, Global Reach', ar: 'فهم محلي وانتشار عالمي' }, text: { en: 'Connecting opportunity', ar: 'نربط الفرص' } },
  ] satisfies Item[],
};

/** "A Regional Pulse. A Practical Partner." */
export const pillars = {
  title: { en: 'A Regional Pulse. A Practical Partner.', ar: 'نبضٌ إقليمي، وشريكٌ عملي.' } satisfies L,
  items: [
    { icon: 'Castle', title: { en: 'Local Insight', ar: 'فهم محلي' }, text: { en: 'Understanding Oman and its market.', ar: 'فهمٌ عميق لعُمان وسوقها.' } },
    { icon: 'Network', title: { en: 'Gulf Perspective', ar: 'منظور خليجي' }, text: { en: 'Connecting opportunities across the region.', ar: 'نربط الفرص في أرجاء المنطقة.' } },
    { icon: 'ShieldCheck', title: { en: 'Long-Term Trust', ar: 'ثقة طويلة الأمد' }, text: { en: 'Building relationships designed to last.', ar: 'نبني علاقات صُمّمت لتدوم.' } },
  ] satisfies Item[],
};

export const story = {
  title: { en: 'Our Story', ar: 'قصتنا' } satisfies L,
  subtitle: { en: 'From a clear beginning to a regional impact.', ar: 'من بداية واضحة إلى أثر إقليمي.' } satisfies L,
  steps: [
    { icon: 'Flag', title: { en: '2014', ar: '2014' }, text: { en: 'The beginning of Global Gulf Pulse.', ar: 'انطلاقة نبض الخليج العالمية.' } },
    { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Growth', ar: 'النمو' }, text: { en: 'Omanisation, building capabilities and expanding our value across the region.', ar: 'التعمين، وبناء القدرات، وتوسيع قيمتنا في أرجاء المنطقة.' } },
    { icon: 'Handshake', title: { en: 'Partnerships', ar: 'الشراكات' }, text: { en: 'Creating trusted relationships that deliver real results.', ar: 'بناء علاقات موثوقة تحقق نتائج حقيقية.' } },
    { icon: 'Earth', title: { en: 'Regional Opportunities', ar: 'الفرص الإقليمية' }, text: { en: 'Connecting organisations with the right opportunities across Oman and the Gulf.', ar: 'ربط المؤسسات بالفرص المناسبة في عُمان والخليج.' } },
    { icon: 'Telescope', title: { en: 'Future', ar: 'المستقبل' }, text: { en: 'Focused on sustainable growth and long-term regional impact.', ar: 'تركيز على النمو المستدام والأثر الإقليمي طويل الأمد.' } },
  ] satisfies Item[],
  quote: {
    en: 'Our journey is driven by purpose, partnerships and the pursuit of meaningful impact across Oman and the wider Gulf region.',
    ar: 'رحلتنا تقودها الغاية والشراكات، والسعي إلى أثرٍ هادف في عُمان ومنطقة الخليج.',
  } satisfies L,
};

export const vision = {
  title: { en: 'Our Vision', ar: 'رؤيتنا' } satisfies L,
  text: {
    en: 'To become a trusted regional partner for organisations seeking sustainable growth, meaningful partnerships and new opportunities across Oman and the Gulf.',
    ar: 'أن نكون الشريك الإقليمي الموثوق للمؤسسات الساعية إلى النمو المستدام والشراكات الهادفة والفرص الجديدة في عُمان والخليج.',
  } satisfies L,
};

export const mission = {
  title: { en: 'Our Mission', ar: 'رسالتنا' } satisfies L,
  text: {
    en: 'To connect organisations, capabilities and opportunities through local market insight, commercial coordination and trusted relationships, creating practical pathways for sustainable growth and measurable commercial value.',
    ar: 'أن نربط المؤسسات والقدرات والفرص من خلال فهم السوق المحلي والتنسيق التجاري والعلاقات الموثوقة، لنصنع مسارات عملية نحو نمو مستدام وقيمة تجارية قابلة للقياس.',
  } satisfies L,
  steps: [
    { icon: 'Users', title: { en: 'Connect', ar: 'نربط' }, text: { en: 'Organisations, capabilities and opportunities.', ar: 'المؤسسات والقدرات والفرص.' } },
    { icon: 'Cog', title: { en: 'Coordinate', ar: 'ننسّق' }, text: { en: 'Communication and commercial processes.', ar: 'التواصل والإجراءات التجارية.' } },
    { icon: 'TrendingUp', title: { en: 'Grow', ar: 'ننمو' }, text: { en: 'Sustainable, measurable commercial value.', ar: 'قيمة تجارية مستدامة وقابلة للقياس.' } },
  ] satisfies Item[],
};

export const values = {
  title: { en: 'Our Core Values', ar: 'قيمنا الجوهرية' } satisfies L,
  items: [
    { icon: 'HeartHandshake', title: { en: 'Trust', ar: 'الثقة' }, text: { en: 'Building relationships based on credibility and transparency.', ar: 'بناء علاقات قائمة على المصداقية والشفافية.' } },
    { icon: 'Scale', title: { en: 'Integrity', ar: 'النزاهة' }, text: { en: 'Professionalism and accountability in every interaction.', ar: 'الاحترافية والمسؤولية في كل تعامل.' } },
    { icon: 'UsersRound', title: { en: 'Partnership', ar: 'الشراكة' }, text: { en: 'Creating value through collaboration.', ar: 'صناعة القيمة من خلال التعاون.' } },
    { icon: 'Award', title: { en: 'Excellence', ar: 'التميّز' }, text: { en: 'Delivering professional and practical solutions.', ar: 'تقديم حلول احترافية وعملية.' } },
    { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Growth', ar: 'النمو' }, text: { en: 'Creating opportunities for sustainable development.', ar: 'خلق فرص للتنمية المستدامة.' } },
  ] satisfies Item[],
};

export const hse = {
  title: { en: 'Occupational Health & Safety', ar: 'الصحة والسلامة المهنية' } satisfies L,
  intro: {
    en: 'We are committed to implementing the highest standards of occupational health and safety, placing the well-being of our employees and the work environment as a top priority.',
    ar: 'نلتزم بتطبيق أعلى معايير الصحة والسلامة المهنية، ونضع سلامة موظفينا وبيئة العمل في مقدمة أولوياتنا.',
  } satisfies L,
  commitments: [
    { icon: 'GraduationCap', title: { en: 'Continuous training', ar: 'تدريب مستمر' }, text: { en: 'Continuous training on safety procedures.', ar: 'تدريب متواصل على إجراءات السلامة.' } },
    { icon: 'ClipboardCheck', title: { en: 'Regulatory compliance', ar: 'الامتثال للأنظمة' }, text: { en: 'Compliance with local and international regulations.', ar: 'الامتثال للأنظمة المحلية والدولية.' } },
    { icon: 'OctagonAlert', title: { en: 'Incident prevention', ar: 'الوقاية من الحوادث' }, text: { en: 'Risk prevention and minimising workplace incidents.', ar: 'الوقاية من المخاطر والحد من حوادث العمل.' } },
    { icon: 'HardHat', title: { en: 'Safety culture', ar: 'ثقافة السلامة' }, text: { en: 'Promoting a safety culture among all employees.', ar: 'تعزيز ثقافة السلامة لدى جميع الموظفين.' } },
  ] satisfies Item[],
  closing: {
    en: 'Our commitment to occupational health and safety reflects our responsibility towards our employees and society, ensuring the sustainability of our operations and the quality of our services.',
    ar: 'يعكس التزامنا بالصحة والسلامة المهنية مسؤوليتنا تجاه موظفينا والمجتمع، ويضمن استدامة عملياتنا وجودة خدماتنا.',
  } satisfies L,
};

export const difference = {
  title: { en: 'What Makes GGP Different?', ar: 'ما الذي يميّز نبض الخليج؟' } satisfies L,
  lead: {
    en: 'We don’t simply connect businesses. We focus on creating relationships that can lead to meaningful opportunities.',
    ar: 'نحن لا نكتفي بربط الشركات، بل نُركّز على بناء علاقات تقود إلى فرص حقيقية وذات قيمة.',
  } satisfies L,
  items: [
    { icon: 'MapPin', title: { en: 'Oman-based perspective', ar: 'منظور من داخل عُمان' }, text: { en: 'Local understanding of the market, culture and business environment.', ar: 'فهم محلي للسوق والثقافة وبيئة الأعمال.' } },
    { icon: 'Handshake', title: { en: 'Relationship-driven approach', ar: 'نهج قائم على العلاقات' }, text: { en: 'We build trusted relationships that create real connection and mutual value.', ar: 'نبني علاقات موثوقة تصنع تواصلاً حقيقياً وقيمة مشتركة.' } },
    { icon: 'Briefcase', title: { en: 'Practical business development', ar: 'تطوير أعمال عملي' }, text: { en: 'Focused on identifying and supporting practical commercial opportunities.', ar: 'نركّز على تحديد الفرص التجارية العملية ودعمها.' } },
    { icon: 'Network', title: { en: 'Commercial coordination', ar: 'تنسيق تجاري' }, text: { en: 'We support smooth communication and coordination between all parties.', ar: 'ندعم التواصل والتنسيق السلس بين جميع الأطراف.' } },
    { icon: 'Puzzle', title: { en: 'Flexible partnership models', ar: 'نماذج شراكة مرنة' }, text: { en: 'Partnership solutions adapted to different needs and working styles.', ar: 'حلول شراكة تتكيف مع مختلف الاحتياجات وأساليب العمل.' } },
    { icon: 'Target', title: { en: 'Long-term focus', ar: 'رؤية طويلة الأمد' }, text: { en: 'We aim to build sustainable relationships that grow over time.', ar: 'نسعى إلى بناء علاقات مستدامة تنمو مع الوقت.' } },
  ] satisfies Item[],
};

export const whyPartner = {
  title: { en: 'Why Partner With GGP?', ar: 'لماذا تختار الشراكة مع نبض الخليج؟' } satisfies L,
  items: [
    { icon: 'MapPin', title: { en: 'Local Understanding', ar: 'فهم محلي' }, text: { en: 'Oman-based market perspective.', ar: 'منظور للسوق من داخل عُمان.' } },
    { icon: 'Globe', title: { en: 'Regional Perspective', ar: 'منظور إقليمي' }, text: { en: 'Understanding opportunities across the Gulf.', ar: 'فهم الفرص في أرجاء الخليج.' } },
    { icon: 'Handshake', title: { en: 'Trusted Connections', ar: 'علاقات موثوقة' }, text: { en: 'Building relationships between organisations.', ar: 'بناء العلاقات بين المؤسسات.' } },
    { icon: 'Target', title: { en: 'Commercial Focus', ar: 'تركيز تجاري' }, text: { en: 'Focused on practical business opportunities.', ar: 'تركيز على فرص الأعمال العملية.' } },
    { icon: 'SlidersHorizontal', title: { en: 'Flexible Approach', ar: 'نهج مرن' }, text: { en: 'Solutions adapted to different partnership needs.', ar: 'حلول تتكيف مع احتياجات الشراكة المختلفة.' } },
    { icon: 'UsersRound', title: { en: 'Long-Term Relationships', ar: 'علاقات طويلة الأمد' }, text: { en: 'Building sustainable business connections.', ar: 'بناء علاقات أعمال مستدامة.' } },
  ] satisfies Item[],
};

/** "Creating Value Through Connection" — how GGP works. */
export const valueChain = {
  title: { en: 'Creating Value Through Connection', ar: 'نصنع القيمة من خلال التواصل' } satisfies L,
  steps: [
    { icon: 'MapPinned', title: { en: 'Market Access', ar: 'الوصول إلى السوق' }, text: { en: 'Helping organisations explore local opportunities.', ar: 'مساعدة المؤسسات على استكشاف الفرص المحلية.' } },
    { icon: 'Handshake', title: { en: 'Connections', ar: 'بناء العلاقات' }, text: { en: 'Connecting businesses with relevant partners.', ar: 'ربط الشركات بالشركاء المناسبين.' } },
    { icon: 'Cog', title: { en: 'Coordination', ar: 'التنسيق' }, text: { en: 'Supporting communication and commercial processes.', ar: 'دعم التواصل والإجراءات التجارية.' } },
    { icon: 'TrendingUp', title: { en: 'Growth', ar: 'النمو' }, text: { en: 'Creating pathways for sustainable business development.', ar: 'بناء مسارات لتطوير أعمال مستدام.' } },
  ] satisfies Item[],
};

/** "Our Partnership Ecosystem" — a cycle, in order. */
export const ecosystem = {
  title: { en: 'Our Partnership Ecosystem', ar: 'منظومة شراكاتنا' } satisfies L,
  text: {
    en: 'Connecting organisations, capabilities and opportunities through a trusted regional network.',
    ar: 'نربط المؤسسات والقدرات والفرص عبر شبكة إقليمية موثوقة.',
  } satisfies L,
  nodes: [
    { icon: 'Globe', title: { en: 'International Companies', ar: 'الشركات الدولية' } },
    { icon: 'UsersRound', title: { en: 'Local Partners', ar: 'الشركاء المحليون' } },
    { icon: 'HardHat', title: { en: 'Technical Capabilities', ar: 'القدرات الفنية' } },
    { icon: 'Briefcase', title: { en: 'Project Opportunities', ar: 'فرص المشاريع' } },
    { icon: 'Handshake', title: { en: 'Global Gulf Pulse', ar: 'نبض الخليج العالمية' } },
  ] satisfies { icon: string; title: L }[],
};

export const homeMarket = {
  title: { en: 'Oman — Our Home Market', ar: 'عُمان — سوقنا الأم' } satisfies L,
  text: {
    en: 'Based in Muscat, Global Gulf Pulse operates from Oman, providing a local platform for organisations seeking to explore business opportunities and develop trusted relationships in the market.',
    ar: 'انطلاقاً من مسقط، تعمل نبض الخليج العالمية من عُمان لتكون منصة محلية للمؤسسات الساعية إلى استكشاف فرص الأعمال وبناء علاقات موثوقة في السوق.',
  } satisfies L,
};

export const gulf = {
  title: { en: 'Connected to the Gulf', ar: 'متصلون بالخليج' } satisfies L,
  text: {
    en: 'Oman provides a strategic base for connecting businesses, capabilities and opportunities across the wider Gulf region.',
    ar: 'تُشكّل عُمان قاعدة استراتيجية لربط الشركات والقدرات والفرص في أرجاء منطقة الخليج.',
  } satisfies L,
  networkTitle: { en: 'Regional opportunity network', ar: 'شبكة الفرص الإقليمية' } satisfies L,
  network: [
    { icon: 'Network', title: { en: 'Strategic connectivity', ar: 'ترابط استراتيجي' }, text: { en: 'Linking markets, people and opportunities.', ar: 'نربط الأسواق والأشخاص والفرص.' } },
    { icon: 'Handshake', title: { en: 'Trusted relationships', ar: 'علاقات موثوقة' }, text: { en: 'Building connections on trust and collaboration.', ar: 'علاقات مبنية على الثقة والتعاون.' } },
    { icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Market insight', ar: 'فهم السوق' }, text: { en: 'Local knowledge that opens doors across the region.', ar: 'معرفة محلية تفتح الأبواب في المنطقة.' } },
    { icon: 'Target', title: { en: 'Opportunity focused', ar: 'تركيز على الفرص' }, text: { en: 'Identifying and developing practical business opportunities.', ar: 'تحديد فرص الأعمال العملية وتطويرها.' } },
    { icon: 'Globe', title: { en: 'Regional reach', ar: 'انتشار إقليمي' }, text: { en: 'Connecting capabilities across the Gulf.', ar: 'نربط القدرات في أرجاء الخليج.' } },
    { icon: 'ShieldCheck', title: { en: 'Sustainable value', ar: 'قيمة مستدامة' }, text: { en: 'Supporting long-term growth and mutual success.', ar: 'ندعم النمو طويل الأمد والنجاح المشترك.' } },
  ] satisfies Item[],
  /** GCC markets on the map. Coordinates are the capitals, used to compute distance from Muscat. */
  hub: { name: { en: 'Muscat', ar: 'مسقط' }, lat: 23.588, lon: 58.3829 },
  countries: [
    { id: 'sa', name: { en: 'Saudi Arabia', ar: 'السعودية' }, capital: { en: 'Riyadh', ar: 'الرياض' }, lat: 24.7136, lon: 46.6753 },
    { id: 'kw', name: { en: 'Kuwait', ar: 'الكويت' }, capital: { en: 'Kuwait City', ar: 'مدينة الكويت' }, lat: 29.3759, lon: 47.9774 },
    { id: 'bh', name: { en: 'Bahrain', ar: 'البحرين' }, capital: { en: 'Manama', ar: 'المنامة' }, lat: 26.2285, lon: 50.586 },
    { id: 'qa', name: { en: 'Qatar', ar: 'قطر' }, capital: { en: 'Doha', ar: 'الدوحة' }, lat: 25.2854, lon: 51.531 },
    { id: 'ae', name: { en: 'UAE', ar: 'الإمارات' }, capital: { en: 'Abu Dhabi', ar: 'أبوظبي' }, lat: 24.4539, lon: 54.3773 },
  ],
  mapCopy: {
    hint: { en: 'Select a market to see its connection to Muscat', ar: 'اختر سوقاً لعرض ارتباطه بمسقط' },
    hubTitle: { en: 'Muscat — our base', ar: 'مسقط — مقرّنا' },
    hubText: {
      en: 'From Muscat we connect organisations with partners, capabilities and opportunities across five GCC markets.',
      ar: 'من مسقط نربط المؤسسات بالشركاء والقدرات والفرص في خمس أسواق خليجية.',
    },
    capital: { en: 'Capital', ar: 'العاصمة' },
    distance: { en: 'From Muscat', ar: 'المسافة من مسقط' },
    km: { en: 'km (straight line)', ar: 'كم (خط مستقيم)' },
    markets: { en: 'GCC markets', ar: 'أسواق خليجية' },
    countryText: {
      en: 'Part of our regional opportunity network: partner identification, strategic introductions and opportunity coordination.',
      ar: 'ضمن شبكة فرصنا الإقليمية: تحديد الشركاء، والتعارف الاستراتيجي، وتنسيق الفرص.',
    },
    back: { en: 'Show all', ar: 'عرض الكل' },
  },
  features: [
    { icon: 'MapPin', title: { en: 'A strategic location', ar: 'موقع استراتيجي' }, text: { en: 'At the heart of the Gulf, close to key markets.', ar: 'في قلب الخليج وبالقرب من الأسواق الرئيسية.' } },
    { icon: 'Compass', title: { en: 'Easy access', ar: 'سهولة الوصول' }, text: { en: 'Well connected by land, sea and air.', ar: 'ترابط جيد براً وبحراً وجواً.' } },
    { icon: 'Share2', title: { en: 'Strong partnerships', ar: 'شراكات قوية' }, text: { en: 'Working with trusted regional stakeholders.', ar: 'نعمل مع أطراف إقليمية موثوقة.' } },
    { icon: 'UsersRound', title: { en: 'One region, many opportunities', ar: 'منطقة واحدة وفرص متعددة' }, text: { en: 'Uniting potential across the Gulf.', ar: 'نوحّد الإمكانات في أرجاء الخليج.' } },
  ] satisfies Item[],
};

/** "Building the Next Chapter" — milestones after the current year show as goals. */
export const roadmap = {
  title: { en: 'Building the Next Chapter', ar: 'نبني الفصل القادم' } satisfies L,
  closing: { en: 'From Oman to wider regional opportunities.', ar: 'من عُمان إلى آفاق إقليمية أوسع.' } satisfies L,
  milestones: [
    { year: 2014, icon: 'Flag', title: { en: 'Established', ar: 'التأسيس' } },
    { year: 2020, icon: 'ChartNoAxesColumnIncreasing', title: { en: 'Business Development', ar: 'تطوير الأعمال' } },
    { year: 2026, icon: 'Handshake', title: { en: 'Strategic Partnerships', ar: 'الشراكات الاستراتيجية' } },
    { year: 2030, icon: 'Earth', title: { en: 'Regional Opportunities', ar: 'الفرص الإقليمية' } },
    { year: 2040, icon: 'Sprout', title: { en: 'Sustainable Growth', ar: 'النمو المستدام' } },
  ] satisfies { year: number; icon: string; title: L }[],
};
