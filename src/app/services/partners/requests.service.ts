import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private angularFireDataBase: AngularFireDatabase
  ) { }

  createRequest(request) {
    const cleanEmail = request.receiver_email.replace('.',',');
    return this.angularFireDataBase.object('partners/requests/' + cleanEmail + '/' + request.sender).set(request);
  }
  
  setRequestStatus(request,status) {
    const cleanEmail = request.receiver_email.replace('.',',');
    return this.angularFireDataBase.object('partners/requests/' + cleanEmail + '/' + request.sender + '/status').set(status);
  }

  getRequestsForEmail(email) {
    const cleanEmail = email.replace('.',',');
    return this.angularFireDataBase.list('partners/requests/' + cleanEmail);
  }
}
