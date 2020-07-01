import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router} from '@angular/router';

import{ QuizService } from './../service/quiz.service';
import { quiz } from './../Models/quiz';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.scss']
})
export class HomeCComponent implements OnInit {


  constructor(private QuizService: QuizService, private route: Router) { }

  ngOnInit() {
  }


  getQuiz(categorie):void{
    this.QuizService.getQuestionsCategorie(categorie).subscribe(( QuestionResponse :HttpResponse<quiz[]>)=> {
      this.QuizService.Quiz=QuestionResponse.body
      console.log('quiz table ',this.QuizService.Quiz);
      this.getTestId(categorie);
      this.route.navigate(['/quizC']);
    });
  }


  getTestId(categorie): void {
    this.QuizService.getTestId(categorie).subscribe(response => {
      console.log("Test id", response.body[0]["_id"]);
      this.QuizService.id_test = response.body[0]["_id"];
    });
  }

}
