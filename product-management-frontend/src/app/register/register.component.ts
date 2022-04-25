import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userName: any = '';
  password: any = '';
  invalidLogin = false;
  loginSuccess = false;
  errorMessage = '';
  successMessage = '';
  constructor(private _registerService: RegisterService, private router: Router) {

  }

  ngOnInit(): void {

  }
  register() {

    this._registerService.register(this.userName, this.password);

    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Successfully Register';

    setTimeout(() => {                          
      this.router.navigateByUrl('/login');
    }, 2000);

  }

}
