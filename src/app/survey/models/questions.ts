export enum SurveyState {
    Next = 'next',
    Back = 'back',
    Cancel = 'cancel'
}

export interface QuestionOption {
    number: number,
    text: string,
    answers: string[] | number[]
}

export const QUESTION_OPTIONS: QuestionOption[] = [
    {
        number: 1,
        text: 'Укажите пол',
        answers: ['Мужской', 'Женский']
    },
    {
        number: 2,
        text: 'Укажите цвет глаз',
        answers: ['Карие', 'Чёрные']
    },
    {
        number: 3,
        text: 'Укажите цвет волос',
        answers: ['Блондин', 'Шатен']
    },
];