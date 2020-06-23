import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
 })
export class LoginService {

  constructor() { }
  isLoggedIn(arg)
  {
 sessionStorage.setItem('username',arg.username);
  }
}
