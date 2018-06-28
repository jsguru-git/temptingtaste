import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

userDetails: any= {};
address: any;
orderDetails: any= {};
ordersdataRef: AngularFireObject<any>;
orderObservable: Observable<any>;
orderId: any ;
loading: boolean = true;
delivery: boolean = false;
pickUp: boolean = false;

  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService) {
            this.route.params.map(params => params['id']).subscribe((Id) => {
              if (Id != null) {
                   this.ordersdataRef = this.af.object('/orders/' + Id);
                    this.orderId = Id;
                    this.orderObservable = this.ordersdataRef.valueChanges();
                      this.orderObservable.subscribe((response) => {
                     this.orderDetails = response;
                    this.userDetails = response.userDetails;
                    if (response.deliveryOption === 'delivery') {
                      this.address = response.shippingAddress;
                      this.delivery = true;
                  } else {
                        this.address = response.pickUpAddress;
                        this.pickUp = true;
                  }
                    this.loading = false;
         });
              }
       });
  }

  back() {
    this.router.navigate(['/order/viewOrder', this.orderId]);
  }

  ngOnInit() {
  }

}
