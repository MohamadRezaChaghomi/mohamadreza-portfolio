export const projects = [
  {
    id: 'note-app',
    title: {
      fa: 'نت‌اپ | اپلیکیشن مدیریت یادداشت حرفه‌ای',
      en: 'NoteApp | Professional Note Management'
    },
    description: {
      fa: 'یک اپلیکیشن مدیریت یادداشت پیشرفته با امنیت چندلایه و امکانات فراتر از پروژه دانشگاهی',
      en: 'An advanced note management application with multi-layer security and features beyond academic requirements'
    },
    longDescription: {
      fa: 'این پروژه به عنوان یک تکلیف ساده برای درس مهندسی نرم‌افزار شروع شد، اما با نگاه حرفه‌ای به محصولی تبدیل شد که تمام انتظارات یک نرم‌افزار واقعی را برآورده می‌کند. از ۱۵ ویژگی اضافه‌تر از نیاز پروژه گرفته تا پیاده‌سازی ۸ لایه امنیتی مختلف، این پروژه نشان‌دهنده تعهد به کیفیت و یادگیری مستمر است.',
      en: 'This project started as a simple software engineering assignment but evolved into a product that meets all expectations of real-world software. With 15+ features beyond requirements and 8 security layers, it demonstrates commitment to quality and continuous learning.'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind', 'NextAuth', 'JWT'],
    features: {
      fa: [
        'احراز هویت چندلایه (ایمیل + گوگل)',
        'امنیت ۸ لایه (JWT, XSS, CSRF, ...)',
        'ویرایشگر پیشرفته WYSIWYG',
        'پوشه‌بندی رنگی و برچسب‌گذاری',
        'نسخه‌برداری خودکار',
        'جستجوی دو زبانه (فارسی/انگلیسی)',
        'داشبورد تحلیلی با نمودار'
      ],
      en: [
        'Multi-layer authentication (Email + Google)',
        '8 security layers (JWT, XSS, CSRF, ...)',
        'Advanced WYSIWYG editor',
        'Color-coded folders and tagging',
        'Automatic versioning',
        'Bilingual search (Persian/English)',
        'Analytics dashboard with charts'
      ]
    },
    githubUrl: 'https://github.com/MohamadRezaChaghomi/note-app',
    imageUrl: '/images/projects/note-app/cover.png',
    videoUrl: '/projects/note-app/demo.mp4',
    category: 'fullstack',
    role: {
      fa: 'توسعه‌دهنده فول‌استک (انفرادی)',
      en: 'Full Stack Developer (Solo)'
    },
    achievement: {
      fa: '۲۰/۲۰ با ۴ نمره اضافه - فراتر از نیاز پروژه',
      en: '20/20 with 4 bonus points - Beyond requirements'
    }
  },
  {
    id: 'real-estate',
    title: {
      fa: 'خانه‌ی پدری | سامانه مدیریت املاک',
      en: 'Khaneh Pedari | Real Estate Management'
    },
    description: {
      fa: 'یک سامانه جامع برای دفاتر املاک با قابلیت نمایش روی نقشه و خروجی Excel',
      en: 'A comprehensive system for real estate agencies with map display and Excel export'
    },
    longDescription: {
      fa: 'خانه‌ی پدری با هدف دیجیتال‌سازی کامل فرآیندهای یک دفتر املاک طراحی شده است. این پروژه با ارائه امکانات پیشرفته‌ای مثل نمایش روی نقشه، سیستم تقویم، خروجی Excel و سیستم لاگ، یک محصول آماده برای استفاده واقعی است.',
      en: 'Khaneh Pedari is designed to fully digitize real estate agency processes. With advanced features like map display, calendar system, Excel export, and audit log, it is ready for real-world use.'
    },
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind', 'Leaflet', 'ExcelJS'],
    features: {
      fa: [
        'مدیریت کامل ملک‌ها با تصاویر',
        'نمایش روی نقشه با Leaflet',
        'خروجی Excel از اطلاعات',
        'تقویم تعاملی برای قرار ملاقات‌ها',
        'سیستم لاگ حفاظتی (Audit Log)',
        'تم تاریک/روشن کامل'
      ],
      en: [
        'Complete property management with images',
        'Map display with Leaflet',
        'Excel data export',
        'Interactive calendar for appointments',
        'Audit log system',
        'Full dark/light theme'
      ]
    },
    githubUrl: 'https://github.com/MohamadRezaChaghomi/real-estate',
    imageUrl: '/images/projects/real-estate/cover.png',
    videoUrl: '/projects/real-estate/demo.mp4',
    category: 'fullstack',
    role: {
      fa: 'توسعه‌دهنده فول‌استک (انفرادی)',
      en: 'Full Stack Developer (Solo)'
    }
  },
  {
    id: 'pastry-supplies',
    title: {
      fa: 'Pastry Supplies | پنل ادمین قنادی',
      en: 'Pastry Supplies | Bakery Admin Panel'
    },
    description: {
      fa: 'پنل ادمین حرفه‌ای برای مدیریت قنادی با دسته‌بندی چندسطحی محصولات',
      en: 'Professional admin panel for bakery management with multi-level product categorization'
    },
    longDescription: {
      fa: 'این پروژه یک پنل ادمین کامل برای سایت قنادی است که با React پیاده‌سازی شده. دسته‌بندی چندسطحی محصولات، مدیریت کاربران و گزارش‌گیری از ویژگی‌های اصلی آن است.',
      en: 'This project is a complete admin panel for a bakery website implemented with React. Multi-level product categorization, user management, and reporting are its main features.'
    },
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    features: {
      fa: [
        'مدیریت محتوای استاتیک (درباره ما)',
        'مدیریت کامل کاربران (CRUD)',
        'دسته‌بندی چندسطحی محصولات',
        'افزودن محصول با عکس و توضیحات',
        'گزارش‌گیری از کاربران و محصولات'
      ],
      en: [
        'Static content management (About Us)',
        'Complete user management (CRUD)',
        'Multi-level product categorization',
        'Add products with images and descriptions',
        'User and product reporting'
      ]
    },
    githubUrl: 'https://github.com/MohamadRezaChaghomi/PastrySupplies',
    imageUrl: '/images/projects/pastry-supplies/cover.png',
    videoUrl: '/projects/pastry-supplies/demo.mp4',
    category: 'frontend',
    role: {
      fa: 'توسعه‌دهنده اصلی پنل ادمین (تیمی)',
      en: 'Lead Admin Panel Developer (Team)'
    }
  },
  {
    id: 'reservation',
    title: {
      fa: 'سامانه رزرواسیون | Reservation System',
      en: 'Reservation System | Booking Platform'
    },
    description: {
      fa: 'یک سامانه رزرواسیون عمومی با قابلیت استفاده برای هر کسب‌وکاری',
      en: 'A general reservation system usable for any business'
    },
    longDescription: {
      fa: 'این پروژه یک سامانه رزرواسیون کامل است که به صورت تیمی توسعه یافته. پنل ادمین کامل، سیستم کد تخفیف، نظرات کاربران، تیکت‌دهی و اتصال به درگاه پرداخت واقعی از ویژگی‌های آن است. من پنل ادمین و صفحه جزئیات محصول را پیاده‌سازی کردم.',
      en: 'This is a complete reservation system developed in a team. Full admin panel, discount code system, user comments, ticketing, and real payment gateway integration are its features. I implemented the admin panel and product detail page.'
    },
    technologies: ['JavaScript', 'HTML', 'CSS'],
    features: {
      fa: [
        'پنل ادمین کامل (محصولات، تخفیف، نظرات)',
        'صفحه جزئیات محصول با انتخاب تعداد',
        'سیستم کد تخفیف',
        'مدیریت نظرات کاربران',
        'اتصال به درگاه پرداخت واقعی',
        'سیستم تیکت‌دهی'
      ],
      en: [
        'Complete admin panel (products, discounts, comments)',
        'Product detail page with quantity selection',
        'Discount code system',
        'User comment management',
        'Real payment gateway integration',
        'Ticketing system'
      ]
    },
    githubUrl: 'https://github.com/MohamadRezaChaghomi/rezervation-pj',
    imageUrl: '/images/projects/reservation/cover.png',
    videoUrl: '/projects/reservation/demo.mp4',
    category: 'team',
    role: {
      fa: 'توسعه‌دهنده پنل ادمین و صفحه جزئیات (تیمی)',
      en: 'Admin Panel & Product Detail Developer (Team)'
    }
  }
];