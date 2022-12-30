import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';



@NgModule({
    declarations: [
        HeroesPageComponent,
        HeroCardComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        HttpClientModule
    ],
    exports: [
        HeroCardComponent
    ]
})
export class HeroesModule { }
