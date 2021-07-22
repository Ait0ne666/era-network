export interface ILang {
  header: {
    main: string;
    whitePaper: string;
    blockChain: string;
    support: string;
    auth: string;
    signIn: string;
    signUp: string;
    profile: string;
  };
  footer: {
    agreement: string;
    confidentiality: string;
    address: string;
    number: string;
    contacts: {
      general: string;

      partnership: string;
      pr: string;
    };
    mainnet: {
      active: string;
      inactive: string;
      status: string;
    };
    language: string;
  };
  helpsection: {
    email_title: string;
    name_title: string;
    mes_title: string;
    email_placeholder: string;
    name_placeholder: string;
    mes_placeholder: string;
  };
  auth: {
    login_title: string;
    password_title: string;
    login_placeholder: string;
    password_placeholder: string;
    inscription: string;
    submitButton: string;
    changePassword: string;
  };
  registration: {
    username_title: string;
    username_placeholder: string;
    username_invited_title: string;
    username_invited_placeholder: string;
    email_title: string;
    email_placeholder: string;
    password_title: string;
    password_info: string;
    password_placeholder: string;
    password_repeat_title: string;
    password_repeat_placeholder: string;
    telegram_title: string;
    telegram_placeholder: string;
    agreement: string;
    submit: string;
  };
  general: {
    title: string;
    subtitle: string;
    tgTitle: string;
    tgSubtitle: string;
  };
  medium: {
    articles: string;
    allArticles: string;
  };
  blockchain: {
    title: string;
    based: string;
    transactions: string;
    combine: string;
  };
  app: {
    title: string;
    subtitle: string;
    founder: string;
  };
  storeLinks: {
    download: string;
    avalable: string;
    upload: string;
  };
  intouch: string;
  about: {
    title: string;
    emission: {
      full: string;
      start: string;
      capitalization: string;
      rate: string;
      emit: string;
    };
    decription: {
      first: string;
      second: string;
    };
    risks: string;
    month: string;
    billion: string;
  };
  mediakit: {
    title: string;
    subtitle: string;
    follow: string;
  };
  styles: {
    title: string;
    logo: {
      title: string;
      mainVariant: string;
      icon: string;
      download: string;
      archive: string;
    };
    mainColors: {
      title: string;
      main: string;
      positive: string;
      negative: string;
      accent: string;
      inactive: string;
      gradient: string;
    };
    typography: {
      title: string;
      headers: string;
      main: string;
      subtitle: string;
      font: string;
      size: string;
      fontVariants: string;
    };
    mobileLight: {
      title: string;
      bg: string;
      text: string;
      subtitle: string;
      input: string;
      info: string;
    };
    mobileDark: {
      title: string;
    };
    car: {
      title: string;
      download: string;
    };
  };
  application: {
    routes: {
      wallet: string;
      tariff: string;
      profile: string;
      team: string;
      academy: string;
    };
    tariff: {
      paid: string;
      unpaid: string;
    };
  };
}

