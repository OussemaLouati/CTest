import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Injectable()
export class RestService {

  toDoList:any;
  constructor(public http:HttpClient) { }
  addUser(user) {

    console.log(JSON.stringify(user));
    return this.http.post("http://localhost:1337/api/register", JSON.stringify(user));

  }


  // getProfil(id) {
  //   return this.http.get("http://localhost:1337/api/userId/" + id)
  // }
  getID(email) {
    return this.http.get("http://localhost:1337/api/userEmail/" + email)
  }

  
  getAllUsers(){
    return  this.http.get("http://localhost:1337/api/getAllUsers ")
  }
}
