import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../services/friends.service';
import { User } from '../interfaces/user';
import { MzMediaService } from 'ngx-materialize';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  public friend: User;
  public friendId;
  public friends;
  public smallResolution: Observable<boolean>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private friendsServices: FriendsService,
    private mediaService: MzMediaService
  ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    this.smallResolution = this.mediaService.isActive('gt-s');
    this.friendsServices.getUserById(this.friendId).valueChanges().subscribe(
      (response: User) => {
        this.friend = response;
        console.log(this.friend);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  ngOnInit() {
    
  }

}
