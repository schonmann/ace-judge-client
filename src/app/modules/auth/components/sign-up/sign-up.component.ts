import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserService } from 'src/app/modules/api/user.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loading : boolean = false; 

  constructor(private route : ActivatedRoute, private router: Router, private authService: AuthService, private userService: UserService, private toastrService: ToastrService, private storageService: StorageService) { }

  ngOnInit() {
  }

  signup(f: NgForm) {

    if (f.invalid) {
      return
    }

    const {
      username,
      password,
      name,
      address,
      privilegeKey,
    } = f.form.value

    this.authService.signup({ 
      username, 
      password, 
      name, 
      address, 
      privilegeKey
    }).subscribe(res => {
      this.toastrService.success('Cadastro concluído com sucesso!')
      this.router.navigate(['../login'], { relativeTo: this.route })
    }, err => {
      this.toastrService.error('Erro ao enviar cadastro!')
    })
  }
}
