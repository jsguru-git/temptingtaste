import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {ColorPickerModule, ColorPickerService} from 'angular2-color-picker/lib';
import {CustomFormsModule} from 'ng2-validation';
import {SharedModule} from '../../shared/shared.module';

import {CategoriesComponent} from './categories/categories.component';
import {AddCategoriesComponent} from './categories/add-categories/add-categories.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {AddItemComponent} from './menu-items/add-item/add-item.component';
import {OrdersComponent} from './orders/orders.component';
import {ViewOrderComponent} from './orders/view-order/view-order.component';

 import {UsersComponent} from './users/users.component';
 import {AddUserComponent} from './users/add-user/add-user.component';
 import {ViewUserComponent} from './users/view-user/view-users.component';

import {SettingsComponent} from './settings/settings.component';
import {TagsComponent} from './tags/tags.component';
import {EditTagesComponent} from './tags/edit-tages/edit-tages.component';
import {AddTagsComponent} from './tags/add-tags/add-tags.component';
import {BusinessInfoComponent} from './business-info/business-info.component';
import {ProfileComponent} from './profile/profile.component';
import {EditCategoryComponent} from './categories/edit-category/edit-category.component';
import {ViewCategoryComponent} from './categories/view-category/view-category.component';
import {ViewItemComponent} from './menu-items/view-item/view-item.component';
import {EditItemComponent} from './menu-items/edit-item/edit-item.component';
import {NewsComponent} from './news/news.component';
import {AddNewsComponent} from './news/add-news/add-news.component';
import {EditNewsComponent} from './news/edit-news/edit-news.component';
import {ViewNewsComponent} from './news/view-news/view-news.component';
import {CouponsComponent} from './coupons/coupons.component';
import {AddCouponsComponent} from './coupons/add-coupons/add-coupons.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import {LoyalitysComponent} from './loyalitys/loyalitys.component';

import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {AuthService} from '../pages/login/auth.service';
import {LoginService} from '../pages/login/login.service';
import {DateService} from '../restaurant/orders/view-order/date.service';

import {Ng2PaginationModule} from 'ng2-pagination';
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { StoreModule } from '@ngrx/store';
import { chatData } from './chat/action';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AddTestimonialsComponent } from './testimonials/add-testimonials/add-testimonials.component';
import { EditTestimonialsComponent } from './testimonials/edit-testimonials/edit-testimonials.component';
import { ViewTestimonialsComponent } from './testimonials/view-testimonials/view-testimonials.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { ViewComponent } from './table-booking/view/view.component';
import { DeliveryOptionsComponent } from './delivery-options/delivery-options.component';
import { InvoiceComponent } from './orders/invoice/invoice.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { AddMainCategoriesComponent } from './main-categories/add-main-categories/add-main-categories.component';
import { EditMainCategoryComponent } from './main-categories/edit-main-category/edit-main-category.component';
import { ViewMainCategoryComponent } from './main-categories/view-main-category/view-main-category.component';
import { PickUpLocationComponent } from './pick-up-location/pick-up-location.component';
import { AddPickUpLocationComponent } from './pick-up-location/add-pick-up-location/add-pick-up-location.component';
import { EditPickUpLocationComponent } from './pick-up-location/edit-pick-up-location/edit-pick-up-location.component';
import { SubCategoryComponent } from './main-categories/sub-category/sub-category.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AddVendorComponent } from './vendors/add-vendor/add-vendor.component';
import { EditVendorComponent } from './vendors/edit-vendor/edit-vendor.component';

@NgModule({
    imports: [
        SharedModule,
        CustomFormsModule,
        Ng2PaginationModule,
        Ng2CloudinaryModule,
        FileUploadModule,
        StoreModule.forRoot({data: chatData})
    ],

    declarations: [
        CategoriesComponent,
        AddCategoriesComponent,
        MenuItemsComponent,
        AddItemComponent,
        OrdersComponent,
        SettingsComponent,
        TagsComponent,
        EditTagesComponent,
        AddTagsComponent,
        BusinessInfoComponent,
        ViewOrderComponent,
        ProfileComponent,
        EditCategoryComponent,
        ViewCategoryComponent,
        NewsComponent,
        AddNewsComponent,
        EditNewsComponent,
        ViewNewsComponent,
        ViewItemComponent,
        EditItemComponent,
        AddCouponsComponent,
        CouponsComponent,
        PushNotificationComponent,
        ChatComponent,
        ChatBoxComponent,
        UsersComponent,
        ViewUserComponent,
        AddUserComponent,
        TestimonialsComponent,
        AddTestimonialsComponent,
        EditTestimonialsComponent,
        LoyalitysComponent,
        ViewTestimonialsComponent,
        SubscribersComponent,
        TableBookingComponent,
        ViewComponent,
        DeliveryOptionsComponent,
        InvoiceComponent,
        MainCategoriesComponent,
        AddMainCategoriesComponent,
        EditMainCategoryComponent,
        ViewMainCategoryComponent,
        PickUpLocationComponent,
        AddPickUpLocationComponent,
        EditPickUpLocationComponent,
        SubCategoryComponent,
        VendorsComponent,
        AddVendorComponent,
        EditVendorComponent
    ],
    providers: [
        AuthService,
        LoginService,
        DateService
    ],

    exports: [RouterModule,
        Ng2PaginationModule
    ]
})



export class RestaurantModule {
}
