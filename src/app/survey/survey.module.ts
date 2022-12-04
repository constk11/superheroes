import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyPopupComponent } from './survey-popup/survey-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SurveyPageComponent,
    SurveyPopupComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule { }
