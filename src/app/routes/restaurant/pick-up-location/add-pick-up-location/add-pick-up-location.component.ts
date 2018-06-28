import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-pick-up-location',
  templateUrl: './add-pick-up-location.component.html',
  styleUrls: ['./add-pick-up-location.component.scss']
})
export class AddPickUpLocationComponent {

  url: any = '';
  location = {
    name: '',
    address: '',
    city: '',
    area: '',
    pincode: 0,
    mobileNo: 0,
    available: true,
  };

  available = 'true';
  // categories: Array<any>
  // categoryDataRef: AngularFireList<any>;
  // categoryObservable:Observable<any>;
  locationDataRef: AngularFireList<any>;
  // imageId: string;

  constructor(public af: AngularFireDatabase, public toastr: ToastrService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) {
    this.locationDataRef = af.list('/pick-up-location');

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


  onSubmitLocation(form: NgForm) {
    this.spinnerService.show();
    if (this.available === 'false') {
      this.location.available = false;
  }

      this.locationDataRef.push(this.location).then((res) => {
        this.spinnerService.hide();
        this.toastr.success('Location Added Successfully!', 'Success!');
        this.router.navigate(['/pickUpLocation/managePickUpLocation']);
      });
    }

    cancel() {
      this.router.navigate(['/pickUpLocation/managePickUpLocation']);
    }
  }

