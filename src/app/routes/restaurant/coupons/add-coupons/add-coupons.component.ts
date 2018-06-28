import {Component} from '@angular/core';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {ToastrService} from 'ngx-toastr';
@Component({
    selector: 'app-add-coupons',
    templateUrl: './add-coupons.component.html',
    styleUrls: ['./add-coupons.component.scss']
})
export class AddCouponsComponent {

    coupon: any = {
        name: '',
        value:'',
        date:''
    };
    couponDataRef: AngularFireList<any>;


    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService) {
        this.couponDataRef = af.list('/coupons');
    }

    onSubmitTag(form: NgForm) {
        this.coupon.date =  Date.now();
        this.couponDataRef.push(this.coupon).then((res) => {
            this.router.navigate(['/coupons/all']);
            this.toastr.success('Coupon Added Successfully!', 'Success!');
        })
    }
     cancel(){
       this.router.navigate(['/coupons/all']);
    }
}

