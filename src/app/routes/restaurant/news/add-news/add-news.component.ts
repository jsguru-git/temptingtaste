import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../news.service';
import {cloudinarUpload} from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
  providers: [ NewsService ]
})
export class AddNewsComponent  {

  url: any= '';
  news: any= {
    title: '',
    category: '',
    author: '',
    shortDescription: '',
    description: '',
    createdAt: Date.now(),
    publish: true
 //   notification: false
  };
  newsDataRef: AngularFireList<any>;
  imageId: string;
  publish: any = 'true';
  notification: any = 'false';

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );

    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService, public newsService: NewsService,
                private spinnerService: Ng4LoadingSpinnerService) {
     this.newsDataRef = af.list('/news');
        // Override onSuccessItem to retrieve the imageId
           this.uploader.onAfterAddingFile = (item: any) => {
            item.url = this.uploader.options.url;
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
        this.news.publish = true;
      }
     if (this.publish === 'false') {
      this.news.publish = false;
     }
       this.uploader.uploadAll();
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            const res: any = JSON.parse(response);
          this.news.thumb = res.url;
           this.newsDataRef.push(this.news).then((data) => {
           this.toastr.success('News Data Added Successfully!', 'Success!');
           this.sendNotification(res.key);
           this.spinnerService.hide();
          this.router.navigate(['/news/manageNews']);
        });
      };
    }
    cancel() {
       this.router.navigate(['/news/manageNews']);
    }

    sendNotification(key) {
       if (this.notification === 'true' && this.news.publish) {
   //   this.ordersDataRef.update(key,{status:event.target.value,orderView:true}).then((res)=>{
          const message = {
       //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
            app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
            contents: {'en': this.news.shortDescription},
            data: {'key': key, 'page': 'NewsDetailPage'},
            included_segments: ['All']
        };

  //      this.af.list('/orders/'+key+'/statusReading').push({title:event.target.value, time:Date.now()})

         this.newsService.sendNotification(message).subscribe(response => {

        });
   //       this.toastr.success('Order status updated!', 'Success!');
   //     });
    // }
      }
  }
}

