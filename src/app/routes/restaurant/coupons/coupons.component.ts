import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent{

     coupons:Array<any>;
     couponsDataRef:AngularFireList<any>;
     couponObservable:Observable<any>;
    constructor(public af:AngularFireDatabase, public router:Router,public toastr: ToastrService) {
     this.couponsDataRef = af.list('/coupons');
     this.couponObservable = this.couponsDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      this.couponObservable .subscribe((res)=>{
         this.coupons = res;
     });
       
    }
  
  
  couponDelete(key:any){
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
               this.couponsDataRef.remove(key).then((res)=>{
                   swal('Deleted!','Coupons Deleted Successfully!', 'success');
                 })
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }

}
