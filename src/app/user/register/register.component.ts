import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email;
  public password;
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  Register() {
    this.authenticationService.registerWithEmail(this.email,this.password).then(
      (data)=> {
        alert('Registrado con exito');
        console.log(data);
      }
    ).catch(
      (error) => {
        alert('Registro fallo');
        console.log(error);
      }
    );;
  }

}
