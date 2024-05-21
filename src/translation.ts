export default {
  header: {
    home: {
      en: 'Home',
      ru: 'Домашняя'
    },
    skills: {
      en: 'Skills',
      ru: 'Навыки'
    },
    projects: {
      en: 'Projects',
      ru: 'Проекты'
    },
    contacts: {
      en: 'Contacts',
      ru: 'Контакты'
    },
  },
  pages: {
    index: {
      heading: {
        en: (query: { workTime: number }) => `Frontend dev with more than ${query.workTime} years experience in Vue.`,
        ru: (query: { workTime: number }) => `Фронтенд разработчик с более чем ${query.workTime} годами опыта во Vue.`
      },
      title: {
        en: 'Hi, my name\'s Eugene',
        ru: 'Привет, я - Женька'
      },
      description: {
        en: ['I started to be interested in computers and technology at the age of 7 when I first got into a computer store with my father. I saw a bunch of randomly placed pieces of iron that you can put together, connect with cables and get a window with access to the coolest invention of the 21st century - the Internet!', 'At school, I did pretty well with the Pascal programming language, but I quickly realized that nothing really cool (from what I would like to do) is poorly implemented in it. I started learning PHP, coding programs (Eclipse) and unpacking games for fun.', 'At the age of 15, I even created my first commercially successful project on the Minecraft game (I edited the launcher sources in Eclipse, take my mother\'s card to pay for the domain and hosting, distributed the load). I managed to create it for less than $15 and after 2 months, having accumulated a certain player base, I sold it for $50! I think that minecraft as a whole had a very cool influence on me and I was able to choose the right vector for my future profession.', 'After my graduation, I realized that I was most drawn to Frontend development. I learned Javascript, HTML, CSS and went to work as a freelancer. After 1.5 years of freelancing, I went to work in my first office. I still believe that Frontend is awesome!', 'Today my main passion is create beautiful interfaces and fancy websites without issues! I don\'t want to take up too much time writing about how awesome I am, stress-resistant and result-driven developer (so cliché), so let\'s get straight to the point!'],
        ru: ['Я начал интересоваться компьютерами и технологиями в 7 лет, когда впервые вместе с отцом попал в компьютерный магазин. Я увидел кучу хаотично расположенных железок, которые можно собрать вместе, соединить кабелями и получить окно с доступом к самому крутому изобретению 21 века - Интернету!', 'В школе я неплохо справлялся с языком программирования Паскаль, но быстро понял, что ничего действительно крутого (из того, чем мне хотелось бы заниматься) в нем плохо реализовано. Я начал изучать PHP, писать программы (Eclipse) и распаковывать игры ради удовольствия.', 'В 15 лет я даже создал свой первый коммерчески успешный проект по игре Майнкрафт (редактировал исходники лаунчера в Eclipse, взял мамину карту для оплаты домена и хостинга, распределял нагрузку). Мне удалось создать его менее чем за 15 долларов и через 2 месяца, накопив определенную базу игроков, я продал его за 50 долларов! Я думаю, что майнкрафт в целом оказал на меня очень крутое влияние и я смог выбрать правильный вектор своей будущей профессии.', 'После окончания учебы я понял, что больше всего меня привлекает Frontend-разработка. Я выучил Javascript, HTML, CSS и пошел работать фрилансером. После 1,5 лет фриланса я пошел работать в свой первый офис. Я до сих пор верю, что Frontend — это круто!', 'Сегодня моя главная страсть — создавать красивые интерфейсы и модные сайты без проблем! Я не хочу тратить слишком много времени на описание того, какой я классный, стрессоустойчивый и нацеленный на результат разработчик (такое клише), поэтому давайте сразу перейдем к делу!']
      },
      cv: {
        en: 'Download CV',
        ru: 'Скачать резюме'
      }
    },
    skills: {
      inner: {
        heading: {
          en: 'What i can? What am I working with?',
          ru: 'Что я могу? С чем я работаю?'
        },
        title: {
          en: ['Let me', 'Show you this'],
          ru: ['Давай', 'Покажу тебе']
        }
      },
      heading: {
        en: ['Did you think I was lying?', 'I\'m in love with Frontend!'],
        ru: ['Ты думал я соврал?', 'Я влюблен в Frontend!']
      },
      description: {
        en: 'A small description of the technology that I have ever worked with or dealt with, and have a fairly complete understanding of how it works:',
        ru: 'Маленькое описание технологий, с которыми я когда-либо работал или имел дело и имею достаточно полное представление о том, how it works:'
      },
      techs: {
        typescript: {
          en: `TypeScript is a strongly typed programming language based on JavaScript (like a superset for JS). He is cool? Yes, he's cool. I love TypeScript - it's wonderful.`,
          ru: 'TypeScript — это строго типизированный язык программирования, основанный на JavaScript (как суперсет для JS). Он классный? Да, он классный. Я люблю TypeScript - он прекрасен.'
        },
        javascript: {
          en: `JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. The only language at the moment in which the front-end part of applications in the browser is written (and not only).`,
          ru: 'JavaScript — это мультипарадигмальный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Единственный на данный момент язык, на котором пишут фронтенд-часть приложений в браузере (и не только).'
        },
        vue: {
          en: 'Vue.js is an open source JavaScript framework for creating user interfaces. Easily integrates into projects using other JavaScript libraries. Can function as a web framework for developing single page applications in a reactive style.',
          ru: 'Vue.js — это JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты, использующие другие библиотеки JavaScript. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.'
        },
        htmlcss: {
          en: 'HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language.',
          ru: 'HTML — это язык разметки, используемый для создания статических веб-страниц и веб-приложений. CSS — это язык таблиц стилей, отвечающий за представление документов, написанных на языке разметки.'
        },
        rust: {
          en: `Rust is another language that complements JavaScript and TypeScript that I use in my home development. This is an excellent tool that allows you to write truly productive desktop and server applications (by the way, the backend for the contact form on this site is written in Rust).`,
          ru: 'Rust — еще один язык, дополнение к JavaScript и TypeScript, который я использую при моей домашней разработке. Это прекрасный инструмент, который позволяет писать по-настоящему производительные десктопные, серверные приложения (кстати, бэкенд для формы связи на этом сайте написан на Rust).'
        },
        more: {
          en: 'VueX, VueRouter, JWT, REST-API, Express / Koa, Bootstrap Grid / Bulma, WebSocket, Canvas, pm2, WebRTC and more... much more...',
          ru: 'VueX, VueRouter, JWT, REST-API, Express/Koa, Bootstrap Grid/Bulma, WebSocket, Canvas, pm2, WebRTC и многое другое... многое другое...'
        },
      }
    },
    projects: {
      inner: {
        heading: {
          en: 'Some companies & projects i\'ve worked for.',
          ru: 'Некоторые компании и проекты над которыми я работал.'
        },
        title: {
          en: ['Let\'s', 'See my works'],
          ru: ['Посмотрим', 'На мои работы']
        }
      },
      content: {
        pp: {
          title: {
            en: 'Program Product',
            ru: 'Программный Продукт'
          },
          description: {
            en: [
              'Russian software developer for the public and private sectors. Development of mobile and web applications, as well as information systems.',
              [
                'Working with Vue3, VueRouter and VueX.',
                'Bug fixing and writing new functionality.'
              ]
            ],
            ru: [
              'Российский разработчик программного обеспечения для государственного и частного сектора. Разработка мобильных и веб-приложений, а также информационных систем.',
              [
                'Работа с Vue3, VueRouter and VueX.',
                'Фикс багов и написание нового функционала.'
              ]
            ],
          }
        },
        platinum: {
          title: {
            en: 'Platinum LTD',
            ru: 'Platinum LTD'
          },
          description: {
            en: [
              'Platinum Engineering is a new generation tech incubator with a background in networking that provides top grade expertise to future FinTech stars.',
              [
                'Writing frontend using Vue3 with Composition API, TypeScript and Pinia.',
                'Work with difficult Canvas and WebGL engines. Describing types for game entities.',
                'Work with blockchain arhitecture, making request and logic for "backendless" applications.',
                'Error handling caused by game engine, fix bugs, adding new and refactor old functional features.',
              ]
            ],
            ru: [
              'Platinum Engineering — это технологический инкубатор нового поколения с опытом работы в области сетевых технологий, который предоставляет первоклассный опыт будущим звездам FinTech.',
              [
                'Написание фронтенда на Vue3 с Composition API, TypeScript и Pinia.',
                'Работа с сложными Canvas и WebGL движками. Описание типов для игровых сущностей.',
                'Работа с блокчейн архитектурой, формирование работы и написание логики для "backendless" приложений.',
                'Обработка ошибок игровых движков, фикс багов, добавление нового и рефактор старого функционала.',
              ]
            ],
          }
        },
        travelask: {
          title: {
            en: 'Travelask',
            ru: 'Travelask'
          },
          description: {
            en: [
              'TravelAsk is a travel search engine. Searches and compares the best deals on tours, hotels and flights. Inspires new trips and gets content once.',
              [
                'Development of new functionality.',
                'Bug fixing.',
                'Optimizing already written code and translating it to ES6+ standard EcmaScript.',
                'Rewriting some functionality written in Vue.js (as a library) into vanilla JavaScript according to OOP principles on classes.'
              ]
            ],
            ru: [
              'TravelAsk — поисковая система для путешествий. Ищет и сравнивает лучшие предложения на туры, отели и авиабилеты. Вдохновляет на новые путешествия и получает контент один раз.',
              [
                'Разработка новых функциональных компонентов.',
                'Фикс багов.',
                'Оптимизация уже написанного кода на Vue.js и транспиляция его на ES6+ стандарт EcmaScript.',
                'Переписывание некоторой кодовой базы, написанной с помощью Vue.js (как библиотеке), на ванильный JavaScript на классах с соблюдением принципов ООП.'
              ]
            ],
          }
        },
        r52: {
          title: {
            en: 'R52.ru',
            ru: 'R52.ru'
          },
          description: {
            en: [
              'R52.RU is a multi-service agency with 20 years of experience. They\'re design and provide effective presence, support and successful development of online business.',
              [
                'Layout of commercial projects.',
                'Edits on existing sites & fixing bugs.',
                'Working with Vue.js projects using VueX and VueRouter.',
              ]
            ],
            ru: [
              'R52.RU — мультисервисное агентство с 20-летним опытом. Они проектируют и обеспечивают эффективное присутствие, поддержку и успешное развитие онлайн-бизнеса.',
              [
                'Верстка и основная фронтендная часть коммерческих проектов.',
                'Правки на уже существующих сайтах & фикс багов.',
                'Работа с проектами на Vue.js, используя VueX и VueRouter.',
              ]
            ],
          }
        },
        olumni: {
          title: {
            en: 'Olumni Chat',
            ru: 'Olumni Чат'
          },
          description: {
            en: [
              'Olumni Chat is a UI-simple web application that allows you to connect two or more people in audio calls via WebRTC technology',
              [
                'Development of the frontend part of the application: flow control, audio processing via AudioContext, etc.',
                'Development of backend part for interactive chat and initial negotiation',
                'Packaging the application in Docker and CI/CD setup',
              ]
            ],
            ru: [
              'Olumni Чат - это простое с точки зрения UI веб приложение, которое позволяет связывать двух и более людей в аудиозвонках посредством WebRTC технологии',
              [
                'Разработка фронтенд части приложения: управление потоками, обработка звука через AudioContext и так далее',
                'Разработка бэкенд части для интерактивного чата и первоначального negotiation',
                'Упаковка приложения в Docker и настройка CI/CD',
              ]
            ],
          }
        },
        sms: {
          title: {
            en: 'Show Me Some',
            ru: 'Show Me Some'
          },
          description: {
            en: [
              'Show Me Some is my author\'s project together with my wife, where I am the main Backend and Frontend developer. The project is a visual novel with a lot of ramifications in a gloomy setting of an alternative Middle Ages.',
              [
                'Develop backend for game engine in Rust.',
                'Writing a branched script.',
                'Writing frontend using canvas.',
              ]
            ],
            ru: [
              'Show Me Some - мой авторский проект совместно с моей женой, где я выступаю основным разработчиком Backend и Frontend. Проект представляет из себя визуальную новеллу с большим количеством разветвлений в мрачном сеттинге альтернативного средневековья.',
              [
                'Разработка игровой бэкенд части движка на языке Rust.',
                'Написание разветвленного сценария.',
                'Написание фронтенда с использованием canvas.',
              ]
            ],
          }
        },
        freelance: {
          title: {
            en: 'Freelance',
            ru: 'Фриланс'
          },
          description: {
            en: [
              'As a freelancer, I have worked extensively with technologies such as Vue.js, JWT, JSON handling, WebSocket, WebRTC, Express, Bootstrap and more other technologies/frameworks.',
              [
                'Engaged in the development and support of the client part of WEB-applications.',
                'Part-time set up Nginx HTTP servers and simple servers on Linux.',
                'Wrote small chat applications and parsers, also worked with the WebSocket API.',
                'Participated in the development of Stores and Gaming Sites using the Vue.js framework.',
                'Worked with Vue.js, VueRouter and VueX.'
              ]
            ],
            ru: [
              'Как фрилансер, я много работал с такими технологиями, как Vue.js, JWT, обработка JSON, WebSocket, WebRTC, Express, Bootstrap и многими другими технологиями/фреймворками.',
              [
                'Занимался разработкой и поддержкой клиентской части WEB-приложений.',
                'Частичная настройка HTTP-серверов Nginx и простых серверов на Linux.',
                'Писал небольшие чат-приложения и парсеры, а также работал с WebSocket API.',
                'Участвовал в разработке магазинов и игровых сайтов с использованием фреймворка Vue.js.',
                'Работал с Vue.js, VueRouter и VueX.'
              ]
            ],
          }
        },
      }
    },
    contacts: {
      inner: {
        heading: {
          en: 'You can find me by contacts below.',
          ru: 'Ты можешь найти меня по ссылкам ниже.'
        },
        title: {
          en: ['Im always', 'Open to talk'],
          ru: ['Я всегда', 'Открыт к диалогу']
        }
      },
      heading: {
        en: 'Let’s work together and make beautiful projects.',
        ru: 'Давай работать вместе и делать прекрасные проекты'
      },
      content: {
        address: {
          en: 'Address',
          ru: 'Адрес'
        },
        addressValue: {
          en: 'Russia, Nijny Novgorod',
          ru: 'Россия, Нижний Новгород'
        },
        email: {
          en: 'Email',
          ru: 'Почта'
        },
        emailValue: {
          en: 'eugene.vinokuroff@gmail.com',
          ru: 'eugene.vinokuroff@gmail.com'
        },
        touch: {
          en: 'Get in Touch',
          ru: 'Напиши мне'
        },
        check: {
          en: 'Check me here',
          ru: 'А еще тут'
        },
      },
      form: {
        name: {
          en: 'Name',
          ru: 'Имя'
        },
        email: {
          en: 'E-mail',
          ru: 'Почта'
        },
        message: {
          en: 'Message (min: 50)',
          ru: 'Сообщение (минимум 50)'
        },
        send: {
          en: 'Submit',
          ru: 'Отправить'
        },
      }
    },
    empty: {
      heading: {
        en: 'The page you are looking is a myth.',
        ru: 'Страница, которую ты искал - это миф.'
      },
      title: {
        en: 'It seems you are lost',
        ru: 'Похоже, ты потерялся'
      }
    }
  },
  footer: {
    description: {
      maked: {
        en: 'Maked with love by Eugene Vinokurov in 2023. All rights reserved ©.',
        ru: 'Сделано с любовью Евгением Винокуровым в 2023 году. Все права защищены ©.'
      },
      copy: {
        en: 'All images on the site belong to their rightful owners (materials taken from open sources - Giphy & Unsplash).',
        ru: 'Все изображения на сайте принадлежат их законным владельцам (материалы взяты из открытых источников — Giphy & Unsplash).'
      }
    }
  },
  constants: {
    en: 'Click on the image to close the popup.',
    ru: 'Нажмите на изображение, чтобы закрыть попап.'
  }
}
