import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUserComponent {

userDetails: any= {};
userRef: AngularFireObject<any>;
userObservable: Observable<any>;
  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase) {

         this.route.params.map(params => params['id']).subscribe((Id) => {
         if (Id != null) {
             this.userRef =  this.af.object('/users/' + Id);
          this.userObservable = this.userRef.valueChanges();
          this.userObservable.subscribe((response) => {
               this.userDetails = response;
          });
        }
      });
  }

}
