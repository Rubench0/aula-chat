import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  public friendId;
  public friend;
  public friends;
  constructor(
    private activatedRoute: ActivatedRoute,
    private friendsServices: FriendsService
  ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    this.friends = this.friendsServices.getFriends();
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
    
  }

}
