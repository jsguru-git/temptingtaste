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
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent {
  url: any= '';
uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );
categoryDetails: any= {};
categoriesdataRef: any;
public mainCategories: any[]= [];
public catRef: AngularFireList<any>;
public categoryData: Observable<any>;

  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService,
              public spinnerService: Ng4LoadingSpinnerService) {
           this.route.params.map(params => params['id']).subscribe((Id) => {
           if (Id != null) {
              this.categoriesdataRef = this.af.object('/categories/' + Id);
               this.af.object('/categories/' + Id).valueChanges()
               .subscribe((response) => {
              this.categoryDetails = response;
              this.catRef = this.af.list('/main-categories');
              this.categoryData = this.catRef.snapshotChanges().map(changes => {
               return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
             });
              this.categoryData.subscribe((res) => {
                console.log(res);
               this.mainCategories = res;
              });
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
       this.uploader.uploadAll();
       console.log('statement');
           this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            const res: any = JSON.parse(response);
            console.log('statement');
              this.categoriesdataRef.update({
              title: this.categoryDetails.title,
              description: this.categoryDetails.description,
              thumb: res.url,
              mainCategory: this.categoryDetails.mainCategory,
        }).then((data) => {
          this.spinnerService.hide();
          localStorage.removeItem('image');
          this.router.navigate(['/categories/manageCategories']);
           this.toastr.success('Categories Data Updated Successfully!', 'Success!');
        });
        };
       if (localStorage.getItem('image') == null) {
          console.log('if');
                this.categoriesdataRef.update({
            title: this.categoryDetails.title,
            description: this.categoryDetails.description,
            mainCategory: this.categoryDetails.mainCategory,
          }).then((res) => {
            this.spinnerService.hide();
          this.router.navigate(['/categories/manageCategories']);
           this.toastr.success('Categories Data Updated Successfully!', 'Success!');
        });
       }
    }

     cancel() {
       this.router.navigate(['/categories/manageCategories']);
    }
}
