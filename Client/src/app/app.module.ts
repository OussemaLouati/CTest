import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeCComponent } from './home-c/home-c.component';
import { HomeAComponent } from './home-a/home-a.component';
import { QuizAComponent } from './quiz-a/quiz-a.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { CommonModule } from '@angular/common';
import { RestService } from './rest.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { UserService } from './service/user.service';
import { QuizService } from './service/quiz.service';


import { FormsModule } from '@angular/forms';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeCComponent,
    HomeAComponent,
    QuizAComponent,
   
    ResultatComponent,
    QuizCComponent,
    ListeCandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // HttpClient,
    CommonModule,
    RouterModule.forRoot([{path:"login", component:LoginComponent}]),
   

  
    // RouterModule.forRoot(Router)
  


  ],
  providers: [
    UserService,
    QuizService,
    HttpClientModule ,RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
