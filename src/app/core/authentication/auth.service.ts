import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { UserService } from 'src/app/modules/api/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly SESSION_STORAGE_KEY = 'ace::session'

  constructor(private http: HttpClient, private storageService : StorageService, private userService : UserService) {
  }

  public login(form: FormData): Observable<Object> {
    //TODO: Review.
    let promise = this.http.post('login', form).toPromise().then(() => {
      return this.userService.getUserData().toPromise()
    }).then((user) => {
      this.storageService.setItem(this.SESSION_STORAGE_KEY, user)
      return null
    });
    return from(promise);
  }

  public logout(): Observable<Object> {
    this.storageService.removeItem(this.SESSION_STORAGE_KEY)
    return this.http.post('logout', {})
  }

  public isAuthenticated(): boolean {
    return this.storageService.hasItem(this.SESSION_STORAGE_KEY);
  }

  public getSession(): any {
    return this.storageService.getItem(this.SESSION_STORAGE_KEY);
  }

  public getAuthorities(): Array<string> {
    return this.getSession().roles.flatMap(r =>  r.privileges);
  }

  public getRoles(): Array<string> {
    return this.getSession().roles.map(x => x.name);
  }

  public hasAuthority(authority: string): boolean {
    return this.getAuthorities().some(x => x === authority)
  }

  public hasRole(role: string): boolean {
    return this.getRoles().some(x => x === role)
  }
}
