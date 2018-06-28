import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(public settings: SettingsService, private router: Router) { }

   my() {
        if (localStorage.getItem('uid')) {
          this.router.navigate(['home']);

         }
        else {
          this.router.navigate(['/login']);
        }// [routerLink]="'/home'"
   }
  ngOnInit() {
  }

}
