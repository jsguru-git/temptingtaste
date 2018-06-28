import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DateService {

    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    getDate(num){
      if (num === 0){
      var  y = new Date().getFullYear();
      var  m = new Date().getMonth();
      var M = this.months[m];
      var  d = new Date().getDate();
      } else {
        var  y = new Date(num).getFullYear();
        var  m = new Date(num).getMonth();
        var M = this.months[m];
        var  d = new Date(num).getDate();
      }
      return `${d} ${M} ${y}`;
    }



}
