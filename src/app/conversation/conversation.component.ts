import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../services/friends.service';
import { User } from '../interfaces/user';
import { MzMediaService } from 'ngx-materialize';
import { Observable } from 'rxjs';
import { ConversationService } from '../services/conversation.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  public friend: User;
  public user: User;
  public friendId;
  public friends;
  public textMessage: string;
  public conversation_id: string;
  public see: boolean;
  public smallResolution: Observable<boolean>;
  public conversation: any[];
  @ViewChild('divChat') divChat: ElementRef;
  @ViewChildren('messages') messages: QueryList<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private friendsServices: FriendsService,
    private mediaService: MzMediaService,
    private conversationService: ConversationService,
    private authenticationService: AuthenticationService
  ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    this.smallResolution = this.mediaService.isActive('gt-s');
    this.authenticationService.getStatus().subscribe(
      (session)=>{
        this.friendsServices.getUserById(session.uid).valueChanges().subscribe(
          (response: User)=> {
            this.user = response;
            this.friendsServices.getUserById(this.friendId).valueChanges().subscribe(
              (response: User) => {
                this.friend = response;
                const ids = [this.user.uid, this.friend.uid].sort();
                this.conversation_id = ids.join('|');
                //)
                // console.log(this.user);
                // console.log(this.friend);
                // console.log(this.conversation_id);
                this.getConversation();
              },
              (error) => {
                console.log(error);
              },
            );
          }
        );
      }
    );
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  sendMessage() {
    const message = {
      uid: this.conversation_id,
      timestamp: Date.now(),
      text: this.textMessage,
      sender: this.user.uid,
      receiver: this.friend.uid,
    };
    this.conversationService.createConversation(message).then(
      () => {
        this.textMessage = '';
      }
    );
  }

  getConversation() {
    this.conversationService.getConversation(this.conversation_id).valueChanges().subscribe(
      (data) => {
        //console.log(data);
        this.conversation = data;
        this.conversation.forEach(
          (message) => {
            if(!message.seen) {
              message.seen = true;
              this.conversationService.editConversation(message);
              this.see = false;
            }
          }
        )
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserNickById(id) {
    if (id == this.friend.uid) {
      return this.friend.nick;
    } else {
      return this.user.nick;
    }
  }

  ngAfterViewInit() {
    this.messages.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.divChat.nativeElement.scrollTop = this.divChat.nativeElement.scrollHeight;
    } catch (err) {}
  }

}