export const languages: { en: ILang; Russian: ILang } = {
  en: {
    header: {
      main: "Main",
      whitePaper: "White Paper",
      blockChain: "Blockchain",
      support: "Support",
      auth: "Sign Up / Sign In",
      signIn: "Sign Up",
      signUp: "Sign In",
      profile: "Profile",
    },
    footer: {
      agreement: "User agreement",
      confidentiality: "Confidentiality agreement",
      number: "Company Number: 222751",
      address:
        "Suit 103 Premiere Building, Albert Street, Victoria, Mahe, Republic Seychelles",
      contacts: {
        general: "General questions",

        partnership: "Partnership / Listing",
        pr: "PR & Marketing",
      },
      mainnet: {
        active: "Active",
        inactive: "Inactive",
        status: "Mainnet status:",
      },
      language: "Language:",
    },
    helpsection: {
      email_title: "Email",
      name_title: "First name",
      mes_title: "Message",
      email_placeholder: "",
      name_placeholder: "",
      mes_placeholder: "",
    },
    auth: {
      login_title: "Press _____",
      password_title: "Press password",
      login_placeholder: "",
      password_placeholder: "",
      inscription: "",
      submitButton: "Sign In",
      changePassword: "Change password???",
    },
    registration: {
      username_title: "Ваш никнейм",
      username_placeholder: "Придумайте ваш никнейм",
      username_invited_title: "Никнейм пригласившего",
      username_invited_placeholder: "Введите никнейм",
      email_title: "Email",
      email_placeholder: "Email",
      password_title: "Введите пароль",
      password_info:
        "Пароль должен содержать минимум 1 заглавную букву, 1 цифру. Минимальная длина пароля составляет 9 символов. Необходим авторизации на сайте. В приложении вход по Seed-фразу.",
      password_placeholder: "Password-123",
      password_repeat_title: "Повторите пароль",
      password_repeat_placeholder: "Password-123",
      telegram_title: "Telegram",
      telegram_placeholder: "@eracoin",
      agreement:
        "Я согласен с политикой конфиденциальности и пользовательским соглашением",
      submit: "Создать аккаунт",
    },
    general: {
      title:
        "В ERA ваше устройство является валидатором сети, делегатором монет и пользователем продуктов одновременно",
      subtitle:
        "Сеть ERA базируется на устройствах (телефоны, компьютеры), которые выделяют свободную память и интернет-соединение в продукте ERA Node, обеспечивая децентрализацию продуктам ERA Storage и ERA VPN. А достигнув стейк в 10000ERA (DPoS) и Статус 2 (Leader) в партнерской программе (PoA), устройства становятся валидаторами ERA Blockchain",
      tgTitle: "Подпишитесь на наш Telegram",
      tgSubtitle: "Будьте в курсе самых важных событий ERA",
    },
    medium: {
      articles: "Medium articles",
      allArticles: "View all",
    },
    blockchain: {
      based: "Based on fast and secure consensus engine - tendermint BFT",
      transactions:
        "30 seconds transactions with minimal comision (0.3%, max 10ARTR)",
      title: "Era Blockchain",
      combine:
        "Combined consensus: Delegated Proof of Stake + Proof of Authority",
    },
    app: {
      title: "Era Network App",
      subtitle:
        "Era Network App is a great example is a prime example of implementing products using Era Blockchain",
      founder: "From the Founder",
    },
    storeLinks: {
      download: "Download for",
      avalable: "Available in",
      upload: "Download from",
    },
    intouch: "Be in touch!",
    about: {
      title: "About coin",
      emission: {
        full: "Полная эмиссия: 4 000 000 000 ERA",
        start: "Начальная эмиссия: 10 000 000 ERA",
        capitalization: "Рыночная капитализация",
        rate: "Курс ERA",
        emit: "ERA эмитировано",
      },
      decription: {
        first:
          "Тикер монеты: ERA. Монета выпущена на Era Blockchain специально для доступа к 4 децентрализованным продуктам приложения: ERA Storage, ERA VPN, ERA Node, DPoS Делегирование.",
        second:
          "Предварительный период полной эмиссии 10 лет (2030 год). Эмиссия новых монет будет происходить посредством выплаты вознаграждений делегаторам, которые своим стейком посодействовали пользователям стать валидаторами и увеличили ликвидность монеты.",
      },
      risks:
        "Для снижения рисков гиперэмиссии были определены периоды планового уменьшения вознаграждений делегаторам:",
      month: "mon",
      billion: "B",
    },
    mediakit: {
      title: "Mediakit",
      subtitle: "Corporate identity, logos, colors, fonts",
      follow: "Details",
    },
    styles: {
      title: "Стиль Era coin",
      logo: {
        title: "Логотип",
        mainVariant: "Основной вариант с текстом",
        icon: "Иконка",
        download: "Скачать логотип",
        archive: "ZIP архив, файлы в формате SVG. 124КБ",
      },
      mainColors: {
        title: "Общие цвета",
        main: "Основной цвет",
        positive: "Позитивное состояние",
        negative: "Негативное состояние",
        accent: "Акцентный цвет",
        inactive: "Неактивная кнопка",
        gradient: "Основной градиент",
      },
      typography: {
        title: "Типографика",
        headers: "Заголовки",
        main: "Основной текст",
        subtitle: "Вспомогательный текст",
        font: "Шрифт",
        size: "Рамеры шрифтов",
        fontVariants: "Варианты шрифтов",
      },
      mobileLight: {
        title: "Цвета мобильного приложения (светлая тема)",
        bg: "Цвет фона",
        text: "Цвет текста",
        subtitle: "Вспомогательный текст",
        input: "Поле ввода",
        info: "Фон информации",
      },
      mobileDark: {
        title: "Цвета мобильного приложения (тёмная тема)",
      },
      car: {
        title: "Оклейка автомобиля",
        download: "Скачать наклейку",
      },
    },
    application: {
        routes: {
            wallet: 'Wallet',
            tariff: 'Tariff',
            profile: 'Profile',
            team: 'Team',
            academy: 'Academy'
        },
        tariff: {
            paid: 'Paid',
            unpaid: 'Unpaid'
        }
    }
  },
  Russian: {
    header: {
      main: "Главная",
      whitePaper: "White Paper",
      blockChain: "Blockchain",
      support: "Поддержка",
      auth: "Вход / Регистрация",
      signIn: "Вход",
      signUp: "Регистрация",
      profile: "Профиль",
    },
    footer: {
      agreement: "Пользовательское соглашение",
      confidentiality: "Политика конфиденциальности",
      number: "Company Number: 222751",
      address:
        "Suit 103 Premiere Building, Albert Street, Victoria, Mahe, Republic Seychelles",
      contacts: {
        general: "Общие вопросы",

        partnership: "Партнёрство / листинг",
        pr: "PR & Маркетинг",
      },
      mainnet: {
        active: "Активен",
        inactive: "Не активен",
        status: "Статус mainnet:",
      },
      language: "Язык:",
    },
    helpsection: {
      email_title: "Почта",
      name_title: "Имя",
      mes_title: "Сообщение",
      email_placeholder: "mail@gmail.com",
      name_placeholder: "Иван",
      mes_placeholder: "Введите текст вашего обращения",
    },
    auth: {
      login_title: "Введите номер кошелька или Никнейм",
      password_title: "Введите пароль",
      login_placeholder: "ERA-XXXX",
      password_placeholder: "Password-123",
      inscription: "Убедитесь, что вы посещаете правильный URL-адрес",
      submitButton: "Войти",
      changePassword: "Установить пароль",
    },
    registration: {
      username_title: "Ваш никнейм",
      username_placeholder: "Придумайте ваш никнейм",
      username_invited_title: "Никнейм пригласившего",
      username_invited_placeholder: "Введите никнейм",
      email_title: "Email",
      email_placeholder: "Email",
      password_title: "Введите пароль",
      password_info:
        "Пароль должен содержать минимум 1 заглавную букву, 1 цифру. Минимальная длина пароля составляет 9 символов. Необходим авторизации на сайте. В приложении вход по Seed-фразу.",
      password_placeholder: "Password-123",
      password_repeat_title: "Повторите пароль",
      password_repeat_placeholder: "Password-123",
      telegram_title: "Telegram",
      telegram_placeholder: "@eracoin",
      agreement:
        "Я согласен с политикой конфиденциальности и пользовательским соглашением",
      submit: "Создать аккаунт",
    },
    general: {
      title:
        "В ERA ваше устройство является валидатором сети, делегатором монет и пользователем продуктов одновременно",
      subtitle:
        "Сеть ERA базируется на устройствах (телефоны, компьютеры), которые выделяют свободную память и интернет-соединение в продукте ERA Node, обеспечивая децентрализацию продуктам ERA Storage и ERA VPN. А достигнув стейк в 10000ERA (DPoS) и Статус 2 (Leader) в партнерской программе (PoA), устройства становятся валидаторами ERA Blockchain",
      tgTitle: "Подпишитесь на наш Telegram",
      tgSubtitle: "Будьте в курсе самых важных событий ERA",
    },
    medium: {
      articles: "Статьи Medium",
      allArticles: "Все статьи",
    },
    blockchain: {
      based: "Базируется на надежном и быстром консенсус движке tendermint BFT",
      transactions:
        "Транзакции до 30 секунд с минимальной комиссией (0,3%, макс. 10ARTR)",
      title: "Era Blockchain",
      combine:
        "Комбинированный консенсус: Delegated Proof of Stake + Proof of Authority",
    },
    app: {
      title: "Приложение Era Network",
      subtitle:
        "Отличным примером реализации децентрализованных продуктов на Era Blockchain служит приложение Era Network",
      founder: "От основателя",
    },
    storeLinks: {
      download: "Скачать для",
      avalable: "Доступно в",
      upload: "Загрузите в",
    },
    intouch: "Будь в теме!",
    about: {
      title: "О монете",
      emission: {
        full: "Полная эмиссия: 4 000 000 000 ERA",
        start: "Начальная эмиссия: 10 000 000 ERA",
        capitalization: "Рыночная капитализация",
        rate: "Курс ERA",
        emit: "ERA эмитировано",
      },
      decription: {
        first:
          "Тикер монеты: ERA. Монета выпущена на Era Blockchain специально для доступа к 4 децентрализованным продуктам приложения: ERA Storage, ERA VPN, ERA Node, DPoS Делегирование.",
        second:
          "Предварительный период полной эмиссии 10 лет (2030 год). Эмиссия новых монет будет происходить посредством выплаты вознаграждений делегаторам, которые своим стейком посодействовали пользователям стать валидаторами и увеличили ликвидность монеты.",
      },
      risks:
        "Для снижения рисков гиперэмиссии были определены периоды планового уменьшения вознаграждений делегаторам:",
      month: "мес",
      billion: "млрд",
    },
    mediakit: {
      title: "Медиакит",
      subtitle: "Фирменный стиль, логотипы, цвета, шрифты",
      follow: "Перейти",
    },
    styles: {
      title: "Стиль Era coin",
      logo: {
        title: "Логотип",
        mainVariant: "Основной вариант с текстом",
        icon: "Иконка",
        download: "Скачать логотип",
        archive: "ZIP архив, файлы в формате SVG. 124КБ",
      },
      mainColors: {
        title: "Общие цвета",
        main: "Основной цвет",
        positive: "Позитивное состояние",
        negative: "Негативное состояние",
        accent: "Акцентный цвет",
        inactive: "Неактивная кнопка",
        gradient: "Основной градиент",
      },
      typography: {
        title: "Типографика",
        headers: "Заголовки",
        main: "Основной текст",
        subtitle: "Вспомогательный текст",
        font: "Шрифт",
        size: "Рамеры шрифтов",
        fontVariants: "Варианты шрифтов",
      },
      mobileLight: {
        title: "Цвета мобильного приложения (светлая тема)",
        bg: "Цвет фона",
        text: "Цвет текста",
        subtitle: "Вспомогательный текст",
        input: "Поле ввода",
        info: "Фон информации",
      },
      mobileDark: {
        title: "Цвета мобильного приложения (тёмная тема)",
      },
      car: {
        title: "Оклейка автомобиля",
        download: "Скачать наклейку",
      },
    },
    application: {
        routes: {
            wallet: 'Кошелек',
            tariff: 'Тариф',
            profile: 'Профиль',
            team: 'Команда',
            academy: 'Академия'
        },
        tariff: {
            paid: 'оплачен',
            unpaid: 'не оплачен'
        }
    }
  },
};
