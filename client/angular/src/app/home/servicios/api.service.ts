import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor(private http: HttpClient) {}

  getWord() : Observable<any> {
    return this.http.get('http://localhost:3000/');
  }

}





