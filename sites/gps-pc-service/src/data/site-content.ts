export type Locale = 'uk' | 'en';

export interface ServiceItem {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly ctaLabel: string;
  readonly featured?: boolean;
}

export interface PcSpecItem {
  readonly title: string;
  readonly subtitle: string;
}

export interface PcServiceItem {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly specs: readonly PcSpecItem[];
  readonly ctaLabel: string;
}

export interface ProblemItem {
  readonly title: string;
  readonly description: string;
  readonly solution: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly tone: 'neutral' | 'brand' | 'emerald';
}

export interface StepItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly footerLabel: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface GuaranteeRow {
  readonly label: string;
  readonly value: string;
}

export interface SiteLocaleContent {
  readonly nav: {
    readonly brandTitle: string;
    readonly brandSubtitle: string;
    readonly cityPill: string;
    readonly problems: string;
    readonly gps: string;
    readonly pc: string;
    readonly howItWorks: string;
    readonly faq: string;
    readonly callShort: string;
    readonly bookCta: string;
  };
  readonly contact: {
    readonly masterName: string;
    readonly workshopBadge: string;
    readonly city: string;
    readonly schedule: string;
    readonly phoneRaw: string;
    readonly phoneDisplay: string;
    readonly viberUrl: string;
    readonly telegramUrl: string;
    readonly whatsappUrl: string;
    readonly ctaHeading: string;
    readonly ctaSubtitle: string;
    readonly callLabel: string;
    readonly viberLabel: string;
    readonly telegramLabel: string;
    readonly whatsappLabel: string;
    readonly guarantee: {
      readonly title: string;
      readonly subtitle: string;
      readonly description: string;
      readonly rows: readonly GuaranteeRow[];
    };
    readonly footer: {
      readonly description: string;
      readonly navHeading: string;
      readonly channelsHeading: string;
      readonly gpsLinkLabel: string;
      readonly pcLinkLabel: string;
      readonly stepsLinkLabel: string;
      readonly faqLinkLabel: string;
      readonly copyright: string;
      readonly privacyLabel: string;
      readonly termsLabel: string;
    };
  };
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly callPrefix: string;
    readonly stats: readonly StatItem[];
    readonly benchTitle: string;
    readonly benchStatus: string;
    readonly card1Tag: string;
    readonly card1Title: string;
    readonly card1Meta: string;
    readonly card1Check: string;
    readonly card2Tag: string;
    readonly card2Title: string;
    readonly card2Meta: string;
    readonly card2Check: string;
    readonly hardwareBadges: readonly string[];
  };
  readonly problemsSection: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
    readonly items: readonly ProblemItem[];
  };
  readonly gpsSection: {
    readonly label: string;
    readonly title: string;
    readonly subtitle: string;
    readonly featuredTag: string;
    readonly devicePills: readonly string[];
    readonly services: readonly ServiceItem[];
  };
  readonly pcSection: {
    readonly label: string;
    readonly title: string;
    readonly subtitle: string;
    readonly featurePills: readonly string[];
    readonly services: readonly PcServiceItem[];
  };
  readonly howItWorks: {
    readonly eyebrow: string;
    readonly title: string;
    readonly tip: string;
    readonly steps: readonly StepItem[];
  };
  readonly faqSection: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly faqs: readonly FaqItem[];
}

const sharedContactUrls = {
  phoneRaw: '+380000000000',
  phoneDisplay: '+38 (000) 000-00-00',
  viberUrl: 'viber://chat?number=%2B380000000000',
  telegramUrl: 'https://t.me/your_telegram_username',
  whatsappUrl: 'https://wa.me/380000000000',
} as const;

