import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../services/friends.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  public friendId;
  public friend: User;
  public friends;
  constructor(
    private activatedRoute: ActivatedRoute,
    private friendsServices: FriendsService
  ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
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
