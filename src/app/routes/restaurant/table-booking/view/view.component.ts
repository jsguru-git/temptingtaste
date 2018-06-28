import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from  'rxjs/Observable';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  tableDetails:any={};
  userDetails:any={};
  tablesdataRef: AngularFireObject<any>;
  tablesObservable:Observable<any>;
  userRef: AngularFireObject<any>;
  userObservable:Observable<any>;

  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase) {
  	 	 	this.route.params.map(params => params['id']).subscribe((Id) => {
  	 	if(Id != null) {
  	 		console.log("Id "+Id);
	        this.tablesdataRef = this.af.object('/table-bookings/'+ Id);
            this.tablesObservable = this.tablesdataRef.valueChanges();
	        this.tablesObservable.subscribe((response) => { 
	        this.tableDetails = response;
	        this.userRef = this.af.object('/users/'+ response.userID);
	        this.userObservable = this.userRef.valueChanges();
	        this.userObservable.subscribe((res)=>{
               this.userDetails = res;
               console.log("user details "+JSON.stringify(this.userDetails));
	        })
	        console.log("booking tables "+JSON.stringify(this.tableDetails));
	        })
          }
       });
  }

  ngOnInit() {
  }

}
