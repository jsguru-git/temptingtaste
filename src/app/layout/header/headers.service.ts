import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersService {

  constructor(private http: Http) {}

  sendNotification(message) {
         const body = JSON.stringify(message);
         // console.log("message======"+ body)
         const headers = new Headers();
        //  headers.append('Authorization', 'Basic YjNmZDA0MGUtZGZhNy00YmVjLWE5ZjAtZDdkZTExN2E1NWVl');
         headers.append('Authorization', 'Basic Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
         headers.append('Content-Type', 'application/json; charset=utf-8');
         return this.http.post('https://onesignal.com/api/v1/notifications', body, {
        headers: headers
    })
    .map((data: Response) => data.json())
     .catch(this.handleError);
  }








  private handleError (error: any) {
   return Observable.throw(error.json());
  }
}
