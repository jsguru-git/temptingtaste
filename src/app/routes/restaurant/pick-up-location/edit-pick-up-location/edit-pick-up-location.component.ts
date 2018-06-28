import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { cloudinarUpload } from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-edit-pick-up-location',
  templateUrl: './edit-pick-up-location.component.html',
  styleUrls: ['./edit-pick-up-location.component.scss']
})
export class EditPickUpLocationComponent {

  location = {
    name: '',
    address: '',
    area: '',
    city: '',
    pincode: 0,
    mobileNo: '',
    available: true,
};

available = 'true';

   locationdataRef: AngularFireObject<any>;
    locationObservable: Observable<any>;
    categoryDataRef: AngularFireList<any>;
    categoryObservable: Observable<any>;

    constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService, private spinnerService: Ng4LoadingSpinnerService) {
      this.route.params.map(params => params['id']).subscribe((Id) => {
   if ( Id != null) {
        this.locationdataRef = this.af.object('/pick-up-location/' + Id);
        this.locationObservable = this.locationdataRef.valueChanges();
        this.locationObservable.subscribe((response) => {
          this.location = response;
           if (!this.location.available) {
            this.available = 'false';
          }
          console.log('menu' + JSON.stringify(response));
         });
      }
   });
}

onSubmitLocation(form: NgForm) {
  this.spinnerService.show();
if (this.available === 'false') {
  this.location.available = false;
}
else {
this.location.available = true;
}


     this.locationdataRef.update({
        name: this.location.name,
        address: this.location.address,
        pincode: this.location.pincode,
        mobileNo: this.location.mobileNo,
        area: this.location.area,
        city: this.location.city,
        available: this.location.available
    }).then((res) => {
         this.spinnerService.hide();
           this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
      this.router.navigate(['/pickUpLocation/managePickUpLocation']);
    });

   }


cancel() {
  this.router.navigate(['/pickUpLocation/managePickUpLocation']);
}

}
