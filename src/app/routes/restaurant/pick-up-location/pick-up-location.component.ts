import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-pick-up-location',
  templateUrl: './pick-up-location.component.html',
  styleUrls: ['./pick-up-location.component.scss']
})
export class PickUpLocationComponent {

  siteVal: any;
  locations: Array<any>;
  locationDataRef: AngularFireList<any>;
  locationObservable: Observable<any>;

  constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService) {
    this.locationDataRef = af.list('/pick-up-location');
    this.locationObservable = this.locationDataRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
       this.locationObservable.subscribe((res) => {
       this.locations = res;
   });
  }

  getLocation(ev: any) {
    const val = ev;

    this.locationObservable = this.af.list('/pick-up-location', ref => ref.orderByChild('address').startAt(val.charAt(0).toUpperCase() + val.slice(1))
       .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
    this.locationObservable.subscribe((data) => {
            this.locations = data;
     //       console.log(this.menuItems);
        });


}

  locationEdit(key) {
    this.router.navigate(['/pickUpLocation/editPickUpLocation', key]);
  }

  locationDelete(key) {
    swal({
      title: 'Are you sure?',
      text: 'Your will not be able to recover this data!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      closeOnConfirm: false,
      closeOnCancel: false
  }, (isConfirm) => {
      if (isConfirm) {
         this.locationDataRef.remove(key).then((res) => {
             swal('Deleted!', 'Menu Item Deleted Successfully!', 'success');
           });
        } else {
          swal('Cancelled', 'Your data is safe :)', 'error');
      }
  });
  }

}
