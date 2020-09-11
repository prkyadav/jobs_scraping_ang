import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

//import { ToastrService } from "ngx-toastr";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form_login: FormGroup;

  loginForm: any;
  errorMsg: any;

  constructor(
    private formBuilder: FormBuilder, private _loginService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    / Form Validators /
    this.form_login = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}"),
      ]),
    });
  }

  get username() {
    return this.form_login.get("username");
  }

  get password() {
    return this.form_login.get("password");
  }

  submit_login() {
    console.log(this.form_login.value.username);
    //alert(this.form_login.value);
    this._loginService.login(this.form_login.value.username,this.form_login.value.password)
      .subscribe(
        (res) => {
          this.router.navigateByUrl("dashboard/scrape");
        },
        (error) => {
          console.log(error);
          console.log("Pravin----");
        }
      );
  }
}
