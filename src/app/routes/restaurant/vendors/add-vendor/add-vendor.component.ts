import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { cloudinarUpload } from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {

public catRef: AngularFireList<any>;
public updateRef: AngularFireDatabase;
public categoryData: Observable<any>;
  url: any= '';
  vendor: any= {title: '',
              description: '',
              address: {},
              email: '',
              thumb: ''};
  vendorRef: any;
  imageId: string;
       uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );

    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService, private spinnerService: Ng4LoadingSpinnerService) {
     this.vendorRef = af.list('/vendors');
        // Override onSuccessItem to retrieve the imageId
           this.uploader.onAfterAddingFile = (item: any) => {
            item.url = this.uploader.options.url;
            return item;
        };
    }

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

    onSubmit(form: NgForm) {
      this.spinnerService.show();
   //   this.af.object('/main-categories/'+ this.category.mainCategory).update({
   //       hasChild: true
   //   }).then(success => {
   //     this.category.hasChild = false;
        this.uploader.uploadAll();
         this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
             const res: any = JSON.parse(response);
           this.vendor.thumb = res.url;
         this.vendorRef.push(this.vendor).then((re) => {
          this.spinnerService.hide();
            this.toastr.success('Vendor Added Successfully!', 'Success!');
           this.router.navigate(['/vendors/manageVendors']);
         });
       };
  //    });
    }

     cancel() {
       this.router.navigate(['/vendors/manageVendors']);
    }
}


// }
