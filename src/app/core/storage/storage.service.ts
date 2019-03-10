import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key : string, value : any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key : string) : any {
    return JSON.parse(localStorage.getItem(key));
  }

  hasItem(key : string) : boolean {
    return this.getItem(key) != null
  }

  removeItem(key : string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
