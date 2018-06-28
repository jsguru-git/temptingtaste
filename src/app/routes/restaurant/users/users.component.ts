import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {Router} from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


users: Array<any>;
usersDataRef: AngularFireList<any>;
userObservable: Observable<any>;
  constructor(public af: AngularFireDatabase, public router: Router ) {
     this.usersDataRef = af.list('/users');
    this.userObservable = this.usersDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
     this.userObservable.subscribe((res) => {
         this.users = res;
      });
   }

    usersShow(key) {
     this.router.navigate(['/users/viewUser', key]);
  }

   usersDelete(key: any) {
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
               this.usersDataRef.remove(key).then((res) =>  {
                   swal('Deleted!', 'User Deleted Successfully!', 'success');
                 });
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }

}
