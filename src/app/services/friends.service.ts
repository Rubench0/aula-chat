import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) {
    
   }

   getUsers() {
    return this.angularFireDatabase.list('/users');
   }

   getUserById(uid) {
     return this.angularFireDatabase.object('/users/' + uid);
   }

   createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
   }

   EditUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).update(user);
   }

 }
