export interface QuestionOption {
    number: number,
    text: string,
    additional?: string,
    weight?: number,
    multiple?: boolean,
    max?: number,
    charachteristic: string,
    answers?: Record<string, string | number>[],
    startText?: string,
    endText?: string
}

export const QUESTION_OPTIONS: QuestionOption[] = [
    {
        number: 1,
        text: 'Как Вас зовут?',
        charachteristic: 'name'
    },
    {
        number: 2,
        text: 'Укажите Ваш пол',
        charachteristic: 'sex',
        answers: [
            {'Мужской': 'm'}, 
            {'Женский': 'w'}
        ]
    },
    {
        number: 3,
        text: 'Укажите Ваш цвет глаз',
        charachteristic: 'eyes',
        answers: [
            {'Карие': 'brown'},
            {'Чёрные': 'black'},
            {'Голубые': 'blue'},
            {'Зелёные': 'green'},
            {'Серые': 'blue'}
        ],
        weight: 1
    },
    {
        number: 4,
        text: 'Укажите Ваш цвет волос',
        charachteristic: 'hair',
        answers: [
            {'Блондин': 'blond'}, 
            {'Шатен': 'brown'},
            {'Брюнет': 'black'},
            {'Рыжий': 'red'},
            {'Седой': 'grey'},
            {'Лысый': 'bald'},
            {'Русый': 'brown'}
        ],
        weight: 1
    },
    {
        number: 5,
        text: 'Как часто Вы занимаетесь спортом?',
        charachteristic: 'musculature',
        answers: [
            {'2-4 раза неделю занимаюсь силовыми тренировками': 3}, 
            {'2-4 раза в неделю занимаюсь легкими тренировками (зарядка, пробежка, турники и т.д)': 2}, 
            {'1 раз в неделю - две недели': 1}, 
            {'Не занимаюсь': 0}, 
        ],
        weight: 2
    },
    {
        number: 6,
        text: 'Есть ли у Вас военная подготовка?',
        charachteristic: 'military',
        answers: [
            {'Да': 'yes'}, 
            {'Нет': 'no'}, 
        ],
        weight: 2
    },
    {
        number: 7,
        text: 'Обладаете ли Вы боевыми навыками?',
        charachteristic: 'fighting',
        answers: [
            {'Да, у меня звание КМС (МС)': 3}, 
            {'Да, занимался на протяжении 3-5 лет': 2}, 
            {'Занимался когда-то 1 или 2 года': 1}, 
            {'Нет': 0}, 
        ],
        weight: 2
    },
    {
        number: 8,
        text: 'Какое у Вас образование / научная степень?',
        charachteristic: 'intelligence',
        answers: [
            {'Доктор или кандидат наук': 3}, 
            {'Высшее 2 или 3 степени': 2}, 
            {'Высшее первой степени': 1}, 
            {'Среднее или ниже': 0}, 
        ],
        weight: 4
    },
    {
        number: 9,
        text: 'Пользуетесь ли Вы последними технологиями?',
        charachteristic: 'technologies',
        answers: [
            {'Да': 'yes'}, 
            {'Иногда, зависит от технологии': 'some'}, 
            {'Нет': 'no'},
        ],
        weight: 3
    },
    {
        number: 10,
        text: 'Как часто Вы используете юмор?',
        charachteristic: 'humor',
        answers: [
            {'Постоянно, не могу жить без юмора': 3}, 
            {'Довольно часто': 2}, 
            {'Иногда': 1}, 
            {'Не особо люблю юмор': 0}, 
        ],
        weight: 3
    },
    {
        number: 11,
        text: 'Какое оружие Вы бы выбрали?',
        charachteristic: 'weapon',
        multiple: true,
        additional: 'Выберите не более трёх вариантов ответа',
        max: 3,
        answers: [
            {'Огнестрельное': 'gun'}, 
            {'Холодное': 'cold'}, 
            {'Взрывчатые предметы': 'explosive'}, 
            {'Высокотехнологичное снаряжение': 'equipment'}, 
            {'Только для самообороны': 'self-defense'}, 
            {'Магия': 'magic'}, 
            {'Предпочту сражаться кулаками': 'fist'}, 
            {'Я пацифист': 'pacifist'}, 
        ],
        weight: 3
    },
    {
        number: 12,
        text: 'Что из этого Вам больше всего нравится?',
        charachteristic: 'origin',
        multiple: true,
        max: 3,
        additional: 'Выберите не более трёх вариантов ответа',
        answers: [
            {'Магия': 'magic'}, 
            {'Мистика': 'mysticism'}, 
            {'Мифология': 'mythology'}, 
            {'Фантастика': 'fantastic'}, 
            {'Реальный мир': 'realistic'}, 
        ],
        weight: 3
    },
    {
        number: 13,
        text: 'Оцените Ваши навыки работы в команде',
        charachteristic: 'teamwork',
        answers: [
            {'1 (Мне комфортнее работать в одиночку)': 0}, 
            {'2': 1}, 
            {'3': 2}, 
            {'4': 3}, 
            {'5 (В команде у меня максимальная продуктивность)': 4}, 
        ],
        startText: 'Мне комфортнее работать в одиночку',
        endText: 'В команде у меня максимальная продуктивность',
        weight: 3
    },
    {
        number: 14,
        text: 'Какой суперспособностью Вы хотели бы обладать?',
        charachteristic: 'superpower',
        multiple: true,
        max: 4,
        additional: 'Выберите не более четырёх вариантов ответа',
        answers: [
            {'Летать': 'fly'}, 
            {'Сверхсила': 'power'}, 
            {'Сверхскорость': 'speed'}, 
            {'Сверхинтеллект': 'intelligence'}, 
            {'Хорошо владеть местностью и местными предметами для скрытного передвижения': 'stealth'}, 
            {'Управлять временем (видеть будущее)': 'time-manage'}, 
            {'Суперловкость': 'dexterity'}, 
            {'Неуязвимость': 'invulnerability'}, 
            {'Магические способности': 'magic'}, 
            {'Телепатия': 'telepathy'}, 
            {'Идеальная меткость': 'accuracy'},
            {'Изменяться в размере': 'size'},
            {'Телекинез': 'telekinesis'},
            {'Предпочел бы не иметь суперспособностей': 'none'},
        ],
        weight: 3
    },
    {
        number: 15,
        text: 'Можете ли Вы назвать себя хладнокровным?',
        charachteristic: 'coolness',
        answers: [
            {'Да': 'yes'}, 
            {'Нет': 'no'}, 
            {'Затрудняюсь ответить': 'neutral'}, 
        ],
        weight: 3
    },
    {
        number: 16,
        text: 'Можете ли Вы назвать себя вспыльчивым человеком?',
        charachteristic: 'irritability',
        answers: [
            {'Да, я часто раздражаюсь по разным причинам': 'yes'}, 
            {'Нет': 'no'}, 
            {'Затрудняюсь ответить': 'neutral'}, 
        ],
        weight: 3
    },
    {
        number: 17,
        text: 'Можете ли Вы назвать себя серьёзным человеком?',
        charachteristic: 'seriousness',
        answers: [
            {'Да, считаю, что ко всему нужно относиться серьёзно': 'yes'}, 
            {'Зависит от ситуации': 'neutral'}, 
            {'Нет, стараюсь вообще не париться в этой жизни': 'no'}, 
        ],
        weight: 3
    },
    {
        number: 18,
        text: 'Какие цвета Вам больше всего нравятся?',
        charachteristic: 'color',
        additional: 'Выберите не более трёх вариантов ответа',
        multiple: true,
        max: 3,
        answers: [
            {'Красный': 'red'}, 
            {'Голубой / Синий': 'blue'}, 
            {'Зелёный': 'green'}, 
            {'Жёлтый': 'yellow'}, 
            {'Чёрный': 'black'}, 
            {'Белый': 'white'}, 
            {'Оранжевый': 'orange'}, 
            {'Серый': 'grey'}, 
            {'Фиолетовый': 'purple'}, 
            {'Коричневый': 'brown'},
            {'Розовый': 'purple'},
            {'Все цвета': 'none'} 
        ],
        weight: 3
    },
    {
        number: 19,
        text: 'За счёт чего Вы хотели бы передвигаться?',
        charachteristic: 'transport',
        additional: 'Выберите не более двух вариантов ответа',
        multiple: true,
        max: 2,
        answers: [
            {'Мотоцикл': 'bike'}, 
            {'Машина': 'car'}, 
            {'Летательный аппарат': 'air'}, 
            {'За счёт снаряжения': 'equipment'}, 
            {'За счёт магии': 'magic'}, 
            {'Предпочитаю передвигаться своим ходом': 'foot'}, 
        ],
        weight: 3
    },
    {
        number: 20,
        text: 'В какой области Вы специализируетесь?',
        charachteristic: 'specialization',
        answers: [
            {'Естественные науки': 'natural'}, 
            {'Точные науки': 'exact'}, 
            {'Социально-гуманитарные науки': 'social'}, 
            {'Другое': 'other'}, 
        ],
        weight: 3
    },
    {
        number: 21,
        text: 'Можете ли Вы назвать себя лидером?',
        charachteristic: 'leadership',
        answers: [
            {'Да, всегда стараюсь вести за собой людей': 'yes'}, 
            {'Иногда, зависит от ситуации': 'some'}, 
            {'Нет': 'no'}, 
        ],
        weight: 3
    },
    {
        number: 22,
        text: 'Что Вы будете делать на тонущем титанике?',
        charachteristic: 'titanic',
        answers: [
            {'Буду \"играть вместе с тонущем оркестром\"': 'death'}, 
            {'Сразу побегу к шлюпкам и буду ждать своей очереди': 'order'}, 
            {'Раскидаю всех, лишь бы сесть в шлюпку': 'self-save'}, 
            {'Помогу женщинам и детям, если хватит места, сяду последним': 'save'}, 
        ],
        weight: 4
    },
    {
        number: 23,
        text: 'Вы способны простить раскаявшегося врага?',
        charachteristic: 'forgiveness',
        answers: [
            {'Злодеи не меняются. Я готов на крайние меры, лишь бы он больше не был в состоянии навредить мирным людям': 'neutral'}, 
            {'Ни за что. Он мне насолил, значит должен за это ответить': 'evil'}, 
            {'Злодеи часто не виноваты в том, что делают: жестокое детство, предательства, необходимость выживать толкает их на преступления. Но я не имею права не отдавать побежденного злодея в руки закона': 'goodness'}, 
        ],
        weight: 4
    },
];