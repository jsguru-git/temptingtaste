import { Component, HostBinding, OnInit } from '@angular/core';
declare var $: any;

import { SettingsService } from './core/settings/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.isFixed; };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.isCollapsed; };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.isBoxed; };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.layout.useFullLayout; };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.layout.hiddenFooter; };
    @HostBinding('class.layout-h') get horizontal() { return this.settings.layout.horizontal; };
    @HostBinding('class.aside-float') get isFloat() { return this.settings.layout.isFloat; };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.layout.offsidebarOpen; };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.layout.asideToggled; };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.layout.isCollapsedText; };

    constructor(public settings: SettingsService) { }

    ngOnInit() {
         $(document).on('click', '[href="#"]', e => e.preventDefault());
  //       var OneSignal= window['OneSignal'] || [];
  //       OneSignal.push(["init",{
  //         appId:"452b400d-27a2-4df3-a485-8161a7d2d323",
  //         autoRegister:false,
  //         subdomainName:'https://restaurantfire.onesignal.com',
  //         httpPermissionRequest: {
  //          enable: true
  //         },
  //         notifyButton:{
  //           enable:true
  //         }
          
  //       }]);

  //      OneSignal.push(function(){
  //        OneSignal.getUserId().then(function(userId){
  //          if(userId == null){
            
  //          }else{
  //             console.log('oneSignalId: 'userId);
  //            localStorage.setItem('playerId',userId);
  //          }
  //        });
  //      });
       
      
  }

}

/*  OneSignal.push(["init", {
        //appId: "ace5d8a2-5018-4523-ab21-cff285d32524",
        appId:"9740a50f-587f-4853-821f-58252d998399",
        autoRegister: false, // Set to true to automatically prompt visitors 
        //subdomainName: 'https://restrntfire.onesignal.com',
        subdomainName:'https://restaurantfire.onesignal.com',
        httpPermissionRequest: {
           enable: true
        },
        notifyButton: {
           enable: true// Set to false to hide 
        }
    }]);
    console.log('OneSignal Initialized');
     OneSignal.push(function () {
         console.log('Register For Push');
          //OneSignal.registerForPushNotifications();
         OneSignal.push(["registerForPushNotifications"])
         OneSignal.getUserId().then(function(userId) {
           console.log("hello world-----"+userId);
           if(userId == null){
             console.log("User ID is null");
           }else{
             console.log("user id is"+ userId);
             localStorage.setItem('playerId',userId);
           }
          
          
        });
    });
*/
