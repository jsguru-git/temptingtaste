import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { DateService } from './date.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent {
p: any;
userDetails: any= {};
address: any;
orderDetails: any= {};
ordersdataRef: AngularFireObject<any>;
orderObservable: Observable<any>;
orderId: any ;
delivery: boolean = false;
pickUp: boolean = false;
pdfObj: any;
tempArray: Array<any> = [];
dataRow: Array<any> = [];
purchaseDate: any;
todayDate: any;
addressheader: any;
role: any;
cartIndex: any;
filteredItems: Array<any> = [];

  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService,
              private dateService: DateService, private spinnerService: Ng4LoadingSpinnerService) {
                this.role = localStorage.getItem('role');
                this.route.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.cartIndex = +params['cartIndex'] || 0;
        console.log(this.cartIndex);
      });
           this.route.params.map(params => params['id']).subscribe((Id) => {
           if (Id != null) {
                  this.ordersdataRef = this.af.object('/orders/' + Id);
                  this.orderId = Id;
                  this.orderObservable = this.ordersdataRef.valueChanges();
                  this.orderObservable.subscribe((response) => {
                  this.orderDetails = response;
                  if (this.role !== 'Admin') {
                      this.filterCart();
                  }
                  console.log(this.orderDetails);
                  console.log(this.orderDetails.createdAt);
                  this.todayDate = this.dateService.getDate(0);
                  this.purchaseDate = this.dateService.getDate(this.orderDetails.createdAt);
                  if (this.orderDetails.deliveryOption === 'delivery') {
                    this.addressheader = 'Delivery Address';
                    this.address = response.shippingAddress;
                    this.delivery = true;
                  } else {
                    this.addressheader = 'Pick-Up Address';
                    this.address = response.pickUpAddress;
                    this.pickUp = true;
                    console.log(this.address);
                  }
                  this.generateRows(this.orderDetails);
                  this.userDetails = response.userDetails;
                  // if(response.deliveryOption === 'delivery'){
                  //     this.address=response.shippingAddress;
                  //     this.delivery = true;
                  // } else {
                  //       this.address=response.pickUpAddress;
                  //       this.pickUp = true;
                  // }
                 console.log(JSON.stringify(this.address));
            });
              }
       });
  }

  filterCart() {
    console.log(this.orderDetails.cart);
   //  for (const item of this.orderDetails.cart){
  //     if (item.vendorCode === this.role) {
  //           this.filteredItems.push(item);
          //    const index = this.orderDetails.cart.indexOf(item);
          //    console.log(index);
          //    if (index !== -1) {
          //     this.orderDetails.cart .splice(index, 1);
          // }
          this.orderDetails.cart = this.orderDetails.cart.filter(order => order.vendorCode === this.role);
  //     }
 //    }
  }

  createPDF() {
 //   this.router.navigate(['/order/invoice',this.orderId]);
 const docDefinition = {
  pageSize: 'A4',

// by default we use portrait, you can change it to landscape if you wish
pageOrientation: 'portrait',

// [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
 pageMargins: [ 20, 40, 20, 40 ],
  content: [
    {text: 'Production Order', style: 'header'},
    {
      columns: [
              {
              style: 'detail',
              table: {
//                widths:['*','*'],
             body: [
                 [{text: 'Customer Details:', bold: true, fontSize: 15, colSpan: 2}, {}],
                 [{text: 'Name:'}, {text: this.orderDetails.userDetails.name}],
                 [{text: 'Purchase Date:'}, {text: this.purchaseDate}],
                 [{text: 'Phone:'}, {text: this.orderDetails.userDetails.mobileNo}],
                 ]
         }, layout: 'noBorders'
              },
              {
                  table: {
//              widths:['*','*'],
             body: [
                 [{text: this.addressheader, bold: true, fontSize: 15}, {}],
                 [{text: this.address.name}, {}],
                 [{text: this.address.address}, {}],
                 [{text: this.address.area}, {}]
                 ]
         }, layout: 'noBorders'
              }
              ]
     },
    {text: 'Order No: ' + this.orderDetails.orderId, margin: [0, 20, 0, 10], fontSize: 20},
    {text: 'Date:' + this.todayDate, margin: [0, 10, 0, 10], fontSize: 15},
    {
      style: 'tableheader',
      table: {
        headerRows: 1,
        widths: [10, '*', '*', '*'],
        body: [
          [{text: '#', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Product', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Extra', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Qty', fillColor: '#eeeeee', margin: [true, true, true, false]}]
       ]
  }
},

      this.table(this.tempArray, 'production'),
      {text: '', margin: [0, 0, 0, 20]},
      {
        style: '',
        table: {
          widths: [35, '*'],
          body: [
            [{text: 'Item #', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Special Instruction', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}],
 //           this.instruction(this.tempArray)
         ]
    }
    },
//             {text:'Special Instruction', style:'header'},
            this.instructionTable(this.tempArray)

],

//           this.table(this.tempArray, ['#', 'Product', 'Price(RM)','ExtraOption',"Q'ty",'Total'])

  styles: {
    header: {
      fontSize: 30,
      bold: true,
      alignment: 'center',
      margin: [ 0, 0, 0, 30]
    },
    subheader: {
      fontSize: 14,
      bold: true,
      margin: [0, 15, 0, 0]
    },
    tableheader: {
      alignment: 'center'
    }
  }
};
this.pdfObj = pdfMake.createPdf(docDefinition);
this.downloadPdf(this.pdfObj);
}


  table(data, type) {
  //  const x;
    if (type === 'invoice') {
    return {
      style: '',
      table: {
        widths: [10, '*', '*', '*', 40, 80],
        body: this.buildTableBody(data, type)
      }
    };
  } else {
    return {
      style: '',
      table: {
        widths: [10, '*', '*', '*'],
        body: this.buildTableBody(data, type)
      }
   };
  }
}

instructionTable(data) {
  return {
    style: '',
    table: {
      widths: [35, '*'],
      body: this.instructionBody(data)
    }
 };
}

instructionBody(data) {
  const  body = [];
  let dataRow = [];
    data.forEach(function(row) {
       if (row.itemMessage) {
        dataRow = [{text: row.ID, alignment: 'center'}, row.itemMessage];
       }
       body.push(dataRow);
    });
    return body;
}


//  buildTableBody(data,columns) {
  buildTableBody(data, type) {
  //  console.log(columns);
    const body = [];
    let dataRow = [];
    let extra = '';

//     body.push(columns);
    console.log(body);
    console.log(data);
    console.log(this.dataRow);

    data.forEach(function(row) {
//   for(let i=0;i<data.length;i++){
      extra = '';
      if (row.extraOptions) {
      if (row.extraOptions.length > 0) {
        console.log(row.extraOptions.length);
    //    for(let option of row.extraOptions{
        for (let i = 0; i < row.extraOptions.length; i++) {
          if (i === row.extraOptions.length - 1) {
          extra = extra.concat(row.extraOptions[i].name);
        } else {
          extra = extra.concat(row.extraOptions[i].name) + ',';
        }
        }
        console.log(extra);

      }
    }

     console.log(row);
    if (type === 'invoice') {
     dataRow = [row.ID, row.title, `${Number(row.price).toFixed(2)} (${row.pname})`, extra, row.quantity, '' + Number(row.total).toFixed(2)];
  } else {
    dataRow = [row.ID, row.title, extra, row.quantity];
  }
        body.push(dataRow);
        console.log(body);
   });
    return body;
}

  generateRows(order) {
    console.log(order);
  //  var tempObj = {}
  //  var tempArr = [];
    for (let i = 0; i < order.cart.length; i++) {

       this.tempArray.push(
         {
           ID: i + 1,
          //  title: order.cart[i].item.title,
          title: `${order.cart[i].item.title}(${order.cart[i].item.productCode})`,
           price: order.cart[i].item.price.value,
           pname: order.cart[i].item.price.pname,
           itemMessage: order.cart[i].item.itemMessage,
           extraOptions: order.cart[i].item.extraOptions,
           quantity: order.cart[i].item.itemQunatity,
           total: order.cart[i].itemTotalPrice
          }
      );
    }
    console.log(this.tempArray);
  }

  generateInvoice() {
    const docDefinition = {
      pageSize: 'A4',

    // by default we use portrait, you can change it to landscape if you wish
    pageOrientation: 'portrait',

    // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
     pageMargins: [ 20, 40, 20, 40 ],
      content: [
        {text: 'Invoice', style: 'header'},
        {
          columns: [
                  {
                  style: 'detail',
                  table: {
 //                widths:['*','*'],
                 body: [
                     [{text: 'Customer Details:', bold: true, fontSize: 15, colSpan: 2}, {}],
                     [{text: 'Name:'}, {text: this.orderDetails.userDetails.name}],
                     [{text: 'Purchase Date:'}, {text: this.purchaseDate}],
                     [{text: 'Phone:'}, {text: this.orderDetails.userDetails.mobileNo}],
                     ]
             }, layout: 'noBorders'
                  },
                  {
                      table: {
 //              widths:['*','*'],
                 body: [
                     [{text: this.addressheader, bold: true, fontSize: 15}, {}],
                     [{text: this.address.name}, {}],
                     [{text: this.address.address}, {}],
                     [{text: this.address.area}, {}]
                     ]
             }, layout: 'noBorders'
                  }
                  ]
         },
        {text: 'Invoice No: ' + this.orderDetails.orderId, margin: [0, 20, 0, 10], fontSize: 20},
        {text: 'Date:' + this.todayDate, margin: [0, 10, 0, 10], fontSize: 15},
        {
          style: 'tableheader',
          table: {
            headerRows: 1,
            widths: [10, '*', '*', '*', 40, 80],
            body: [
              [{text: '#', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Product', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Price(RM)', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Extra', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Qty', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Total(RM)', fillColor: '#eeeeee', margin: [true, true, true, false]}]
           ]
      }
    },

          this.table(this.tempArray, 'invoice'),
          {
            style: 'marginBottom',
            table: {
              widths: [10, '*', '*', '*', 40, 80],
              body: [
                [{text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: 'Sub-Total', colSpan: 2, border: [true, false, true, false]}, {}, {text: '' + Number(this.orderDetails.subTotal).toFixed(2), border: [true, false, true, false]}],
                [{text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text:  'Coupon Applied', colSpan: 2, border: [true, false, true, false]}, {}, {text: '' + Number(this.orderDetails.couponDiscount).toFixed(2), border: [true, false, true, false]}],
                [{text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: 'Tax', colSpan: 2, border: [true, false, true, false]}, {}, {text: '' + Number(this.orderDetails.tax).toFixed(2), border: [true, false, true, false]}],
                [{text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: 'Delivery', colSpan: 2, border: [true, false, true, false]}, {}, {text: '' + Number(this.orderDetails.deliveryCharge).toFixed(2), border: [true, false, true, false]}],
                [{text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: '', border: [false, false, false, false]}, {text: 'Grand Total', colSpan: 2, border: [true, false, true, true]}, {}, {text: '' + Number(this.orderDetails.grandTotal).toFixed(2), border: [true, false, true, true]}]
             ]
        }
      },
      {
        style: '',
        table: {
          widths: [35, '*'],
          body: [
            [{text: 'Item #', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}, {text: 'Special Instruction', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false]}],
 //           this.instruction(this.tempArray)
         ]
    }
    },
//             {text:'Special Instruction', style:'header'},
            this.instructionTable(this.tempArray)

  ],

 //           this.table(this.tempArray, ['#', 'Product', 'Price(RM)','ExtraOption',"Q'ty",'Total'])

      styles: {
        header: {
          fontSize: 30,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 30]
        },
        marginBottom: {
          margin: [0, 0, 0, 20]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        tableheader: {
          alignment: 'center'
        }
      }
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.downloadPdf(this.pdfObj);
  }

  downloadPdf(pdf) {
      pdf.download();
    }
//  }
}
