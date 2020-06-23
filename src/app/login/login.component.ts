import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetailsForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private service:LoginService) { }

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{4,8}')
      ]]

    });


  }
  loginUser() {
    if(sessionStorage.getItem('username'))
    {
    return true;
    }
    else
    {
    this. router.navigate(['']);
    }

    if (this.userDetailsForm.invalid)
      return;
    this.router.navigate(['home/dashboard'])
    sessionStorage.setItem('username',this.userDetailsForm.get('username').value);
    this.service.isLoggedIn(this.userDetailsForm.value);

  }
}
