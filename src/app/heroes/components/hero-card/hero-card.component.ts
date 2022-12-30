import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {

    @Input()
    public hero!: Hero;

    @Input()
    public similarityScore?: number;

    @Input()
    public isResultList = false;

    constructor() { }

}
