import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LoginService } from './login/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lopaspot';
  totalAngularPackages: any;

  links = ['Home', 'login'];
  lanks = ['', 'login'];
  activeLink = this.links[0];
  activeLinka = this.links[0];
  
  selectedIndex = 0;

  displayModal: boolean = false;

  constructor(private http: HttpClient, public ver: LoginService) { }

  ngOnInit() {
    this.http.get<SearchResults>('http://localhost:3000/').subscribe(data => {
            this.totalAngularPackages = data.usuario;
            console.log( this.totalAngularPackages );
     })
     this.displayModal = this.ver.messages;
  }

  showModalDialog() {
    console.log( this.ver.messages );
    this.ver.add(true);
    console.log( this.ver.messages );
  }
}

interface SearchResults {
  usuario: number;
  results: Array<object>;
}
