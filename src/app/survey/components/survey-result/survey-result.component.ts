import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/heroes/models/hero';

@Component({
    selector: 'app-survey-result',
    templateUrl: './survey-result.component.html',
    styleUrls: ['./survey-result.component.scss'],
    animations: [
        trigger('results', [
            transition(':enter', [
                style({'max-height': '0'}),
                animate('600ms ease-out', style({
                    'max-height': 'calc(50vh + 200px + 60px - 120px)'
                }))
            ]),
            transition(':leave', [
                style({'max-height': 'calc(50vh + 200px + 60px - 120px)'}),
                animate('600ms ease-out', style({
                    'max-height': '0'
                }))
            ])
        ]),
        trigger('noResults', [
            transition(':enter', [
                style({'height': '0'}),
                animate('300ms ease-out', style({
                    'height': '70px'
                }))
            ]),
            transition(':leave', [
                style({'height': '70px'}),
                animate('300ms ease-out', style({
                    'height': '0'
                }))
            ])
        ]),
    ]
})
export class SurveyResultComponent {

    @Input()
    public heroes: Hero[] = [];

    public show = false;

    constructor() { }

}
