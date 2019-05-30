import { Component, OnInit, Input } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-list-partners',
  templateUrl: './list-partners.component.html',
  styleUrls: ['./list-partners.component.css']
})
export class ListPartnersComponent implements OnInit {
  @Input() uid: string;
  public contact: User;
  constructor(
    private friendsServices: FriendsService,
  ) { }

  ngOnInit() {
    console.log(this.uid);
    this.friendsServices.getUserById(this.uid).valueChanges().subscribe(
      (data: User)=> {
        this.contact = data;
    })
  }

}
