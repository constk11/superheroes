import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map, Observable, combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { POSITION_FILTERS, SEX_FILTERS, SQUAD_FILTERS } from '../../models/filters';
import { Hero } from '../../models/hero';


@Component({
    selector: 'app-heroes-page',
    templateUrl: './heroes-page.component.html',
    styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

    public heroes: Hero[] = [];

    public readonly sexFilters = SEX_FILTERS;
    
    public readonly squadFilters = SQUAD_FILTERS;
    
    public readonly positionFilters = POSITION_FILTERS;

    public readonly sex = new BehaviorSubject<string>('all');

    public readonly squad = new BehaviorSubject<string>('all');

    public readonly position = new BehaviorSubject<string>('all')
    
    public readonly filteredHeroes: Observable<Hero[]> = combineLatest(
        this.sex,
        this.squad,
        this.position
    ).pipe(
        map(([sex, squad, forgiveness]) => {
            return this.heroes.filter(hero => {
                const filters = {sex, squad, forgiveness};
                for (const [key, value] of Object.entries(filters)) {
                    if (value !== 'all' && value !== hero[key as keyof typeof hero]) {
                        return false;
                    }
                }
                return true;
            })
        })
    );

    public readonly defaultFiltersSetter = new EventEmitter<void>();

    constructor(
        private readonly http: HttpClient
    ) { }

    public async ngOnInit(): Promise<void> {
        this.heroes = await lastValueFrom(this.http.get(`${environment.url}/heroes.json`).pipe(
            map(obj => Object.values(obj)[0])
        ));
        this.setDefaultFilters();
    }

    public setDefaultFilters(): void {
        this.sex.next('all');
        this.squad.next('all');
        this.position.next('all');
        this.defaultFiltersSetter.emit();
    }

    public onHeroClick(url: string): void {
        window.open(url, '_blank');
    }

}
