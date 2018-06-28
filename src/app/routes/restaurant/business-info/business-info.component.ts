import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';
@Component({
    selector: 'app-business-info',
    templateUrl: './business-info.component.html',
    styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent {
    business = {
        email: '',
        description: '',
        address: '',
        facebookLink: '',
        twitterLink: '',
        officeLocation: '',
        phoneNo: '',
        storeName: ''

    };
    businessDataObservable: any;
    // Observable<any>;
    constructor(public af: AngularFireDatabase, public toastr: ToastrService) {
        this.businessDataObservable = af.object('/business');
        af.object('/business').valueChanges().subscribe((res: any) => {
            this.business = res;
        });
    }

    onSubmitBusiness(form: NgForm) {
        console.log('submitBusiness');
        this.businessDataObservable.set({
            email: this.business.email,
            description: this.business.description,
            address: this.business.address,
          //  facebookLink: this.business.facebookLink,
         //   twitterLink: this.business.twitterLink,
            officeLocation: this.business.officeLocation,
            phoneNo: this.business.phoneNo,
            storeName: this.business.storeName
        }).then((res) => {
            console.log('submitBusinessSuccess');
            this.toastr.success('Your Business details updated!', 'Success!');
        });
    }
}
