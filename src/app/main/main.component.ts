import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public friends: User[];
  constructor(
    private friendsServices: FriendsService
  ) { }

  ngOnInit() {
    this.friendsServices.getUsers().valueChanges().subscribe(
      (response: User[]) => {
        this.friends = response;
      },
      (error) => {
        console.log(error);
      });
  }

}
