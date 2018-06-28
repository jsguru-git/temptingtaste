import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-main-category',
  templateUrl: './view-main-category.component.html',
  styleUrls: ['./view-main-category.component.scss']
})
export class ViewMainCategoryComponent implements OnInit {

  public categoryDetails:any={};
  public catRef: AngularFireObject<any>;
  public catObservable:Observable<any>;
    constructor(private route: ActivatedRoute,
                public router: Router,
                 public af: AngularFireDatabase) {
        this.route.params.map(params => params['id']).subscribe((Id) => {           
        if(Id != null) {
          this.catRef = this.af.object('/main-categories/' + Id);
          this.catObservable = this.catRef.valueChanges();
          this.catObservable.subscribe((response) => { 
              this.categoryDetails = response;           
          });
        }
      });
    }
  
    ngOnInit(){
    
    }

}
