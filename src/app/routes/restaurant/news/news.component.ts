import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent  {

    siteVal: any;
    news: Array<any>;
    newsDataRef: AngularFireList<any>;
    newsObservable: Observable<any>;

    constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService) {
      this.newsDataRef = af.list('/news');
      this.newsObservable = this.newsDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

        this.newsObservable.subscribe((res) => {
         this.news = res;
     });
    }


  getnews(ev: any) {
        const val = ev;
        this.newsObservable = this.af.list('/news', ref => ref.orderByChild('title').startAt(val.charAt(0).toUpperCase() + val.slice(1))
           .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
        this.newsObservable.subscribe((data) => {
                this.news = data;
            });


    }


   newsShow(key) {
     this.router.navigate(['/news/viewNews', key]);
  }

   newsEdit(key) {
    this.router.navigate(['/news/editNews', key]);
  }

   menuItemEdit(key) {
    this.router.navigate(['/menu/editItems', key]);
  }

   newsDelete(key: any) {
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
               this.newsDataRef.remove(key).then((res) => {
                   swal('Deleted!', 'News Deleted Successfully!', 'success');
                 });
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }
}
