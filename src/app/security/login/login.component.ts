import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = null;
  public password: string = null;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  Login() {
    this.authenticationService.loginWithEmail(this.email,this.password).then(
      (data)=> {
        alert('Login correcto');
        console.log(data);
        this.router.navigate(['/']);
      }
    ).catch(
      (error) => {
        alert('Login fallo');
        console.log(error);
      }
    );;
  }

}
