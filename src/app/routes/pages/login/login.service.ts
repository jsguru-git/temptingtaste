import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LoginService {

  constructor(public af: AngularFireAuth) {
  }


  isAuthenticated() {
    const user = localStorage.getItem('uid') != null;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}

