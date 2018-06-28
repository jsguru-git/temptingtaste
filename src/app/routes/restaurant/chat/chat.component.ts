import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Userlist, ChatData, ShowChat} from './chat';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operator/map';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
      public siteVal: any;
      public userlist: Userlist[]= [];
     public searchUserData: Userlist[]= [];
     public userKeyList: any[]= [];
     public lastMessageList: any[]= [];
     chatUserId: Observable<string>;
     length: any = 0;
     searchName: any;
    constructor(public af: AngularFireAuth,
                public db: AngularFireDatabase,
                public router: Router,
                public storeData: Store<ShowChat>) {
      this.chatUserId = storeData.select('data');

      this.db.list('/messages').snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((res: any) => {
        if (res.length > 0) {
          this.userlist = res;
           this.userKeyList = [];
          //  for (let key in res) {
          //      this.userKeyList.push(res[key].key);
          //  }
           for (const key of res) {
            this.userKeyList.push(res[key].key);
        }
            this.lastMessageList = [];
           for (let i = 0; i < this.userKeyList.length; i++) {
              this.db.list('/messages/' + this.userKeyList[i], ref => ref.limitToLast(4))
                 .valueChanges().subscribe(response => {
                   this.lastMessageList.push(response[0]);

            });
          }
        }
    });
     /* this.db.list('/messages').valueChanges().subscribe((res:any)=>{

        if(res.length>0){
          this.userlist = res;
          this.userKeyList =[];
          for(let key in res){
            this.userKeyList.push(res[key].$key);
          }

           this.lastMessageList = [];
           for(let i=0;i<this.userKeyList.length;i++){
              this.db.list('/messages/'+this.userKeyList[i],ref => ref.limitToFirst(4))
                 .valueChanges().subscribe(response=>{
              this.lastMessageList.push(response[0]);
            })
          }

        }

      })*/

    }

    getChatUser(ev: any) {
        const val = ev;
         this.db.list('/messages/', ref => ref.orderByChild('name').startAt(val.charAt(0).toUpperCase() + val.slice(1))
           .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges().subscribe((data: any) => {
                this.userlist = data;
            });

    }

// User List
    goToUserChat(userId) {

      this.storeData.dispatch({ type: userId });
    }

  ngOnInit() {
   // this.storeData.dispatch({ type:  this.userlist  });
  }

}
