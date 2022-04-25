import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
let JwtToken = '';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,RegisterComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule,
  ],
  providers: [LoginComponent,{provide:'JwtToken',useValue:JwtToken}],
  bootstrap: [AppComponent]
})
export class AppModule { }
