import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = null;
  public password: string = null;
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  Login() {
    this.authenticationService.loginWithEmail(this.email,this.password).then(
      (data)=> {
        alert('Login correcto');
        console.log(data);
      }
    ).catch(
      (error) => {
        alert('Login fallo');
        console.log(error);
      }
    );;
  }

}