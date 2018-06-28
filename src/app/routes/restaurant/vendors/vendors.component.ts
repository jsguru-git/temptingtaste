import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent {

  public siteVal: any;
  public vendors: any[]= [];
  public vendorRef: AngularFireList<any>;
  public vendorData: Observable<any>;

      constructor(public af: AngularFireDatabase,
                  public router: Router,
                  public toastr: ToastrService) {

      this.vendorRef = this.af.list('/vendors');
       this.vendorData = this.vendorRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      this.vendorData.subscribe((res) => {
        this.vendors = res;
       });
    }

    getVendor(ev: any) {
          const val = ev;
           this.vendorData = this.af.list('/vendors', ref => ref.orderByChild('title').startAt(val.charAt(0).toUpperCase() + val.slice(1))
             .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
          this.vendorData
              .subscribe((data) => {
                  this.vendors = data;
              });
      }
     vendorShow(key) {
       this.router.navigate(['/vendors/viewVendor', key]);
    }

     vendorEdit(key) {
      this.router.navigate(['/vendors/editVendor', key]);
    }

  vendorDelete(key: any) {
     swal({
              title: 'Are you sure?',
              text: 'Your will not be able to recover this imaginary file!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
              closeOnConfirm: false,
              closeOnCancel: false
          }, (isConfirm) => {
              if (isConfirm) {
                this.vendorRef.remove(key).then(resp => {
                  swal('Deleted!', 'Categories Data Deleted Successfully!', 'success');
                });
                } else {
                  swal('Cancelled', 'Your data is safe :)', 'error');
              }
          });
    }

}