export const siteTranslations: Record<Locale, SiteLocaleContent> = {
  uk: {
    nav: {
      brandTitle: 'GPS та ПК Сервіс',
      brandSubtitle: 'Навігатори TIR • Windows • Linux',
      cityPill: 'м. Рівне',
      problems: 'Проблеми',
      gps: 'Навігатори',
      pc: 'Windows і Linux',
      howItWorks: 'Як працюємо',
      faq: 'Питання',
      callShort: 'Дзвінок',
      bookCta: 'Записатися',
    },
    contact: {
      ...sharedContactUrls,
      masterName: 'Майстер GPS та ПК Сервісу (м. Рівне)',
      workshopBadge: 'Майстерня у м. Рівне',
      city: 'м. Рівне — особистий прийом за домовленістю',
      schedule: 'Пн–Нд: у зручний для вас час (між рейсами або у вихідні)',
      ctaHeading: 'Потрібно оновити навігатор або налаштувати комп’ютер у Рівному?',
      ctaSubtitle:
        'Зателефонуйте або напишіть у зручний месенджер. Можна одразу надіслати фото навігатора чи моделі ноутбука — підкажемо все по суті.',
      callLabel: 'Зателефонувати',
      viberLabel: 'Написати у Viber',
      telegramLabel: 'Написати у Telegram',
      whatsappLabel: 'Написати у WhatsApp',
      guarantee: {
        title: 'Гарантія працездатності в рейсі',
        subtitle: 'Перевірка супутників на місці',
        description:
          'Перевірка супутників, розрахунок тестового вантажного маршруту на місці. Вмикаємо прилад разом, перевіряємо реакцію на зміну координат і показуємо потрібні кнопки.',
        rows: [
          { label: 'Свіжа база радарів:', value: 'Включено' },
          { label: 'Вантажні габарити:', value: 'Налаштовано' },
          { label: 'Тестовий пуск:', value: 'Перед оплатою' },
        ],
      },
      footer: {
        description:
          'Швидке встановлення та регулярне оновлення карт для вантажівок (TIR/ADR). Налаштування, чистка та діагностика ПК і ноутбуків на базі Windows та Linux у м. Рівне.',
        navHeading: 'Навігація',
        channelsHeading: "Зв'язок та канали",
        gpsLinkLabel: 'Оновлення карт TIR',
        pcLinkLabel: 'Діагностика Windows/Linux',
        stepsLinkLabel: 'Етапи обслуговування',
        faqLinkLabel: 'Часті запитання',
        copyright: '© 2026 GPS та ПК Сервіс (м. Рівне). Всі права захищено.',
        privacyLabel: 'Конфіденційність',
        termsLabel: 'Умови обслуговування',
      },
    },
    seo: {
      title: 'Прошивка GPS-навігаторів у Рівному (Garmin, iGO для фур) та Встановлення Windows/Linux',
      description:
        'Свіжі карти Європи 2026 та прошивка GPS-навігаторів (Garmin, iGO) для вантажівок і авто у м. Рівне, українська мова за підтримки моделі. Встановлення Windows та Linux під ключ.',
    },
    hero: {
      badge: 'м. Рівне • Особистий прийом у зручний час • Перевірка на місці',
      title: 'Свіжі карти Європи 2026 та прошивка GPS-навігаторів + Windows і Linux «під ключ»',
      subtitle:
        'Готуємо вантажні (TIR) та легкові навігатори у Рівному до рейсів по Європі й Україні, а також повністю налаштовуємо домашні ноутбуки та ПК для зручної роботи.',
      callPrefix: 'Подзвонити',
      stats: [
        { value: '1–3 год', label: 'Середній час робіт', tone: 'neutral' },
        { value: '2026 Q1', label: 'Свіжі карти Європи', tone: 'brand' },
        { value: '100%', label: 'Збереження файлів', tone: 'emerald' },
      ],
      benchTitle: 'Робочий стенд майстерні',
      benchStatus: 'Рівне • офлайн',
      card1Tag: 'Вантажні TIR / ADR',
      card1Title: 'GPS-навігатори (Garmin, iGO)',
      card1Meta: 'Карти Європи 2026 • TIR / ADR • Мова (за підтримки)',
      card1Check: 'Габарити вантажівки, мости, паркінги LKW',
      card2Tag: 'Для дому та роботи',
      card2Title: 'Windows та Linux «під ключ»',
      card2Meta: 'Драйвери • Офісні програми • Без реклами',
      card2Check: 'Повна готовність пристрою прямо з коробки',
      hardwareBadges: ['Garmin dēzl', 'iGO Primo', 'Win 10 / 11', 'Linux Mint'],
    },
    problemsSection: {
      eyebrow: 'Знайомі ситуації?',
      title: 'Чому пристрій заважає у рейсі чи вдома, замість того щоб допомагати',
      subtitle:
        "Розв'язуємо технічні проблеми комплексно — від першого включення до повної готовності до роботи.",
      items: [
        {
          title: 'Незручна штатна програма або іноземне меню',
          description:
            'Заводська програма на навігаторі чи планшеті зависає, незручно шукає адреси або не дає чітких голосових підказок на складних розв’язках.',
          solution:
            'Рішення: налаштування Garmin або встановлення iGO (з українською мовою за підтримки моделі)',
        },
        {
          title: 'Застарілі карти без параметрів фури',
          description:
            'Штатні карти ведуть під низькі мости, на заборонені для TIR вулиці та не показують актуальні стоянки LKW. Кожна помилка в Європі — це ризик великого штрафу або зірваного рейсу.',
          solution: 'Рішення: Карти Європи 2026 з габаритами та вантажним профілем',
        },
        {
          title: 'Ноутбук гальмує, гріється та завалений рекламою',
          description:
            'Система завантажується по 5 хвилин, спливають банери, немає потрібних програм для читання документів, або новий ноутбук продано зовсім без встановленої системи.',
          solution: 'Рішення: чиста Windows 10/11 або легкий Linux «під ключ»',
        },
      ],
    },
    gpsSection: {
      label: 'Напрямок 1 • Для далекобійників та водіїв авто',
      title: 'GPS-навігатори: прошивка та карти Європи 2026',
      subtitle:
        'Оновлюємо карти Європи для фур (TIR) та легкових авто. Встановлюємо українську мову, якщо її підтримує програма самого навігатора.',
      featuredTag: 'Топ для рейсів',
      devicePills: [
        'Garmin (dēzl, Drive, nüvi)',
        'iGO Primo / NextGen',
        'Android-планшети та навігатори',
        'Windows CE (Becker, Pioneer та ін.)',
        'Вантажні профілі TIR / ADR',
      ],
      services: [
        {
          badge: 'Garmin dēzl / Drive',
          title: 'Оновлення та налаштування Garmin',
          description:
            'Свіжі карти Європи, попередження про камери та налаштування меню і голосу для моделей Garmin.',
          highlights: [
            'Актуальні карти Європи та України 2026',
            'Українське меню та голос (якщо підтримує модель)',
            'База камер швидкості, радарів та дорожніх обмежень',
          ],
          ctaLabel: 'Перевірити модель Garmin',
        },
        {
          badge: 'Карти Європи 2026',
          title: 'Вантажні карти для фур (TIR) та авто',
          description: 'Свіжі карти Європи, Британії та України з параметрами вашого авто.',
          highlights: [
            'Габарити фури: висота, вага, осі, ADR',
            'Паркінги LKW, промзони, митниці, заправки',
            'Робота повністю офлайн без інтернету',
          ],
          ctaLabel: 'Замовити оновлення TIR',
          featured: true,
        },
        {
          badge: 'Прошивка та ПЗ',
          title: 'Встановлення iGO та відновлення',
          description: 'Заміна незручної штатної програми на перевірену систему iGO.',
          highlights: [
            'iGO Primo / NextGen для вантажівок',
            'Підбір і налаштування карти пам’яті microSD',
            'Швидке введення координат із Google Maps',
          ],
          ctaLabel: 'Проконсультуватися',
        },
      ],
    },
    pcSection: {
      label: 'Напрямок 2 • Для дому, навчання та спілкування',
      title: 'Windows та Linux «під ключ»',
      subtitle: 'Приносите ноутбук або ПК — забираєте повністю готовий до роботи пристрій.',
      featurePills: [
        'Windows 10 / 11 українською',
        'Легкий Linux Mint',
        '100% збереження ваших фото',
        'Браузер без реклами',
        'Чесна ціна — все включено',
      ],
      services: [
        {
          badge: 'Для нових та домашніх ПК',
          title: 'Повний пакет Windows 10 / 11',
          description: 'Чисте встановлення системи з усіма драйверами та програмами на щодень.',
          specs: [
            {
              title: 'Всі драйвери налаштовано',
              subtitle: 'Wi-Fi, чистий звук, веб-камера, принтер та відеокарта',
            },
            {
              title: 'Програми для документів та відео',
              subtitle: 'Повна робота з Word, Excel, PDF та мультимедіа плеєри',
            },
            {
              title: 'Захист від реклами та месенджери',
              subtitle: 'Блокування банерів + активовані Viber, Telegram, Zoom',
            },
          ],
          ctaLabel: 'Замовити встановлення Windows',
        },
        {
          badge: 'Друге життя старому ноутбуку',
          title: 'Швидкий та надійний Linux',
          description: 'Легка система з українським меню, схожим на звичний Windows, яка не зависає.',
          specs: [
            {
              title: 'Зручний робочий стіл',
              subtitle: 'Класичне меню «Пуск» без потреби перевчатися з першого дня',
            },
            {
              title: 'Швидкий інтернет та сервіси',
              subtitle: 'Миттєве завантаження YouTube, фільмів та онлайн-банкінгу',
            },
            {
              title: 'Абсолютний захист без вірусів',
              subtitle: 'Не потребує важких антивірусів і не гальмує роботу ноутбука',
            },
          ],
          ctaLabel: 'Прискорити старий ноутбук',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Простий та зрозумілий процес',
      title: 'Як все відбувається',
      tip: 'Можна просто надіслати фото навігатора чи ноутбука у Viber або Telegram — одразу підкажемо деталі!',
      steps: [
        {
          number: '01',
          title: 'Напишіть або подзвоніть',
          description: 'Назвіть модель пристрою або надішліть його фото у месенджер.',
          footerLabel: 'Крок 1 з 4',
        },
        {
          number: '02',
          title: 'Привезіть у зручний час',
          description: 'Домовляємося про зустріч у ваш вихідний чи перерву між рейсами.',
          footerLabel: 'Крок 2 з 4',
        },
        {
          number: '03',
          title: 'Налаштування (1–3 год)',
          description: 'Встановлюємо українську мову, свіжі карти або систему та програми на ПК.',
          footerLabel: 'Крок 3 з 4',
        },
        {
          number: '04',
          title: 'Перевірка разом із вами',
          description: 'Вмикаємо пристрій на місці, перевіряємо маршрут чи програми і показуємо, як користуватися.',
          footerLabel: 'Крок 4 з 4',
        },
      ],
    },
    faqSection: {
      eyebrow: 'Довідка',
      title: 'Часті запитання',
      subtitle: 'Відповіді на найпоширеніші питання водіїв та власників ноутбуків',
    },
    faqs: [
      {
        question: 'У мене навігатор з іноземним меню. Чи можна встановити українську мову?',
        answer:
          'Залежить від моделі та програми. Якщо українська мова передбачена виробником або програмою навігатора (наприклад, iGO чи підтримувані моделі Garmin) — ми її додамо разом із голосом та картами. Якщо в системі української немає взагалі (або йдеться про штатну магнітолу авто, де потрібен дорогий переклад прошивки від 300$+) — такі роботи ми не виконуємо. Надішліть фото моделі у Viber або Telegram — одразу підкажемо, чи це можливо.',
      },
      {
        question: 'Чи можна поставити iGO для вантажівки замість заводської програми?',
        answer:
          'Так, на прилади з Android та Windows CE встановлюємо iGO Primo або NextGen із профілем фури (висота, вага, ADR) та базами паркінгів LKW.',
      },
      {
        question: 'Чи збережуться мої фото та документи при перевстановленні Windows?',
        answer:
          'Обов’язково. Ми попередньо зберігаємо ваші сімейні фото та документи, а після встановлення системи повертаємо їх на місце.',
      },
      {
        question: 'Чи потрібно мені буде щось доналаштовувати вдома на ноутбуці?',
        answer:
          'Ні. Усі драйвери, програми для документів і браузер без реклами вже будуть встановлені — вдома ви просто підключаєте Wi-Fi.',
      },
    ],
  },
  en: {
    nav: {
      brandTitle: 'GPS & PC Service',
      brandSubtitle: 'Truck GPS (TIR) • Windows • Linux',
      cityPill: 'Rivne',
      problems: 'Common Issues',
      gps: 'Truck GPS (TIR)',
      pc: 'Windows & Linux',
      howItWorks: 'How It Works',
      faq: 'FAQ',
      callShort: 'Call',
      bookCta: 'Book Now',
    },
    contact: {
      ...sharedContactUrls,
      masterName: 'GPS & PC Service Specialist (Rivne)',
      workshopBadge: 'Workshop in Rivne',
      city: 'Rivne, Ukraine — in-person drop-off by appointment',
      schedule: 'Mon–Sun: flexible hours during your off-duty or weekend time',
      ctaHeading: 'Need a GPS map/firmware update or a clean PC setup in Rivne?',
      ctaSubtitle:
        'Call or message on Viber, Telegram, or WhatsApp. You can send a quick photo of your GPS navigator or laptop model and we will confirm everything right away.',
      callLabel: 'Call',
      viberLabel: 'Message on Viber',
      telegramLabel: 'Message on Telegram',
      whatsappLabel: 'Message on WhatsApp',
      guarantee: {
        title: 'Road-Ready Reliability Guarantee',
        subtitle: 'On-the-spot satellite & route verification',
        description:
          'We verify GPS lock and calculate a test truck route right in front of you. We power on the device together, check coordinate entry, and walk through the key menus.',
        rows: [
          { label: 'Fresh camera database:', value: 'Included' },
          { label: 'Truck dimensions:', value: 'Configured' },
          { label: 'Live test run:', value: 'Before payment' },
        ],
      },
      footer: {
        description:
          'Fast setup and regular map updates for truck GPS navigators (TIR/ADR). Turn-key Windows and Linux setup and optimization for home laptops & PCs in Rivne.',
        navHeading: 'Navigation',
        channelsHeading: 'Contact & Messengers',
        gpsLinkLabel: 'TIR Map Updates',
        pcLinkLabel: 'Windows / Linux Setup',
        stepsLinkLabel: 'How It Works',
        faqLinkLabel: 'FAQ',
        copyright: '© 2026 GPS & PC Service (Rivne). All rights reserved.',
        privacyLabel: 'Privacy',
        termsLabel: 'Service Terms',
      },
    },
    seo: {
      title: 'Truck & Car GPS Firmware / Maps (Garmin, iGO) & Turn-Key Windows/Linux Setup in Rivne',
      description:
        'Europe 2026 map & firmware installation on Garmin and iGO GPS navigators for trucks (TIR) and cars in Rivne, with Ukrainian language when supported. Complete turn-key Windows & Linux setup.',
    },
    hero: {
      badge: 'Rivne • Flexible in-person appointment • Tested on the spot',
      title: 'Europe 2026 Maps & GPS Navigator Firmware + Turn-Key Windows & Linux',
      subtitle:
        'We prepare truck (TIR) and car GPS navigators for European routes with up-to-date maps and supported Ukrainian menus/voice, and set up home laptops & PCs with all drivers and everyday apps ready out of the box.',
      callPrefix: 'Call',
      stats: [
        { value: '1–3 hrs', label: 'Average turnaround', tone: 'neutral' },
        { value: '2026 Q1', label: 'Latest Europe maps', tone: 'brand' },
        { value: '100%', label: 'Personal files kept', tone: 'emerald' },
      ],
      benchTitle: 'Workshop Service Bench',
      benchStatus: 'Rivne • offline',
      card1Tag: 'Truck TIR / ADR',
      card1Title: 'GPS Navigators (Garmin, iGO)',
      card1Meta: 'Europe Maps 2026 • TIR / ADR • Language (when supported)',
      card1Check: 'Truck height/weight limits, bridges & LKW parkings',
      card2Tag: 'For Home & Work',
      card2Title: 'Turn-Key Windows & Linux',
      card2Meta: 'All Drivers • Office Suite • Ad-Free Browser',
      card2Check: 'Ready to use out of the box on day one',
      hardwareBadges: ['Garmin dēzl', 'iGO Primo', 'Win 10 / 11', 'Linux Mint'],
    },
    problemsSection: {
      eyebrow: 'Sound familiar?',
      title: 'Why your device slows you down on the road or at home instead of helping',
      subtitle:
        'We solve technical issues end to end — from clean setup to verified everyday readiness.',
      items: [
        {
          title: 'Clunky factory software or unconfigured menus',
          description:
            'Stock navigation software lags, makes address lookup frustrating, or lacks clear voice guidance and road alerts at complex highway junctions.',
          solution:
            'Fix: Garmin setup or iGO installation (with Ukrainian interface where supported)',
        },
        {
          title: 'Outdated maps missing truck restrictions',
          description:
            'Old factory maps route trucks under low bridges, into restricted zones, and miss current LKW rest areas — risking heavy fines across Europe.',
          solution: 'Fix: 2026 Europe maps configured with full truck dimensions',
        },
        {
          title: 'Laptop lags, overheats, or is full of pop-up ads',
          description:
            'Takes minutes to boot, shows constant browser banners, lacks document apps, or arrived brand-new with no operating system installed.',
          solution: 'Fix: clean turn-key Windows 10/11 or fast Linux Mint setup',
        },
      ],
    },
    gpsSection: {
      label: 'Service 1 • For Truck Drivers & Motorists',
      title: 'GPS Navigators: Firmware & Europe 2026 Maps',
      subtitle:
        'We install up-to-date European maps for trucks (TIR) and cars, and add Ukrainian language & voice when supported by the device software.',
      featuredTag: 'Top for EU Routes',
      devicePills: [
        'Garmin (dēzl, Drive, nüvi)',
        'iGO Primo / NextGen',
        'Android Tablets & Navigators',
        'Windows CE (Becker, Pioneer, etc.)',
        'Truck Profiles (TIR / ADR)',
      ],
      services: [
        {
          badge: 'Garmin dēzl / Drive',
          title: 'Garmin Updates & Configuration',
          description:
            'Fresh Europe maps, speed camera alerts, and menu/voice setup for truck and car Garmin models.',
          highlights: [
            'Latest 2026 Europe & Ukraine maps',
            'Ukrainian menu & voice (where supported by the model)',
            'Speed camera, radar & road restriction alerts',
          ],
          ctaLabel: 'Check Your Garmin Model',
        },
        {
          badge: 'Europe Maps 2026',
          title: 'Truck (TIR) & Car Maps for Europe',
          description: 'Up-to-date Europe, UK, and Ukraine maps tailored to your vehicle dimensions.',
          highlights: [
            'Truck profile: height, weight, axle load, ADR',
            'LKW truck parkings, industrial zones & customs POIs',
            'Works 100% offline with zero roaming data',
          ],
          ctaLabel: 'Book TIR Map Update',
          featured: true,
        },
        {
          badge: 'Firmware & Software',
          title: 'iGO Installation & Device Recovery',
          description: 'Replace clunky factory software with reliable iGO truck navigation.',
          highlights: [
            'iGO Primo / NextGen for trucks & vans',
            'microSD card preparation & memory cleanup',
            'Quick Google Maps coordinate entry walkthrough',
          ],
          ctaLabel: 'Get a consultation',
        },
      ],
    },
    pcSection: {
      label: 'Service 2 • For Home, Study & Everyday Use',
      title: 'Turn-Key Windows & Linux Setup',
      subtitle: 'Bring your laptop or desktop — pick up a ready-to-use computer that works out of the box.',
      featurePills: [
        'Windows 10 / 11',
        'Fast Linux Mint',
        '100% Personal Photo Backup',
        'Ad-Free Web Browser',
        'Transparent All-In Price',
      ],
      services: [
        {
          badge: 'For New & Home Laptops',
          title: 'Complete Windows 10 / 11 Suite',
          description: 'Clean OS installation with all hardware drivers and everyday software pre-configured.',
          specs: [
            {
              title: 'All hardware drivers ready',
              subtitle: 'Wi-Fi, clear audio, webcam, printer, and graphics',
            },
            {
              title: 'Office & media software included',
              subtitle: 'Full Word, Excel, PDF tools and video players',
            },
            {
              title: 'Ad-free browsing & messengers',
              subtitle: 'Banner blocking + Viber, Telegram & Zoom ready',
            },
          ],
          ctaLabel: 'Book Windows Setup',
        },
        {
          badge: 'Second Life for Older PCs',
          title: 'Fast & Reliable Linux Setup',
          description: 'Lightweight OS with a familiar Windows-style Start menu that never lags on older hardware.',
          specs: [
            {
              title: 'Familiar desktop layout',
              subtitle: 'Classic Start menu — comfortable from day one',
            },
            {
              title: 'Fast web, YouTube & banking',
              subtitle: 'Smooth video playback, browsing, and video calls',
            },
            {
              title: 'Virus-resistant & lightweight',
              subtitle: 'No heavy antivirus bloat slowing down older laptops',
            },
          ],
          ctaLabel: 'Speed Up Older Laptop',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Simple & transparent workflow',
      title: 'How It Works',
      tip: 'Send a photo of your GPS navigator or laptop via Viber or Telegram and we will confirm everything right away!',
      steps: [
        {
          number: '01',
          title: 'Message or Call Us',
          description: 'Share your device model or send a quick photo in your preferred messenger.',
          footerLabel: 'Step 1 of 4',
        },
        {
          number: '02',
          title: 'Drop Off at Your Convenience',
          description: 'Meet during your day off or between driving shifts.',
          footerLabel: 'Step 2 of 4',
        },
        {
          number: '03',
          title: 'Setup & Testing (1–3 hrs)',
          description: 'We install Ukrainian menus, fresh Europe maps, or the full Windows/Linux suite.',
          footerLabel: 'Step 3 of 4',
        },
        {
          number: '04',
          title: 'Verify Together on Pickup',
          description: 'We power on the device together, test routes or apps, and show you how everything works.',
          footerLabel: 'Step 4 of 4',
        },
      ],
    },
    faqSection: {
      eyebrow: 'Help & Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions from drivers and laptop owners',
    },
    faqs: [
      {
        question: 'My navigator has a foreign menu. Can you install Ukrainian language?',
        answer:
          'It depends on the model and software. If Ukrainian is supported by the manufacturer or navigation app (such as iGO or supported Garmin models), we will install it along with voice prompts and fresh maps. If the device firmware does not include Ukrainian at all (or for built-in car head units requiring expensive $300+ custom firmware dump translation), we do not perform that type of modification. Send a photo of your model on Viber or Telegram and we will confirm right away.',
      },
      {
        question: 'Can you replace the factory navigation software with iGO for trucks?',
        answer:
          'Yes, on Android and Windows CE devices we install iGO Primo or NextGen configured with truck dimensions (height, weight, ADR) and LKW parking databases.',
      },
      {
        question: 'Will my family photos and documents be kept safe when reinstalling Windows?',
        answer:
          'Absolutely. We back up your personal photos and documents before formatting and restore them neatly to your Desktop afterward.',
      },
      {
        question: 'Do I need to install or configure anything myself when I bring the laptop home?',
        answer:
          'No. All drivers, document apps, and ad-blocking browsers are ready to go — at home you simply connect to your Wi-Fi.',
      },
    ],
  },
};

export const siteContent = siteTranslations.uk;
