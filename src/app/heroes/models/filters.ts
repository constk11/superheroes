export interface Filter {
    text: string,
    value: string
}

export const SEX_FILTERS: Filter[] = [
    {
        text: 'Все',
        value: 'all'
    },
    {
        text: 'Мужчины',
        value: 'm'
    },
    {
        text: 'Женщины',
        value: 'w'
    },
];

export const SQUAD_FILTERS: Filter[] = [
    {
        text: 'Все',
        value: 'all'
    },
    {
        text: 'Мстители',
        value: 'avengers'
    },
    {
        text: 'Люди Икс',
        value: 'x-men'
    },
    {
        text: 'Стражи Галактики',
        value: 'galaxy-guardians'
    },
    {
        text: 'Фантастическая Четвёрка',
        value: 'fantastic-four'
    },
    {
        text: 'Без отряда',
        value: 'none'
    },
];

export const POSITION_FILTERS: Filter[] = [
    {
        text: 'Все',
        value: 'all'
    },
    {
        text: 'Герои',
        value: 'goodness'
    },
    {
        text: 'Злодеи',
        value: 'evil'
    },
    {
        text: 'Нейтральные',
        value: 'neutral'
    },
];