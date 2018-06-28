import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

public siteVal: any;
public categories: any[]= [];
public catRef: AngularFireList<any>;
public categoryData: Observable<any>;

    constructor(public af: AngularFireDatabase,
                public router: Router,
                public toastr: ToastrService) {

    this.catRef = this.af.list('/categories');
     this.categoryData = this.catRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.categoryData.subscribe((res) => {
      this.categories = res;
     });
  }



  getCategory(ev: any) {
        const val = ev;
         this.categoryData = this.af.list('/categories', ref => ref.orderByChild('title').startAt(val.charAt(0)
         .toUpperCase() + val.slice(1))
           .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
        this.categoryData
            .subscribe((data) => {
                this.categories = data;
            });


    }


   categoryShow(key) {
     this.router.navigate(['/categories/viewCategory', key]);
  }

   categoryEdit(key) {
    this.router.navigate(['/categories/editCategory', key]);
  }

categoryDelete(key: any) {
   swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, (isConfirm) => {
            if (isConfirm) {
              this.catRef.remove(key).then(resp => {
                swal('Deleted!', 'Categories Data Deleted Successfully!', 'success');
              });
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }

  ngOnInit() {

  }
}
