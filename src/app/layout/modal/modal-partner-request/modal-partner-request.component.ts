import { Component, OnInit, Input } from '@angular/core';
import { MzBaseModal } from 'ngx-materialize';
import { RequestsService } from 'src/app/services/partners/requests.service';

@Component({
  selector: 'app-modal-partner-request',
  templateUrl: './modal-partner-request.component.html',
  styleUrls: ['./modal-partner-request.component.css']
})
export class ModalPartnerRequestComponent extends MzBaseModal {
  public modalOptions: Materialize.ModalOptions = {
    dismissible: true,
    opacity: .5,
    inDuration: 200,
    outDuration: 200,
    startingTop: '100%',
    endingTop: '10%',
    // ready: (modal, trigger) => {
    //   alert('Ready');
    //   console.log(modal, trigger);
    // },
    // complete: () => { alert('Closed'); }
  };
  public friendEmail;
  @Input() user_id: string;

  constructor(
    private requestService: RequestsService,
    ) {
    super();
  }
  
  public sendRequest() {
    const request = {
      timestamp: Date.now(),
      receiver_email: this.friendEmail,
      sender: this.user_id,
      status: 'pending'
    };
    this.requestService.createRequest(request).then(
      () => {
        alert('solicitud enviada');
      }
    ).catch(
        (error)=>{
          console.log(error)
      }
    );
  }
}
