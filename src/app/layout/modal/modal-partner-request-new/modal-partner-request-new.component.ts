import { Component, Input } from '@angular/core';
import { MzBaseModal } from 'ngx-materialize';
import { RequestsService } from 'src/app/services/partners/requests.service';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-modal-partner-request-new',
  templateUrl: './modal-partner-request-new.component.html',
  styleUrls: ['./modal-partner-request-new.component.css']
})
export class ModalPartnerRequestNewComponent extends MzBaseModal {
  public sender: User;
  public options: Materialize.ModalOptions = {
    dismissible: true,
    opacity: .5,
    inDuration: 200,
    outDuration: 200,
    startingTop: '100%',
    endingTop: '10%',
  };
  public partneradd: string = 'yes';
  @Input() currentRequest: any;
  @Input() dataAddPartner: any;

  constructor(
    private requestService: RequestsService,
    private friendsServices: FriendsService,
    private authenticationService: AuthenticationService,
    ) {
    super();
    this.authenticationService.getStatus().subscribe(
      (status) => {
        this.friendsServices.getUserById(this.currentRequest.sender).valueChanges().subscribe(
          (data: User) => {
            this.sender = data;
          }
        )
      });
  }

  accept() {
    if (this.partneradd == 'yes') {
      this.requestService.setRequestStatus(this.currentRequest, 'accepted').then(
        (data) => {
          console.log(data);
          this.friendsServices.addPartner(this.dataAddPartner.uid,this.currentRequest.sender).then(
            () => {
              alert('Solicitud aceptada con exito');
            }
          ).catch(
            (error) => {
              console.log(error);
            }
          )
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    } else if (this.partneradd == 'no') {
      this.requestService.setRequestStatus(this.currentRequest, 'rejected').then(
        (data) => {
          console.log(data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    } else if (this.partneradd == 'later') {
      this.requestService.setRequestStatus(this.currentRequest, 'decide_later').then(
        (data) => {
          console.log(data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
