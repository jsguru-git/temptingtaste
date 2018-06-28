import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
const swal = require('sweetalert');

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent implements OnInit {
  public allPincodes: any [] = [];
  public activeAddBlock: boolean = false;
  public activeUpdateBlock: boolean = false;
  public activeDataTable: boolean = true;
  private updateObjKey: any;

  add: any = {
    pincode: 0,
    available: true,
    deliveryCharge: 0
  };
  pinDataRef: AngularFireList<any>;
  pinObservable: Observable<any>;
  pinObjRef: AngularFireObject<any>;
  available = 'true';

  update: any = {
    pincode: 0,
    available: true,
    deliveryCharge: 0
  };

  constructor(public af: AngularFireDatabase,public toastr: ToastrService, public spinnerService: Ng4LoadingSpinnerService) {
    this.pinDataRef = af.list('/delivery-options', ref => ref.orderByChild('pincode'));
    this.pinObservable = this.pinDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

        this.pinObservable.subscribe((res) => {
         this.allPincodes = res;
     });
  }

  activeAdd() {
   this.activeAddBlock = true;
   this.activeUpdateBlock = false;
   this.activeDataTable = false;
  }

  onAddPin() {
    this.spinnerService.show();
    if (!this.available) {
      this.add.available = false;
    } else {
      this.add.available = true;
    }
    this.pinDataRef.push(this.add).then((res) => {
      this.spinnerService.hide();
        this.toastr.success('Delivery Area Added!', 'Success!');
        this.cancelAdd();
    });
  }

  activeUpdate(key, i) {
   this.activeUpdateBlock = true;
   this.activeAddBlock = false;
   this.activeDataTable = false;
   this.update = this.allPincodes[i];
   this.updateObjKey = key;
   if (this.update.available) {
     this.available = 'true';
   } else {
     this.available = 'false';
   }
  }

  onUpdatePin() {
    this.spinnerService.show();
    console.log(this.available);
    if (this.available === 'false') {
      this.update.available = false;
    } else {
      this.update.available = true;
    }
    console.log(this.update.available);
   this.pinObjRef = this.af.object('/delivery-options/' + this.updateObjKey);
   console.log('updated data ' + JSON.stringify(this.update));
   this.pinObjRef.update({
          pincode: this.update.pincode,
          deliveryCharge: this.update.deliveryCharge,
          available: this.update.available
           }).then((res) => {
            this.spinnerService.hide();
           this.toastr.success('Delivery Area Updated!', 'Success!');
           this.cancelUpdate();
      });
  }

  cancelAdd() {
   this.activeDataTable = true;
   this.activeUpdateBlock = false;
   this.activeAddBlock = false;
   this.add.pincode = 0;
  }

  cancelUpdate() {
   this.updateObjKey = '',
   this.activeDataTable = true;
   this.activeUpdateBlock = false;
   this.activeAddBlock = false;
  }

  pinDelete(key) {
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
               this.pinDataRef.remove(key).then((res) => {
                   swal('Deleted!', 'Delivery Area Deleted!', 'success');
                 });
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }

  ngOnInit() {
  }

}
