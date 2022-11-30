import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'survey',
        pathMatch: 'full'
    },
    {
        path: 'survey',
        loadChildren: () => import('./survey/survey.module').then(module => module.SurveyModule)
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.module').then(module => module.HeroesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
