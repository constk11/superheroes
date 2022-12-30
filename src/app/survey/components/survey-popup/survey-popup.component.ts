import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/models/hero';
import { environment } from 'src/environments/environment';
import { QuestionOption, QUESTION_OPTIONS } from '../../models/questions';
import { Answer, SurveyForm } from '../../models/survey-form';
import { lastValueFrom } from 'rxjs';


@Component({
    selector: 'app-survey-popup',
    templateUrl: './survey-popup.component.html',
    styleUrls: ['./survey-popup.component.scss'],
    animations: [
        trigger('notFullyForm', [
            transition(':enter', [
                style({ opacity: 0}),
                animate('600ms ease-in', style({
                    opacity: 1,
                }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('600ms ease-in', style({
                    opacity: 0
                }))
            ]),
        ])
    ]
})
export class SurveyPopupComponent implements OnInit {

    @Output()
    public readonly closure = new EventEmitter<void>();

    private readonly questionOptions: QuestionOption[] = QUESTION_OPTIONS;

    public currentQuestion = this.questionOptions[0];

    public surveyForm: Partial<SurveyForm> = {};

    private userCharacteristics: any = {};

    private userAnswers: any = {};

    public heroes: Hero[] = [];

    public resultHeroes: Hero[] = [];

    public isFullyForm = false;

    @Output()
    public readonly result = new EventEmitter<Hero>();

    constructor(
        private readonly http: HttpClient
    ) { }

    public async ngOnInit(): Promise<void> {
        this.heroes = Object.values(await lastValueFrom(this.http.get(`${environment.url}/heroes.json`)))[0];
    }

    public back(): void {
        this.currentQuestion = this.questionOptions[
            this.questionOptions.indexOf(this.currentQuestion) - 1
        ];
    }

    public next(): void {
        if (this.questionOptions.indexOf(this.currentQuestion) === 22) {
            return;
        }
        this.currentQuestion = this.questionOptions[
            this.questionOptions.indexOf(this.currentQuestion) + 1
        ];
        const answers = document.querySelector('app-answers');
        answers?.scrollTo(0, 0);
    }

    public complete(): void {
        if (Object.keys(this.surveyForm).length !== 23) {
            this.isFullyForm = true;
            setTimeout(() => {
                this.isFullyForm = false;    
            }, 5000);
            return;
        }
        this.userAnswers.superhero = this.resultHeroes[0].superhero;
        this.result.emit(this.resultHeroes[0]);
        this.http.post(`${environment.url}/answers.json`, this.userAnswers).subscribe();
        this.closure.emit();
    }

    public onAnswerSelected(answers: Record<string, Answer>) {
        this.surveyForm = { 
            userName: this.surveyForm.userName,
            ...answers
        };
        this.userAnswers = {};
        this.userCharacteristics = {};
        
        for (const [key, value] of Object.entries(this.surveyForm)) {
            if (key === 'userName') {
                this.userAnswers[key] = value;
            } else if (Array.isArray(value)) {
                this.userAnswers[key] = value.map(answer => Object.keys(answer)[0])
                this.userCharacteristics[key] = value.map(answer => Object.values(answer)[0]);
            } else {
                this.userAnswers[key] = Object.keys(value)[0];
                this.userCharacteristics[key] = Object.values(value)[0];
            }
        }

        if (Object.keys(this.userCharacteristics).length === 0) {
            this.resultHeroes = [];
        } else {
            this.calculateHeroes();
        }
    }

    public onUserNameInput(userName: string): void {
        this.surveyForm.userName = userName;
    }


    private calculateHeroes(): void {
        this.resultHeroes = this.heroes;
        this.resultHeroes.forEach(hero => hero.score = 0)

        for (const [charachteristic, value] of Object.entries(this.userCharacteristics)) {
            if (charachteristic === 'sex') {
                this.resultHeroes = this.resultHeroes.filter(hero => hero.sex === value);
                this.resultHeroes.forEach(hero => (hero.score as number) += 1);
            }
            if (this.isMultiple(charachteristic)) {
                this.resultHeroes.forEach(hero => {
                    const key = charachteristic as keyof typeof hero;
                    if (!Array.isArray(hero[key])) {
                        if (!hero[key]) {
                            hero[key] = 'none' as never;
                        } else {
                            hero[key] = [hero[key]] as never;
                        }
                    }
                    if ((value as string[])[0] === 'pacifist' && hero[key] === 'pacifist') {
                        (hero.score as number) += this.getQuestionWeight(charachteristic);
                    } else if ((value as string[])[0] === 'none' && charachteristic === 'color') {
                        (hero.score as number) += this.getQuestionWeight(charachteristic);
                    } else if ((value as string[])[0] !== 'none' && charachteristic === 'color' && hero[key] === 'none') {
                        (hero.score as number) += this.getQuestionWeight(charachteristic);
                    } else if ((value as string[])[0] === 'none' && charachteristic === 'superpower' && hero[key]==='none') {
                        (hero.score as number) += this.getQuestionWeight(charachteristic);
                    } else {
                        if (!Array.isArray(hero[key])) {
                            hero[key] = [hero[key]] as never;
                        }
                        const matchingArray = (hero[key] as string[]).filter(
                            val => (value as string[]).includes(val)
                        );
                        if ((value as string[]).length >= (hero[key] as string[]).length) {
                            (hero.score as number) += 
                                +((matchingArray.length / (value as string[]).length) 
                                    * this.getQuestionWeight(charachteristic)).toFixed(2);
                        } else {
                            (hero.score as number) += 
                                +((matchingArray.length / (hero[key] as string[]).length) 
                                    * this.getQuestionWeight(charachteristic)).toFixed(2);
                        }
                    }

                });
            } else if (charachteristic !== 'sex') {
                this.resultHeroes.forEach(hero => {
                    if (hero[charachteristic as keyof typeof hero] === `${value}` 
                        || hero[charachteristic as keyof typeof hero] === 'none') {
                        (hero.score as number) += this.getQuestionWeight(charachteristic);
                    }
                });
            }
        }

        this.resultHeroes = this.resultHeroes.sort((hero1, hero2) => (hero2.score as number) - (hero1.score as number));
    }

    private getQuestionWeight(charachteristic: string): number {
        const question = this.questionOptions.find(
            questionOption => questionOption.charachteristic === charachteristic
        );
        return question?.weight as number;
    }

    private isMultiple(charachteristic: string): boolean {
        return !!this.questionOptions.find(
            option => option.charachteristic === charachteristic
        )?.multiple;
    }

}
