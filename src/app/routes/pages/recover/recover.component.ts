import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-recover',
    templateUrl: './recover.component.html',
    styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, public af: AngularFireAuth, public toastr: ToastrService, public spinnerService: Ng4LoadingSpinnerService,
                 public router: Router) {
        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])]
        });
    }

    submitForm($ev, value: any) {
        this.spinnerService.show();
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            this.af.auth.sendPasswordResetEmail(value.email).then(() => {
                this.spinnerService.hide();
                this.toastr.success('Please check your email to reset your password!', 'Success!');
                this.router.navigate(['/login']);
               }, error => {
          //      this.showAlert(error.message);
          this.spinnerService.hide();
              console.log(error);
               });
        }
    }

    ngOnInit() {
    }

}
