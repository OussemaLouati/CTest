import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {RestService} from '../rest.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]

}) 

export class LoginComponent implements OnInit {
  list:any;
  idUser:any;
    constructor(private router: Router, public param: ActivatedRoute,private userService: UserService ,private rest: RestService) { }
    model ={
      email :'',
      password:''
    };
    // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // serverErrorMessages: string;
    ngOnInit() {
      this.rest.getID(this.model.email).subscribe(res => {
        console.log(res);
        this.list = res;
        console.log("id"+this.list);
        this.idUser=this.list;
        console.log("user"+this.idUser);
        localStorage.getItem('currentUser');
        if(this.userService.isLoggedIn())
          this.router.navigateByUrl('/homeC');
        window.location.reload();
      });
  
    }
    getId(){
      this.rest.getID(this.model.email).subscribe(res => {
        console.log(res);
        this.list = res;
        console.log("id"+this.list);
  this.idUser=this.list;
  console.log("user"+this.idUser);
      });}
    onSubmit(form : NgForm){
      this.userService.login(form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.rest.getID(this.model.email).subscribe(res => {
            console.log(res);
            this.list = res;
            console.log("id"+this.list);
            this.idUser=this.list;
            console.log("userttt"+this.idUser);
              console.log("test"+this.idUser);
              if(this.list.typeUser == "candidat") {
                localStorage.setItem('idUser', this.list._id);
                this.router.navigateByUrl('/homeC');
              }
              else
                this.router.navigateByUrl('/homeA');
            },
          //   err => {
          //     this.serverErrorMessages = err.error.message;
          // }
          );
  
  
  
        }
      );
    }
    
    
  }
  