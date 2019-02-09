import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username : string;
  private password : string;

  constructor(private router : Router) {
  }

  ngOnInit() {
  }
  
  login(f: NgForm) {
    console.log(f)
    //TODO: realiza autenticação, volta token e página inicial a navegar.
    this.router.navigate(['/app/main']);
  }
}
