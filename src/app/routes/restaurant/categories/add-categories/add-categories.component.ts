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
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent  {

  public mainCategories: any[]= [];
public catRef: AngularFireList<any>;
public updateRef: AngularFireDatabase;
public categoryData: Observable<any>;
  url: any= '';
  category: any= {};
  categoryRef: any;
  imageId: string;
       uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );

    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService,
                public spinnerService: Ng4LoadingSpinnerService) {
     this.categoryRef = af.list('/categories');
        // Override onSuccessItem to retrieve the imageId
           this.uploader.onAfterAddingFile = (item: any) => {
            item.url = this.uploader.options.url;
            return item;
        };
        this.catRef = this.af.list('/main-categories');
        this.categoryData = this.catRef.snapshotChanges().map(changes => {
         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
       });
       this.categoryData.subscribe((res) => {
         this.mainCategories = res;
        });
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
      this.af.object('/main-categories/' + this.category.mainCategory).update({
          hasChild: true
      }).then(success => {
        this.category.hasChild = false;
        this.uploader.uploadAll();
         this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
             const res: any = JSON.parse(response);
           this.category.thumb = res.url;
         this.categoryRef.push(this.category).then((data) => {
          this.spinnerService.hide();
            this.toastr.success('Categories Data Added Successfully!', 'Success!');
           this.router.navigate(['/categories/manageCategories']);
         });
       };
      });
      // this.category.hasChild = false;
      //  this.uploader.uploadAll();
      //   this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      //       let res: any = JSON.parse(response);
      //     this.category.thumb = res.url;
      //   this.categoryRef.push(this.category).then((res)=>{
      //      this.toastr.success('Categories Data Added Successfully!', 'Success!');
      //     this.router.navigate(['/categories/manageCategories']);
      //   });
      // }
    }

     cancel() {
       this.router.navigate(['/categories/manageCategories']);
    }
}

