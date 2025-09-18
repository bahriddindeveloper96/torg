import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    navigation: {
      home: "Bosh sahifa",
      favorites: "Saralangan",
      postAd: "E'lon berish",
      messages: "Xabarlar",
      profile: "Profil"
    },
    home: {
      premiumAds: "Premium e'lonlar",
      recentAds: "Oxirgi e'lonlar",
      products: "ta mahsulot",
      viewAll: "Barchasi",
      hoursAgo: "soat oldin",
      daysAgo: "kun oldin"
    },
    header: {
      mobileApps: "Mobil ilovalar",
      help: "Yordam",
      search: "1 000 000 dan ortiq e'lonlar ichidan qidiring",
      favorites: "Saralangan",
      profile: "Profil",
      postAd: "E'lon berish",
      languages: {
        uz: "O'zbekcha",
        ru: "Ruscha"
      }
    },
    footer: {
      about: {
        title: "TORG.UZ",
        aboutUs: "Biz haqimizda",
        ourServices: "Bizning xizmatlar",
        privacyPolicy: "Maxfiylik siyosati",
        terms: "Foydalanish shartlari"
      },
      help: {
        title: "Yordam",
        security: "Xavfsizlik qoidalari",
        contact: "Aloqa",
        siteMap: "Sayt xaritasi",
        regions: "Mintaqalar xaritasi"
      },
      social: {
        title: "Ijtimoiy tarmoqlar",
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        telegram: "Telegram"
      },
      mobileApps: {
        title: "Mobil ilovalar",
        appStore: {
          download: "Download on the",
          title: "App Store"
        },
        googlePlay: {
          download: "GET IT ON",
          title: "Google Play"
        }
      },
      copyright: " 2025 TORG.UZ - Bepul e'lonlar sayti"
    },
    product: {
      new: 'Yangi',
      monthlyPayment: 'x 12 oy'
    },
    category: {
      title: 'Kategoriya',
      allCategories: 'Barcha kategoriyalar',
      noProducts: 'Mahsulotlar topilmadi',
      location: 'Joylashuv',
      date: 'Sana'
    },
    categories: {
      electronics: "Elektronika",
      fashion: "Kiyim",
      cars: "Avtomobillar",
      realEstate: "Ko'chmas mulk",
      furniture: "Uy jihozlari",
      services: "Xizmatlar",
      sports: "Sport",
      garden: "Bog' va Uy",
      toys: "O'yinchoqlar",
      books: "Kitoblar"
    },
    productDetails: {
      home: "Bosh sahifa",
      reviews: "baho",
      pricePerUnit: "Narx bir donasi uchun",
      showPhoneNumber: "Telefon raqamini ko'rsatish",
      sendMessage: "Xabar yozish",
      aboutProduct: "Mahsulot haqida",
      condition: "Holati",
      memory: "Xotira",
      battery: "Batareya",
      warranty: "Kafolat",
      location: "Manzil",
      description: "Tavsif",
      similarProducts: "O'xshash mahsulotlar",
      ideal: "Ideal"
    },
    categoryView: {
      home: "Bosh sahifa",
      ads: "e'lon",
      filter: "Filtr",
      loadMore: "Ko'proq ko'rish",
      today: "Bugun",
      yesterday: "Kecha",
      km: "km",
      filters: {
        priceFrom: "Narx dan",
        priceTo: "Narx gacha",
        brand: "Brend",
        yearFrom: "Yil dan",
        yearTo: "Yil gacha"
      }
    },
    categoryFilters: {
      price: "Narx",
      from: "Dan",
      to: "Gacha",
      brand: "Marka",
      all: "Barchasi",
      year: "Yil",
      search: "Qidirish",
      clearAllFilters: "Barcha filtrlarni tozalash",
      currency: "UZS"
    },
    addProduct: {
      title: "Yangi e'lon qo'shish",
      subtitle: "Barcha maydonlarni to'ldiring va e'loningizni joylashtiring",
      sections: {
        images: {
          title: "Rasmlar",
          dropzone: "Rasmlarni yuklash uchun bosing yoki shu yerga tashlang",
          maxSize: "Maksimal 8 ta rasm, har biri 5MB gacha"
        },
        basicInfo: {
          title: "Asosiy ma'lumotlar",
          category: {
            label: "Kategoriya",
            placeholder: "Kategoriyani tanlang",
            options: {
              electronics: "Elektronika",
              vehicles: "Transport",
              property: "Ko'chmas mulk",
              fashion: "Kiyim-kechak"
            }
          },
          productTitle: {
            label: "Sarlavha",
            placeholder: "Mahsulot nomini kiriting"
          },
          description: {
            label: "Tavsif",
            placeholder: "Mahsulot haqida batafsil ma'lumot kiriting"
          }
        },
        price: {
          title: "Narx",
          amount: {
            label: "Narx",
            placeholder: "Narxni kiriting",
            currency: "so'm"
          },
          type: {
            label: "Narx turi",
            fixed: "Qat'iy narx",
            negotiable: "Kelishiladi"
          }
        },
        contact: {
          title: "Kontakt ma'lumotlari",
          phone: {
            label: "Telefon raqam",
            placeholder: "+998 XX XXX XX XX"
          },
          location: {
            label: "Manzil",
            placeholder: "Viloyatni tanlang",
            options: {
              tashkent: "Toshkent",
              samarkand: "Samarqand",
              bukhara: "Buxoro",
              andijan: "Andijon"
            }
          }
        }
      },
      buttons: {
        cancel: "Bekor qilish",
        submit: "E'lonni joylash"
      },
      required: "*"
    },
    ads: {
      title: "Mening E'lonlarim",
      search: {
        placeholder: "E'lonlarni qidirish"
      },
      filter: {
        all: "Barcha e'lonlar",
        active: "Faol",
        inactive: "Faol emas",
        moderation: "Moderatsiyada"
      },
      stats: {
        activeAds: "Faol e'lonlar",
        totalViews: "Jami ko'rishlar",
        totalCalls: "Qo'ng'iroqlar"
      },
      status: {
        active: "Faol",
        inactive: "Faol emas",
        moderation: "Moderatsiyada"
      },
      currency: "so'm",
      meta: {
        views: "ko'rishlar",
        calls: "qo'ng'iroqlar",
        date: "sana"
      },
      buttons: {
        edit: "Tahrirlash",
        delete: "O'chirish",
        activate: "Faollashtirish",
        promote: "Reklama"
      },
      emptyState: {
        title: "E'lonlar topilmadi",
        description: "Siz hali e'lon joylamadingiz yoki filtrlarga mos e'lonlar yo'q",
        createButton: "Yangi e'lon qo'shish"
      }
    },
    chat: {
      status: {
        online: "Online",
        lastSeen: "Oxirgi faollik: {time}",
        today: "Bugun"
      },
      product: {
        viewAd: "E'lonni ko'rish"
      },
      input: {
        placeholder: "Xabar yozing...",
      },
      messages: {
        greeting: "Assalomu alaykum, mahsulot hali sotuvda bormi?",
        reply: "Va alaykum assalom, ha bor",
        priceQuestion: "Oxirgi narxi qancha bo'ladi?",
        priceAnswer: "{price} so'mga kelishamiz",
        currency: "so'm"
      }
    },
    messages: {
      title: "Xabarlar",
      filter: "Filter",
      tabs: {
        all: "Barcha xabarlar",
        unread: "O'qilmagan",
        important: "Muhim"
      },
      timeFormat: {
        minutesAgo: "{minutes} daqiqa oldin",
        hoursAgo: "{hours} soat oldin"
      },
      currency: "so'm",
      emptyState: {
        title: "Hozircha xabarlar yo'q",
        description: "Sizda hali xabarlar mavjud emas"
      }
    },
    profile: {
      navigation: {
        profile: "Profil",
        ads: "E'lonlarim",
        favorites: "Saqlanganlar",
        settings: "Sozlamalar"
      },
      title: "Mening Profilim",
      personalInfo: {
        title: "Shaxsiy Ma'lumotlar",
        fullName: {
          label: "To'liq ism",
          placeholder: "To'liq ismingizni kiriting"
        },
        phone: {
          label: "Telefon",
          placeholder: "+998 XX XXX XX XX"
        },
        email: {
          label: "Email",
          placeholder: "Email manzilingiz"
        },
        address: {
          label: "Manzil",
          placeholder: "Manzilingiz"
        }
      },
      statistics: {
        title: "Statistika",
        ads: "E'lonlar",
        views: "Ko'rishlar",
        favorites: "Saqlanganlar"
      },
      buttons: {
        save: "Saqlash"
      }
    },
    settings: {
      title: "Sozlamalar",
      subtitle: "Hisobingizni sozlash va xavfsizlik parametrlarini o'zgartiring",
      account: {
        title: "Hisob Sozlamalari",
        language: {
          label: "Tilni tanlang",
          options: {
            uz: "O'zbekcha",
            ru: "Ruscha",
            en: "English"
          }
        },
        timezone: {
          label: "Vaqt mintaqasi",
          options: {
            tashkent: "Toshkent (UTC+5)",
            samarkand: "Samarqand (UTC+5)"
          }
        }
      },
      notifications: {
        title: "Bildirishnomalar",
        messages: "Yangi xabarlar",
        ads: "Yangi e'lonlar",
        offers: "Maxsus takliflar"
      },
      privacy: {
        title: "Maxfiylik",
        showProfile: "Profilni ko'rsatish",
        showPhone: "Telefon raqamni ko'rsatish"
      },
      theme: {
        title: "Dizayn",
        options: {
          light: "Yorug'",
          dark: "Qorong'i",
          blue: "Ko'k",
          green: "Yashil"
        }
      },
      buttons: {
        cancel: "Bekor qilish",
        save: "Saqlash"
      }
    }
  },
  ru: {
    navigation: {
      home: "Главная",
      favorites: "Избранное",
      postAd: "Подать объявление",
      messages: "Сообщения",
      profile: "Профиль"
    },
    home: {
      premiumAds: "Премиум объявления",
      recentAds: "Последние объявления",
      products: "продуктов",
      viewAll: "Все",
      hoursAgo: "часов назад",
      daysAgo: "дней назад"
    },
    header: {
      mobileApps: "Мобильные приложения",
      help: "Помощь",
      search: "Поиск среди более 1 000 000 объявлений",
      favorites: "Избранное",
      profile: "Профиль",
      postAd: "Подать объявление",
      languages: {
        uz: "Узбекский",
        ru: "Русский"
      }
    },
    footer: {
      about: {
        title: "TORG.UZ",
        aboutUs: "О нас",
        ourServices: "Наши услуги",
        privacyPolicy: "Политика конфиденциальности",
        terms: "Условия использования"
      },
      help: {
        title: "Помощь",
        security: "Правила безопасности",
        contact: "Контакты",
        siteMap: "Карта сайта",
        regions: "Карта регионов"
      },
      social: {
        title: "Социальные сети",
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        telegram: "Telegram"
      },
      mobileApps: {
        title: "Мобильные приложения",
        appStore: {
          download: "Скачать в",
          title: "App Store"
        },
        googlePlay: {
          download: "Доступно в",
          title: "Google Play"
        }
      },
      copyright: " 2025 TORG.UZ - Сайт бесплатных объявлений"
    },
    product: {
      new: 'Новый',
      monthlyPayment: 'x 12 мес'
    },
    category: {
      title: 'Категория',
      allCategories: 'Все категории',
      noProducts: 'Товары не найдены',
      location: 'Местоположение',
      date: 'Дата'
    },
    categories: {
      electronics: "Электроника",
      fashion: "Одежда",
      cars: "Автомобили",
      realEstate: "Недвижимость",
      furniture: "Мебель",
      services: "Услуги",
      sports: "Спорт",
      garden: "Дом и Сад",
      toys: "Игрушки",
      books: "Книги"
    },
    productDetails: {
      home: "Главная",
      reviews: "отзывов",
      pricePerUnit: "Цена за единицу",
      showPhoneNumber: "Показать номер телефона",
      sendMessage: "Написать сообщение",
      aboutProduct: "О товаре",
      condition: "Состояние",
      memory: "Память",
      battery: "Батарея",
      warranty: "Гарантия",
      location: "Местоположение",
      description: "Описание",
      similarProducts: "Похожие товары",
      ideal: "Идеальное"
    },
    categoryView: {
      home: "Главная",
      ads: "объявлений",
      filter: "Фильтр",
      loadMore: "Показать больше",
      today: "Сегодня",
      yesterday: "Вчера",
      km: "км",
      filters: {
        priceFrom: "Цена от",
        priceTo: "Цена до",
        brand: "Бренд",
        yearFrom: "Год от",
        yearTo: "Год до"
      }
    },
    categoryFilters: {
      price: "Цена",
      from: "От",
      to: "До",
      brand: "Марка",
      all: "Все",
      year: "Год",
      search: "Поиск",
      clearAllFilters: "Очистить все фильтры",
      currency: "UZS"
    },
    addProduct: {
      title: "Добавить новое объявление",
      subtitle: "Заполните все поля и разместите ваше объявление",
      sections: {
        images: {
          title: "Изображения",
          dropzone: "Нажмите или перетащите сюда изображения",
          maxSize: "Максимум 8 изображений, до 5МБ каждое"
        },
        basicInfo: {
          title: "Основная информация",
          category: {
            label: "Категория",
            placeholder: "Выберите категорию",
            options: {
              electronics: "Электроника",
              vehicles: "Транспорт",
              property: "Недвижимость",
              fashion: "Одежда"
            }
          },
          productTitle: {
            label: "Заголовок",
            placeholder: "Введите название товара"
          },
          description: {
            label: "Описание",
            placeholder: "Введите подробное описание товара"
          }
        },
        price: {
          title: "Цена",
          amount: {
            label: "Цена",
            placeholder: "Введите цену",
            currency: "сум"
          },
          type: {
            label: "Тип цены",
            fixed: "Фиксированная цена",
            negotiable: "Договорная"
          }
        },
        contact: {
          title: "Контактная информация",
          phone: {
            label: "Номер телефона",
            placeholder: "+998 XX XXX XX XX"
          },
          location: {
            label: "Местоположение",
            placeholder: "Выберите регион",
            options: {
              tashkent: "Ташкент",
              samarkand: "Самарканд",
              bukhara: "Бухара",
              andijan: "Андижан"
            }
          }
        }
      },
      buttons: {
        cancel: "Отмена",
        submit: "Разместить объявление"
      },
      required: "*"
    },
    ads: {
      title: "Мои объявления",
      search: {
        placeholder: "Поиск объявлений"
      },
      filter: {
        all: "Все объявления",
        active: "Активные",
        inactive: "Неактивные",
        moderation: "На модерации"
      },
      stats: {
        activeAds: "Активные объявления",
        totalViews: "Всего просмотров",
        totalCalls: "Звонки"
      },
      status: {
        active: "Активно",
        inactive: "Неактивно",
        moderation: "На модерации"
      },
      currency: "сум",
      meta: {
        views: "просмотры",
        calls: "звонки",
        date: "дата"
      },
      buttons: {
        edit: "Редактировать",
        delete: "Удалить",
        activate: "Активировать",
        promote: "Реклама"
      },
      emptyState: {
        title: "Объявления не найдены",
        description: "У вас пока нет объявлений или нет объявлений, соответствующих фильтрам",
        createButton: "Добавить новое объявление"
      }
    },
    chat: {
      status: {
        online: "Онлайн",
        lastSeen: "Был(а) в сети: {time}",
        today: "Сегодня"
      },
      product: {
        viewAd: "Посмотреть объявление"
      },
      input: {
        placeholder: "Введите сообщение...",
      },
      messages: {
        greeting: "Здравствуйте, товар еще доступен?",
        reply: "Здравствуйте, да, доступен",
        priceQuestion: "Какая окончательная цена?",
        priceAnswer: "Договоримся на {price} сум",
        currency: "сум"
      }
    },
    messages: {
      title: "Сообщения",
      filter: "Фильтр",
      tabs: {
        all: "Все сообщения",
        unread: "Непрочитанные",
        important: "Важные"
      },
      timeFormat: {
        minutesAgo: "{minutes} минут назад",
        hoursAgo: "{hours} часов назад"
      },
      currency: "сум",
      emptyState: {
        title: "Пока нет сообщений",
        description: "У вас еще нет сообщений"
      }
    },
    profile: {
      navigation: {
        profile: "Профиль",
        ads: "Мои объявления",
        favorites: "Избранное",
        settings: "Настройки"
      },
      title: "Мой профиль",
      personalInfo: {
        title: "Личная информация",
        fullName: {
          label: "Полное имя",
          placeholder: "Введите ваше полное имя"
        },
        phone: {
          label: "Телефон",
          placeholder: "+998 XX XXX XX XX"
        },
        email: {
          label: "Email",
          placeholder: "Ваш email адрес"
        },
        address: {
          label: "Адрес",
          placeholder: "Ваш адрес"
        }
      },
      statistics: {
        title: "Статистика",
        ads: "Объявления",
        views: "Просмотры",
        favorites: "Избранное"
      },
      buttons: {
        save: "Сохранить"
      }
    },
    settings: {
      title: "Настройки",
      subtitle: "Настройте свой аккаунт и параметры безопасности",
      account: {
        title: "Настройки аккаунта",
        language: {
          label: "Выберите язык",
          options: {
            uz: "O'zbekcha",
            ru: "Русский",
            en: "English"
          }
        },
        timezone: {
          label: "Часовой пояс",
          options: {
            tashkent: "Ташкент (UTC+5)",
            samarkand: "Самарканд (UTC+5)"
          }
        }
      },
      notifications: {
        title: "Уведомления",
        messages: "Новые сообщения",
        ads: "Новые объявления",
        offers: "Специальные предложения"
      },
      privacy: {
        title: "Конфиденциальность",
        showProfile: "Показать профиль",
        showPhone: "Показать номер телефона"
      },
      theme: {
        title: "Оформление",
        options: {
          light: "Светлая",
          dark: "Тёмная",
          blue: "Синяя",
          green: "Зелёная"
        }
      },
      buttons: {
        cancel: "Отмена",
        save: "Сохранить"
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('userLanguage') || 'uz', // Get saved language or default to 'uz'
  fallbackLocale: 'uz',
  messages,
  globalInjection: true
})

// Function to change language
export function setLanguage(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('userLanguage', lang)
  document.querySelector('html').setAttribute('lang', lang)
}
