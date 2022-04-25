import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  invalidLogin = false;
  loginSuccess = false;
  constructor(private _loginserviceService: LoginserviceService, private _router: Router, private injector: Injector) {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.userName, this.password);
    this._loginserviceService.login(this.userName, this.password).subscribe(
      (data) => {
        data['token']
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Successfully Login';

        setTimeout(() => {
          this._router.navigateByUrl('/product-management');
        }, 2000);

      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;

      });
  }
}
