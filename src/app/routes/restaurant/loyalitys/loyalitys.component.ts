import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
// import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import {NgForm} from '@angular/forms';
// import { Meta, Title } from '@angular/platform-browser';
// const swal = require('sweetalert');

@Component({
  selector: 'app-loyalitys',
  templateUrl: './loyalitys.component.html',
  styleUrls: ['./loyalitys.component.scss']
})
export class LoyalitysComponent {

    loyalitys: any = {
      loylityPercentage: 0,
      minLoyalityPointes: 0,
      enable: true
    };
    loyalityData: AngularFireObject<any>;

    constructor(public af: AngularFireDatabase, private toastr: ToastrService, public spinnerService: Ng4LoadingSpinnerService) {
        this.loyalityData = af.object('/loyalitys');
        this.loyalityData.valueChanges().subscribe((res) => {
          if (res != null) {
            this.loyalitys = res;
          }
            // console.log("res "+JSON.stringify(res));
        });
          // title: Title, title.setTitle('Dashboard');
    }

    onSubmitLoyality() {
      this.spinnerService.show();
        this.loyalityData.set({loylityPercentage: this.loyalitys.loylityPercentage,
                               minLoyalityPointes: this.loyalitys.minLoyalityPointes,
                               enable: this.loyalitys.enable
                              }).then((res) => {
            this.spinnerService.hide();
            this.toastr.success('Loyalitys updated Successfully!', 'Success!');
        });
    }
}
