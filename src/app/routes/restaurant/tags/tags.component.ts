import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

     tags: Array<any>;
     tagsDataRef: AngularFireList<any>;
     tagsObservable: Observable<any>;
    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService) {
     this.tagsDataRef = af.list('/tags');
     this.tagsObservable = this.tagsDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
     this.tagsObservable.subscribe((res) => {
         this.tags = res;
     });

    }
   tagEdit(key) {
    this.router.navigate(['/tags/editTags', key]);
  }

  tagDelete(key: any) {
    swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, (isConfirm) => {
            if (isConfirm) {
               this.tagsDataRef.remove(key).then((res) => {
                   swal('Deleted!', 'Tag Deleted Successfully!', 'success');
                 });
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }

}
