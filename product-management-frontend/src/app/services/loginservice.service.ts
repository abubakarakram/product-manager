import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  public username: string = '';
  public password: string = '';
  data: any;
  constructor(private http: HttpClient) {
  }
  login(userName: string, password: string) {
    this.data = this.http.post("http://localhost:8080/authenticate", { userName: userName, password: password });
    this.data
      .subscribe(
        (data) => {
          data['token'];
          sessionStorage.setItem('jwttoken', data['token']);
        });
    return this.data;

  }



}

