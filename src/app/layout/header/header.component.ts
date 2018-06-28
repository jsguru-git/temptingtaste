import { Component, OnInit, ViewChild } from '@angular/core';
import {Store} from '@ngrx/store';
import {Userlist, ChatData, ShowChat} from '../../../app/routes/restaurant/chat/chat';
const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;

import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { Router} from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {HeadersService} from './headers.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [HeadersService]
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout
    notificationData = [];
    isNavSearchVisible: boolean;
    public messageId: any;
    public chatUserId: any;
    public message: string;
    public sender: string;
    public countMessage: number;
    public userName: '';
    private orderCount: any = 0;
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button
    ordersDataRef: AngularFireList<any>;

    constructor(private router: Router,
                public menu: MenuService,
                public userblockService: UserblockService,
                public settings: SettingsService,
                public af: AngularFireDatabase,
                public headersService: HeadersService,
                public storeData: Store<ShowChat>,
                public db: AngularFireDatabase) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
        db.list('/messages/', ref => ref.limitToFirst(1)).snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        }).subscribe(response => {

            if (response.length > 0) {

                this.storeData.dispatch({ type: response[0].key });
                this.messageList();
            }

        });

        this.ordersDataRef = af.list('/orders');

    }

    messageList() {

         this.messageId = this.storeData.select('data');
         this.countMessage = 0;
         this.messageId.subscribe(res => {
         if (res !== '@ngrx/store/init') {
             this.chatUserId = res;
             this.db.list('/messages/' + this.chatUserId, ref => ref.limitToLast(4)).valueChanges()
                 .subscribe((response: any) => {
             this.countMessage = 1;
             if (this.countMessage === 1) {
               //// console.log("res message list "+JSON.stringify(response[0]))
                  this.message = response[0].message;
                  this.userName =  response[0].userName;
             }
            // this.sender = response[3].$value;
              // console.log("chat sender name"+ this.sender);
             // console.log("chat list Response-"+ JSON.stringify(response));

            });
         }
      });
   }


    ngOnInit() {
        this.isNavSearchVisible = false;
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
        let count = 0;
        this.af.list('/orders', ref => ref.orderByChild('orderView').equalTo(false)
           ).snapshotChanges().map(changes => {
               return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
           }).subscribe((res: any) => {
             this.notificationData = [];
            // console.log("res order view "+JSON.stringify(res));
            count = res.length ;
            for (let i = 0; i < count; i++) {
              this.notificationData.push({name: res[i].userDetails.name, key: res[i].key});
             }
            if (count > this.orderCount) {
            this.playAudio();
            console.log('count is ' + count);
            // this.notificationData.unshift({name:res[res.length-1].userDetails.name,key:res[res.length-1].key});
            // if(this.notificationData.length == 4){
            //    this.notificationData.splice(-1,1)
            // }
        //   var message = {
        //            app_id:"452b400d-27a2-4df3-a485-8161a7d2d323",
        //            contents: {"en": "A New order Arrived"},
        //            include_player_ids: ['7ac8756f-18cb-4fe1-a3e0-21e4fc2f3477']
        //   };
        //   console.log(localStorage.getItem('playerId'));
            //    this.headersService.sendNotification(message).subscribe(response =>{
        //    });
          }
         this.orderCount = count;

        });
    }

    logout() {
         localStorage.clear();
        this.router.navigate(['/login']);
    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

    isCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }

    toggleFullScreen(event) {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        const el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }

    }

    // go To View OrderPage
     goToViewOrderPage(id) {
         this.ordersDataRef.update(id, {orderView: true}).then((res) => {
            this.router.navigate(['/order/viewOrder', id]);
          });
    }

    goToViewChatPage() {
        this.router.navigate(['/chat']);
    }

    playAudio() {
      // console.log("play audio");
      const audio = new Audio();
      audio.src = 'assets/sound/sound.mp3';
      audio.load();
      audio.play();
      }
}
