import {NgModule} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';

import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { Error404Component } from './pages/error404/error404.component';

import { HomeComponent } from './home/home/home.component';


import {CategoriesComponent} from './restaurant/categories/categories.component';
import { MainCategoriesComponent } from './restaurant/main-categories/main-categories.component';
import {AddCategoriesComponent} from './restaurant/categories/add-categories/add-categories.component';
import { AddMainCategoriesComponent } from './restaurant/main-categories/add-main-categories/add-main-categories.component';
import { EditMainCategoryComponent } from './restaurant/main-categories/edit-main-category/edit-main-category.component';
import { ViewMainCategoryComponent } from './restaurant/main-categories/view-main-category/view-main-category.component';
import {MenuItemsComponent} from './restaurant/menu-items/menu-items.component';
import {AddItemComponent} from './restaurant/menu-items/add-item/add-item.component';
import {OrdersComponent} from './restaurant/orders/orders.component';
import {ViewOrderComponent} from './restaurant/orders/view-order/view-order.component';

 import {UsersComponent} from './restaurant/users/users.component';
 import {AddUserComponent} from './restaurant/users/add-user/add-user.component';
 import {ViewUserComponent} from './restaurant/users/view-user/view-users.component';

import {SettingsComponent} from './restaurant/settings/settings.component';

import { ChatComponent } from './restaurant/chat/chat.component';

import {TagsComponent} from './restaurant/tags/tags.component';
import {EditTagesComponent} from './restaurant/tags/edit-tages/edit-tages.component';
import {AddTagsComponent} from './restaurant/tags/add-tags/add-tags.component';
import {BusinessInfoComponent} from './restaurant/business-info/business-info.component';
import {ProfileComponent} from './restaurant/profile/profile.component';
import {EditCategoryComponent} from './restaurant/categories/edit-category/edit-category.component';
import {ViewCategoryComponent} from './restaurant/categories/view-category/view-category.component';
import {ViewItemComponent} from './restaurant/menu-items/view-item/view-item.component';
import {EditItemComponent} from './restaurant/menu-items/edit-item/edit-item.component';
import {NewsComponent} from './restaurant/news/news.component';
import {AddNewsComponent} from './restaurant/news/add-news/add-news.component';
import {EditNewsComponent} from './restaurant/news/edit-news/edit-news.component';
import {ViewNewsComponent} from './restaurant/news/view-news/view-news.component';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {AuthService} from './pages/login/auth.service';
import {LoginService} from './pages/login/login.service';
import {Ng2PaginationModule} from 'ng2-pagination';

import { Ng2TableModule } from 'ng2-table/ng2-table';


import {CouponsComponent} from './restaurant/coupons/coupons.component';
import {AddCouponsComponent} from './restaurant/coupons/add-coupons/add-coupons.component';
import {LoyalitysComponent} from './restaurant/loyalitys/loyalitys.component';
import { PushNotificationComponent } from './restaurant/push-notification/push-notification.component';

import { TestimonialsComponent} from './restaurant/testimonials/testimonials.component';
import { AddTestimonialsComponent } from './restaurant/testimonials/add-testimonials/add-testimonials.component';
import { EditTestimonialsComponent } from './restaurant/testimonials/edit-testimonials/edit-testimonials.component';
import { ViewTestimonialsComponent} from './restaurant/testimonials/view-testimonials/view-testimonials.component';
import { SubscribersComponent } from './restaurant/subscribers/subscribers.component';
import { TableBookingComponent } from './restaurant/table-booking/table-booking.component';
import { ViewComponent } from './restaurant/table-booking/view/view.component';
import { DeliveryOptionsComponent } from './restaurant/delivery-options/delivery-options.component';
import { InvoiceComponent } from './restaurant/orders/invoice/invoice.component';
import { PickUpLocationComponent } from './restaurant/pick-up-location/pick-up-location.component';
import { AddPickUpLocationComponent } from './restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component';
import { EditPickUpLocationComponent } from './restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component';
import { SubCategoryComponent } from './restaurant/main-categories/sub-category/sub-category.component';
import { VendorsComponent } from './restaurant/vendors/vendors.component';
import { AddVendorComponent } from './restaurant/vendors/add-vendor/add-vendor.component';
import { EditVendorComponent } from './restaurant/vendors/edit-vendor/edit-vendor.component';

