import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { UserService } from './../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private UserService :UserService, private router: Router) { }

  ngOnInit() {}

  user:User

  onSubmit(type,email,password) {
    console.log("typ",type,password,email)
     this.user =new User(type,email,password);


    this.UserService.register(this.user).subscribe(
            data => {
              alert( 'Registration successful');
              this.router.navigate(['/liste-candidats']);
            },
            error => {
              alert( 'Registration failed');
            });
}

}
