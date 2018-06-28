import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

public categoryDetails: any= {};
public catRef: AngularFireObject<any>;
public mainCatRef: AngularFireObject<any>;
public catObservable: Observable<any>;
public mainCatObservable: Observable<any>;
  constructor(private route: ActivatedRoute,
              public router: Router,
               public af: AngularFireDatabase) {
      this.route.params.map(params => params['id']).subscribe((Id) => {
      if (Id != null) {
        this.catRef = this.af.object('/categories/' + Id);
        this.catObservable = this.catRef.valueChanges();
        this.catObservable.subscribe((response) => {
            this.categoryDetails = response;
            this.mainCatRef = this.af.object('/main-categories/' + this.categoryDetails.mainCategory);
            this.mainCatObservable = this.mainCatRef.valueChanges();
            this.mainCatObservable.subscribe((res) => {
                this.categoryDetails.mainCategory = res.title;

            });


        });
      }
    });
  }

  ngOnInit() {

  }

}
