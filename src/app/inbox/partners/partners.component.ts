import { Component, OnInit, ComponentRef } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from 'src/app/interfaces/user';
import { MzModalService } from 'ngx-materialize';
import { ModalPartnerRequestComponent } from 'src/app/layout/modal/modal-partner-request/modal-partner-request.component';
import { RequestsService } from 'src/app/services/partners/requests.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  public friends: User[];
  public friendEmail: string;
  public user: User;
  constructor(
    private friendsServices: FriendsService,
    private modalService: MzModalService,
    private requestService: RequestsService,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.getStatus().subscribe(
      (status)=>{
        this.friendsServices.getUserById(status.uid).valueChanges().subscribe(
          (data: User) => {
            this.user = data;
            if (this.user.partners) {
              this.user.partners = Object.values(this.user.partners);
            }
          }
        );
      })

  }

  ngOnInit() {
    this.friendsServices.getUsers().valueChanges().subscribe(
      (response: User[]) => {
        this.friends = response;
      },
      (error) => {
        console.log(error);
    });
  }

  public openServiceModal() {
    this.modalService.open(ModalPartnerRequestComponent, { user_id: this.user.uid });
  }

}
