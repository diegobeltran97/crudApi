import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<SearchResults>('http://localhost:3000/').subscribe(data => {
            this.totalAngularPackages = data.usuario;
            console.log( this.totalAngularPackages );
     })
    
    
    
  
  }


}


interface SearchResults {
  usuario: number;
  results: Array<object>;
}
