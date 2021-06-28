import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  palabra : any;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getWord().subscribe(data => {
      this.palabra = data.usuario;
      console.log("hola " + this.palabra);
    });
    
  }
}
