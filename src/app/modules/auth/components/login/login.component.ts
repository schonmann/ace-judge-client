import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loading : boolean = false;

  constructor(private router: Router, private authService: AuthService, private toastrService: ToastrService) {
  }

  ngOnInit() { }

  login(f: NgForm) {

    let formData = new FormData()

    formData.append('username', f.form.get('username').value)
    formData.append('password', f.form.get('password').value)

    this.loading = true;
    this.authService.login(formData).subscribe(res => {
      this.loading = false;
      this.router.navigate(['/app/main'])
      this.toastrService.clear()
      this.toastrService.success("Login realizado com sucesso!")
    }, err => {
      this.loading = false;
      if (err.status == 401) {
        this.toastrService.error(`Credenciais incorretas`)
      } else {
        this.toastrService.error(`Falha ao realizar autenticação!`)
      }
    })
  }
}
