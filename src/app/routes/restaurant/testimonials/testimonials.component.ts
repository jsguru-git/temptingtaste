import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public siteVal: any;
  public testimonials: any[]= [];
  public testimonialRef: AngularFireList<any>;
  public testimonialsData: Observable<any>;

  constructor(public af: AngularFireDatabase,
              public router: Router,
              public toastr: ToastrService) {
    this.testimonialRef = this.af.list('/testimonials');
    this.testimonialsData = this.testimonialRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.testimonialsData.subscribe((res) => {
      this.testimonials = res;
     });
  }

  searchTestimonials(ev: any) {
    const val = ev;
    this.testimonialsData = this.af.list('/testimonials', ref => ref.orderByChild('name').startAt(val.charAt(0).toUpperCase() + val.slice(1))
           .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
        this.testimonialsData
            .subscribe((data) => {
                this.testimonials = data;
            });


    }
  viewTestimonial(key) {
   this.router.navigate(['/testimonials/viewTestimonials', key]);
  }

  updateTestimonial(key) {
   this.router.navigate(['/testimonials/editTestimonials', key]);
  }

  testimonialDelete(key: any) {
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
              this.testimonialRef.remove(key).then(resp => {
                swal('Deleted!', 'Testimonial Data Deleted Successfully!', 'success');
              });
              } else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
  }
  ngOnInit() {
  }

}
