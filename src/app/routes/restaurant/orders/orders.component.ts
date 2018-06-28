import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from './orders.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrdersService]
})
export class OrdersComponent {


  orders: Array<any>;
  ordersDataRef: AngularFireList<any>;
  userDataRef: AngularFireList<any>;
  orderObservable: Observable<any>;
  userObservable: Observable<any>;
  updatedOnce: boolean = false;
  displayMessage: string;

  userObjRef: AngularFireObject<any>;
  orderObjRef: AngularFireObject<any>;
  cartObjRef: AngularFireList<any>;
  loyalityData: AngularFireObject<any>;
  loylityPercentage: number = 0;
 // playerId =  <any>{};
  playerId: string;
  cartItems: any = [{}];
  vendorItems: any = [];
  role: string;
  deliveryMethod: string;

  public loyaltyStatus: boolean = false;
  public minLoyalityPointes: number = 0;
  private orderData: any = {};
  private userData: any = {};

    constructor(public af: AngularFireDatabase,
      public toastr: ToastrService,
      public router: Router,
      public ordersService: OrdersService,
      private spinnerService: Ng4LoadingSpinnerService) {
        this.role = localStorage.getItem('role');

        this.ordersDataRef = af.list('/orders');


       this.orderObservable = this.ordersDataRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
       this.orderObservable.subscribe((res) => {
           this.orders = res.reverse();
           if (this.role !== 'Admin') {
               this.getVendorItems();
          }
       });

       // loality points

       this.loyalityData = af.object('/loyalitys');
       this.loyalityData.valueChanges().subscribe((res: any) => {
          if (res != null) {
            this.loyaltyStatus = res.enable;
            this.loylityPercentage = res.loylityPercentage;
          }
        });
    }

    getVendorItems() {
        this.vendorItems = [];
        for (const order of this.orders){
            for (const orderItem of order.cart){
                 if (orderItem.vendorCode === this.role) {
                  orderItem.orderId = order.orderId;
                  orderItem.createdAt = order.createdAt;
                  orderItem.deliveryOption = order.deliveryOption;
                  orderItem.key = order.key;
                     this.vendorItems.push(orderItem);
                 }
            }
        }
        console.log(this.vendorItems);
    }

    OnPaymentChangeStatus(key, event, userId, orderId) {
      this.spinnerService.show();
     if (event.target.value === 'success') {
       this.displayMessage = `Your order ${orderId} payment has been received. Thank you.`;
       }

       this.orderObjRef = this.af.object('/orders/' + key);
 this.userObjRef = this.af.object('/users/' + userId);

const x = this.userObjRef.valueChanges().subscribe((res: any) => {
    this.playerId = res.playerId;
    x.unsubscribe();
    this.updatePaymentStatus(key, event);
    });
    }

    OnChangeStatus(key, event, userId, orderId) {
      this.spinnerService.show();
      if (event.target.value === 'Pending') {
         this.displayMessage = `Your order ${orderId} is under pending`;
      }
      if (event.target.value === 'Processing') {
        this.displayMessage = `Your order ${orderId} is now in progress`;
     }
      if (event.target.value === 'On the way') {
        this.displayMessage = `Your order ${orderId} is now on the way to you`;
     }
     if (event.target.value === 'Ready for pickup') {
      this.displayMessage = `Your order ${orderId} is ready for pickup`;
   }
     if (event.target.value === 'Canceled') {
      this.displayMessage = `Your order ${orderId} has been canceled`;
     }
     if (event.target.value === 'Delivered') {
      this.displayMessage = `Your order ${orderId} has been delivered. Thank you for your purchase`;
     }
 this.orderObjRef = this.af.object('/orders/' + key);
 this.userObjRef = this.af.object('/users/' + userId);

const x = this.userObjRef.valueChanges().subscribe((res: any) => {
    this.playerId = res.playerId;
    x.unsubscribe();

     if (event.target.value === 'Delivered' && this.loyaltyStatus) {

      const data =   this.orderObjRef.valueChanges().subscribe((resp) => {
          this.orderData = resp;
          let userPoint: number;
            userPoint = Math.floor((this.orderData.grandTotal * this.loylityPercentage) / 100);
            data.unsubscribe();

           const loayltyObj: any = {
                    credit: true,
                    points: userPoint,
                    orderId: key,
                    createdAt : Date.now()
                   };
            this.af.list('users/' + userId + '/loyaltyPoints').push(loayltyObj);
            this.af.list('/orders/' + key + '/loyaltyPoints').push(loayltyObj);

         this.updateLoyaltyStatus(event, key);
     //        if(this.orderData.loyaltyPoints == null){
     //          let loylityPoints:any [] = [];
     //          //console.log("lo loyaltyPoints");
     //          this.orderData.loyaltyPoints = loylityPoints;
     //          //console.log("now order "+JSON.stringify(this.orderData));
     //        }

     //        let addPoint:number;
     //        addPoint = Math.floor((this.orderData.grandTotal * this.loylityPercentage)/100);
     //        this.orderData.loyaltyPoints.push({
     //          credit:true,
     //          points: addPoint,
     //          orderId: key,
     //          createdAt:Date.now()
            });

     //    let user =   this.userObjRef.valueChanges().subscribe((res) => {
     //      this.userData = res;
     //      //console.log("userData is before"+JSON.stringify(this.userData));
            // if(this.userData.loyaltyPoints == null){
            //   let loylityPoints:any [] = [];
            //   //console.log("lo loyaltyPoints");
            //   this.userData.loyaltyPoints = loylityPoints;
            //   //console.log("now userData "+JSON.stringify(this.userData));
            // }
            // user.unsubscribe();


        // });



      }// if outer closed
      else {
        this.updateStatus(key, event);
      }
    });
    }

