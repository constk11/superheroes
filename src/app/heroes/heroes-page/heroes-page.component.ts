import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroes-page',
    templateUrl: './heroes-page.component.html',
    styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

    public heroes = [
        {
            name: 'Человек-Паук',
            imgSrc: 'spider-man'
        },
        {
            name: 'Железный-Человек',
            imgSrc: 'iron-man'
        },
        {
            name: 'Капитан Америка',
            imgSrc: 'cap'
        },
        {
            name: 'Тор',
            imgSrc: 'thor'
        },
        {
            name: 'Халк',
            imgSrc: 'hulk'
        },
        {
            name: 'Соколиный Глаз',
            imgSrc: 'hawkeye'
        },
        {
            name: 'Чёрная Вдова',
            imgSrc: 'black-widow'
        },
        {
            name: 'Вижн',
            imgSrc: 'vision'
        },
        {
            name: 'Локи',
            imgSrc: 'loki'
        },
        {
            name: 'Ник Фьюри',
            imgSrc: 'nick-fury'
        },
        {
            name: 'Алая Ведьма',
            imgSrc: 'scarlet-witch'
        },
        {
            name: 'Ртуть',
            imgSrc: 'quicksilver'
        },
        {
            name: 'Сокол',
            imgSrc: 'falcon'
        },
        {
            name: 'Баки',
            imgSrc: 'bucky'
        },
        {
            name: 'Воитель',
            imgSrc: 'war-machine'
        },
        {
            name: 'Чёрная Пантера',
            imgSrc: 'black-panther'
        },
        {
            name: 'Доктор Стрендж',
            imgSrc: 'dr-strange'
        },
        {
            name: 'Звёздный Лорд',
            imgSrc: 'star-lord'
        },
        {
            name: 'Дракс Разрушитель',
            imgSrc: 'drax'
        },
        {
            name: 'Ракета',
            imgSrc: 'rocket'
        },
        {
            name: 'Гамора',
            imgSrc: 'gamora'
        },
        {
            name: 'Мантис',
            imgSrc: 'mantis'
        },
        {
            name: 'Танос',
            imgSrc: 'thanos'
        },
        {
            name: 'Каратель',
            imgSrc: 'punisher'
        },
        {
            name: 'Сорвиголова',
            imgSrc: 'daredevil'
        },
        {
            name: 'Росомаха',
            imgSrc: 'wolverine'
        },
        {
            name: 'Профессор Икс',
            imgSrc: 'professor-x'
        },
        {
            name: 'Дэдпул',
            imgSrc: 'deadpool'
        },
        {
            name: 'Колосс',
            imgSrc: 'colossus'
        },
        {
            name: 'Магнето',
            imgSrc: 'magneto'
        },
        {
            name: 'Зверь',
            imgSrc: 'beast'
        },
        {
            name: 'Мистерио',
            imgSrc: 'mysterio'
        },
        {
            name: 'Доктор Осьминог',
            imgSrc: 'dr-octopus'
        },
        {
            name: 'Железный Кулак',
            imgSrc: 'iron-fist'
        },
        {
            name: 'Песочный Человек',
            imgSrc: 'sandman'
        },
        {
            name: 'Зелёный Гоблин',
            imgSrc: 'green-goblin'
        },
        {
            name: 'Веном',
            imgSrc: 'venom'
        },
        {
            name: 'Ящер',
            imgSrc: 'lizard'
        },
        {
            name: 'Электро',
            imgSrc: 'electro'
        },
        {
            name: 'Стервятник',
            imgSrc: 'vulture'
        },
        {
            name: 'Шури',
            imgSrc: 'shuri'
        },
        {
            name: 'Джаггернаут',
            imgSrc: 'juggernaut'
        },
        {
            name: 'Человек-Муравей',
            imgSrc: 'ant-man'
        },
        {
            name: 'Оса',
            imgSrc: 'wasp'
        },
        {
            name: 'Капитан Марвел',
            imgSrc: 'captain-marvel'
        },
        {
            name: 'Морбиус',
            imgSrc: 'morbius'
        },
        {
            name: 'Лунный Рыцарь',
            imgSrc: 'moon-knight'
        },
        {
            name: 'Мистер Фантастик',
            imgSrc: 'mr-fantastic'
        },
        {
            name: 'Существо',
            imgSrc: 'thing'
        },
        {
            name: 'Женщина-Невидимка',
            imgSrc: 'invisible-woman'
        },
        {
            name: 'Человек-Факел',
            imgSrc: 'human-torch'
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
