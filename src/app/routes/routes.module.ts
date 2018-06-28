import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
import { RestaurantModule } from './restaurant/restaurant.module';


import { menu } from './menu';
import { routes } from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule,
        RestaurantModule,
        HomeModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(private menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