    updateLoyaltyStatus(event, key) {
      // if(this.updatedOnce == false){
      this.orderObjRef.update({
            status: event.target.value,
            orderView: true
        }).then((res: any) => {
           const message = {
          app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
          contents: {'en': this.displayMessage},
          include_player_ids: [this.playerId]
        };

        this.af.list('/orders/' + key + '/statusReading').push({title: event.target.value, time: Date.now()});

         this.ordersService.sendNotification(message).subscribe(response => {

        });
            this.spinnerService.hide();
            this.toastr.success('Order status updated!', 'Success!');
        });
       // this.updatedOnce = true;
    // }

    }

    updateStatus(key, event) {
      this.cartObjRef = this.af.list('/orders/' + key + '/cart');
      const x = this.cartObjRef.snapshotChanges().subscribe((data) => {
          console.log(data);
          this.cartItems = [];
          data.forEach(item => {
              const temp = item.payload.val();
              temp['$key'] = item.payload.key;
              this.cartItems.push(temp);
          });
          x.unsubscribe();
          console.log(this.cartItems);
       //   let cartItemRef = this.af.object('/orders/' + key + '/cart/' + i);
          for (let i = 0; i < this.cartItems.length; i++) {
  //          item.itemStatus = event.target.value;
              const cartItemRef = this.af.object('/orders/' + key + '/cart/' + i);
              cartItemRef.update({
                itemStatus: event.target.value
              });
          }
      });


      this.ordersDataRef.update(key, {status: event.target.value, orderView: true}).then((res) => {
          const message = {
       //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
            app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
            contents: {'en': this.displayMessage},
            data: {'key': key, 'page': 'OrderStatusPage'},
          include_player_ids: [this.playerId]
        };

        this.af.list('/orders/' + key + '/statusReading').push({title: event.target.value, time: Date.now()});

         this.ordersService.sendNotification(message).subscribe(response => {

        });
            this.spinnerService.hide();
            this.toastr.success('Order status updated!', 'Success!');
        });
    // }
  }

  updatePaymentStatus(key, event) {

    this.ordersDataRef.update(key, {paymentStatus: event.target.value, orderView: true}).then((res) => {
        const message = {
     //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
          app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
          contents: {'en': this.displayMessage},
          data: {'key': key, 'page': 'thankyou'},
        include_player_ids: [this.playerId]
      };

      this.af.list('/orders/' + key + '/statusReading').push({title: event.target.value, time: Date.now()});

       this.ordersService.sendNotification(message).subscribe(response => {

      });
      this.spinnerService.hide();
          this.toastr.success('Order status updated!', 'Success!');
      });
  // }
}


    ordersShow(key) {
      this.spinnerService.show();
        this.ordersDataRef.update(key, {orderView: true}).then((res) => {
          this.spinnerService.hide();
            this.router.navigate(['/order/viewOrder', key]);
          });
    }

    itemShow(key, i) {
      this.spinnerService.show();
      this.ordersDataRef.update(key, {orderView: true}).then((res) => {
        this.spinnerService.hide();
           this.router.navigate(['/order/viewOrder', key], { queryParams: { cartIndex: i } });
        });
    }

}
