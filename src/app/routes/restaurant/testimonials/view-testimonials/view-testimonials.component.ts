import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-testimonials',
  templateUrl: './view-testimonials.component.html',
  styleUrls: ['./view-testimonials.component.scss']
})
export class ViewTestimonialsComponent implements OnInit {

  public testimonial: any= {};
  public testimonialRef: AngularFireObject<any>;
  public testimonialObservable: Observable<any>;
  public ratingStates: any = [
      { stateOn: 'fa fa-star',
       stateOff: 'fa fa-star-o' },
   ];
  public maxRat: number = 5;
  public isReadonly: boolean = true;

  constructor(private route: ActivatedRoute,
              public router: Router,
              public af: AngularFireDatabase) {
      this.route.params.map(params => params['id']).subscribe((Id) => {
      if (Id != null) {
        this.testimonialRef = this.af.object('/testimonials/' + Id);
        this.testimonialObservable = this.testimonialRef.valueChanges();
        this.testimonialObservable.subscribe((response) => {
            this.testimonial = response;
        });
      }
    });
  }

  ngOnInit() {
  }

}
