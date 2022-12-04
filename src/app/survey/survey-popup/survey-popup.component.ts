import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionOption, SurveyState } from '../models/questions';

@Component({
    selector: 'app-survey-popup',
    templateUrl: './survey-popup.component.html',
    styleUrls: ['./survey-popup.component.scss'],
})
export class SurveyPopupComponent implements OnInit {

    @Input()
    public questionOption?: QuestionOption;

    public readonly SurveyState = SurveyState;

    @Output()
    public surveyState = new EventEmitter<SurveyState>();

    constructor() { }

    ngOnInit(): void {
    }

    public close() {
        this.surveyState.emit(SurveyState.Cancel);
    }

    public back() {
        this.surveyState.emit(SurveyState.Next);
    }

}
