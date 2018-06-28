import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Injectable()
export class NewsService {

  url: any = 'https://onesignal.com/api/v1/notifications';


  constructor(private http: Http) {
  }

  sendNotification(message) {
    const body = JSON.stringify(message);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // copy your Rest api key below ;
    headers.append('Authorization', 'Basic Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
    return this.http.post(this.url, body, {
      headers: headers
    }).map((data: Response) => data.json());

  }
}
