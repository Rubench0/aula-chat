import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.css']
})
export class SidenavUserComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logOut().then(
      () => {
        alert('sesión cerrada');
        this.router.navigate(['/login']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
