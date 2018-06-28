import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import {Userlist, ChatData, ShowChat} from '../chat';
import {Store} from '@ngrx/store';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import { OrdersService } from '../../orders/orders.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  providers: [OrdersService]
})
export class ChatBoxComponent implements OnInit {
 @ViewChild('scrollMe') private myScrollContainer: ElementRef;

   // scrollTop = '';
    public chatList: Array<any>;
    username: any= '';
     chatMessage= {
     message: '',
     sendBy: 'Admin',
      userName: '',
     createdAt: Date.now()
    };
   public imageUrl: any;
   public chatData: any= [];
   messageId: Observable<string>;
   chatUserId: any;
   isLoading: any = false;
   public user: any= {};
   playerId: string;

   // url: any = 'https://onesignal.com/api/v1/notifications';

    constructor( public el: ElementRef,
                 private routes: ActivatedRoute,
                 public af: AngularFireAuth,
                 public db: AngularFireDatabase,
                 private router: Router,
                 public storeData: Store<ShowChat>,
                private ordersService: OrdersService) {

        this.messageList();
     }

   messageList() {

         this.messageId = this.storeData.select('data');

         this.messageId.subscribe(res => {
         if (res !== '@ngrx/store/init') {
             this.chatUserId = res;
             this.db.object('/users/' + this.chatUserId).valueChanges().subscribe((data: any) => {

               if ((data.name != null) && ( data.image != null) ) {
                 this.username = data.name;
                 this.imageUrl = data.image;
                 this.playerId = data.playerId;
                 console.log(this.playerId);
               }
             });

            this.db.object('/messages/' + this.chatUserId).valueChanges().subscribe( data => {
            // this.username = res.name
            // this.imageUrl = res.imageUrl

             this.db.list('/messages/' + this.chatUserId).valueChanges().subscribe(response => {
             setTimeout(() => {
              this.scrollToBottom();
            });
             this.chatData = response;
            });

          });
         }
      });
   }



    ngOnInit() {}

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) {
            console.log('error is' + err);
         }
    }

  //  scrollToBottom() {
  //   let scrollPane: any = this.el
  //     .nativeElement.querySelector('.msg-container-base');
  //   scrollPane.scrollTop = scrollPane.scrollHeight;
  // }


   // send Message
     sendMessage(form: NgForm) {
     this.db.list('/messages/' + this.chatUserId).push(this.chatMessage).then(res => {
        const message = {
          app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
          contents: {'en': 'You have a new chat message from Tempting Taste'},
          include_player_ids: [this.playerId]
        };
        this.ordersService.sendNotification(message).subscribe(response => {

        });
       this.chatMessage = {
       message: '',
       sendBy: 'Admin',
      userName: 'Admin',
      createdAt: Date.now()
    };

   });

  }

}
