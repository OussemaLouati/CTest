import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {  Subject } from 'rxjs';

import { quiz } from './../Models/quiz';

import { choix } from './../Models/choix';

import { Observable } from 'rxjs';

//import { config } from 'rxjs';
// import { config } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {
    Quiz:quiz[];
    
    public id_test;

    ServeurUrl ="http://localhost:3000";
    constructor(private http: HttpClient) {}


    // register(user: User) {
    //     return this.http.post(`${config.apiUrl}/users/register`, user);
    // }

// getAll():Observable<quiz[]>{
//  return this.http.get<Quiz>(this.ServeurUrl);
// }
 
    public getQuestions(): Observable <HttpResponse<quiz[]>> {
        return this.http.get<quiz[]>(`${this.ServeurUrl}/questions`, {observe :'response'}); 
    }

    public getQuestionsCategorie(categorie: string): Observable <HttpResponse<quiz[]>> {
        return this.http.get<quiz[]>(`${this.ServeurUrl}/questions/${categorie}/${localStorage.getItem('idUser')}`,  {observe :'response'}); 
    }

    public getQuestionsChoix(id: string): Observable <HttpResponse<choix[]>> {
        return this.http.get<choix[]>(`${this.ServeurUrl}/choix/${id}`,  {observe :'response'}); 
    }

    public ajouterquestion(nouveauQuestion) {
        return this.http.post(`${this.ServeurUrl}/questions`, nouveauQuestion  );
    }


    public getTestId(categorie) {
        return this.http.get(`${this.ServeurUrl}/test/${categorie}/${localStorage.getItem('idUser')}`,  {observe :'response'}); 
    }

    public saveResultat(score) {
        return this.http.put(`${this.ServeurUrl}/test/${this.id_test}/${score}`,  {observe :'response'}); 
    }

    private quiztable :quiz[] =[];
    subject =new Subject<quiz[]>();

    sendquiz(quiztable) {
        this.subject.next(quiztable);
    }
    getQuizz(): Observable<any> {
        return this.subject.asObservable();
    }


    // public CreateQuestions(){
    //    // return this.http.get<quiz[]>('${this.ServeurUrl}/question', {observe :'response'}); 
    // }

}