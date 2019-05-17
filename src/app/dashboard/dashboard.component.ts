import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public friends: User[];
  public query: string;
  constructor(
    private friendsServices: FriendsService
  ) {
    //this.friends = this.friendsServices.getFriends();
  }

  ngOnInit() {
  }

}
