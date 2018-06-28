import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../orders/orders.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.scss'],
  providers: [OrdersService]
})
export class TableBookingComponent implements OnInit {

    bookingData: any [] = [];
    bookingDataRef: AngularFireList<any>;
    bookingObservable: Observable<any>;
    tables: any [] = [];

    settingDataRef: AngularFireObject<any>;
    settingObservable: Observable<any>;

    loading: boolean = true;

    constructor(private route: Router, public af: AngularFireDatabase, private toastr: ToastrService, private ordersService: OrdersService, private spinnerService: Ng4LoadingSpinnerService) {
      this.bookingDataRef = af.list('/table-bookings');
      this.bookingObservable = this.bookingDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
         this.bookingObservable.subscribe((res) => {
         this.bookingData = res;
         this.loading = false;
         console.log('booking data ' + JSON.stringify(this.bookingData));
     });
        this.settingDataRef = af.object('/settings');
        this.settingObservable = this.settingDataRef.valueChanges();
        this.settingObservable.subscribe((res) => {
         for (let i = 1; i <= res.totalTables; i++) {
             this.tables.push({table: i});
          }
        });
    }

    onChangeStatus(index, event, key) {
      this.spinnerService.show();
     // console.log("index "+ index + " Event "+ event.target.value);
     this.bookingData[index].status = event.target.value;
      if (event.target.value === 'Approved') {
        this.spinnerService.hide();
       this.toastr.warning('Please assign table', 'Table booking');
      }

      if (event.target.value === 'Cancelled') {
          this.bookingDataRef.update(key, {status: event.target.value}).then((res) => {
          const message = {
          app_id: 'ace5d8a2-5018-4523-ab21-cff285d32524',
          contents: {'Try next time your booking ': event.target.value},
          include_player_ids: ['31851f36-3730-4c4d-a129-fdcf380d4d86']
        };

        this.af.list('/table-bookings/' + key + '/statusReading').push({title: event.target.value, time: Date.now()});
          this.ordersService.sendNotification(message).subscribe(response => {
        });
        this.spinnerService.hide();
            this.toastr.success('Table booking status updated!', 'Success!');
        });
      }
    }

    onAssignTable(index, event, key) {
      this.spinnerService.show();
     // console.log("data "+ JSON.stringify(index) + " Event "+event.target.value);
     this.bookingData[index].tableNumber = event.target.value;
     // console.log("change data "+JSON.stringify(this.bookingData[index]));

     this.bookingDataRef.update(key, {tableNumber: event.target.value, status: 'Approved'}).then((res) => {
          const message = {
          app_id: 'ace5d8a2-5018-4523-ab21-cff285d32524',
          contents: {'Your booking approved, table number ': event.target.value},
          include_player_ids: ['31851f36-3730-4c4d-a129-fdcf380d4d86']
        };

        this.af.list('/table-bookings/' + key + '/tableReading').push({title: event.target.value, time: Date.now()});
          this.ordersService.sendNotification(message).subscribe(response => {
        });
        this.spinnerService.hide();
        this.toastr.success('Table booking status updated!', 'Success!');
        });
    }

    ordersShow(key) {
      this.route.navigate(['tables/view/', key]);
    }

  ngOnInit() {
  }

}
