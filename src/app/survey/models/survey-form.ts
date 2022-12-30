export interface SurveyForm {
    userName?: string,
    sex: string
    eyes: string
    hair: string
    musculature: number
    military: string
    fighting: number
    intelligence: number
    technologies: string
    humor: number
    weapon: string[]
    origin: string
    teamwork: number
    superpower: string[]
    coolness: string
    irritability: string
    seriousness: string
    color: string[]
    transport: string | string[]
    specialization: string
    leadership: string
    titanic: string
    forgiveness: string
}

export type Answer = Record<string, string | number> | Record<string, string | number>[];