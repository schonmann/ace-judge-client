import { Injectable, Inject } from '@angular/core';
import { CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate, CanActivateChild {
  
  constructor(@Inject(AuthService) private authService : AuthService, 
    @Inject(ToastrService) private toastrService : ToastrService,
    @Inject(Router) private router : Router) { }

  checkAdminRole() {
    let hasRole = this.authService.hasRole("ROLE_ADMIN");
    if (hasRole) {
      return true;
    }
    this.toastrService.error("Você não tem permissão de administrador")
    this.router.navigate(["/app/main"])
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAdminRole();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAdminRole();
  }
}
