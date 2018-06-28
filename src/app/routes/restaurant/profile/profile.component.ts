import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userData: any= {};
  constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService, public authentication: AngularFireAuth, private spinnerService: Ng4LoadingSpinnerService) {
    this.af.object('/users/' + this.authentication.auth.currentUser.uid).valueChanges().subscribe(res => {
                        console.log('Firebase res: ' + JSON.stringify(res));
                        this.userData = res;
                    });
                         }

  onUpadteUser(form: NgForm) {
         this.spinnerService.show();
          console.log('Users Data : ' + JSON.stringify(this.userData));
           this.af.object('/users/' +  this.authentication.auth.currentUser.uid).update({
            email: this.userData.email,
            name: this.userData.name,
            street: this.userData.street,
            city: this.userData.city,
            zip: this.userData.zip,
            country: this.userData.country,
             mobileNo: this.userData.mobileNo
        }).then((res) => {
          this.spinnerService.hide();
        console.log('Success');
        this.toastr.success('Successfully!', ' Updated!');
      });
  }

}
