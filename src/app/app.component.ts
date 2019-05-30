import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FriendsService } from './services/friends.service';
import { RequestsService } from './services/partners/requests.service';
import { User } from './interfaces/user';
import { MzModalService } from 'ngx-materialize';
import { ModalPartnerRequestNewComponent } from './layout/modal/modal-partner-request-new/modal-partner-request-new.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  request: any[] = [];
  mailsShown: any[] = [];
  constructor (
    public router: Router,
    private authenticationService: AuthenticationService,
    private friendsService: FriendsService,
    private requestService: RequestsService,
    private modalService: MzModalService
    ){
    this.authenticationService.getStatus().subscribe(
      (status) => {
        this.friendsService.getUserById(status.uid).valueChanges().subscribe(
          (data: User) => {
            this.user = data;
            this.requestService.getRequestsForEmail(this.user.email).valueChanges().subscribe(
              (requests) => {
                this.request = requests;
                this.request = this.request.filter(
                  (r)=> {
                    return r.status !== 'accepted' && r.status !== 'rejected';
                  }
                );
                this.request.forEach((r)=>{
                  if (this.mailsShown.indexOf(r.sender)  === -1) {
                    this.mailsShown.push((r.sender));
                    this.modalService.open(ModalPartnerRequestNewComponent, {dataAddPartner: this.user, currentRequest: r});
                  }
                })
              }, (error) => {
                console.log(error);
              }
            )
          }
        )
      }
    )
  }

  ngOnInit() {
  }

  title = 'aula-chat';
}
