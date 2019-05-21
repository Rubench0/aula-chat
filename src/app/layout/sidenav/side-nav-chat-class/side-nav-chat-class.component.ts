import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MzMediaService } from 'ngx-materialize';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav-chat-class',
  templateUrl: './side-nav-chat-class.component.html',
  styleUrls: ['./side-nav-chat-class.component.css']
})
export class SideNavChatClassComponent implements OnInit {
  public smallResolution: Observable<boolean>;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private mediaService: MzMediaService
  ) { 
    this.smallResolution = this.mediaService.isActive('gt-s'); 
  }

  ngOnInit() {
  }

}
