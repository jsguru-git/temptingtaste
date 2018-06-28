import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

    subscribersData: Array<any>;
    subscribeDataRef: AngularFireList<any>;
    subscribeObservable: Observable<any>;

    constructor(public af: AngularFireDatabase) {
      this.subscribeDataRef = af.list('/subscribe');
      this.subscribeObservable = this.subscribeDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

        this.subscribeObservable.subscribe((res) => {
         this.subscribersData = res;
     });
    }

    // getnews(ev: any) {
    //     let val = ev;
    //     this.subscribeObservable = this.af.list('/subscribe', ref => ref.orderByChild('email').startAt(val.charAt(0).toUpperCase() + val.slice(1))
    //        .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
    //     this.subscribeObservable.subscribe((data) => {
    //             this.subscribersData = data;
    //         });
    // }

  ngOnInit() {
  }

}
