import { Component, OnInit } from '@angular/core';
import{ QuizService } from './../service/quiz.service';

@Component({
  selector: 'app-quiz-a',
  templateUrl: './quiz-a.component.html',
  styleUrls: ['./quiz-a.component.scss']
})
export class QuizAComponent implements OnInit {

  private nouveauQuestion = {
    "categorie": "",
    "question": "",
    "choix": [
      {"id": 1,"choix": ""},
      {"id": 2,"choix": ""},
      {"id": 3,"choix": ""},
      {"id": 4,"choix": ""},
    ],
    "reponse": []
  };

  constructor(private QuizService: QuizService) { }

  ngOnInit() {}

  /**
   * changeState
   */
  public changeState(event) {
    this.nouveauQuestion.categorie = event;
  }
  /**
   * enregisterCorrectesReponse
   */
  public enregisterCorrectesReponse(event,choix) {
    if(event.target.checked){ 
        this.nouveauQuestion.reponse.push(choix);
    }else {
      var position = this.nouveauQuestion.reponse.indexOf(choix);
      if(position != -1) {
        this.nouveauQuestion.reponse.splice(position, 1);
      }
    }
  }
 
  /**
   * ajouterQuestion
   */
  public ajouterQuestion() {
    console.log(this.nouveauQuestion);
    this.QuizService.ajouterquestion(this.nouveauQuestion).subscribe(data =>console.log( 'Question a été ajouté avec  success !'),
      error => {console.log( 'ajout quiz  failed');});
  }
}
