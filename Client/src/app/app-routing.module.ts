import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeCComponent} from './home-c/home-c.component';
import { HomeAComponent } from './home-a/home-a.component';
import { QuizAComponent } from './quiz-a/quiz-a.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ListeCandidatComponent} from './liste-candidat/liste-candidat.component';
const routes: Routes = [
  { path: '', redirectTo: 'homeC', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homeC', component: HomeCComponent },
  { path: 'homeA', component: HomeAComponent },
  { path: 'quizA', component: QuizAComponent},
  { path: 'quizC', component: QuizCComponent },
  { path: 'Resultat', component: ResultatComponent },
  { path: 'liste-candidats', component: ListeCandidatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
