import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import{ QuizService } from './../service/quiz.service';
import { quiz } from './../Models/quiz';
import { choix } from './../Models/choix';
 import { Router } from '@angular/router'; 




@Component({
  selector: 'app-quiz-c',
  templateUrl: './quiz-c.component.html',
  styleUrls: ['./quiz-c.component.scss']
})
export class QuizCComponent implements OnInit {
  // quizs$;
  public Quiz:quiz[];
  public choix :choix[];
  public quiz :quiz[];
  public quizPos = 0;
  public score = 0;
  public reponseCandidat = [];
  public notes = [];
  public back = false;


  //Timer-----------------

  private wordSuccess = 3 ;
  private minutes = 20;
  private seconds = 0 ; 
  private wordSolution="";
  private firstLetter="";
  private secondsWord = 30;
  private word ="C";
  private numberWord = 1 ;

  private min = "08";
  private sec = "00" ; 
  private secWord = "20" ; 
  private positionpost = 1 ;
  private user ="";
  private stopFactor = 1 ;
  ticks =0;

  //----------------------
  constructor(  private QuizService: QuizService ,private router: Router) {
    this.quiz = [];
  }
   

   ngOnInit(){ 
    let timer = Observable.timer(0,1000); // https://stackoverflow.com/questions/35813310/how-to-create-timer-in-angular2
    timer.subscribe(t=> {
      this.ticks = t;
      this.CountdownGame();
      this.show();
      
    });

     this.quiz = this.QuizService.Quiz;
     console.log(this.quiz.length);
    // this.getQuestion();
    }

      


  CountdownGame(): void {
    if (this.stopFactor > 0){
      
        if (this.seconds > 0)
        this.seconds-- ;
        else 
        {
        this.seconds = 59 ;
        this.minutes--;
        }
        
        if(this.minutes<0) {
          this.stopFactor = 0;
          this.seconds *= this.stopFactor;
          this.minutes = 0;
        }
      }else { 
        this.envoyerRes();
      }
  }


 
 show():void {
    if (this.secondsWord > 9)
    this.secWord = String(this.secondsWord) ; 
    else 
    this.secWord = "0" +String(this.secondsWord) ; 
    
    
    if (this.seconds > 9)
    this.sec = String(this.seconds) ; 
    else 
    this.sec = "0" + String(this.seconds) ; 
    
    if (this.minutes > 9)
    this.min = String(this.minutes) ; 
    else 
    this.min = "0" +String(this.minutes) ; 
 }

 
/**
 * next
 */
public next() {
  this.comparerRep();
  if(this.quizPos+1 < this.quiz.length) {
    this.quizPos++;
  }else {
    console.log(this.score);
    this.envoyerRes();
  }
}
 

/**
 * pre
 */
public pre() {
  if(this.quizPos > 0) {
    this.quizPos--;
    this.back =true;  
    this.reponseCandidat = this.notes[this.quizPos].reponse;
    this.score = this.score- this.notes[this.quizPos].note;
    console.log(this.score);
    console.log("position Pre",this.quizPos);
  }
}

/**
 * detecterRep
 */
public detecterRep(event, idChoix) {
  
  if(event.target.checked) {
    console.log("true");
    this.reponseCandidat.push(idChoix);
  }else{
    console.log("false");
    if(this.reponseCandidat.includes(idChoix)) {
      for(let i=0; i<this.reponseCandidat.length; i++) {
        if(this.reponseCandidat[i]== idChoix) {
          this.reponseCandidat.splice(i, 1);
          break;
        }
      }
    }
  }
  console.log(this.reponseCandidat);
}

/**
 * comparer
 */
public comparerRep() {

  var note;
  var pourcentageChoix =  1 / this.quiz[this.quizPos]["reponse"].length;;

  if(this.quiz[this.quizPos]["reponse"].length == this.reponseCandidat.length) {
    note = 1;
  
    for(let i=0; i<this.reponseCandidat.length;i++){
      if(this.quiz[this.quizPos]["reponse"].includes(this.reponseCandidat[i])==false){
        note= note-pourcentageChoix;
      }
    }

  }else if(this.quiz[this.quizPos]["reponse"].length > this.reponseCandidat.length) {

    note = 0;

    for(let i=0; i<this.quiz[this.quizPos]["reponse"].length;i++){
      
      if(this.reponseCandidat.includes(this.quiz[this.quizPos]["reponse"][i])==true){

        note= note+pourcentageChoix;
      }
    }

  }else {
    note = 0;
  }

  var reponseQ = {
    "position": this.quizPos,
    "note": note,
    "reponse": this.reponseCandidat
  }

  for(let i=0;i<this.notes.length;i++){
    if(this.quizPos == this.notes[i].position) {
      this.notes.splice(i,1);
    }
  }

  console.log("Old",this.notes);

  this.notes.push(reponseQ);

  this.score = this.score+ note;

  console.log("New",this.notes);

  console.log("Note Question",note);
  console.log("Note Total",this.score);

  this.reponseCandidat = [];
}

  /**
   * envoyerRes
   */
  public envoyerRes(): void {
    console.log("From Envey res:",this.score);
    this.QuizService.saveResultat(this.score).subscribe(response => {
      this.router.navigate(['/']);
    });
  }


/**
 * oldResponse
 */
public oldResponse(id) {
  return this.notes.length && this.notes[this.quizPos]["reponse"].includes(id);
}

}
