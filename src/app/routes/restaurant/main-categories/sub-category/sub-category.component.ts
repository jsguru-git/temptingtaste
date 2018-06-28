import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { cloudinarUpload } from '../../../../firebase.config';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent  {

  constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService, private route: ActivatedRoute,
              public spinnerService: Ng4LoadingSpinnerService) {
    this.route.params.map(params => params['id']).subscribe((Id) => {
      // if(Id != null) {
      //  this.categoriesdataRef = this.af.object('/main-categories/' + Id);
      //  this.af.object('/main-categories/' + Id).valueChanges()
      //    .subscribe((response) => {
      //        this.categoryDetails = response;
      //      })
      //    }
      console.log(Id);
      });


}
}
