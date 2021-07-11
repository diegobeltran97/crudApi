import { Component, OnInit } from '@angular/core';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  displayModal: boolean = false;
  value: any;

  constructor(public registro: LoginService) { }
 
  ngOnInit(): void {
    this.displayModal = this.registro.messages;
  }
 
}
