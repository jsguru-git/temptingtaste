import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PushNotificationService} from './push-notification.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss'],
  providers: [PushNotificationService]
})
export class PushNotificationComponent {
notification: any= {};

message: any = {
        // app_id: "614240e3-c369-44a1-82fb-73227bd2c71c",
        // app_id:"9740a50f-587f-4853-821f-58252d998399",
        app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
        contents: {'en': ''},
        headings: {'en': ''},
        included_segments: ['All']
    };

  constructor(public router: Router, public pushNotification: PushNotificationService, public toster: ToastrService, private spinnerService: Ng4LoadingSpinnerService) { }


onpushNotification(form: NgForm) {
  this.spinnerService.show();
// console.log("notification"+JSON.stringify(this.message));
this.pushNotification.sendNotification(this.message).subscribe(res => {
  this.spinnerService.hide();
this.toster.success('Notification Send Successfully!', 'Success!');
  });

}

cancel() {
       this.router.navigate(['/coupons/all']);

}


}
