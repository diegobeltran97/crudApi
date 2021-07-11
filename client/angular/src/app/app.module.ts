import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ApiService } from "./home/servicios/api.service";
import { LoginService } from './login/servicios/login.service';

import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    InputNumberModule,
    PasswordModule,
    DividerModule
  ],
  providers: [ApiService,
              LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
