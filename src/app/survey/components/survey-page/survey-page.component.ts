import { transition, animate, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Hero } from 'src/app/heroes/models/hero';

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
        ]),
        trigger('result', [
            transition(':enter', [
                style({ opacity: 0,}),
                animate('300ms ease-out', style({opacity: 1}))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('200ms ease-out', style({opacity: 0}))
            ]),
        ]),
    ]
})
export class SurveyPageComponent {

    public isSurveyOpen = false;

    public result?: Hero;

    constructor() {}
}
