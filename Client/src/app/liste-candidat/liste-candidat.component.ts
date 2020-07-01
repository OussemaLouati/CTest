import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { User } from './../Models/user';
import{ UserService } from './../service/user.service';

@Component({
  selector: 'app-liste-candidat',
  templateUrl: './liste-candidat.component.html',
  styleUrls: ['./liste-candidat.component.scss']
})
export class ListeCandidatComponent implements OnInit {

  private listeCandidats: User[];
  constructor(private http: HttpClient, private userService: UserService ,private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }


  /**
   * getAllUsers
   */
  public getAllUsers(): Observable<User[]> {
    this.http.get<User[]>(this.userService.ServeurUrl+'/api/getAllUsers').subscribe( response => {
      this.listeCandidats = response;
      console.log(this.listeCandidats);
    })
    return;
  }
}