export const routes = [

    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'login', component: LoginComponent},

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [AuthService]},
            { path: 'pushNotification', component: PushNotificationComponent, canActivate: [AuthService]},

            {
                path: 'coupons',
                children: [
                    {path: 'all', component: CouponsComponent, canActivate: [AuthService]},
                    {path: 'addCoupons', component: AddCouponsComponent, canActivate: [AuthService]}

               ]
           },

             {
                path: 'categories',
                children: [
                    {path: 'manageCategories', component: CategoriesComponent, canActivate: [AuthService]},
                    {path: 'addCategory', component: AddCategoriesComponent, canActivate: [AuthService]},
                    {path: 'editCategory/:id', component: EditCategoryComponent, canActivate: [AuthService]},
                    {path: 'viewCategory/:id', component: ViewCategoryComponent, canActivate: [AuthService]}
                ]
            },

            {
                path: 'mainCategories',
                children: [
                    {path: 'manageMainCategories', component: MainCategoriesComponent, canActivate: [AuthService]},
                    {path: 'addMainCategory', component: AddMainCategoriesComponent, canActivate: [AuthService]},
                    {path: 'editMainCategory/:id', component: EditMainCategoryComponent, canActivate: [AuthService]},
                    {path: 'viewMainCategory/:id', component: ViewMainCategoryComponent, canActivate: [AuthService]},
                    {path: 'addSubCategory/:id', component: SubCategoryComponent, canActivate: [AuthService]},
                ]
            },
            {
                path: 'pickUpLocation',
                children: [
                    {path: 'managePickUpLocation', component: PickUpLocationComponent, canActivate: [AuthService]},
                     {path: 'addPickUpLocation', component: AddPickUpLocationComponent, canActivate: [AuthService]},
                     {path: 'editPickUpLocation/:id', component: EditPickUpLocationComponent, canActivate: [AuthService]},
                    // {path: 'viewMainCategory/:id', component: ViewMainCategoryComponent, canActivate: [AuthService]}
                ]
            },
            {
                path: 'vendors',
                children: [
                    {path: 'manageVendors', component: VendorsComponent, canActivate: [AuthService]},
                     {path: 'addVendor', component: AddVendorComponent, canActivate: [AuthService]},
                     {path: 'editVendor/:id', component: EditVendorComponent, canActivate: [AuthService]},
                    // {path: 'viewMainCategory/:id', component: ViewMainCategoryComponent, canActivate: [AuthService]}
                ]
            },

              {
                path: 'testimonials',
                children: [
                    {path: 'manageTestimonials', component: TestimonialsComponent},
                    {path: 'addTestimonials', component: AddTestimonialsComponent},
                    {path: 'editTestimonials/:id', component: EditTestimonialsComponent},
                    {path: 'viewTestimonials/:id', component: ViewTestimonialsComponent}
                ]
            },


            {
                path: 'news',
                children: [
                    {path: 'manageNews', component: NewsComponent, canActivate: [AuthService]},
                    {path: 'addNews', component: AddNewsComponent, canActivate: [AuthService]},
                    {path: 'editNews/:id', component: EditNewsComponent, canActivate: [AuthService]},
                    {path: 'viewNews/:id', component: ViewNewsComponent, canActivate: [AuthService]}
                ]
            },

            {
                path: 'order',
                children: [
                    {path: 'allOrder', component: OrdersComponent, canActivate: [AuthService]},
                    {path: 'viewOrder/:id', component: ViewOrderComponent, canActivate: [AuthService]},
                    {path: 'invoice/:id', component: InvoiceComponent, canActivate: [AuthService]},
                ]
            },

            {
                path: 'menu',
                children: [
                    {path: 'manageItems', component: MenuItemsComponent, canActivate: [AuthService]},
                    {path: 'addItems', component: AddItemComponent, canActivate: [AuthService]},
                    {path: 'viewItems/:id', component: ViewItemComponent, canActivate: [AuthService]},
                    {path: 'editItems/:id', component: EditItemComponent, canActivate: [AuthService]},

                ]
            },

            {
                path: 'users',
                children: [
                    {path: 'manageUsers', component: UsersComponent, canActivate: [AuthService]},
                   {path: 'addUser', component: AddUserComponent, canActivate: [AuthService]},
                   {path: 'viewUser/:id', component: ViewUserComponent, canActivate: [AuthService]}

                ]
            },

            {
                path: 'tags',
                children: [
                    {path: 'all', component: TagsComponent, canActivate: [AuthService]},
                    {path: 'addTags', component: AddTagsComponent, canActivate: [AuthService]},
                    {path: 'editTags/:id', component: EditTagesComponent, canActivate: [AuthService]}
                ]

            },

            {path: 'chat', component: ChatComponent, canActivate: [AuthService]},

            {path: 'setting', component: SettingsComponent, canActivate: [AuthService]},

            {path: 'loyalty', component: LoyalitysComponent, canActivate: [AuthService]},

            {path: 'businessInfo', component: BusinessInfoComponent, canActivate: [AuthService]},

            {path: 'UserProfile', component: ProfileComponent, canActivate: [AuthService]},

            {path: 'delivery/options', component: DeliveryOptionsComponent, canActivate: [AuthService]},

            {path: 'subscribers', component: SubscribersComponent, canActivate: [AuthService]},

            {path: 'tables/booking', component: TableBookingComponent, canActivate: [AuthService]},

            {path: 'tables/view/:id', component: ViewComponent, canActivate: [AuthService]}


        ] // children End
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: '404', component: Error404Component },

    // Not found
    { path: '**', redirectTo: '404' }

];

@NgModule({
providers: [

        AuthService,
        LoginService
    ]
})
class RestModule {
}
