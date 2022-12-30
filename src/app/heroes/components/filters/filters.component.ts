import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../../models/filters';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    animations: [
        trigger('dropdown', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('300ms ease-in-out', style({ opacity: 0 }))
            ]),
        ])
    ]
})
export class FiltersComponent implements OnInit {

    @Input()
    public filterOptions: Filter[] = [];

    public isOpen = false;

    @Input()
    public defaultFiltersSetter!: EventEmitter<void>;

    @Output()
    public readonly selectedFilter = new BehaviorSubject<Filter | null>(null);

    @HostListener('document:click', ['$event'])
    public outsideClick(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }

    constructor(
        private readonly eRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.selectedFilter.next(this.filterOptions[0]);

        this.defaultFiltersSetter.subscribe(() => this.selectedFilter.next(
            this.filterOptions[0]
        ));
    }

    public selectFilter(filterValue: Filter): void {
        this.selectedFilter.next(filterValue);
        this.isOpen = false;
    }

}
