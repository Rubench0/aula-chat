import { Component, OnInit } from '@angular/core';
import { MzMediaService } from 'ngx-materialize';
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-chat',
  templateUrl: './nav-chat.component.html',
  styleUrls: ['./nav-chat.component.css']
})
export class NavChatComponent implements OnInit {
  public smallResolution: Observable<boolean>;
  constructor(
    private mediaService: MzMediaService
  ) {
    this.smallResolution = this.mediaService.isActive('lt-m');
  }

  ngOnInit() {
  }

}
