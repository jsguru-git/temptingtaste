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
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent  {

  url: any= '';
  uploader: CloudinaryUploader = new CloudinaryUploader(
          new CloudinaryOptions(cloudinarUpload)
      );
  vendorDetails: any= {address: {}};
  vendorsdataRef: any;
// public vendorRef:AngularFireList<any>;
  public vendorData: Observable<any>;

    constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService, private spinnerService: Ng4LoadingSpinnerService) {
            this.route.params.map(params => params['id']).subscribe((Id) => {
         if (Id != null) {
          this.vendorsdataRef = this.af.object('/vendors/' + Id);
          this.af.object('/vendors/' + Id).valueChanges()
            .subscribe((response) => {
                this.vendorDetails = response;
              //  this.vendorRef = this.af.list('/main-categories');
              //   this.categoryData = this.catRef.snapshotChanges().map(changes => {
              //    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
              //  });
              //   this.categoryData.subscribe((res)=>{
              //     console.log(res);
              //    this.mainCategories = res;
              //   });
              });
            }
         });
         this.uploader.onBeforeUploadItem = (item: any) => {
              item.url = this.uploader.options.url;
              localStorage.setItem('image' , 'image Is going');
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
             this.uploader.uploadAll();
             this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
              const res: any = JSON.parse(response);
                this.vendorsdataRef.update({
                title: this.vendorDetails.title,
                address: this.vendorDetails.address,
                code: this.vendorDetails.code,
                thumb: res.url,
             //   city: this.vendorDetails.city,
             //   zipcode: this.vendorDetails.zipcode,
                phone: this.vendorDetails.phone,
                email: this.vendorDetails.email,
                description: this.vendorDetails.description
          }).then((re) => {
            localStorage.removeItem('image');
            this.spinnerService.hide();
            this.router.navigate(['/vendors/manageVendors']);
             this.toastr.success('Vendors Data Updated Successfully!', 'Success!');
          });
          };
         if (localStorage.getItem('image') == null) {
                  this.vendorsdataRef.update({
                    title: this.vendorDetails.title,
                    address: this.vendorDetails.address,
                    code: this.vendorDetails.code,
                   // city: this.vendorDetails.city,
                   // zipcode: this.vendorDetails.zipcode,
                    phone: this.vendorDetails.phone,
                    email: this.vendorDetails.email,
                    description: this.vendorDetails.description
            }).then((res) => {
              this.spinnerService.hide();
            this.router.navigate(['/vendors/manageVendors']);
             this.toastr.success('Vendors Data Updated Successfully!', 'Success!');
          });
         }
      }

       cancel() {
         this.router.navigate(['/vendors/manageVendors']);
      }

}
