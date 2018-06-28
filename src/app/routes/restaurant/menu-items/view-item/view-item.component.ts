import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent {

  menuDetails: any= {};
  menuItemsdataRef: AngularFireObject<any>;
  menuItemObservable: Observable<any>;
  categoryRef: AngularFireObject<any>;
  categoryObservable: Observable<any>;

  constructor(private route: ActivatedRoute,  public router: Router, public af: AngularFireDatabase) {
        const x = localStorage.getItem('role');
        console.log(x);
        this.route.params.map(params => params['id']).subscribe((Id) => {
        if (Id != null) {
          this.menuItemsdataRef = this.af.object('/menuItems/' + Id);
          this.menuItemObservable = this.menuItemsdataRef.valueChanges();
            this.menuItemObservable.subscribe((response) => {
              this.menuDetails = response;

              this.categoryRef = this.af.object('/categories/' + response.category);
                this.categoryObservable = this.categoryRef.valueChanges();
                this.categoryObservable.subscribe((res) => {
                this.menuDetails.categoryTitle = res.title;
             });
            });
        }
      });
  }

}
