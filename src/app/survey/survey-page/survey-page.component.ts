import { transition, animate, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QuestionOption, QUESTION_OPTIONS, SurveyState } from '../models/questions';

@Component({
    selector: 'app-survey-page',
    templateUrl: './survey-page.component.html',
    styleUrls: ['./survey-page.component.scss'],
    animations: [
        trigger('popup', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translate(-50%, calc(-50% - 150px))' }),
                animate('300ms ease-out', style({
                    opacity: 1, 
                    transform: 'translate(-50%, -50%)'
                }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('100ms ease-out', style({
                    opacity: 0,
                    transform: 'translate(-50%, calc(-50% + 50px))'
                }))
            ]),
        ]),
        trigger('button', [
            transition(':enter', [
                style({ opacity: 0,}),
                animate('300ms ease-out', style({opacity: 1}))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('200ms ease-out', style({opacity: 0}))
            ]),
        ])
    ]
})
export class SurveyPageComponent implements OnInit {

    public readonly questionOptions = QUESTION_OPTIONS;

    public currentQuestion: QuestionOption | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    public openSurvey() {
        this.currentQuestion = this.questionOptions[0];
    }

    public setCurrentQuestion(state: SurveyState) {
        if (state === SurveyState.Cancel) {
            this.currentQuestion = null;
            return;
        }
        if (state === SurveyState.Back) {
            this.currentQuestion = this.questionOptions[
                this.questionOptions.indexOf(this.currentQuestion!) - 1
            ];
            return;
        }
        if (state === SurveyState.Next) {
            this.currentQuestion = this.questionOptions[
                this.questionOptions.indexOf(this.currentQuestion!) + 1 
            ];
            return;
        }
    }

}
