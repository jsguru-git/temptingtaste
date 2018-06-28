import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-edit-tages',
  templateUrl: './edit-tages.component.html',
  styleUrls: ['./edit-tages.component.scss']
})
export class EditTagesComponent {

tagDetails: any= {};
tagsdataRef: AngularFireObject<any>;
tagsObservable: Observable<any>;
  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase, public toastr: ToastrService, private spinnerService: Ng4LoadingSpinnerService) {
      this.route.params.map(params => params['id']).subscribe((Id) => {
      if (Id != null) {
            this.tagsdataRef = this.af.object('/tags/' + Id);
            this.tagsObservable = this.tagsdataRef.valueChanges();
            this.tagsObservable.subscribe((response) => {
                 this.tagDetails = response;
            });
          }
       });
  }
    onSubmitTag(form: NgForm) {
      this.spinnerService.show();
        this.tagsdataRef.update({
           tags: this.tagDetails.tags,
        }).then((res) => {
          this.spinnerService.hide();
           this.toastr.success('Tags Updated Successfully!', 'Success!');
        this.router.navigate(['/tags/all']);
      });
    }

      cancel() {
       this.router.navigate(['/tags/all']);
    }
}
