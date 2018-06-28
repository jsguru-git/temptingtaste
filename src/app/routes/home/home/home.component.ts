import { Component, OnInit, Inject, LOCALE_ID  } from '@angular/core';
import { ColorsService } from '../../../shared/colors/colors.service';
import { DatePipe } from '@angular/common';
import { Http } from '@angular/http';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


 // Bar chart
    // -----------------------------------
  newData= [];
   barData = {
       labels: [],
       datasets: [{
        //    data: [10,20,30,30,20,50, 0]
           data: []
       }]

   };

    barColors = [
        {
            backgroundColor: this.colors.byName('green'),
            borderColor: this.colors.byName('info'),
            pointHoverBackgroundColor: this.colors.byName('info'),
            pointHoverBorderColor: this.colors.byName('info')
        }];

    barOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };

  // Pie chart
    // -----------------------------------

    pieData = {
        labels: [],
        datasets: [{
            data: []
        }]
    };

    pieColors = [{
        borderColor: [
            this.colors.byName('info'),
            this.colors.byName('yellow'),
            this.colors.byName('purple'),
            this.colors.byName('warning'),
            this.colors.byName('danger'),
            this.colors.byName('inverse'),
            this.colors.byName('pink'),
            this.colors.byName('green'),
            this.colors.byName('gray-darker'),
            this.colors.byName('primary')
        ],
        backgroundColor: [
            this.colors.byName('info'),
            this.colors.byName('yellow'),
            this.colors.byName('purple'),
            this.colors.byName('warning'),
            this.colors.byName('danger'),
            this.colors.byName('inverse'),
            this.colors.byName('gray-darker'),
            this.colors.byName('green'),
            this.colors.byName('pink'),
            this.colors.byName('primary')
        ],
    }];

    pieOptions = {
        responsive: true
    };
     menuItems: any;
     categories: any;
     orders: Array<any>;
     order: any;
     ordersDataRef: AngularFireList<any>;
     orderDataRefObservable: Observable<any>;
     ordersRef: AngularFireList<any>;
     orderObservable: Observable<any>;
     monthReport: any = '';
     yearReport: any = '';
     firstDay: any;
     lastDay: any;
     currentMonth: any;
     role: any;
     userId: any;
     y: any;
     user: any = {};
     month: any = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];

     datePipeEn: DatePipe = new DatePipe('en-US');
    constructor(private colors: ColorsService, private http: Http, public af: AngularFireDatabase,
        @Inject(LOCALE_ID) private _locale: string) {

            this.role = localStorage.getItem('role');
            this.userId = localStorage.getItem('uid');
            console.log(this.userId);

    af.object('/users/' + this.userId).valueChanges().subscribe((resp) => {
           this.user = resp;
            console.log(this.user.name);
    });

     af.list('/menuItems').valueChanges().subscribe((res) => {
         this.menuItems = res.length;
     });
      af.list('/categories').valueChanges().subscribe((res) => {
         this.categories = res.length;
     });

     // if (this.role === 'Admin') {
        this.ordersDataRef = af.list('/orders');
     // } else {
    //    this.ordersDataRef = af.list('/orders', ref => ref.orderByChild('vendorCode').equalTo(this.role));
    //  }

      this.currentMonth = new Date().getMonth();
   //  console.log('today is: ' + this.todayDate);
      const d = new Date();
      this.monthReport = this.month[this.currentMonth];
      this.yearReport = new Date().getFullYear();

      this.firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
      console.log(this.firstDay);
      this.lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      console.log(this.lastDay);
    }


    ngOnInit() {
        this.showChart();
    }

    showChart() {
     let lastOrder: any[] = [];
      /*this.ordersRef =   this.af.list('/orders/'   , {
              query: {
                limitToLast: 1
              }
            });*/
      this.orderObservable = this.af.list('/orders/', ref => ref.limitToFirst(1)).valueChanges();

      this.orderObservable.subscribe((res) => {
               lastOrder = res;
                           if (lastOrder.length > 0) {
    //           let lastDate: any = lastOrder[0].createdAt;
           let lastDate: any = this.firstDay.getTime();
 //              console.log(lastDate);
               this.barData.labels = [];
           //    var x;
              const dayDuration = 86400000;
              this.y = ((this.lastDay.getTime() - this.firstDay.getTime()) / dayDuration);
              console.log(this.y);
                const x = 7;
    //            lastDate -= 6 * dayDuration;
              for (let i = 0; i <= this.y; i++) {
   //            console.log(i);
               this.barData.labels.push(this.datePipeEn.transform(lastDate, 'dd MMMM'));
    //           console.log(this.datePipeEn.transform(lastDate, 'dd MMMM'));
                lastDate += dayDuration;
              }
 //             console.log(this.barData.labels);
              this.orderDataRefObservable = this.ordersDataRef.valueChanges();
              this.orderDataRefObservable.subscribe((resp) => {
 //              console.log(resp);
              this.orders = resp;
              console.log(this.orders);
              this.order = resp.length;
               this.barData.datasets[0].data = [];
               console.log(this.barData.labels.length);
               if (this.role === 'Admin') {
                     for (let i = 0; i  <= this.barData.labels.length - 1; i++) {
                       let dayValue = 0;
                       for (let j = 0; j  <= this.orders.length - 1; j++) {
                          const orderDate = this.datePipeEn.transform(this.orders[j].createdAt, 'dd MMMM');
                          if (orderDate === this.barData.labels[i]) {
             //             console.log(this.barData.labels[i]);
                            dayValue += this.orders[j].grandTotal;
             //             console.log(this.orders[j].grandTotal);
                          }
                       }
                  dayValue = +(dayValue.toFixed(2));
                  this.barData.datasets[0].data.push(dayValue);
   //              console.log(this.barData.datasets[0].data);
              }
            } else {
                for (let i = 0; i  <= this.barData.labels.length - 1; i++) {
                    console.log(this.barData.labels.length);
                    console.log(i);
                    let dayValue = 0;
                    for (let j = 0; j  <= this.orders.length - 1; j++) {
                        console.log(this.orders.length);
                       const orderDate = this.datePipeEn.transform(this.orders[j].createdAt, 'dd MMMM');
                       for (let z = 0; z <= this.orders[j].cart.length - 1; z++) {
                           console.log(this.orders[j].cart.length);
                           if (this.orders[j].cart[z].item.vendorCode === this.role) {
                               if (orderDate === this.barData.labels[i]) {
                                //    console.log(this.barData.labels[i]);
                                      dayValue += this.orders[j].cart[z].itemTotalPrice;
                                //    console.log(this.orders[j].grandTotal);
                                }
                           }
                       }
                    }
               dayValue = +(dayValue.toFixed(2));
               this.barData.datasets[0].data.push(dayValue);
              console.log(this.barData.datasets[0].data);
           }
           console.log(this.barData.datasets[0].data.length);
            }
           });
            }
        });

            // Pie Chart
               this.af.list('/categories').snapshotChanges().map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
              }).subscribe((category) => {
                  this.af.list('/menuItems').valueChanges().subscribe((menuitem: any) => {
                  for (let i = 0; i  <= category.length - 1; i++) {
                        let x = 0;
                        let quantity = 0;
                         for (let j = 0; j  <= menuitem.length - 1; j++) {
                         if (menuitem[j].category === category[i].key) {
                            x++;
                            quantity++;
                         }
                      }
                      this.pieData.labels.push(category[i].title);
                      this.pieData.datasets[0].data.push(quantity);
                    }
                 });
            });
     }



    colorByName(name) {
        return this.colors.byName(name);
    }

    getData() {
        const x = this.month.indexOf(this.monthReport);
       this.firstDay = new Date(this.yearReport, x, 1);
  //      let firstDay = new Date(this.yearReport, x, 1);
        console.log(this.firstDay);
       this.lastDay = new Date(this.yearReport, x + 1, 0);
  //      let lastDay = new Date(this.yearReport, x + 1, 0);
         console.log(this.lastDay);
    //    let obj = {firstDay: firstDay, lastDay: lastDay};
    //     this.showChart();
     //   return obj;
    }

    // getYearData() {
    //     let x = this.month.indexOf(this.monthReport);
    //     this.firstDay = new Date(this.yearReport, x, 1);
    //     console.log(this.firstDay);
    //     this.lastDay = new Date(this.yearReport, x + 1, 0);
    //      console.log(this.last
    // }

    monthChanged() {
        console.log('Month Changed');
        if (this.monthReport !== '') {
            this.getData();
            this.showChart();

        } else {
            this.monthReport = this.month[this.currentMonth];
        }
    }

    yearChanged() {
        console.log('Year Changed');
        if (this.yearReport !== '') {
            this.getData();
        } else {
            this.yearReport = new Date().getFullYear();
        }
    }

}
