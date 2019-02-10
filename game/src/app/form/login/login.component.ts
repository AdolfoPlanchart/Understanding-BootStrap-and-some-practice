import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  logIn(usr, psw){
    if(usr = 'Johnny'){
      if(psw = '312'){
        this.logInSuccess = true;
      }
    }
  }

  reset(){
    
  }

}
