import {Component} from '@angular/core';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';
import {cloudinarUpload} from '../../../../firebase.config';
import { FileUploader } from 'ng2-file-upload';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
const URL = 'http://www.oneforcestore.com/script/temptingtaste.php';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
   public uploader: FileUploader = new FileUploader({url: URL});

  url: any = '';
  menuItems = {
    title: '',
    description: '',
    offerPercentage: 0,
    extraOptions: [{}],
    offer: false,
    price: [{}],
    category: '',
    thumb: '',
    feature: false,
    available: true,
    halal: false,
    noPork: false,
 //   vendor: '',
    productCode: '',
    vendorCode: '',
    leadtimeNum: 1,
    leadtimeUnit: ''
  };
  ItemPrice = [];
  feature = 'false';
  available = 'true';
  halal = 'false';
  noPork = 'false';

  categories: Array<any>;
  mainCategories: Array<any>;
  allCategories: Array<any>;
  vendors: Array<any>;
  categoryDataRef: AngularFireList<any>;
  categoryObservable: Observable<any>;
  menuItemsDataRef: AngularFireList<any>;
  imageId: string;
  vendorDataRef: AngularFireList<any>;
  vendorObservable: Observable<any>;
  mainCategoryDataRef: AngularFireList<any>;
  mainCategoryObservable: Observable<any>;
  leadtimeNum: any;
  leadtimeUnit: any;
  role: any;

  Cuploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions(cloudinarUpload)
  );

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

   //   reader.onload = (event: any) => {
        reader.onload = (data: any) => {
     //     this.url = event.target.result;
        this.url = data.target.result;
        // this.imageRef = 1;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }


  // addNewChoice = function() {
  //   var newItemNo = this.menuItems.extraOptions.length+1;
  //   this.menuItems.extraOptions.push({});
  // };

  addNewChoice = function () {
    const newItemNo = this.menuItems.extraOptions.length + 1;
    this.menuItems.extraOptions.push({});
  };

  removeChoice = function () {
    if (this.menuItems.extraOptions.length > 0) {
      const lastItem = this.menuItems.extraOptions.length - 1;
      this.menuItems.extraOptions.splice(lastItem);
    }
  };

  addNewPrice = function () {
    const newItemNo = this.menuItems.price.length + 1;
    this.menuItems.price.push({});
  };

  removePrice = function () {
    if (this.menuItems.price.length > 1) {
      const lastItem = this.menuItems.price.length - 1;
      this.menuItems.price.splice(lastItem);
    }
  };
  // categories: Array<any>
  // categoryDataRef: AngularFireList<any>;
  // categoryObservable:Observable<any>;
  // menuItemsDataRef: AngularFireList<any>;
  // imageId: string;

  // uploader: CloudinaryUploader = new CloudinaryUploader(
  //   new CloudinaryOptions(cloudinarUpload)
  // );

  constructor(public af: AngularFireDatabase, public toastr: ToastrService, public router: Router,
              private spinnerService: Ng4LoadingSpinnerService) {
                this.leadtimeUnit = 'day';
     this.role = localStorage.getItem('role');
     console.log(this.role);
    this.menuItemsDataRef = af.list('/menuItems');
    this.categoryDataRef = af.list('/categories', ref => ref.orderByChild('hasChild').equalTo(false));
    this.vendorDataRef = af.list('/vendors');
    this.mainCategoryDataRef = af.list('/main-categories', ref => ref.orderByChild('hasChild').equalTo(false));
    this.fileUpload();
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

    this.categoryObservable = this.categoryDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
    // this.categoryObservable.subscribe((response) => {
    //   this.categories = response;
    // });

    this.vendorObservable = this.vendorDataRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  this.vendorObservable.subscribe((response) => {
    this.vendors = response;
  });
    // Override onSuccessItem to retrieve the imageId
    this.uploader.onAfterAddingFile = (item: any) => {
      item.url = this.uploader.options.url;
      return item;
    };

  }

  onSubmitMainItems(form: NgForm) {
    this.spinnerService.show();
    if (this.role !== 'Admin') {
        this.menuItems.vendorCode = this.role;
    }
  //  this.menuItems.leadtimeNum = this.leadtimeNum;
  //   this.menuItems.leadtimeUnit = this.leadtimeUnit;
    if (this.feature === 'true') {
        this.menuItems.feature = true;
    }
    if (this.available === 'false') {
      this.menuItems.available = false;
  }
  if (this.halal === 'true') {
    this.menuItems.halal = true;
}
if (this.noPork === 'true') {
  this.menuItems.noPork = true;
}
    if (this.menuItems.offerPercentage > 0) {
      this.ItemPrice = this.menuItems.price;
      for (let i = 0; i < this.ItemPrice.length; i++) {
        this.ItemPrice[i].specialPrice = (this.ItemPrice[i].value - (this.menuItems.offerPercentage * this.ItemPrice[i].value) / 100);
        console.log('this.ItemPrice' + JSON.stringify(this.ItemPrice));
      }
      this.menuItems.offer = true;
    }
    else {
      console.log('else');
      this.ItemPrice = this.menuItems.price;
      this.menuItems.offerPercentage = 0;
      this.menuItems.offer = false;
    }
    this.Cuploader.uploadAll();
    this.Cuploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.menuItems.thumb = res.url;
      this.menuItemsDataRef.push(this.menuItems).then((data) => {
        this.spinnerService.hide();
        this.toastr.success('Menu-Items Data Added Successfully!', 'Success!');
        this.router.navigate(['/menu/manageItems']);
      });
    };
  }

  cancel() {
    this.router.navigate(['/menu/manageItems']);
  }

  selected() {
    console.log('selected');
  }

  fileUpload() {
    // this.uploader = new FileUploader({url: URL});
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
   const res = JSON.parse(response);
      console.log(res);
      console.log(res.name); // the url will be in the response
      };

  }
}
