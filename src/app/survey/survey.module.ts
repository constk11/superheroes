import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyPageComponent } from './components/survey-page/survey-page.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyPopupComponent } from './components/survey-popup/survey-popup.component';
import { AnswersComponent } from './components/answers/answers.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerTextPipe } from './pipes/answer-text.pipe';
import { AnswerValuePipe } from './pipes/answer-value.pipe';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';
import { HeroesModule } from '../heroes/heroes.module';



@NgModule({
  declarations: [
    SurveyPageComponent,
    SurveyPopupComponent,
    AnswersComponent,
    AnswerTextPipe,
    AnswerValuePipe,
    SurveyResultComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    HttpClientModule,
    HeroesModule
  ]
})
export class SurveyModule { }
