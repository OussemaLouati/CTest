import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { shareReplay } from 'rxjs/operators';
import {NgForm} from '@angular/forms';

import { generate } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent {

 private wordSuccess = 3 ;
 private minutes = 8;
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

  ngOnInit() 
{ 
  let timer = Observable.timer(0,1000); // https://stackoverflow.com/questions/35813310/how-to-create-timer-in-angular2
  timer.subscribe(t=> {
    this.ticks = t;
    this.CountdownGame();
    this.show();
    
});




}


CountdownGame(): void
{
  if (this.stopFactor > 0)
  {
  if (this.seconds > 0)
  this.seconds-- ;
  else 
  {
  this.seconds = 59 ;
  this.minutes--;
  }
 
  if(this.minutes<0) 
  {
this.stopFactor = 0;
this.seconds *= this.stopFactor;
this.minutes = 0;
}
}
}

show():void
{
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

}