import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionOption } from '../../models/questions';
import { Answer } from '../../models/survey-form';

@Component({
    selector: 'app-answers',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.scss'],
    animations: [
        trigger('userNameError', [
            transition(':enter', [
                style({ opacity: 0}),
                animate('200ms ease-in', style({
                    opacity: 1,
                }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('200ms ease-in', style({
                    opacity: 0
                }))
            ]),
        ])
    ]
})
export class AnswersComponent {

    @Input()
    public multiple?: boolean = false;

    @Input()
    public questionOption!: QuestionOption;

    @Input()
    public max?: number;

    @Output()
    public readonly userName = new EventEmitter<string>();

    public enteredUserName = '';

    private readonly selectedAnswerOption: Record<string, Answer> = {};

    @Output()
    public readonly selectedAnswers = new EventEmitter<Record<string, Answer>>();

    @Output()
    public readonly next = new EventEmitter<void>();

    public showUserNameError = false;

    constructor() { }

    private nextQuestion(): void {
        setTimeout(() => {
            this.next.emit(); 
         }, 500);
    }

    public onAnswerClick(answer: Answer): void {
        const charachteristic = this.questionOption.charachteristic;
        if (!this.selectedAnswerOption[charachteristic]) {
            if (this.multiple) {
                this.selectedAnswerOption[charachteristic] = [answer as Record<string, string | number>];
            } else {
                this.selectedAnswerOption[charachteristic] = answer;
                this.nextQuestion();
            }
        } else if (this.multiple) {
            this.onMultipleSelecting(answer, charachteristic);
        } else {
            this.onSingleSelecting(answer, charachteristic);
        }

        this.selectedAnswers.emit(this.selectedAnswerOption);
    }

    private onMultipleSelecting(answer: Answer, charachteristic: string): void {
        let answers = this.selectedAnswerOption[charachteristic] as Record<string, string | number>[];
        if (!!answers.find(
            selectedAnswer => JSON.stringify(selectedAnswer) === JSON.stringify(answer)
        )) {
            answers.splice(answers.indexOf(answer as Record<string, string | number>), 1);
            this.selectedAnswerOption[charachteristic] = answers;
            if (this.selectedAnswerOption[charachteristic].length === 0) {
                delete this.selectedAnswerOption[charachteristic];
            }            
            return;
        }
        if (answers.length === this.max!) {
            return;
        }
        answers.push(answer as Record<string, string | number>);
        this.selectedAnswerOption[charachteristic] = answers;
    }

    private onSingleSelecting(answer: Answer, charachteristic: string): void {
        const selectedAnswer = this.selectedAnswerOption[charachteristic];
        if (JSON.stringify(selectedAnswer) === JSON.stringify(answer)) {
            return;
        }
        this.selectedAnswerOption[charachteristic] = answer;
        this.nextQuestion();
    }

    public isAnswerSelected(answer: Answer): boolean {
        const charachteristic = this.questionOption.charachteristic;
        if (!this.selectedAnswerOption[charachteristic]) {
            return false;
        }
        if (this.multiple) {
            return !!(this.selectedAnswerOption[charachteristic] as Record<string, string | number>[]).find(
                selectedAnswer => JSON.stringify(selectedAnswer) === JSON.stringify(answer) 
            );
        }
        return JSON.stringify(this.selectedAnswerOption[charachteristic]) === JSON.stringify(answer)
    }

    public setName(event: Event): void {
        const userName = (event.target as HTMLInputElement).value
        this.enteredUserName = userName;
        this.userName.emit(userName);
        this.showUserNameError = false;
    }

    public checkDisabling(answer: Answer): boolean {
        const value = Object.values(answer)[0] as string;

        if (!this.questionOption.multiple) {
            return false;
        }

        if (Object.keys(this.selectedAnswerOption).length === 0
            || !this.selectedAnswerOption[this.questionOption.charachteristic]
            || !Object.values(this.selectedAnswerOption[this.questionOption.charachteristic]) 
            || Object.values(this.selectedAnswerOption[this.questionOption.charachteristic]).length === 0) {
            return false;
        }

        if (value === 'pacifist' 
            && !(this.selectedAnswerOption[this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'pacifist')) {
            
            return true;
        }
        if (value !== 'pacifist' 
            && !!(this.selectedAnswerOption[this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'pacifist')) {
            
            return true;
        }

        if (this.questionOption.charachteristic === 'superpower') {
            if (value === 'none'
                && !(this.selectedAnswerOption[
                    this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'none')) {
                    return true;
                }
            if (value !== 'none'
                && !!(this.selectedAnswerOption[this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'none')) {
                    return true;
                }
        }

        if (this.questionOption.charachteristic === 'color') {
            if (value === 'none'
                && !(this.selectedAnswerOption[
                    this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'none')) {
                    return true;
                }
            if (value !== 'none'
                && !!(this.selectedAnswerOption[this.questionOption.charachteristic] as Record<string, string | number>[])
                .find(answer => Object.values(answer)[0] === 'none')) {
                    return true;
                }
        }

        return false;
    }
}
