import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';

import { SharedModule } from '../../shared/shared.module';
import {AuthService} from '../pages/login/auth.service';

// const routes: Routes = [
//     { path: '', component: HomeComponent },
// ];

@NgModule({
    imports: [
        SharedModule,
        Ng2ChartsModule,
        // RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
