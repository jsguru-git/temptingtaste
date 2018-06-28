import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import { cloudinarUpload } from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.scss']
})
export class AddTestimonialsComponent implements OnInit {

  public url: any = './assets/img/profile/people-01.jpg';
  public testimonial: any= {};
  public testimonialDataRef: AngularFireList<any>;
  public imageId: string;

  public ratingStates: any = [
        { stateOn: 'fa fa-star',
         stateOff: 'fa fa-star-o' },
     ];
  public maxRat: number = 5;
  public isReadonly: boolean = false;

  uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions(cloudinarUpload)
    );

  constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService, private spinnerService: Ng4LoadingSpinnerService) {
    this.testimonialDataRef = af.list('/testimonials');
      this.uploader.onAfterAddingFile = (item: any) => {
      item.url = this.uploader.options.url;
      return item;
    };
  }

  readerImage(event) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (data: any) => {
          this.url = data.target.result;
        };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
         // Submit function
  onSubmitTestimonial(form: NgForm) {
    this.spinnerService.show();
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.testimonial.thumb = res.url;
      this.testimonialDataRef.push(this.testimonial).then((resp) => {
        this.spinnerService.hide();
        this.toastr.success('News Data Added Successfully!', 'Success!');
        this.router.navigate(['/testimonials/manageTestimonials']);
      });
    };
  }

  cancel() {
    this.router.navigate(['/testimonials/manageTestimonials']);
  }

  ngOnInit() {
  }

}
