import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCardComponent } from './hero-card/hero-card.component';



@NgModule({
  declarations: [
    HeroesPageComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
