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
  selector: 'app-edit-main-category',
  templateUrl: './edit-main-category.component.html',
  styleUrls: ['./edit-main-category.component.scss']
})
export class EditMainCategoryComponent {

  url: any= '';
  uploader: CloudinaryUploader = new CloudinaryUploader(
          new CloudinaryOptions(cloudinarUpload)
      );
  categoryDetails: any= {};
  categoriesdataRef: any;
  hasChild: any;

    constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService,
                public spinnerService: Ng4LoadingSpinnerService) {
            this.route.params.map(params => params['id']).subscribe((Id) => {
              console.log(Id);
         if (Id != null) {
          this.categoriesdataRef = this.af.object('/main-categories/' + Id);
          this.af.object('/main-categories/' + Id).valueChanges()
            .subscribe((response) => {
                this.categoryDetails = response;
                if (this.categoryDetails.hasChild) {
                  this.hasChild = 'true';
                } else {
                  this.hasChild = 'false';
                }
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

      onSubmitCategory(form: NgForm) {
        this.spinnerService.show();
        if (this.hasChild === 'true') {
          this.categoryDetails.hasChild = true;
        } else {
          this.categoryDetails.hasChild = false;
        }

         this.uploader.uploadAll();
         console.log('statement');
             this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
              const res: any = JSON.parse(response);
              console.log('statement');
                this.categoriesdataRef.update({
                title: this.categoryDetails.title,
                description: this.categoryDetails.description,
                hasChild: this.categoryDetails.hasChild,
                thumb: res.url,
          }).then((data) => {
            this.spinnerService.hide();
            localStorage.removeItem('image');
            this.router.navigate(['/mainCategories/manageMainCategories']);
             this.toastr.success('Categories Data Updated Successfully!', 'Success!');
          });
          };
         if (localStorage.getItem('image') == null) {
            console.log('if');
                  this.categoriesdataRef.update({
              title: this.categoryDetails.title,
              description: this.categoryDetails.description,
              hasChild: this.categoryDetails.hasChild,
            }).then((res) => {
              this.spinnerService.hide();
            this.router.navigate(['/mainCategories/manageMainCategories']);
             this.toastr.success('Categories Data Updated Successfully!', 'Success!');
          });
         }
      }

       cancel() {
         this.router.navigate(['/mainCategories/manageMainCategories']);
      }

}
