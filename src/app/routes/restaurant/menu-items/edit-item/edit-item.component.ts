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
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );
     menuItems = {
         title: '',
         description: '',
         offerPercentage: 0,
         offer: false,
         extraOptions: [{}],
         price: [{}],
         category: '',
         thumb: '',
         available: true,
         feature: false,
         halal: false,
         noPork: false,
     //    vendor: '',
         productCode: '',
         vendorCode: '',
         code: '',
         leadtimeNum: 1,
         leadtimeUnit: ''
     };
    ItemPrice = [];
    feature = 'false';
    available = 'true';
    halal = 'false';
    noPork = 'false';
     url: any= '';
     categories: any= [{}];
     vendors: any = [{}];
     role: any;

     menuItemsdataRef: AngularFireObject<any>;
    menuObservable: Observable<any>;
    mainCategories: Array<any>;
    allCategories: Array<any>;
    categoryDataRef: AngularFireList<any>;
    categoryObservable: Observable<any>;
    vendorDataRef: AngularFireList<any>;
    vendorObservable: Observable<any>;
    mainCategoryDataRef: AngularFireList<any>;
    mainCategoryObservable: Observable<any>;

           readUrl(event) {
                 if (event.target.files && event.target.files[0]) {
                 const reader = new FileReader();

               reader.onload = (data: any) => {
                 this.url = data.target.result;
                 // this.imageRef = 1;
               };

             reader.readAsDataURL(event.target.files[0]);
             }
           }
          addNewChoice = function() {
            console.log(this.menuItems.extraOptions);
            if (this.menuItems.extraOptions == null) {
              this.menuItems.extraOptions = [{}];
            }else {
                 const newItemNo = this.menuItems.extraOptions.length + 1;
            this.menuItems.extraOptions.push({});
            }

          };

          removeChoice = function() {
            if (this.menuItems.extraOptions.length > 0) {
            const lastItem = this.menuItems.extraOptions.length - 1;
            this.menuItems.extraOptions.splice(lastItem);
          }
          };
          addNewPrice = function() {
            const newItemNo = this.menuItems.price.length + 1;
            this.menuItems.price.push({});
          };

          removePrice = function() {
            if (this.menuItems.price.length > 1) {
            const lastItem = this.menuItems.price.length - 1 ;
            this.menuItems.price.splice(lastItem);
          }
          };
    // menuItemsdataRef: AngularFireObject<any>;
    // menuObservable:Observable<any>;
    // categoryDataRef: AngularFireList<any>;
    // categoryObservable:Observable<any>;
    constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService,
                private spinnerService: Ng4LoadingSpinnerService) {
                  this.role = localStorage.getItem('role');
                  this.categoryDataRef = this.af.list('/categories', ref => ref.orderByChild('hasChild').equalTo(false));
          this.vendorDataRef = this.af.list('/vendors');
          this.mainCategoryDataRef = af.list('/main-categories', ref => ref.orderByChild('hasChild').equalTo(false));
          this.categoryObservable = this.categoryDataRef.snapshotChanges().map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });

          this.mainCategoryObservable = this.mainCategoryDataRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });
          this.mainCategoryObservable.subscribe((response) => {
            this.mainCategories = response;
            this.categoryObservable.subscribe((res) => {
              this.categories = res;
              this.allCategories = this.mainCategories.concat(this.categories);
            });

          });



          //      this.categoryObservable.subscribe((response)=>{
          //      this.categories = response;
          //      console.log(this.categories);
          //  });
           this.vendorObservable = this.vendorDataRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
             this.vendorObservable.subscribe((response) => {
             this.vendors = response;
             console.log(this.vendors);
         });

          this.route.params.map(params => params['id']).subscribe((Id) => {
       if (Id != null) {
            this.menuItemsdataRef = this.af.object('/menuItems/' + Id);
            this.menuObservable = this.menuItemsdataRef.valueChanges();
            this.menuObservable.subscribe((response) => {
              this.menuItems = response;
               if (this.menuItems.feature) {
                 this.feature = 'true';
               }
              //   else {
              //    this.feature = 'false';
              //  }
               if (!this.menuItems.available) {
                this.available = 'false';
              }
              if (this.menuItems.halal) {
                this.halal = 'true';
              }
              // if(this.menuItems.halal){
              //   this.halal = 'true';
              // }
              if (this.menuItems.noPork) {
                this.noPork = 'true';
              }
              // else {
              //   this.available = 'true';
              // }

              console.log('menu' + JSON.stringify(response));
             });
          }
       });
           this.uploader.onBeforeUploadItem = (item: any) => {
            item.url = this.uploader.options.url;
            console.log('image is going');
            localStorage.setItem('image' , 'image Is going');
            return item;
        };
  }
    onSubmitMainItems(form: NgForm) {
      this.spinnerService.show();
      if (this.feature === 'true') {
        this.menuItems.feature = true;
    }
    else {
      this.menuItems.feature = false;
    }
    if (this.available === 'false') {
      this.menuItems.available = false;
   }
   else {
    this.menuItems.available = true;
  }
  if (this.halal === 'false') {
    this.menuItems.halal = false;
  }
  else {
  this.menuItems.halal = true;
  }
  if (this.noPork === 'false') {
    this.menuItems.noPork = false;
  }
  else {
  this.menuItems.noPork = true;
  }
    console.log(this.menuItems);
      if (this.menuItems.offerPercentage > 0) {
           this.ItemPrice = this.menuItems.price;
          for (let i = 0; i < this.ItemPrice.length; i++) {
        this.ItemPrice[i].specialPrice = (this.ItemPrice[i].value - (this.menuItems.offerPercentage * this.ItemPrice[i].value) / 100);
        console.log('this.ItemPrice' + JSON.stringify(this.ItemPrice));
      }
        console.log('else');
        this.menuItems.offer = true;
      }
      else {
        console.log('else');
           this.ItemPrice = this.menuItems.price;
        this.menuItems.offerPercentage = 0;
        this.menuItems.offer = false;
      }
     if (this.menuItems.extraOptions === undefined) {
       this.menuItems.extraOptions = [{}];
     }
       this.uploader.uploadAll();
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            const  res: any = JSON.parse(response);
        this.menuItemsdataRef.update({
            title: this.menuItems.title,
            description: this.menuItems.description,
            thumb: res.url,
            offerPercentage: this.menuItems.offerPercentage,
            offer: this.menuItems.offer,
            extraOptions: this.menuItems.extraOptions,
            price: this.ItemPrice,
            feature: this.menuItems.feature,
            available: this.menuItems.available,
            halal: this.menuItems.halal,
            noPork: this.menuItems.noPork,
            category: this.menuItems.category,
            vendorCode: this.menuItems.vendorCode,
            productCode: this.menuItems.productCode,
            leadtimeNum: this.menuItems.leadtimeNum,
            leadtimeUnit: this.menuItems.leadtimeUnit
        }).then((data) => {
          localStorage.removeItem('image');
          this.spinnerService.hide();
               this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
          this.router.navigate(['/menu/manageItems']);
        });
      };
        if (localStorage.getItem('image') == null) {
          console.log('if');
           // console.log("this.ItemPrice"+ JSON.stringify());

         this.menuItemsdataRef.update({
            title: this.menuItems.title,
            description: this.menuItems.description,
            offerPercentage: this.menuItems.offerPercentage,
            offer: this.menuItems.offer,
            extraOptions: this.menuItems.extraOptions,
            price: this.ItemPrice,
            feature: this.menuItems.feature,
            available: this.menuItems.available,
            halal: this.menuItems.halal,
            noPork: this.menuItems.noPork,
            category: this.menuItems.category,
            vendorCode: this.menuItems.vendorCode,
            productCode: this.menuItems.productCode,
            leadtimeNum: this.menuItems.leadtimeNum,
            leadtimeUnit: this.menuItems.leadtimeUnit
        }).then((res) => {
               console.log('edit successful');
               this.spinnerService.hide();
               this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
          this.router.navigate(['/menu/manageItems']);
          console.log(this.menuItems.category);
        });

       }
    }
     cancel() {
      console.log(this.menuItems.category);
       this.router.navigate(['/menu/manageItems']);
    }

    categoryCahnge() {
      console.log('category changed');
    }

    categoryChange() {
      console.log('vendor changed');
    }
}
