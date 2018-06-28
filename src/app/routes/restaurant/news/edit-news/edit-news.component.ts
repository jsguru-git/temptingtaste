import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import {cloudinarUpload} from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent {
uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );
url: any= '';

newsDetails: any= {
  title: '',
  shortDescription: '',
  description: '',

};
publish: string;

newsdataRef: AngularFireObject<any>;
newsObservable: Observable<any>;
  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService,
              private spinnerService: Ng4LoadingSpinnerService) {
             this.route.params.map(params => params['id']).subscribe((Id) => {
            if (Id != null) {
               this.newsdataRef = this.af.object('/news/' + Id);
               this.newsObservable = this.newsdataRef.valueChanges();
                this.newsObservable.subscribe((response) => {
                  this.newsDetails = response;
                  console.log(this.newsDetails);
                  if (this.newsDetails.publish) {
                    this.publish = 'true';
                  } else {
                    this.publish = 'false';
                  }
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
     // Image Preview
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

           // Submit function

    onSubmitNews(form: NgForm) {
      this.spinnerService.show();
      if (this.publish === 'true') {
        this.newsDetails.publish = true;
      }
     if (this.publish === 'false') {
       console.log('is false');
      this.newsDetails.publish = false;
     }
       this.uploader.uploadAll();
       console.log('statement');
           this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            const res: any = JSON.parse(response);
           console.log(this.newsDetails.publish);
              this.newsdataRef.update({
              title: this.newsDetails.title,
              description: this.newsDetails.description,
              shortDescription: this.newsDetails.shortDescription,
              thumb: res.url,
              author: this.newsDetails.author,
              publish: this.newsDetails.publish,
              category: this.newsDetails.category
        }).then((data) => {
          this.spinnerService.hide();
          localStorage.removeItem('image');
          this.router.navigate(['/news/manageNews']);
           this.toastr.success('news Data Updated Successfully!', 'Success!');
        });
        };
       if (localStorage.getItem('image') == null) {
           this.newsdataRef.update({
            title: this.newsDetails.title,
            description: this.newsDetails.description,
            shortDescription: this.newsDetails.shortDescription,
            author: this.newsDetails.author,
            publish: this.newsDetails.publish,
            category: this.newsDetails.category
          }).then((res) => {
            this.spinnerService.hide();
          this.router.navigate(['/news/manageNews']);
           this.toastr.success('news Data Updated Successfully!', 'Success!');
        });
       }
    }
    cancel() {
       this.router.navigate(['/news/manageNews']);
    }
}
