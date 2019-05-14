import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  public friends: User[];
  constructor() {
    let usuario: User = {
      nick: 'Ruben',
      subnick: 'Rubencito',
      age: 27,
      email: 'rubenchoo.garcia@gmail.com',
      friend: true,
      uid : 1
    };
    let usuario1: User = {
      nick: 'Ricardo',
      subnick: 'Ricardodito',
      age: 27,
      email: 'Ricardo@gmail.com',
      friend: true,
      uid : 2
    };
    let usuario2: User = {
      nick: 'Maibe',
      subnick: 'Maibecita',
      age: 27,
      email: 'Maibe@gmail.com',
      friend: true,
      uid : 3
    };
    let usuario3: User = {
      nick: 'Imagina',
      subnick: 'Imaginante',
      age: 27,
      email: 'Imagina@gmail.com',
      friend: true,
      uid : 4
    };
    this.friends = [usuario,usuario1,usuario2,usuario3];
   }

   getFriends() {
     return this.friends;
   }
 }
