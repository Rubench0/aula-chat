import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FriendsService } from 'src/app/services/friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public nick: string;
  constructor(
    private authenticationService: AuthenticationService,
    private friendsService: FriendsService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  Register() {
    this.authenticationService.registerWithEmail(this.email,this.password).then(
      (data)=> {
        const user = {
          uid: data.user.uid,
          email: this.email,
          nick: this.nick
        };
        this.friendsService.createUser(user).then(
          (data2) => {
            alert('Registrado con exito');
            console.log(data2);
          });
        }
    ).catch(
      (error) => {
        alert('Registro fallo');
        console.log(error);
      }
    );;
  }

}
