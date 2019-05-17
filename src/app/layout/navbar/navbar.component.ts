import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MzMediaService } from 'ngx-materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public smallResolution: Observable<boolean>;

  constructor(
    private mediaService: MzMediaService
  ) {
    this.smallResolution = this.mediaService.isActive('gt-s');
  }

  ngOnInit() {

  }

}
