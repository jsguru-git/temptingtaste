import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent {

newsDetails:any={};
newsdataRef: AngularFireObject<any>;
newsObservable:Observable<any>;
  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase) {
  	 	 	this.route.params.map(params => params['id']).subscribe((Id) => {
  	 	 	 	console.log("id" + JSON.stringify(Id));
  	 	  if(Id != null) {
          this.newsdataRef = this.af.object('/news/' + Id);
          this.newsObservable = this.newsdataRef.valueChanges();
            this.newsObservable.subscribe((response) => { 
            	this.newsDetails = response;    
              //console.log("details "+JSON.stringify(this.newsDetails));      
             })
        }
      });
  }

}