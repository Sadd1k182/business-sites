export type Locale = 'uk' | 'en';

export interface ServiceItem {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface StepItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface SiteLocaleContent {
  readonly nav: {
    readonly brandTitle: string;
    readonly brandSubtitle: string;
    readonly gps: string;
    readonly pc: string;
    readonly howItWorks: string;
    readonly faq: string;
    readonly contact: string;
    readonly callShort: string;
  };
  readonly contact: {
    readonly masterName: string;
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
    readonly copyrightSuffix: string;
  };
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly card1Tag: string;
    readonly card1Title: string;
    readonly card1Meta: string;
    readonly card2Tag: string;
    readonly card2Title: string;
    readonly card2Meta: string;
  };
  readonly gpsSection: {
    readonly label: string;
    readonly title: string;
    readonly subtitle: string;
    readonly devicePills: readonly string[];
    readonly services: readonly ServiceItem[];
  };
  readonly pcSection: {
    readonly label: string;
    readonly title: string;
    readonly subtitle: string;
    readonly featurePills: readonly string[];
    readonly services: readonly ServiceItem[];
  };
  readonly howItWorks: {
    readonly title: string;
    readonly tip: string;
    readonly steps: readonly StepItem[];
  };
  readonly faqSection: {
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
      brandSubtitle: 'м. Рівне • Навігатори TIR • Windows • Linux',
      gps: 'Навігатори',
      pc: 'Windows і Linux',
      howItWorks: 'Як працюємо',
      faq: 'Питання',
      contact: 'Контакти',
      callShort: 'Подзвонити',
    },
    contact: {
      ...sharedContactUrls,
      masterName: 'Майстер GPS та ПК Сервісу (м. Рівне)',
      city: 'м. Рівне — особистий прийом за домовленістю',
      schedule: 'Пн–Нд: у зручний для вас час (між рейсами або у вихідні)',
      ctaHeading: 'Потрібно оновити навігатор або налаштувати комп’ютер у Рівному?',
      ctaSubtitle:
        'Зателефонуйте або напишіть у зручний месенджер. Можна одразу надіслати фото навігатора чи моделі ноутбука — підкажемо все по суті.',
      callLabel: 'Зателефонувати',
      viberLabel: 'Написати у Viber',
      telegramLabel: 'Написати у Telegram',
      whatsappLabel: 'Написати у WhatsApp',
      copyrightSuffix: 'Прошивка GPS-навігаторів та налаштування Windows / Linux у Рівному.',
    },
    seo: {
      title: 'Прошивка GPS-навігаторів у Рівному (Garmin, iGO для фур) та Встановлення Windows/Linux',
      description:
        'Прошивка, українська мова та свіжі карти Європи 2026 на GPS-навігатори (Garmin, iGO) для вантажівок і авто у м. Рівне. Встановлення Windows та Linux під ключ.',
    },
    hero: {
      badge: 'м. Рівне • Налаштування у ваш вільний час • Перевірка на місці',
      title: 'Українська мова та свіжі карти для GPS-навігаторів + Windows і Linux «під ключ»',
      subtitle:
        'Готуємо вантажні (TIR) та легкові навігатори у Рівному до рейсів по Європі й Україні, а також повністю налаштовуємо домашні ноутбуки та ПК для зручної роботи.',
      card1Tag: '1. Для водіїв фур та авто',
      card1Title: 'GPS-навігатори (Garmin, iGO)',
      card1Meta: 'Українська мова • Карти Європи 2026 • TIR',
      card2Tag: '2. Для дому та роботи',
      card2Title: 'Windows та Linux «під ключ»',
      card2Meta: 'Драйвери • Офісні програми • Без реклами',
    },
    gpsSection: {
      label: 'Напрямок 1 • Для далекобійників та водіїв авто',
      title: 'GPS-навігатори: прошивка, карти та українізація',
      subtitle: 'Переводимо іноземні навігатори на українську мову та встановлюємо актуальні карти Європи.',
      devicePills: [
        'Garmin (dēzl, Drive, nüvi)',
        'iGO Primo / NextGen',
        'Android-планшети та навігатори',
        'Windows CE (Becker, Pioneer та ін.)',
        'Вантажні профілі TIR / ADR',
      ],
      services: [
        {
          badge: 'Мова та голос',
          title: 'Перехід з англійської на українську',
          description: 'Повна українізація меню, пошуку та голосових підказок у дорозі.',
          highlights: [
            'Українське меню та клавіатура',
            'Чіткі голосові підказки перед маневрами',
            'Попередження про камери та обмеження',
          ],
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
          highlights: [
            'Всі драйвери (Wi-Fi, звук, камера, принтер)',
            'Програми для документів (Word/Excel/PDF) та відео',
            'Захист від реклами + Viber, Telegram, Zoom',
          ],
        },
        {
          badge: 'Друге життя старому ноутбуку',
          title: 'Швидкий та надійний Linux',
          description: 'Легка система з українським меню, схожим на звичний Windows, яка не зависає.',
          highlights: [
            'Зручний робочий стіл і меню «Пуск» з першого дня',
            'Швидка робота інтернету, YouTube та банкінгу',
            'Не боїться вірусів і не гальмує ноутбук',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'Як все відбувається',
      tip: 'Можна просто надіслати фото навігатора чи ноутбука у Viber або Telegram — одразу підкажемо деталі!',
      steps: [
        {
          number: '01',
          title: 'Напишіть або подзвоніть',
          description: 'Назвіть модель пристрою або надішліть його фото у месенджер.',
        },
        {
          number: '02',
          title: 'Привезіть у зручний час',
          description: 'Домовляємося про зустріч у ваш вихідний чи перерву між рейсами.',
        },
        {
          number: '03',
          title: 'Налаштування (1–3 год)',
          description: 'Встановлюємо українську мову, свіжі карти або систему та програми на ПК.',
        },
        {
          number: '04',
          title: 'Перевірка разом із вами',
          description: 'Вмикаємо пристрій на місці, перевіряємо маршрут чи програми і показуємо, як користуватися.',
        },
      ],
    },
    faqSection: {
      title: 'Часті запитання',
      subtitle: 'Відповіді на найпоширеніші питання водіїв та власників ноутбуків',
    },
    faqs: [
      {
        question: 'У мене Garmin з англійським меню і старими картами. Зробите українським?',
        answer:
          'Так. Встановлюємо українське меню, український голос і свіжі карти Європи та України для вантажних (dēzl) і легкових моделей.',
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
      brandSubtitle: 'Rivne • Truck GPS (TIR) • Windows • Linux',
      gps: 'GPS Navigators',
      pc: 'Windows & Linux',
      howItWorks: 'How It Works',
      faq: 'FAQ',
      contact: 'Contact',
      callShort: 'Call Now',
    },
    contact: {
      ...sharedContactUrls,
      masterName: 'GPS & PC Service Specialist (Rivne)',
      city: 'Rivne, Ukraine — in-person drop-off by appointment',
      schedule: 'Mon–Sun: flexible hours during your off-duty or weekend time',
      ctaHeading: 'Need a GPS map/firmware update or a clean PC setup in Rivne?',
      ctaSubtitle:
        'Call or message on Viber, Telegram, or WhatsApp. You can send a quick photo of your GPS navigator or laptop model and we will confirm everything right away.',
      callLabel: 'Call',
      viberLabel: 'Message on Viber',
      telegramLabel: 'Message on Telegram',
      whatsappLabel: 'Message on WhatsApp',
      copyrightSuffix: 'Truck & Car GPS Firmware/Maps and Turn-Key Windows / Linux Setup in Rivne.',
    },
    seo: {
      title: 'Truck & Car GPS Firmware / Maps (Garmin, iGO) & Turn-Key Windows/Linux Setup in Rivne',
      description:
        'Ukrainian & European map/firmware installation on Garmin and iGO GPS navigators for trucks (TIR) and cars in Rivne. Complete turn-key Windows & Linux installation.',
    },
    hero: {
      badge: 'Rivne • Setup during your spare time • Tested on the spot',
      title: 'Ukrainian Localization & Europe Maps for GPS Navigators + Turn-Key Windows & Linux',
      subtitle:
        'We prepare truck (TIR) and car GPS navigators for European routes with Ukrainian menus & voice guidance, and set up home laptops & PCs with all drivers and everyday apps ready out of the box.',
      card1Tag: '1. For Truck (TIR) & Car Drivers',
      card1Title: 'GPS Navigators (Garmin, iGO)',
      card1Meta: 'Ukrainian Voice • Europe Maps 2026 • TIR Profiles',
      card2Tag: '2. For Home & Everyday Use',
      card2Title: 'Turn-Key Windows & Linux',
      card2Meta: 'All Drivers • Office Suite • Ad-Free Browser',
    },
    gpsSection: {
      label: 'Service 1 • For Truck Drivers & Motorists',
      title: 'GPS Navigators: Firmware, Maps & Localization',
      subtitle: 'We switch foreign navigators to Ukrainian and install the latest European & UK truck maps.',
      devicePills: [
        'Garmin (dēzl, Drive, nüvi)',
        'iGO Primo / NextGen',
        'Android Tablets & Navigators',
        'Windows CE (Becker, Pioneer, etc.)',
        'Truck Profiles (TIR / ADR)',
      ],
      services: [
        {
          badge: 'Language & Voice',
          title: 'English to Ukrainian Localization',
          description: 'Complete Ukrainian translation of menus, address search, and voice guidance.',
          highlights: [
            'Ukrainian interface & search keyboard',
            'Clear voice prompts ahead of every turn',
            'Speed camera & road restriction alerts',
          ],
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
          highlights: [
            'All drivers installed (Wi-Fi, audio, webcam, printer)',
            'Office documents (Word/Excel/PDF) & media player',
            'Ad-blocking browser + Viber, Telegram & Zoom',
          ],
        },
        {
          badge: 'Second Life for Older PCs',
          title: 'Fast & Reliable Linux Setup',
          description: 'Lightweight OS with a familiar Windows-style Start menu that never lags on older hardware.',
          highlights: [
            'Familiar desktop layout — easy to use from day one',
            'Smooth browsing, YouTube, banking & video calls',
            'Immune to common Windows viruses and heavy updates',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      tip: 'Tip: Send a photo of your GPS navigator or laptop via Viber or Telegram and we will confirm everything right away!',
      steps: [
        {
          number: '01',
          title: 'Message or Call Us',
          description: 'Share your device model or send a quick photo in your preferred messenger.',
        },
        {
          number: '02',
          title: 'Drop Off at Your Convenience',
          description: 'Meet during your day off or between driving shifts.',
        },
        {
          number: '03',
          title: 'Setup & Testing (1–3 hrs)',
          description: 'We install Ukrainian menus, fresh Europe maps, or the full Windows/Linux suite.',
        },
        {
          number: '04',
          title: 'Verify Together on Pickup',
          description: 'We power on the device together, test routes or apps, and show you how everything works.',
        },
      ],
    },
    faqSection: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions from drivers and laptop owners',
    },
    faqs: [
      {
        question: 'My Garmin navigator only has English menus and old maps. Can you add Ukrainian?',
        answer:
          'Yes. We install Ukrainian menus, Ukrainian voice guidance, and the latest Europe & Ukraine maps on both truck (dēzl) and car models.',
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
