import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(userName: string, password: string) {

    return this.http.post("http://localhost:8080/register", { userName: userName, password: password }, { observe: 'response' })
      .subscribe(
        res => {
          console.log(res);
          res;

        }

      )

  }

}
