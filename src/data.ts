import { QuestionsType } from './types';

export type CategoriesType = {
    frontend: {
        name: string;
        img: string;
        desc: string;
        questions: QuestionsType;
    };
    backend: {
        name: string;
        img: string;
        desc: string;
        questions: QuestionsType;
    };
};

type dataType = {
    categories: CategoriesType
};

const data: dataType = {
    categories: {
        'frontend': {
            name: 'Frontend-разработчик',
            img: 'frontend2.jpg',
            desc: '',
            questions: [
                {
                    id: 'ca423478-4350-411f-909e-eca76212baf1',
                    name: 'Во время обсуждения технического задания клиент просит использовать только растровые форматы изображений. Он перечисляет, что это могут быть GIF, JPEG, PNG, SVG. Работаем?',
                    answer: [
                        'Минуточку, в списке перечислены растровые форматы, но есть один векторный.',
                    ],
                    result: '',
                    lists: [
                        'Да, всё это — растровая графика. Работаем!',
                        'Стоп, никакой из перечисленных форматов не относится к растровой графике.',
                        'Минуточку, в списке перечислены растровые форматы, но есть один векторный.',
                    ],
                },
                {
                    id: '5984d8b6-89bd-4cf6-89a7-1666ad922e03',
                    name: 'Вы разрабатываете фронтенд для интернет-магазина. Нужно сделать переход от корзины к оформлению заказа без обновления всей страницы. Какой подход будете использовать?',
                    answer: ['Воспользуюсь React.js.'],
                    result: '',
                    lists: [
                        'Напишу HTML-код, чтобы всё корректно работало с DOM API.',
                        'Воспользуюсь React.js.',
                        'Сделаю свою систему рендеринга.',
                    ],
                },
                {
                    id: '21b09021-4e33-43fa-b283-27cbe92a2472',
                    name: 'Null и undefined в JavaScript — это одно и то же?',
                    answer: ['Нет.'],
                    result: '',
                    lists: ['Да.', 'Нет.'],
                },
                {
                    id: 'e8794c61-9b1c-4d77-befe-416b841204c3',
                    name: 'Клиент предлагает реализовать через CSS на сайте такую фишку: во время прокрутки страницы хедер будет прилипать к верхней части экрана и оставаться там до самого футера. Реализуемо?',
                    answer: [
                        'Да, можно сделать через CSS, JavaScript использовать не обязательно.',
                    ],
                    result: '',
                    lists: [
                        'Не получится через CSS. Тут нужно писать код на JavaScript.',
                        'Да, можно сделать через CSS, JavaScript использовать не обязательно.',
                    ],
                },
                {
                    id: 'b27669aa-64cb-4efe-8cd7-d9e84b9999b9',
                    name: 'Говорят, что в CSS Grid отсутствуют баги. Это правда?',
                    answer: ['Нет, сетки CSS Grid могут приводить к ошибкам.'],
                    result: '',
                    lists: [
                        'Да, сетки через CSS Grid никогда не приводят к ошибкам.',
                        'Нет, сетки CSS Grid могут приводить к ошибкам.',
                    ],
                },
                {
                    id: '8a92da6f-5b01-4eae-ac42-a64991478669',
                    name: 'Внимание, три самые важные команды при работе в Git. Поехали: git add, git commit и…',
                    answer: ['git push.'],
                    result: '',
                    lists: ['git log.', 'git config.', 'git status.', 'git push.'],
                },
                {
                    id: 'fe428228-6acb-429f-8ff5-f566481a8df1',
                    name: 'Правда, что язык TypeScript позволяет сделать разработку веб-приложения дешевле?',
                    answer: ['Нет, неправда.'],
                    result: '',
                    lists: ['Да, всё верно.', 'Нет, неправда.'],
                },
                {
                    id: '6f2cb436-c32e-4a16-9673-aef448a99314',
                    name: 'Зачем нужен тег title в этом коде?',
                    answer: ['Это всплывающая подсказка.'],
                    result: '',
                    lists: [
                        'Подпись для верстальщика.',
                        'Это всплывающая подсказка.',
                        'Это самый большой заголовок на странице.',
                    ],
                },
                {
                    id: 'ff8a952e-753a-4c90-9bac-d1c9c2e74492',
                    name: 'В JavaScript есть три типа функций: встроенные, создаваемые и индифферентные.',
                    answer: ['Индифферентных функций нет.'],
                    result: '',
                    lists: ['Всё так.', 'Встроенных функций нет.', 'Индифферентных функций нет.'],
                },
            ],
        },
        backend: {
            name: 'Backend-разработчик',
            img: 'backend1.png',
            desc: '',
            questions: [
                {
                    id: '55a942c9-e99a-4a58-bd79-1aafed35492a',
                    name: 'Когда был создан PHP?',
                    answer: ['В 1994 году.'],
                    result: '',
                    lists: ['В 1986 году.', 'В 1990 году.', 'В 1994 году.', 'В 2000 году.'],
                },
                {
                    id: '36ffbf3a-564c-4755-a70f-1c9c5d35db75',
                    name: 'PHP изначально представлял собой набор скриптов на другом языке. На каком?',
                    answer: ['Perl'],
                    result: '',
                    lists: ['Pascal', 'Perl', 'HTML', ' С++'],
                },
                {
                    id: '2d487fae-fa9c-4a9b-932e-5a4922c0e342',
                    name: 'В каких операционных системах можно создать веб-сайт на PHP?',
                    answer: ['Windows, macOS, Linux'],
                    result: '',
                    lists: [
                        'Windows и Linux',
                        'Windows и macOS',
                        'macOS и Linux',
                        'Windows, macOS, Linux',
                    ],
                },
                {
                    id: '6178122b-f508-4916-b77c-f8ceea248498',
                    name: 'Как расшифровывается аббревиатура PHP?',
                    answer: ['Hypertext PreProcessor'],
                    result: '',
                    lists: [
                        'Personal Home Page',
                        'Personal Home Page Tools',
                        'Hypertext PreProcessor',
                        'Personal Home Page / Form Interpreter',
                    ],
                },
            ],
        },
    },
};

export default data
