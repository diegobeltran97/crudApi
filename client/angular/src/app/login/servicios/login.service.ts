import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  messages: boolean = false;

  add(message: boolean) {
    this.messages = message;
  }
  
  constructor() { }
}
