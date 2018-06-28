webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(settings) {
        this.settings = settings;
    }
    Object.defineProperty(AppComponent.prototype, "isFixed", {
        get: function () { return this.settings.layout.isFixed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsed", {
        get: function () { return this.settings.layout.isCollapsed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isBoxed", {
        get: function () { return this.settings.layout.isBoxed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "useFullLayout", {
        get: function () { return this.settings.layout.useFullLayout; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "hiddenFooter", {
        get: function () { return this.settings.layout.hiddenFooter; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "horizontal", {
        get: function () { return this.settings.layout.horizontal; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isFloat", {
        get: function () { return this.settings.layout.isFloat; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "offsidebarOpen", {
        get: function () { return this.settings.layout.offsidebarOpen; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "asideToggled", {
        get: function () { return this.settings.layout.asideToggled; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsedText", {
        get: function () { return this.settings.layout.isCollapsedText; },
        enumerable: true,
        configurable: true
    });
    ;
    AppComponent.prototype.ngOnInit = function () {
        $(document).on('click', '[href="#"]', function (e) { return e.preventDefault(); });
        //       var OneSignal= window['OneSignal'] || [];
        //       OneSignal.push(["init",{
        //         appId:"452b400d-27a2-4df3-a485-8161a7d2d323",
        //         autoRegister:false,
        //         subdomainName:'https://restaurantfire.onesignal.com',
        //         httpPermissionRequest: {
        //          enable: true
        //         },
        //         notifyButton:{
        //           enable:true
        //         }
        //       }]);
        //      OneSignal.push(function(){
        //        OneSignal.getUserId().then(function(userId){
        //          if(userId == null){
        //          }else{
        //             console.log('oneSignalId: 'userId);
        //            localStorage.setItem('playerId',userId);
        //          }
        //        });
        //      });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fixed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isFixed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isCollapsed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-boxed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isBoxed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fs'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "useFullLayout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hidden-footer'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "hiddenFooter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-h'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "horizontal", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-float'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isFloat", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.offsidebar-open'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "offsidebarOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-toggled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "asideToggled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed-text'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isCollapsedText", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]])
    ], AppComponent);
    return AppComponent;
}());

/*  OneSignal.push(["init", {
        //appId: "ace5d8a2-5018-4523-ab21-cff285d32524",
        appId:"9740a50f-587f-4853-821f-58252d998399",
        autoRegister: false, // Set to true to automatically prompt visitors
        //subdomainName: 'https://restrntfire.onesignal.com',
        subdomainName:'https://restaurantfire.onesignal.com',
        httpPermissionRequest: {
           enable: true
        },
        notifyButton: {
           enable: true// Set to false to hide
        }
    }]);
    console.log('OneSignal Initialized');
     OneSignal.push(function () {
         console.log('Register For Push');
          //OneSignal.registerForPushNotifications();
         OneSignal.push(["registerForPushNotifications"])
         OneSignal.getUserId().then(function(userId) {
           console.log("hello world-----"+userId);
           if(userId == null){
             console.log("User ID is null");
           }else{
             console.log("user id is"+ userId);
             localStorage.setItem('playerId',userId);
           }
          
          
        });
    });
*/


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_routes_module__ = __webpack_require__("../../../../../src/app/routes/routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_editor__ = __webpack_require__("../../../../ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// https://github.com/ocombe/ng2-translate/issues/218
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__routes_routes_module__["a" /* RoutesModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_config__["b" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_config__["c" /* firebaseConfigTwo */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_editor__["a" /* NgxEditorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_16_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__ = __webpack_require__("../../../../../src/app/core/themes/themes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__["a" /* ThemesService */],
                __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__["a" /* TranslatorService */],
                __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__["a" /* MenuService */]
            ],
            declarations: [],
            exports: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        this.menuItems = [];
    }
    MenuService.prototype.addMenu = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.menuItems.push(item);
        });
    };
    MenuService.prototype.getMenu = function () {
        return this.menuItems;
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
// https://angular.io/styleguide#!#04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/core/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        // User Settings
        // -----------------------------------
        this.user = {
            name: 'John',
            job: '',
            picture: 'assets/img/user/02.jpg'
        };
        // App Settings
        // -----------------------------------
        this.app = {
            name: 'TemptingTaste',
            description: 'You will be tempted',
            year: ((new Date()).getFullYear())
        };
        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: true,
            isCollapsedText: false,
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };
    }
    SettingsService.prototype.getAppSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.getUserSetting = function (name) {
        return name ? this.user[name] : this.user;
    };
    SettingsService.prototype.getLayoutSetting = function (name) {
        return name ? this.layout[name] : this.layout;
    };
    SettingsService.prototype.setAppSetting = function (name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    };
    SettingsService.prototype.setUserSetting = function (name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    };
    SettingsService.prototype.setLayoutSetting = function (name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    };
    SettingsService.prototype.toggleLayoutSetting = function (name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/core/themes/themes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var themeA = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-a.scss");
var themeB = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-b.scss");
var themeC = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-c.scss");
var themeD = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-d.scss");
var themeE = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-e.scss");
var themeF = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-f.scss");
var themeG = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-g.scss");
var themeH = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-h.scss");
var ThemesService = (function () {
    function ThemesService() {
        this.defaultTheme = 'F';
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }
    ThemesService.prototype.createStyle = function () {
        var head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    };
    ThemesService.prototype.setTheme = function (name) {
        switch (name) {
            case 'A':
                this.injectStylesheet(themeA);
                break;
            case 'B':
                this.injectStylesheet(themeB);
                break;
            case 'C':
                this.injectStylesheet(themeC);
                break;
            case 'D':
                this.injectStylesheet(themeD);
                break;
            case 'E':
                this.injectStylesheet(themeE);
                break;
            case 'F':
                this.injectStylesheet(themeF);
                break;
            case 'G':
                this.injectStylesheet(themeG);
                break;
            case 'H':
                this.injectStylesheet(themeH);
                break;
        }
    };
    ThemesService.prototype.injectStylesheet = function (css) {
        this.styleTag.innerHTML = css;
    };
    ThemesService.prototype.getDefaultTheme = function () {
        return this.defaultTheme;
    };
    ThemesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "../../../../../src/app/core/translator/translator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TranslatorService = (function () {
    function TranslatorService() {
        this.defaultLanguage = 'en';
        this.availablelangs = [
            { code: 'en', text: 'English' },
            { code: 'es_AR', text: 'Spanish' }
        ];
        this.useLanguage();
    }
    TranslatorService.prototype.useLanguage = function (lang) {
        if (lang === void 0) { lang = null; }
    };
    TranslatorService.prototype.getAvailableLanguages = function () {
        return this.availablelangs;
    };
    TranslatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TranslatorService);
    return TranslatorService;
}());



/***/ }),

/***/ "../../../../../src/app/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firebaseConfigTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cloudinarUpload; });
var firebaseConfig = {
    apiKey: "AIzaSyAAl2o0lAURQw9LE4lXgzTYgoOoxj3GIkk",
    authDomain: "temptingtaste-9a945.firebaseapp.com",
    databaseURL: "https://temptingtaste-9a945.firebaseio.com",
    projectId: "temptingtaste-9a945",
    storageBucket: "temptingtaste-9a945.appspot.com",
    messagingSenderId: "337750614471"
};
var firebaseConfigTwo = {
    apiKey: "AIzaSyAAl2o0lAURQw9LE4lXgzTYgoOoxj3GIkk",
    authDomain: "temptingtaste-9a945.firebaseapp.com",
    databaseURL: "https://temptingtaste-9a945.firebaseio.com",
    projectId: "temptingtaste-9a945",
    storageBucket: "temptingtaste-9a945.appspot.com",
    messagingSenderId: "337750614471"
};
var cloudinarUpload = {
    cloudName: 'newdot-enterprise',
    uploadPreset: 'jcttcztd'
};


/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<span>&copy; {{settings.app.year}} - {{ settings.app.name }}</span>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(settings) {
        this.settings = settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\n<nav class=\"navbar topnavbar\" role=\"navigation\">\n    <!-- START navbar header-->\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\" ['/home']\" >\n            <div class=\"brand-logo\">\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"App Logo\" />\n              <!--  <h3 class=\"lableh3\">Restaurant</h3> -->\n            </div>\n            <div class=\"brand-logo-collapsed\">\n                <img class=\"img-responsive\" src=\"assets/img/icon-small.png\" alt=\"App Logo\" />\n                <!-- <em class=\"fa fa-cutlery fa-2x\"></em> -->\n            </div>\n        </a>\n    </div>\n    <!-- END navbar header-->\n    <!-- START Nav wrapper-->\n    <div class=\"nav-wrapper\">\n        <!-- START Left navbar-->\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n                <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n                <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n                <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n            </li>\n            <!-- START User avatar toggle-->\n            <!-- <li>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n                <!-- <a (click)=\"toggleUserBlock($event)\">\n                    <em class=\"icon-user\"></em>\n                </a>\n            </li> -->\n            <!-- END User avatar toggle-->\n            <!-- START lock screen-->\n            <!-- <li>\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\n                    <em class=\"icon-lock\"></em>\n                </a>\n            </li> -->\n            <!-- END lock screen-->\n        </ul>\n        <!-- END Left navbar-->\n        <!-- START Right Navbar-->\n        <ul class=\"nav navbar-nav navbar-right\">\n            <!-- Search icon-->\n            <!-- <li>\n                <a (click)=\"openNavSearch($event)\">\n                    <em class=\"icon-magnifier\"></em>\n                </a>\n            </li> -->\n            <!-- Fullscreen (only desktops)-->\n            <li class=\"visible-lg\">\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\n                    <em class=\"fa fa-expand\"></em>\n                </a>\n            </li>\n            <!-- START Alert menu-->\n                      <!-- START Alert Notification menu-->\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                   <em class=\"icon-bell\"></em>\n                   <div class=\"label label-danger\">{{notificationData.length}}</div>\n               </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li>\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    \n                                    <div class=\"media-box-body clearfix\" *ngFor=\"let notify of notificationData\">\n                                        <div class=\"pull-left\">\n                                            <em class=\"fa fa-shopping-bag text-info\"></em>\n                                        </div>\n                                        <p class=\"m0\">{{notify.name}}\n                                        <i class=\"m0 text-muted pull-right\">\n                                            <small> \n                                        <a (click)=\"goToViewOrderPage(notify.key)\"> <em class=\"fa fa-search\"></em></a></small>\n                                        </i>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <a class=\"list-group-item\">\n                                <small>Go To Orders Page</small>\n                                <i class=\"fa fa-chevron-right pull-right\"></i>\n                            </a>\n                        </div>\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n\n            <!-- Start Message Notification -->\n          <!-- START Alert menu-->\n            <li class=\"dropdown dropdown-list\" dropdown *ngIf = \"countMessage == 1\">\n                <a dropdownToggle>\n                  <em class=\"icon-envelope\"></em>\n                  <div class=\"label label-danger\" *ngIf = \"countMessage == 1\" >1</div>\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\" >\n                    <li>\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-comment text-warning\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\" >\n                                        <p class=\"m0\">{{userName}}:{{message}}\n                                        <i class=\"m0 text-muted pull-right\">\n                                            <small> \n                                        <a (click)=\"goToViewChatPage()\"> <em class=\"fa fa-search\"></em></a></small>\n                                        </i>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <a class=\"list-group-item\">\n                                <small>Go To Chat Page</small>\n                                <i class=\"fa fa-chevron-right pull-right\"></i>\n                            </a>\n                        </div>\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n         <!-- End Message DropDown -->\n\n\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                    <em class=\"icon-settings\"></em>\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\" ></i>&nbsp; &nbsp; LogOut</a>\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n            <!-- END Alert menu-->\n            <!-- START Offsidebar button-->\n            <!-- <li>\n                <a (click)=\"toggleOffsidebar()\">\n                    <em class=\"icon-notebook\"></em>\n                </a>\n            </li> -->\n            <!-- END Offsidebar menu-->\n        </ul>\n        <!-- END Right Navbar-->\n    </div>\n    <!-- END Nav wrapper-->\n\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\n\n</nav>\n<!-- END Top Navbar-->\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titlelable {\n  margin-top: 0px !important; }\n\n.titlesmall {\n  margin-top: 5px !important; }\n\na.navbar-brand {\n  color: #fafafa !important; }\n\n.lableh3 {\n  margin-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_userblock_userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__headers_service__ = __webpack_require__("../../../../../src/app/layout/header/headers.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var screenfull = __webpack_require__("../../../../screenfull/dist/screenfull.js");
var browser = __webpack_require__("../../../../jquery.browser/dist/jquery.browser.js");






var HeaderComponent = (function () {
    function HeaderComponent(router, menu, userblockService, settings, af, headersService, storeData, db) {
        var _this = this;
        this.router = router;
        this.menu = menu;
        this.userblockService = userblockService;
        this.settings = settings;
        this.af = af;
        this.headersService = headersService;
        this.storeData = storeData;
        this.db = db;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        this.notificationData = [];
        this.orderCount = 0;
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
        db.list('/messages/', function (ref) { return ref.limitToFirst(1); }).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (response) {
            if (response.length > 0) {
                _this.storeData.dispatch({ type: response[0].key });
                _this.messageList();
            }
        });
        this.ordersDataRef = af.list('/orders');
    }
    HeaderComponent.prototype.messageList = function () {
        var _this = this;
        this.messageId = this.storeData.select('data');
        this.countMessage = 0;
        this.messageId.subscribe(function (res) {
            if (res !== '@ngrx/store/init') {
                _this.chatUserId = res;
                _this.db.list('/messages/' + _this.chatUserId, function (ref) { return ref.limitToLast(4); }).valueChanges()
                    .subscribe(function (response) {
                    _this.countMessage = 1;
                    if (_this.countMessage === 1) {
                        //// console.log("res message list "+JSON.stringify(response[0]))
                        _this.message = response[0].message;
                        _this.userName = response[0].userName;
                    }
                    // this.sender = response[3].$value;
                    // console.log("chat sender name"+ this.sender);
                    // console.log("chat list Response-"+ JSON.stringify(response));
                });
            }
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNavSearchVisible = false;
        if (browser.msie) {
            this.fsbutton.nativeElement.style.display = 'none';
        }
        var count = 0;
        this.af.list('/orders', function (ref) { return ref.orderByChild('orderView').equalTo(false); }).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.notificationData = [];
            // console.log("res order view "+JSON.stringify(res));
            count = res.length;
            for (var i = 0; i < count; i++) {
                _this.notificationData.push({ name: res[i].userDetails.name, key: res[i].key });
            }
            if (count > _this.orderCount) {
                _this.playAudio();
                console.log('count is ' + count);
                // this.notificationData.unshift({name:res[res.length-1].userDetails.name,key:res[res.length-1].key});
                // if(this.notificationData.length == 4){
                //    this.notificationData.splice(-1,1)
                // }
                //   var message = {
                //            app_id:"452b400d-27a2-4df3-a485-8161a7d2d323",
                //            contents: {"en": "A New order Arrived"},
                //            include_player_ids: ['7ac8756f-18cb-4fe1-a3e0-21e4fc2f3477']
                //   };
                //   console.log(localStorage.getItem('playerId'));
                //    this.headersService.sendNotification(message).subscribe(response =>{
                //    });
            }
            _this.orderCount = count;
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.toggleUserBlock = function (event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    };
    HeaderComponent.prototype.openNavSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    };
    HeaderComponent.prototype.setNavSearchVisible = function (stat) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    };
    HeaderComponent.prototype.getNavSearchVisible = function () {
        return this.isNavSearchVisible;
    };
    HeaderComponent.prototype.toggleOffsidebar = function () {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    };
    HeaderComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    };
    HeaderComponent.prototype.isCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    HeaderComponent.prototype.toggleFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        var el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    };
    // go To View OrderPage
    HeaderComponent.prototype.goToViewOrderPage = function (id) {
        var _this = this;
        this.ordersDataRef.update(id, { orderView: true }).then(function (res) {
            _this.router.navigate(['/order/viewOrder', id]);
        });
    };
    HeaderComponent.prototype.goToViewChatPage = function () {
        this.router.navigate(['/chat']);
    };
    HeaderComponent.prototype.playAudio = function () {
        // console.log("play audio");
        var audio = new Audio();
        audio.src = 'assets/sound/sound.mp3';
        audio.load();
        audio.play();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "fsbutton", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__headers_service__["a" /* HeadersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_menu_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__sidebar_userblock_userblock_service__["a" /* UserblockService */],
            __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__headers_service__["a" /* HeadersService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/header/headers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadersService = (function () {
    function HeadersService(http) {
        this.http = http;
    }
    HeadersService.prototype.sendNotification = function (message) {
        var body = JSON.stringify(message);
        // console.log("message======"+ body)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //  headers.append('Authorization', 'Basic YjNmZDA0MGUtZGZhNy00YmVjLWE5ZjAtZDdkZTExN2E1NWVl');
        headers.append('Authorization', 'Basic Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post('https://onesignal.com/api/v1/notifications', body, {
            headers: headers
        })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    HeadersService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json());
    };
    HeadersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HeadersService);
    return HeadersService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\r\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\r\n    <div class=\"form-group has-feedback\">\r\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER'}}\" />\r\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\r\n    </div>\r\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\r\n</form>\r\n<!-- END Search form-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = (function () {
    function NavsearchComponent(elem) {
        this.elem = elem;
        this.onclose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document)
            .on('keyup', function (event) {
            if (event.keyCode === 27) {
                _this.closeNavSearch();
            }
        })
            .on('click', function (event) {
            if (!$.contains(_this.elem.nativeElement, event.target)) {
                _this.closeNavSearch();
            }
        });
    };
    NavsearchComponent.prototype.closeNavSearch = function () {
        this.visible = false;
        this.onclose.emit();
    };
    NavsearchComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    };
    NavsearchComponent.prototype.handleForm = function () {
        console.log('Form submit: ' + this.term);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavsearchComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavsearchComponent.prototype, "onclose", void 0);
    NavsearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navsearch',
            template: __webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavsearchComponent);
    return NavsearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- top navbar-->\r\n    <app-header class=\"topnavbar-wrapper\"></app-header>\r\n    <!-- sidebar-->\r\n    <app-sidebar class=\"aside\"></app-sidebar>\r\n    <!-- offsidebar-->\r\n    <app-offsidebar class=\"offsidebar\"></app-offsidebar>\r\n    <!-- Main section-->\r\n    <section>\r\n        <!-- Page content-->\r\n        <div class=\"content-wrapper\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </section>\r\n    <!-- Page footer-->\r\n    <footer app-footer></footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__ = __webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__ = __webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__["a" /* UserblockService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\r\n    <tab>\r\n        <ng-template tabHeading>\r\n            <em class=\"icon-equalizer fa-lg\"></em>\r\n        </ng-template>\r\n        <h3 class=\"text-center text-thin\" [innerHTML]=\"'offsidebar.setting.SETTINGS'\"></h3>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Themes</h4>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-info\"></span>\r\n                            <span class=\"color bg-info-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-green\"></span>\r\n                            <span class=\"color bg-green-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-purple\"></span>\r\n                            <span class=\"color bg-purple-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-danger\"></span>\r\n                            <span class=\"color bg-danger-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-info-dark\"></span>\r\n                            <span class=\"color bg-info\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-green-dark\"></span>\r\n                            <span class=\"color bg-green\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-purple-dark\"></span>\r\n                            <span class=\"color bg-purple\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-danger-dark\"></span>\r\n                            <span class=\"color bg-danger\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Layout</h4>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Fixed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFixed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Boxed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isBoxed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <!--\r\n    <div class=\"clearfix\">\r\n      <p class=\"pull-left\">RTL</p>\r\n      <div class=\"pull-right\">\r\n         <label class=\"switch\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"layoutRTL\"/>\r\n            <span></span>\r\n         </label>\r\n      </div>\r\n    </div>\r\n    -->\r\n        </div>\r\n        <div class=\"p\" *ngIf=\"!settings.layout.horizontal\">\r\n            <h4 class=\"text-muted text-thin\">Aside</h4>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Collapsed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsed\" [disabled]=\"settings.layout.isCollapsedText\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Collapsed Text</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsedText\" [disabled]=\"settings.layout.isCollapsed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Float</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFloat\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Hover</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideHover\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Show Scrollbar</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideScrollbar\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Language</h4>\r\n            <select class=\"form-control\" [ngModel]=\"selectedLanguage\" (ngModelChange)=\"setLang($event)\">\r\n                <option [value]=\"lang.code\" *ngFor=\"let lang of getLangs()\">{{lang.text}}</option>\r\n            </select>\r\n        </div>\r\n    </tab>\r\n    <tab>\r\n        <ng-template tabHeading>\r\n            <em class=\"icon-user fa-lg\"></em>\r\n        </ng-template>\r\n        <h3 class=\"text-center text-thin\">Connections</h3>\r\n        <ul class=\"nav\">\r\n            <!-- START list title-->\r\n            <li class=\"p\">\r\n                <small class=\"text-muted\">ONLINE</small>\r\n            </li>\r\n            <!-- END list title-->\r\n            <li>\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-success circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/05.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Juan Sims</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-success circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/06.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Maureen Jenkins</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-danger circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/07.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Billie Dunn</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-warning circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/08.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Tomothy Roberts</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n            </li>\r\n            <!-- START list title-->\r\n            <li class=\"p\">\r\n                <small class=\"text-muted\">OFFLINE</small>\r\n            </li>\r\n            <!-- END list title-->\r\n            <li>\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/09.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Lawrence Robinson</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Developer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/10.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Tyrone Owens</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n            </li>\r\n            <li>\r\n                <div class=\"p-lg text-center\">\r\n                    <!-- Optional link to list more users-->\r\n                    <a href=\"#\" title=\"See more contacts\" class=\"btn btn-purple btn-sm\">\r\n                        <strong>Load more..</strong>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- Extra items-->\r\n        <div class=\"p\">\r\n            <p>\r\n                <small class=\"text-muted\">Tasks completion</small>\r\n            </p>\r\n            <div class=\"progress progress-xs m0\">\r\n                <div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-success progress-80\">\r\n                    <span class=\"sr-only\">80% Complete</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <p>\r\n                <small class=\"text-muted\">Upload quota</small>\r\n            </p>\r\n            <div class=\"progress progress-xs m0\">\r\n                <div role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-warning progress-40\">\r\n                    <span class=\"sr-only\">40% Complete</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </tab>\r\n</tabset>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__ = __webpack_require__("../../../../../src/app/core/themes/themes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OffsidebarComponent = (function () {
    function OffsidebarComponent(settings, themes) {
        this.settings = settings;
        this.themes = themes;
        this.currentTheme = themes.getDefaultTheme();
        this.selectedLanguage = 'en';
    }
    OffsidebarComponent.prototype.ngOnInit = function () { };
    OffsidebarComponent.prototype.setTheme = function () {
        this.themes.setTheme(this.currentTheme);
    };
    OffsidebarComponent.prototype.getLangs = function () {
        // return this.translator.getAvailableLanguages();
    };
    OffsidebarComponent.prototype.setLang = function (value) {
        //  this.translator.useLanguage(value);
    };
    OffsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-offsidebar',
            template: __webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */]])
    ], OffsidebarComponent);
    return OffsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\r\n<div class=\"aside-inner\">\r\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\r\n\r\n        <!-- START sidebar nav-->\r\n        <ul class=\"nav\">\r\n\r\n            <!-- START user info-->\r\n            <!-- <li class=\"has-user-block\">\r\n                <app-userblock></app-userblock>\r\n            </li> -->\r\n            <!-- END user info-->\r\n\r\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\r\n                <!-- menu heading -->\r\n                <span *ngIf=\"item.heading\">{{item.text}}</span>\r\n                <!-- single menu item -->\r\n                <a *ngIf=\"!item.heading && !item.submenu && checkAccess(item.access) \" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\r\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{item.text}}</span>\r\n                </a>\r\n                <!-- has submenu -->\r\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\r\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                        <span>{{item.text}}</span>\r\n                </a>\r\n                <!-- SUBLEVEL -->\r\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\r\n                    <li class=\"sidebar-subnav-header\">{{item.text}}</li>\r\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\r\n                        <!-- sublevel: single menu item  -->\r\n                        <a *ngIf=\"!subitem.submenu\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{subitem.text}}</span>\r\n                        </a>\r\n                        <!-- sublevel: has submenu -->\r\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\r\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                                <span>{{subitem.text}}</span>\r\n                        </a>\r\n                        <!-- SUBLEVEL 2 -->\r\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\r\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\r\n                                <!-- sublevel 2: single menu item  -->\r\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\r\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                    <span>{{subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- sublevel2: has submenu -->\r\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\r\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                        <span>{{subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- SUBLEVEL 3 -->\r\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\r\n                                        <!-- sublevel 2: single menu item  -->\r\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\r\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                            <span>{{subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- sublevel3: has submenu -->\r\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\r\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                                <span>{{subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- SUBLEVEL 4 -->\r\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\r\n                                                <!-- sublevel 2: single menu item  -->\r\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\r\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\r\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\r\n                                                    <span>{{subitem4.text}}</span>\r\n                                                </a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            <li>\r\n                        </ul>\r\n                    <li>\r\n                </ul>\r\n            </li>\r\n\r\n        </ul>\r\n        <!-- END sidebar nav-->\r\n\r\n    </nav>\r\n</div>\r\n<!-- END Sidebar (left)-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(menu, settings, injector) {
        this.menu = menu;
        this.settings = settings;
        this.injector = injector;
        this.access = false;
        this.menuItems = menu.getMenu();
        this.role = localStorage.getItem('role');
        //  console.log(role);
        // for
        // for (const item of this.menuItems.access){
        // }
        // if(role === 'Admin'){
        //     this.access = true;
        // } else {
        //     this.access = false;
        // }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]);
        this.router.events.subscribe(function (val) {
            // close any submenu opened when route changes
            _this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });
    };
    SidebarComponent.prototype.checkAccess = function (itemAccess) {
        if (this.role === 'Admin') {
            return itemAccess.includes('Admin');
        }
        else {
            return itemAccess.includes('Vendor');
        }
    };
    SidebarComponent.prototype.toggleSubmenuClick = function (event) {
        var _this = this;
        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {
            event.preventDefault();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul_1, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a').first();
            }
            ul_1 = anchor.next();
            // hide other submenus
            var parentNav_1 = ul_1.parents('.sidebar-subnav');
            $('.sidebar-subnav').each(function (idx, el) {
                var $el = $(el);
                // if element is not a parent or self ul
                if (!$el.is(parentNav_1) && !$el.is(ul_1)) {
                    _this.closeMenu($el);
                }
            });
            // abort if not UL to process
            if (!ul_1.length) {
                return;
            }
            // any child menu should start closed
            ul_1.find('.sidebar-subnav').each(function (idx, el) {
                _this.closeMenu($(el));
            });
            // toggle UL height
            if (parseInt(ul_1.height(), 0)) {
                this.closeMenu(ul_1);
            }
            else {
                // expand menu
                ul_1.on('transitionend', function () {
                    ul_1.height('auto').off('transitionend');
                }).height(ul_1[0].scrollHeight);
                // add class to manage animation
                ul_1.addClass('opening');
            }
        }
    };
    // Close menu collapsing height
    SidebarComponent.prototype.closeMenu = function (elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    };
    SidebarComponent.prototype.toggleSubmenuHover = function (event) {
        var self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();
            this.removeFloatingNav();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul = void 0, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a');
            }
            ul = anchor.next();
            if (!ul.length) {
                return; // if not submenu return
            }
            var $aside = $('.aside');
            var $asideInner = $aside.children('.aside-inner'); // for top offset calculation
            var $sidebar = $asideInner.children('.sidebar');
            var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            var itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();
            var floatingNav_1 = ul.clone().appendTo($aside);
            var vwHeight = $(window).height();
            // let itemTop = anchor.position().top || anchor.offset().top;
            floatingNav_1
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                position: this.settings.layout.isFixed ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (floatingNav_1.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });
            floatingNav_1
                .on('mouseleave', function () { floatingNav_1.remove(); })
                .find('a').on('click', function (e) {
                e.preventDefault(); // prevents page reload on click
                // get the exact route path to navigate
                self.router.navigate([$(this).attr('route')]);
            });
            this.listenForExternalClicks();
        }
    };
    SidebarComponent.prototype.listenForExternalClicks = function () {
        var _this = this;
        var $doc = $(document).on('click.sidebar', function (e) {
            if (!$(e.target).parents('.aside').length) {
                _this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    };
    SidebarComponent.prototype.removeFloatingNav = function () {
        $('.nav-floating').remove();
    };
    SidebarComponent.prototype.isSidebarCollapsed = function () {
        return this.settings.layout.isCollapsed;
    };
    SidebarComponent.prototype.isSidebarCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    SidebarComponent.prototype.isEnabledHover = function () {
        return this.settings.layout.asideHover;
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\r\n    <!-- User picture-->\r\n    <div class=\"user-block-picture\">\r\n        <div class=\"user-block-status\">\r\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\r\n            <div class=\"circle circle-success circle-lg\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- Name and Job-->\r\n    <div class=\"user-block-info\">\r\n        <span class=\"user-block-name\">{{ 'sidebar.WELCOME'}}  John</span>\r\n        <span class=\"user-block-role\">Programmer</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserblockComponent = (function () {
    function UserblockComponent(userblockService) {
        this.userblockService = userblockService;
        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }
    UserblockComponent.prototype.ngOnInit = function () {
    };
    UserblockComponent.prototype.userBlockIsVisible = function () {
        return this.userblockService.getVisibility();
    };
    UserblockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userblock',
            template: __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]])
    ], UserblockComponent);
    return UserblockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserblockService = (function () {
    function UserblockService() {
        // initially visible
        this.userBlockVisible = true;
    }
    UserblockService.prototype.getVisibility = function () {
        return this.userBlockVisible;
    };
    UserblockService.prototype.setVisibility = function (stat) {
        if (stat === void 0) { stat = true; }
        this.userBlockVisible = stat;
    };
    UserblockService.prototype.toggleVisibility = function () {
        this.userBlockVisible = !this.userBlockVisible;
    };
    UserblockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserblockService);
    return UserblockService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/routes/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// const routes: Routes = [
//     { path: '', component: HomeComponent },
// ];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    Dashboard\r\n    <div>{{user.name}}</div>\r\n</div>\r\n<!-- START widgets box-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-primary\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-primary-dark pv-lg\">\r\n                    <em class=\"fa fa-gift fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">{{menuItems}}</div>\r\n                    <div class=\"text-uppercase\">Menu Items</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-purple\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-purple-dark pv-lg\">\r\n                    <em class=\"fa fa-list-ol  fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">\r\n                        {{categories}}\r\n                    </div>\r\n                    <div class=\"text-uppercase\">Categories</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-green\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\r\n                    <em class=\"fa fa-cart-arrow-down fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">{{order}}</div>\r\n                    <div class=\"text-uppercase\">Orders</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-green pv-lg\">\r\n                    <span now class=\"text-sm\" format=\"MMMM\"></span>\r\n                    <br/>\r\n                    <span now class=\"h2 mt0\" format=\"D\"></span>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <span now class=\"text-uppercase\" format=\"dddd\"></span>\r\n                    <br/>\r\n                    <span now class=\"h2 mt0\" format=\"h:mm\"></span>\r\n                    <span now class=\"text-muted text-sm\" format=\"a\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END widgets box-->\r\n<!-- Chart JS start -->\r\n<div class=\"monthReport\">Month:\r\n    <select [(ngModel)]=\"monthReport\" class=\"monthBox\" (change)=\"monthChanged()\">\r\n        <option selected=\"selected\" value=\"\">Select a month</option>\r\n        <option value=\"January\">January</option>\r\n        <option value=\"February\">February</option>\r\n        <option value=\"March\">March</option>\r\n        <option value=\"April\">April</option>\r\n        <option value=\"May\">May</option>\r\n        <option value=\"June\">June</option>\r\n        <option value=\"July\">July</option>\r\n        <option value=\"August\">August</option>\r\n        <option value=\"September\">September</option>\r\n        <option value=\"October\">October</option>\r\n        <option value=\"November\">November</option>\r\n        <option value=\"December\">December</option>\r\n    </select>\r\n</div>\r\n<div class=\"yearReport\">Year:\r\n        <select [(ngModel)]=\"yearReport\" class=\"yearBox\" (change)=\"yearChanged()\">\r\n            <option selected=\"selected\" value=\"\">Select a year</option>\r\n            <option value=\"2017\">2017</option>\r\n            <option value=\"2018\">2018</option>\r\n            <option value=\"2019\">2019</option>\r\n        </select>\r\n    </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-8\" *ngIf=\"barData.datasets[0].data.length === y + 1\">\r\n            <!-- <div class=\"col-lg-8\"> -->\r\n        <h4>Product Sales Report</h4>\r\n        <div>\r\n            <canvas baseChart [chartType]=\"'bar'\" [options]=\"barOptions\" [datasets]=\"barData.datasets\"\r\n                    [colors]=\"barColors\" [labels]=\"barData.labels\" [legend]=\"false\" height=\"150\"></canvas>\r\n        </div>\r\n    </div>\r\n    <!-- Pie Chart End-->\r\n    <div class=\"col-lg-4\" *ngIf=\"pieData.datasets[0].data.length <= 10 && pieData.datasets[0].data.length >= 5\">\r\n        <h4>Category Sales Report</h4>\r\n        <div class=\"pieHeight\">\r\n            <canvas baseChart [chartType]=\"'pie'\" [options]=\"pieOptions\" [datasets]=\"pieData.datasets\"\r\n                    [colors]=\"pieColors\" [labels]=\"pieData.labels\" [legend]=\"false\" height=\"200\"></canvas>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n  .home-container .home-logo {\n    width: 240px; }\n  @media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n  .home-container ion-card.myCard.card.card-ios {\n    height: 250px; }\n\n.pieHeight {\n  margin-top: 6em; }\n\n.monthReport {\n  float: left;\n  font-size: 1.4em;\n  padding-right: 20px;\n  padding: 10px 20px 10px 0; }\n\n.yearReport {\n  font-size: 1.4em;\n  padding: 10px 0 10px 0; }\n\n.monthBox, .yearBox {\n  border: #ccc;\n  border-style: solid;\n  border-width: 1.5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__("../../../../../src/app/shared/colors/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = (function () {
    function HomeComponent(colors, http, af, _locale) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.af = af;
        this._locale = _locale;
        // Bar chart
        // -----------------------------------
        this.newData = [];
        this.barData = {
            labels: [],
            datasets: [{
                    //    data: [10,20,30,30,20,50, 0]
                    data: []
                }]
        };
        this.barColors = [
            {
                backgroundColor: this.colors.byName('green'),
                borderColor: this.colors.byName('info'),
                pointHoverBackgroundColor: this.colors.byName('info'),
                pointHoverBorderColor: this.colors.byName('info')
            }
        ];
        this.barOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        // Pie chart
        // -----------------------------------
        this.pieData = {
            labels: [],
            datasets: [{
                    data: []
                }]
        };
        this.pieColors = [{
                borderColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple'),
                    this.colors.byName('warning'),
                    this.colors.byName('danger'),
                    this.colors.byName('inverse'),
                    this.colors.byName('pink'),
                    this.colors.byName('green'),
                    this.colors.byName('gray-darker'),
                    this.colors.byName('primary')
                ],
                backgroundColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple'),
                    this.colors.byName('warning'),
                    this.colors.byName('danger'),
                    this.colors.byName('inverse'),
                    this.colors.byName('gray-darker'),
                    this.colors.byName('green'),
                    this.colors.byName('pink'),
                    this.colors.byName('primary')
                ],
            }];
        this.pieOptions = {
            responsive: true
        };
        this.monthReport = '';
        this.yearReport = '';
        this.user = {};
        this.month = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.datePipeEn = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]('en-US');
        this.role = localStorage.getItem('role');
        this.userId = localStorage.getItem('uid');
        console.log(this.userId);
        af.object('/users/' + this.userId).valueChanges().subscribe(function (resp) {
            _this.user = resp;
            console.log(_this.user.name);
        });
        af.list('/menuItems').valueChanges().subscribe(function (res) {
            _this.menuItems = res.length;
        });
        af.list('/categories').valueChanges().subscribe(function (res) {
            _this.categories = res.length;
        });
        // if (this.role === 'Admin') {
        this.ordersDataRef = af.list('/orders');
        // } else {
        //    this.ordersDataRef = af.list('/orders', ref => ref.orderByChild('vendorCode').equalTo(this.role));
        //  }
        this.currentMonth = new Date().getMonth();
        //  console.log('today is: ' + this.todayDate);
        var d = new Date();
        this.monthReport = this.month[this.currentMonth];
        this.yearReport = new Date().getFullYear();
        this.firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
        console.log(this.firstDay);
        this.lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        console.log(this.lastDay);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showChart();
    };
    HomeComponent.prototype.showChart = function () {
        var _this = this;
        var lastOrder = [];
        /*this.ordersRef =   this.af.list('/orders/'   , {
                query: {
                  limitToLast: 1
                }
              });*/
        this.orderObservable = this.af.list('/orders/', function (ref) { return ref.limitToFirst(1); }).valueChanges();
        this.orderObservable.subscribe(function (res) {
            lastOrder = res;
            if (lastOrder.length > 0) {
                //           let lastDate: any = lastOrder[0].createdAt;
                var lastDate = _this.firstDay.getTime();
                //              console.log(lastDate);
                _this.barData.labels = [];
                //    var x;
                var dayDuration = 86400000;
                _this.y = ((_this.lastDay.getTime() - _this.firstDay.getTime()) / dayDuration);
                console.log(_this.y);
                var x = 7;
                //            lastDate -= 6 * dayDuration;
                for (var i = 0; i <= _this.y; i++) {
                    //            console.log(i);
                    _this.barData.labels.push(_this.datePipeEn.transform(lastDate, 'dd MMMM'));
                    //           console.log(this.datePipeEn.transform(lastDate, 'dd MMMM'));
                    lastDate += dayDuration;
                }
                //             console.log(this.barData.labels);
                _this.orderDataRefObservable = _this.ordersDataRef.valueChanges();
                _this.orderDataRefObservable.subscribe(function (resp) {
                    //              console.log(resp);
                    _this.orders = resp;
                    console.log(_this.orders);
                    _this.order = resp.length;
                    _this.barData.datasets[0].data = [];
                    console.log(_this.barData.labels.length);
                    if (_this.role === 'Admin') {
                        for (var i = 0; i <= _this.barData.labels.length - 1; i++) {
                            var dayValue = 0;
                            for (var j = 0; j <= _this.orders.length - 1; j++) {
                                var orderDate = _this.datePipeEn.transform(_this.orders[j].createdAt, 'dd MMMM');
                                if (orderDate === _this.barData.labels[i]) {
                                    //             console.log(this.barData.labels[i]);
                                    dayValue += _this.orders[j].grandTotal;
                                    //             console.log(this.orders[j].grandTotal);
                                }
                            }
                            dayValue = +(dayValue.toFixed(2));
                            _this.barData.datasets[0].data.push(dayValue);
                            //              console.log(this.barData.datasets[0].data);
                        }
                    }
                    else {
                        for (var i = 0; i <= _this.barData.labels.length - 1; i++) {
                            console.log(_this.barData.labels.length);
                            console.log(i);
                            var dayValue = 0;
                            for (var j = 0; j <= _this.orders.length - 1; j++) {
                                console.log(_this.orders.length);
                                var orderDate = _this.datePipeEn.transform(_this.orders[j].createdAt, 'dd MMMM');
                                for (var z = 0; z <= _this.orders[j].cart.length - 1; z++) {
                                    console.log(_this.orders[j].cart.length);
                                    if (_this.orders[j].cart[z].item.vendorCode === _this.role) {
                                        if (orderDate === _this.barData.labels[i]) {
                                            //    console.log(this.barData.labels[i]);
                                            dayValue += _this.orders[j].cart[z].itemTotalPrice;
                                            //    console.log(this.orders[j].grandTotal);
                                        }
                                    }
                                }
                            }
                            dayValue = +(dayValue.toFixed(2));
                            _this.barData.datasets[0].data.push(dayValue);
                            console.log(_this.barData.datasets[0].data);
                        }
                        console.log(_this.barData.datasets[0].data.length);
                    }
                });
            }
        });
        // Pie Chart
        this.af.list('/categories').snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (category) {
            _this.af.list('/menuItems').valueChanges().subscribe(function (menuitem) {
                for (var i = 0; i <= category.length - 1; i++) {
                    var x = 0;
                    var quantity = 0;
                    for (var j = 0; j <= menuitem.length - 1; j++) {
                        if (menuitem[j].category === category[i].key) {
                            x++;
                            quantity++;
                        }
                    }
                    _this.pieData.labels.push(category[i].title);
                    _this.pieData.datasets[0].data.push(quantity);
                }
            });
        });
    };
    HomeComponent.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    HomeComponent.prototype.getData = function () {
        var x = this.month.indexOf(this.monthReport);
        this.firstDay = new Date(this.yearReport, x, 1);
        //      let firstDay = new Date(this.yearReport, x, 1);
        console.log(this.firstDay);
        this.lastDay = new Date(this.yearReport, x + 1, 0);
        //      let lastDay = new Date(this.yearReport, x + 1, 0);
        console.log(this.lastDay);
        //    let obj = {firstDay: firstDay, lastDay: lastDay};
        //     this.showChart();
        //   return obj;
    };
    // getYearData() {
    //     let x = this.month.indexOf(this.monthReport);
    //     this.firstDay = new Date(this.yearReport, x, 1);
    //     console.log(this.firstDay);
    //     this.lastDay = new Date(this.yearReport, x + 1, 0);
    //      console.log(this.last
    // }
    HomeComponent.prototype.monthChanged = function () {
        console.log('Month Changed');
        if (this.monthReport !== '') {
            this.getData();
            this.showChart();
        }
        else {
            this.monthReport = this.month[this.currentMonth];
        }
    };
    HomeComponent.prototype.yearChanged = function () {
        console.log('Year Changed');
        if (this.yearReport !== '') {
            this.getData();
        }
        else {
            this.yearReport = new Date().getFullYear();
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/routes/home/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/home/home/home.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], String])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home',
    access: ['Vendor', 'Admin']
};
var MainCategories = {
    text: 'Main Categories',
    link: '/mainCategories/manageMainCategories',
    icon: 'icon-note',
    access: ['Vendor', 'Admin']
};
var PickUpLocation = {
    text: 'Pick-Up Location',
    link: '/pickUpLocation/managePickUpLocation',
    icon: 'icon-note',
    access: ['Admin']
};
var Categories = {
    text: 'Categories',
    link: '/categories/manageCategories',
    icon: 'icon-note',
    access: ['Vendor', 'Admin']
};
var Menu = {
    text: 'Menu Items',
    link: '/menu/manageItems',
    icon: 'fa fa-th-list',
    access: ['Vendor', 'Admin']
};
var Vendors = {
    text: 'Vendors',
    link: '/vendors/manageVendors',
    icon: 'fa fa-th-list',
    access: ['Admin']
};
var Orders = {
    text: 'Orders',
    link: '/order/allOrder',
    icon: 'fa fa-bars',
    access: ['Vendor', 'Admin']
};
var Users = {
    text: 'Users',
    link: '/users/manageUsers',
    icon: 'fa fa-users',
    access: ['Admin']
};
var Loyalitys = {
    text: 'Loyalty',
    link: '/loyalty',
    icon: 'fa fa-tags',
    access: ['Admin']
};
var Chat = {
    text: 'Chat',
    link: '/chat',
    icon: 'fa fa-comments-o',
    access: ['Vendor', 'Admin']
};
var Setting = {
    text: 'Setting',
    link: '/setting',
    icon: 'fa fa-cog',
    access: ['Admin']
};
var Tags = {
    text: 'Tags',
    link: '/tags/all',
    icon: 'fa fa-tags',
    access: ['Admin']
};
var News = {
    text: 'News',
    link: '/news/manageNews',
    icon: 'fa fa-newspaper-o',
    access: ['Admin']
};
var Business = {
    text: 'Business Info',
    link: '/businessInfo',
    icon: 'fa fa-briefcase',
    access: ['Admin']
};
var Coupons = {
    text: 'Coupons',
    link: '/coupons/all',
    icon: 'fa fa-minus-square',
    access: ['Admin']
};
var pushNotification = {
    text: 'Push Notification',
    link: '/pushNotification',
    icon: 'fa fa-briefcase',
    access: ['Admin']
};
var Testimonials = {
    text: 'Testimonials',
    link: '/testimonials/manageTestimonials',
    icon: 'fa fa-users',
    access: ['Admin']
};
var Subscribers = {
    text: 'Subscribers',
    link: '/subscribers',
    icon: 'fa fa-rss',
    access: ['Admin']
};
var Tables = {
    text: 'Table Booking',
    link: '/tables/booking',
    icon: 'fa fa-calendar',
    access: ['Admin']
};
var deliveryOptions = {
    text: 'Delivery Options',
    link: '/delivery/options',
    icon: 'fa fa-map-marker',
    access: ['Vendor', 'Admin']
};
// const Pages = {
//     text: 'Pages',
//     link: '/pages',
//     icon: 'icon-doc',
//     submenu: [
//         {
//             text: 'Login',
//             link: '/login'
//         },
//         {
//             text: 'Register',
//             link: '/register'
//         },
//         {
//             text: 'Recover',
//             link: '/recover'
//         },
//         {
//             text: '404',
//             link: '/404'
//         }
//     ]
// };
// const Ecommerce = {
//     text: 'Ecommerce',
//     link: '/ecommerce',
//     icon: 'icon-basket-loaded',
//     submenu: [
//         {
//             text: 'Orders',
//             lin k: '/ecommerce/orders'
//         },
//         {
//             text: 'Order View',
//             link: '/ecommerce/orderview'
//         },
//         {
//             text: 'Products',
//             link: '/ecommerce/products'
//         },
//         {
//             text: 'Product View',
//             link: '/ecommerce/productview'
//         },
//         {
//             text: 'Checkout',
//             link: '/ecommerce/checkout'
//         }
//     ]
// }
var headingMain = {
    text: 'Navigation',
    heading: true
};
var headingComponents = {
    text: 'Components',
    heading: true
};
var headingMore = {
    text: 'More',
    heading: true
};
var menu = [
    Home,
    MainCategories,
    Categories,
    PickUpLocation,
    Menu,
    Vendors,
    Orders,
    Tables,
    Coupons,
    Tags,
    Users,
    pushNotification,
    News,
    deliveryOptions,
    Loyalitys,
    Business,
    Setting,
    Chat,
    Testimonials,
    Subscribers,
];


/***/ }),

/***/ "../../../../../src/app/routes/pages/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"abs-center wd-xl custom\">\r\n        <!-- START panel-->\r\n        <div class=\"text-center mb-xl\">\r\n            <img class=\"block-center img-rounded img-responsive customImg\" src=\"assets/img/smiley.png\" alt=\"Image\" />\r\n            <div class=\"text-lg mb-lg\">404</div>\r\n            <p class=\"lead m0\">We couldn't find this page.</p>\r\n            <p>The page you are looking for does not exists.</p>\r\n        </div>\r\n        <!-- <div class=\"input-group mb-xl\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Try with a search\" />\r\n            <span class=\"input-group-btn\">\r\n             <button class=\"btn btn-default\" type=\"button\">\r\n                <em class=\"fa fa-search\"></em>\r\n             </button>\r\n          </span>\r\n        </div> -->\r\n        <ul class=\"list-inline text-center text-sm mb-xl\">\r\n            <li><a class=\"text-muted\" (click) =\"my()\">Go to App</a>\r\n            </li>\r\n            <li class=\"text-muted\">|</li>\r\n            <li><a class=\"text-muted\" [routerLink]=\"'/login'\">Login</a>\r\n            </li>\r\n            <!-- <li class=\"text-muted\">|</li>\r\n            <li><a class=\"text-muted\" [routerLink]=\"'/register'\">Register</a>\r\n            </li> -->\r\n        </ul>\r\n        <div class=\"p-lg text-center\">\r\n            <span>&copy;</span>\r\n            <span>{{ settings.app.year }}</span>\r\n            <span>-</span>\r\n            <span>{{ settings.app.name }}</span>\r\n            <br/>\r\n            <span>{{ settings.app.description }}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/pages/error404/error404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  margin-top: 4em; }\n\n.customImg {\n  margin-bottom: -36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error404Component = (function () {
    function Error404Component(settings, router) {
        this.settings = settings;
        this.router = router;
    }
    Error404Component.prototype.my = function () {
        if (localStorage.getItem('uid')) {
            this.router.navigate(['home']);
        }
        else {
            this.router.navigate(['/login']);
        } // [routerLink]="'/home'"
    };
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__("../../../../../src/app/routes/pages/error404/error404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/pages/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/routes/pages/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(loginService) {
        this.loginService = loginService;
    }
    AuthService.prototype.canActivate = function (route, state) {
        return this.loginService.isAuthenticated();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"block-center mt-xl wd-xl\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-dark panel-flat\">\r\n            <div class=\"panel-heading text-center\">\r\n                <a href=\"#\">\r\n                    <img class=\"block-center img-rounded img-responsive\" src=\"assets/img/logo.png\" alt=\"Image\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"text-center pv\">SIGN IN TO CONTINUE.</p>\r\n                <form [formGroup]=\"valForm\" class=\"form-validate mb-lg\" role=\"form\" name=\"registerForm\" novalidate=\"\"\r\n                      (submit)=\"submitForm($event, valForm.value)\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        <input class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" name=\"email\"\r\n                               placeholder=\"Enter email\" autocomplete=\"off\"  formControlName=\"email\" required=\"\"/>\r\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n                        <span class=\"text-danger\"\r\n                              *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\r\n                        <span class=\"text-danger\"\r\n                              *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <input class=\"form-control\" id=\"exampleInputPassword1\" type=\"password\" name=\"password\"\r\n                               placeholder=\"Password\" formControlName=\"password\" required=\"\"/>\r\n                        <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\r\n                        <span class=\"text-danger\"\r\n                              *ngIf=\"valForm.controls['password'].hasError('required') && (valForm.controls['password'].dirty || valForm.controls['password'].touched)\">This field is required</span>\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"checkbox c-checkbox pull-left mt0\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\" [(ngModel)]=\"rememberMe\" name=\"account_remember\" \r\n                                [ngModelOptions]=\"{standalone: true}\" (change)=\"checkMe()\" />\r\n                                <span class=\"fa fa-check\"></span>Remember Me</label>\r\n                        </div>\r\n                        <div class=\"pull-right\"><a class=\"text-muted\" [routerLink]=\"'/recover'\">Forgot your\r\n                            password?</a>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-block btn-success mt-lg\" type=\"submit\">Login</button>\r\n                </form>\r\n                <p class=\"pt-lg text-center\">Need to Signup?</p><a class=\"btn btn-block btn-info\"\r\n                                                                   [routerLink]=\"'/register'\">Register Now</a>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <div class=\"p-lg text-center\">\r\n            <span>&copy;</span>\r\n            <span>{{ settings.app.year }}</span>\r\n            <span>-</span>\r\n            <span>{{ settings.app.name }}</span>\r\n            <br/>\r\n            <span>{{ settings.app.description }}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wd-xl {\n  width: 320px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = (function () {
    function LoginComponent(_http, _cookieService, af, settings, fb, router, db, toastr) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.af = af;
        this.settings = settings;
        this.router = router;
        this.db = db;
        this.toastr = toastr;
        this.rememberMe = false;
        this.valForm = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.getCookie();
    }
    LoginComponent.prototype.getCookie = function () {
        var rememberMeData = {};
        rememberMeData = this._cookieService.getObject('rememberMe');
        if (rememberMeData !== undefined) {
            this.valForm.get('email').setValue(rememberMeData.email);
            this.valForm.get('password').setValue(rememberMeData.password);
        }
        else {
            //// console.log("No data inside cookies");
        }
    };
    LoginComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        // for (const c of this.valForm.controls) {
        //   this.valForm.controls[c].markAsTouched();
        // }
        if (this.valForm.valid) {
            if (this.rememberMe) {
                this._cookieService.putObject('rememberMe', this.valForm.value);
            }
            this.af.auth.signInWithEmailAndPassword(value.email, value.password).then(function (success) {
                _this.db.object('/users/' + success.uid).valueChanges().subscribe(function (res) {
                    if (res.role !== 'User') {
                        _this.router.navigate(['home']);
                        localStorage.setItem('uid', success.uid);
                        localStorage.setItem('role', res.role);
                        _this.toastr.success('Login Successfully!', 'Success!');
                    }
                    else {
                        _this.toastr.error('Login Failed!', 'You are not an ADMIN!');
                    }
                });
            });
        }
    };
    LoginComponent.prototype.checkMe = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/routes/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(af) {
        this.af = af;
    }
    LoginService.prototype.isAuthenticated = function () {
        var user = localStorage.getItem('uid') != null;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/routes/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/routes/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recover_recover_component__ = __webpack_require__("../../../../../src/app/routes/pages/recover/recover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error404_error404_component__ = __webpack_require__("../../../../../src/app/routes/pages/error404/error404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* Use this routes definition in case you want to make them lazy-loaded */
/*const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
];*/
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__recover_recover_component__["a" /* RecoverComponent */],
                __WEBPACK_IMPORTED_MODULE_6__error404_error404_component__["a" /* Error404Component */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                // RecoverComponent,
                __WEBPACK_IMPORTED_MODULE_6__error404_error404_component__["a" /* Error404Component */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/recover/recover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"block-center mt-xl wd-xl\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-dark panel-flat\">\r\n            <div class=\"panel-heading text-center\">\r\n                <a href=\"#\">\r\n                    <img class=\"block-center img-responsive img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"text-center pv\">PASSWORD RESET</p>\r\n                <form [formGroup]=\"valForm\" class=\"form-validate\" role=\"form\" name=\"recoverForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\r\n                    <p class=\"text-center\">Fill with your mail to receive instructions on how to reset your password.</p>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <label class=\"text-muted\">Email address</label>\r\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\"/>\r\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\r\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\r\n                    </div>\r\n                    <button class=\"btn btn-danger btn-block\" type=\"submit\">Reset</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <div class=\"p-lg text-center\">\r\n            <span>&copy;</span>\r\n            <span>{{ settings.app.year }}</span>\r\n            <span>-</span>\r\n            <span>{{ settings.app.name }}</span>\r\n            <br/>\r\n            <span>{{ settings.app.description }}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/recover/recover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/recover/recover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecoverComponent = (function () {
    function RecoverComponent(settings, fb, af, toastr, spinnerService, router) {
        this.settings = settings;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.router = router;
        this.valForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])]
        });
    }
    RecoverComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        this.spinnerService.show();
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            this.af.auth.sendPasswordResetEmail(value.email).then(function () {
                _this.spinnerService.hide();
                _this.toastr.success('Please check your email to reset your password!', 'Success!');
                _this.router.navigate(['/login']);
            }, function (error) {
                //      this.showAlert(error.message);
                _this.spinnerService.hide();
                console.log(error);
            });
        }
    };
    RecoverComponent.prototype.ngOnInit = function () {
    };
    RecoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recover',
            template: __webpack_require__("../../../../../src/app/routes/pages/recover/recover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/pages/recover/recover.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RecoverComponent);
    return RecoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"block-center mt-xl wd-xl\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-dark panel-flat\">\r\n            <div class=\"panel-heading text-center\">\r\n                <a href=\"#\">\r\n                    <img class=\"block-center img-rounded img-responsive\" src=\"assets/img/logo.png\" alt=\"Image\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"text-center pv\">SIGNUP TO GET INSTANT ACCESS.</p>\r\n                <form [formGroup]=\"valForm\" class=\"form-validate mb-lg\" role=\"form\" name=\"registerForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\r\n                   <div class=\"form-group has-feedback\">\r\n                        <label class=\"text-muted\">Name</label>\r\n                        <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter Your Name\" autocomplete=\"off\" formControlName=\"name\" required=\"\" />\r\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <label class=\"text-muted\">Email address</label>\r\n                        <input class=\"form-control\" type=\"email\" name=\"account_email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\" required=\"\" />\r\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\r\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\r\n                    </div>\r\n                     <div class=\"form-group has-feedback\">\r\n                        <label class=\"text-muted\">Mobile No</label>\r\n                        <input class=\"form-control\" type=\"text\" name=\"mobileNo\" placeholder=\"Enter Your Mobile No\" autocomplete=\"off\" formControlName=\"mobileNo\" required=\"\" />\r\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <div class=\"form-group has-feedback\">\r\n                            <label class=\"text-muted\">Password</label>\r\n                        <input class=\"form-control\" id=\"id-password\" type=\"password\" name=\"password\" formControlName=\"password\">\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\">Create account</button>\r\n                </form>\r\n                <!-- <div class=\"alert alert-danger text-center\"></div> -->\r\n                <p class=\"pt-lg text-center\">Have an account?</p><a class=\"btn btn-block btn-default\" [routerLink]=\"'/login'\">Signup</a>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <div class=\"p-lg text-center\">\r\n            <span>&copy;</span>\r\n            <span>{{ settings.app.year }}</span>\r\n            <span>-</span>\r\n            <span>{{ settings.app.name }}</span>\r\n            <br/>\r\n            <span>{{ settings.app.description }}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wd-xl {\n  width: 320px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(af, settings, fb, router, toastr, db) {
        this.af = af;
        this.settings = settings;
        this.router = router;
        this.toastr = toastr;
        this.db = db;
        this.valForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'name': [null],
            'mobileNo': [null],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^[a-zA-Z0-9]{6,10}$')])]
        });
    }
    RegisterComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.af.auth.createUserWithEmailAndPassword(value.email, value.password).then(function (success) {
                _this.db.object('/users/' + success.uid).update({
                    email: value.email,
                    name: value.name,
                    mobileNo: value.mobileNo,
                    role: 'User'
                }).then(function (res) {
                    _this.toastr.success('Register Successfully!', 'Success!');
                    _this.router.navigate(['login']);
                });
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/routes/pages/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/business-info/business-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Business User\r\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Business User\r\n    </small>\r\n</div>\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Business Details</div>\r\n    <div class=\"panel-body\">\r\n        <form role=\"form\" (ngSubmit)=\"onSubmitBusiness(f)\" #f=\"ngForm\">\r\n            <fieldset>\r\n                <label class=\"col-sm-2 control-label custom\">Email</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"business.email\"\r\n                                   type=\"Email\" placeholder=\"Enter Email...\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n               \r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Description\r\n                </label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <textarea class=\"form-control\" name=\"description\" id=\"description\"\r\n                                      [(ngModel)]=\"business.description\" required=\"\" rows=\"3\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Address\r\n                </label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <textarea class=\"form-control\" name=\"address\" id=\"address\" [(ngModel)]=\"business.address\"\r\n                                      required=\"\" rows=\"3\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Facebook Page Link</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"facebookLink\" id=\"facebookLink\"\r\n                                   [(ngModel)]=\"business.facebookLink\" type=\"text\"\r\n                                   placeholder=\"Enter Facebook Link\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Twitter Page Link</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"twitterLink\" id=\"twitterLink\"\r\n                                   [(ngModel)]=\"business.twitterLink\" type=\"text\"\r\n                                   placeholder=\"Enter Twitter Link\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Office Location</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"officeLocation\" id=\"officeLocation\"\r\n                                   [(ngModel)]=\"business.officeLocation\" type=\"text\"\r\n                                   placeholder=\"Enter Office Location\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Phone Number</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\" [(ngModel)]=\"business.phoneNo\"\r\n                                   type=\"number\" placeholder=\"Enter Phone Number\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Store Name</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"storeName\" id=\"storeName\"\r\n                                   [(ngModel)]=\"business.storeName\" type=\"text\"\r\n                                   placeholder=\"Enter Store Name\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-md-12\">\r\n                    <button class=\"btn btn-primary pull-right\" type=\"submit\">Submit</button>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/business-info/business-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  padding-top: 22px; }\n\n.panel {\n  box-shadow: none;\n  margin-bottom: auto; }\n\n.btn {\n  margin-right: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/business-info/business-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessInfoComponent = (function () {
    // Observable<any>;
    function BusinessInfoComponent(af, toastr) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.business = {
            email: '',
            description: '',
            address: '',
            facebookLink: '',
            twitterLink: '',
            officeLocation: '',
            phoneNo: '',
            storeName: ''
        };
        this.businessDataObservable = af.object('/business');
        af.object('/business').valueChanges().subscribe(function (res) {
            _this.business = res;
        });
    }
    BusinessInfoComponent.prototype.onSubmitBusiness = function (form) {
        var _this = this;
        console.log('submitBusiness');
        this.businessDataObservable.set({
            email: this.business.email,
            description: this.business.description,
            address: this.business.address,
            //  facebookLink: this.business.facebookLink,
            //   twitterLink: this.business.twitterLink,
            officeLocation: this.business.officeLocation,
            phoneNo: this.business.phoneNo,
            storeName: this.business.storeName
        }).then(function (res) {
            console.log('submitBusinessSuccess');
            _this.toastr.success('Your Business details updated!', 'Success!');
        });
    };
    BusinessInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-info',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/business-info/business-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/business-info/business-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], BusinessInfoComponent);
    return BusinessInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\r\n    Add New Category\r\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/categories/manageCategories']\"> Manage Categories </a>->\r\n        Add Category\r\n    </small>\r\n</div>\r\n<div class=\"container-md\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading  text-bold bg-purple-dark\">Add Category</div>\r\n                <div class=\"panel-body\">\r\n                    <form (ngSubmit)=\"onSubmitCategory(f)\" #f=\"ngForm\">\r\n\r\n                            <div class=\"form-group\">\r\n                                    <label>Main Category*</label>\r\n                            <select class=\"form-control\" name=\"category\" id=\"category\" [(ngModel)]=\"category.mainCategory\">\r\n                                    <option *ngFor=\"let category of mainCategories\" value=\"{{category.key}}\">\r\n                                        {{category.title}}\r\n                                    </option>\r\n                                </select>\r\n                                </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Title*</label>\r\n                            <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\"\r\n                                   [(ngModel)]=\"category.title\"/>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Description*</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"title\" id=\"title\"\r\n                                      [(ngModel)]=\"category.description\" required></textarea>\r\n                        </div>\r\n                        <div class=\"row form-group\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\" fileUpload btn btn-primary choose-btn\">\r\n                                    <span> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> &nbsp; Upload</span>\r\n                                    <input type=\"file\" class=\"upload\" ng2FileSelect [uploader]=\"uploader\"\r\n                                           accept=\"image/*\" (change)=\"readUrl($event)\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\" [hidden]=\"url ==''\">\r\n                                <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\"/>\r\n                            </div><!--COL-->\r\n                        </div>\r\n                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                        <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Add Category</button>\r\n                        <p>\r\n                            <small class=\"text-muted\">* Required Fields</small>\r\n                        </p>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px;\n  margin: 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.s-n-btn {\n  margin-left: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddCategoriesComponent = (function () {
    function AddCategoriesComponent(af, router, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.mainCategories = [];
        this.url = '';
        this.category = {};
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.categoryRef = af.list('/categories');
        // Override onSuccessItem to retrieve the imageId
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
        this.catRef = this.af.list('/main-categories');
        this.categoryData = this.catRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.categoryData.subscribe(function (res) {
            _this.mainCategories = res;
        });
    }
    AddCategoriesComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddCategoriesComponent.prototype.onSubmitCategory = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.af.object('/main-categories/' + this.category.mainCategory).update({
            hasChild: true
        }).then(function (success) {
            _this.category.hasChild = false;
            _this.uploader.uploadAll();
            _this.uploader.onSuccessItem = function (item, response, status, headers) {
                var res = JSON.parse(response);
                _this.category.thumb = res.url;
                _this.categoryRef.push(_this.category).then(function (data) {
                    _this.spinnerService.hide();
                    _this.toastr.success('Categories Data Added Successfully!', 'Success!');
                    _this.router.navigate(['/categories/manageCategories']);
                });
            };
        });
        // this.category.hasChild = false;
        //  this.uploader.uploadAll();
        //   this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
        //       let res: any = JSON.parse(response);
        //     this.category.thumb = res.url;
        //   this.categoryRef.push(this.category).then((res)=>{
        //      this.toastr.success('Categories Data Added Successfully!', 'Success!');
        //     this.router.navigate(['/categories/manageCategories']);
        //   });
        // }
    };
    AddCategoriesComponent.prototype.cancel = function () {
        this.router.navigate(['/categories/manageCategories']);
    };
    AddCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-categories',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddCategoriesComponent);
    return AddCategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Categories\n<div class=\"pull-right\"> \n            <label class=\"file-upload\">\n              <a [routerLink]=\"'/categories/addCategory'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Category</button> </a>  \n            </label>\n </div><br/><br/>\n<small><a [routerLink]=\" ['/home'] \">Dashboard</a>  ->  Categories</small>\n</div>\n\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">Categories Details</div>\n  <div class=\"table-responsive b0 customTable\">\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th class=\"thsearch text-center\">\n               Name\n                <form (keyup)=\"getCategory(siteName.value)\">\n                    <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                           id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                           placeholder=\"Search\" #siteName>\n                </form>\n            </th>\n            <th class=\"thnosearch text-center\">\n                Edit\n            </th>\n            <th class=\"thnosearch text-center\">\n                Delete\n            </th>\n             <th class=\"thnosearch text-center\">\n                View\n            </th>\n            \n            <th class=\"thnoitem\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\" text-center\" *ngFor=\"let item of categories\">\n            <td>{{item.title}}</td>\n            <td>\n             <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"categoryEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button>\n             </td>\n             <td>\n               <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"categoryDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button>\n            </td>\n            <td>\n             <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"categoryShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n            </td>\n            \n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"5\" class=\"customPagination\">\n            <!--     <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n            </td>\n        </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customPagination {\n  padding-right: 150px !important; }\n\n.customTable {\n  margin-right: -136px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 20%; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var CategoriesComponent = (function () {
    function CategoriesComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.categories = [];
        this.catRef = this.af.list('/categories');
        this.categoryData = this.catRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.categoryData.subscribe(function (res) {
            _this.categories = res;
        });
    }
    CategoriesComponent.prototype.getCategory = function (ev) {
        var _this = this;
        var val = ev;
        this.categoryData = this.af.list('/categories', function (ref) { return ref.orderByChild('title').startAt(val.charAt(0)
            .toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.categoryData
            .subscribe(function (data) {
            _this.categories = data;
        });
    };
    CategoriesComponent.prototype.categoryShow = function (key) {
        this.router.navigate(['/categories/viewCategory', key]);
    };
    CategoriesComponent.prototype.categoryEdit = function (key) {
        this.router.navigate(['/categories/editCategory', key]);
    };
    CategoriesComponent.prototype.categoryDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.catRef.remove(key).then(function (resp) {
                    swal('Deleted!', 'Categories Data Deleted Successfully!', 'success');
                });
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\r\n    Update Category\r\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n           <a [routerLink]=\"['/categories/manageCategories']\"> Manage Categories </a>->\r\n            Update Category\r\n    </small>\r\n</div>\r\n<div class=\"container-md\">\r\n<div class=\"row\">\r\n<div class=\"col-md-2\"></div>\r\n<div class=\"col-md-9\">\r\n                <div class=\"panel b\">\r\n                    <div class=\"panel-heading  text-bold bg-purple-dark\">Update Category</div>\r\n                    <div class=\"panel-body\">\r\n                       <form (ngSubmit)=\"onSubmitCategory(f)\" #f=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                    <label>Main Category*</label>\r\n                            <select class=\"form-control\" name=\"category\" id=\"category\" [(ngModel)]=\"categoryDetails.mainCategory\">\r\n                                    <option *ngFor=\"let category of mainCategories\" value=\"{{category.key}}\">\r\n                                        {{category.title}}\r\n                                    </option>\r\n                                </select>\r\n                                </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Title*</label>\r\n                                <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\" [(ngModel)]=\"categoryDetails.title\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Description*</label>\r\n                                <textarea class=\"form-control\" rows=\"3\" name=\"description\" id=\"description\" [(ngModel)]=\"categoryDetails.description\" required></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Thumb</label>\r\n                                <label for=\"image-input\" class=\"file-upload\">\r\n                                <div class=\"col-md-6\" [hidden]=\"url !=''\">\r\n                                   <img class=\" img-responsive img-thumbnail\" src=\"{{categoryDetails.thumb}}\" alt=\"Image\" height=\"70px\"/>\r\n                                 </div>\r\n                                  <div class=\"col-md-6\" [hidden]=\"url ==''\">\r\n                                   <img class=\" img-responsive img-thumbnail\" [src]=\"url\" alt=\"Image\" height=\"70px\"/>\r\n                                 </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"fileUpload btn btn-primary choose-btn pull-right\"><em class=\"fa fa-upload mr\"></em> Choose File</div>\r\n                                    <input id=\"image-input\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"readUrl($event)\">\r\n                                  </div>\r\n                                  <!--   <div class=\"col-md-6\">\r\n                                   <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\" />\r\n                                   </div><!--COL --> \r\n                                </label>\r\n                            </div>\r\n                              <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                               <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Update Category</button>\r\n\r\n                            <p>\r\n                                <small class=\"text-muted\">* Required Fields</small>\r\n                            </p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n-btn {\n  margin-right: 1.3em; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditCategoryComponent = (function () {
    function EditCategoryComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.categoryDetails = {};
        this.mainCategories = [];
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.categoriesdataRef = _this.af.object('/categories/' + Id);
                _this.af.object('/categories/' + Id).valueChanges()
                    .subscribe(function (response) {
                    _this.categoryDetails = response;
                    _this.catRef = _this.af.list('/main-categories');
                    _this.categoryData = _this.catRef.snapshotChanges().map(function (changes) {
                        return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                    });
                    _this.categoryData.subscribe(function (res) {
                        console.log(res);
                        _this.mainCategories = res;
                    });
                });
            }
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.url = _this.uploader.options.url;
            localStorage.setItem('image', 'image Is going');
            return item;
        };
    }
    EditCategoryComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    EditCategoryComponent.prototype.onSubmitCategory = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.uploader.uploadAll();
        console.log('statement');
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log('statement');
            _this.categoriesdataRef.update({
                title: _this.categoryDetails.title,
                description: _this.categoryDetails.description,
                thumb: res.url,
                mainCategory: _this.categoryDetails.mainCategory,
            }).then(function (data) {
                _this.spinnerService.hide();
                localStorage.removeItem('image');
                _this.router.navigate(['/categories/manageCategories']);
                _this.toastr.success('Categories Data Updated Successfully!', 'Success!');
            });
        };
        if (localStorage.getItem('image') == null) {
            console.log('if');
            this.categoriesdataRef.update({
                title: this.categoryDetails.title,
                description: this.categoryDetails.description,
                mainCategory: this.categoryDetails.mainCategory,
            }).then(function (res) {
                _this.spinnerService.hide();
                _this.router.navigate(['/categories/manageCategories']);
                _this.toastr.success('Categories Data Updated Successfully!', 'Success!');
            });
        }
    };
    EditCategoryComponent.prototype.cancel = function () {
        this.router.navigate(['/categories/manageCategories']);
    };
    EditCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View Category\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/categories/manageCategories']\"> Manage Categories </a>->\r\n            View Category \r\n </small>\r\n </div>\r\n<div class=\"col-masonry\">\r\n        <div class=\"panel b m0\">\r\n            <div class=\"panel-heading\">\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 text-center mb-lg\">\r\n                        <a>\r\n                            <img class=\"img-responsive img-thumbnail\" src=\"{{categoryDetails.thumb}}\" alt=\"Image\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                            <div class=\"col-lg-3\">\r\n                                <h4 class=\"media-heading\">Parent Category</h4>\r\n                            </div>\r\n                            <div class=\"col-lg-5\">\r\n                                <p>{{categoryDetails.mainCategory}}</p>\r\n                            </div>\r\n                            </div>\r\n                    <div class=\"col-lg-8\">\r\n                    <div class=\"col-lg-3\">\r\n                        <h4 class=\"media-heading\">Name</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <p>{{categoryDetails.title}}</p>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                    <div class=\"col-lg-3\">\r\n                        <h4 class=\"media-heading\">Description</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <p>{{categoryDetails.description}}</p>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewCategoryComponent = (function () {
    function ViewCategoryComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.categoryDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.catRef = _this.af.object('/categories/' + Id);
                _this.catObservable = _this.catRef.valueChanges();
                _this.catObservable.subscribe(function (response) {
                    _this.categoryDetails = response;
                    _this.mainCatRef = _this.af.object('/main-categories/' + _this.categoryDetails.mainCategory);
                    _this.mainCatObservable = _this.mainCatRef.valueChanges();
                    _this.mainCatObservable.subscribe(function (res) {
                        _this.categoryDetails.mainCategory = res.title;
                    });
                });
            }
        });
    }
    ViewCategoryComponent.prototype.ngOnInit = function () {
    };
    ViewCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-category',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewCategoryComponent);
    return ViewCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chatData;
function chatData(state, action) {
    if (state === void 0) { state = 'hello'; }
    return action.type;
}


/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-sm-12 mid-col chat-box\">\r\n\r\n   <div class=\"chat-header\">\r\n        <p class=\"name\">{{username}}</p>  \r\n   </div>\r\n\r\n <div class=\"message\"  #scrollMe  >\r\n <span  *ngFor=\"let data of chatData\"    >\r\n   <!-- msg right side -->\r\n   \t<div class=\"msg-right row\"  *ngIf=\"data.sendBy == 'User'\">\r\n   \t<div class=\"col-xs-6\">\r\n   \t<div class=\"row\" >   \t\r\n   \t\t<!-- img-col -->\r\n\t   \t<div class=\"col col-xs-1\" *ngIf = \"(imageUrl != null) && (imageUrl != '')\">\r\n        <img src=\"{{imageUrl}}\">\r\n      </div>\r\n      <div class=\"col col-xs-1\" *ngIf = \" (imageUrl == '') || (imageUrl == null)  \">\r\n        <img src=\"assets/img/user/User.png\">\r\n      </div>\r\n\t   \t<!-- text-col -->\r\n\t   \t<div class=\"col  col-xs-11\">\r\n\t   \t\t<p class=\"msg\">{{data.message}}.</p>\r\n\t   \t</div>\r\n   \t</div>\t\r\n        <p class=\"time\">{{data.createdAt | date:'medium'}}</p>\r\n   \t</div> <!-- col-6 width 50% -->\r\n   \t</div> <!-- msg-right- -->\r\n   \t<!-- date -->\r\n\r\n\r\n   \t<!-- msg left side -->\r\n   \t<div class=\"msg-left row\"  *ngIf=\"data.sendBy == 'Admin'\">\r\n   \t<div class=\"col-xs-6 col-xs-offset-6 \">\r\n   \t<div class=\"row\">   \t\r\n\t   \t<!-- text-col -->\r\n\t   \t<div class=\"col col-xs-11\">\r\n\t   \t\t<p class=\"msg-right\">{{data.message}}</p>\r\n         <p class=\"time\">{{data.createdAt | date:'medium'}}</p>\r\n\t   \t</div>\r\n\t\t<!-- img-col -->\r\n\r\n\t   \t<div class=\"col col-xs-1\"><img src=\"assets/img/profile/icon-small.png\"></div>\r\n   \t</div>\r\n   \t</div> <!-- col-6 offset for 50% woth left side -->\t\r\n   \t</div> <!-- msg-left -->\r\n\r\n   </span>\t\r\n</div> <!-- message -->\r\n\r\n    <div class=\"row footer\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"sendMessage(f)\">\r\n        <div class=\"col-xs-9\">\r\n\r\n\t       <div class=\"form-group\">\r\n   \t\t\t <textarea type=\"text\" id=\"message\" class=\"form-control\" name=\"message\" placeholder=\"Type a message\" autofocus=\"\" [(ngModel)]=chatMessage.message ></textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 text-right\">\r\n               <button class=\"btn btn-primary\" type=\"submit\" >\r\n                        Send\r\n                </button>\r\n  \r\n        </div>  \r\n        </form>   \t\r\n      </div>            \r\n    </div><!-- col-8 chatbox -->"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-box {\n  position: relative;\n  background-color: #f5f5f5;\n  padding: 0; }\n  .chat-box .chat-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    height: 3.8em;\n    border-bottom: 1px solid #b6bbc2;\n    padding: 0px 6px;\n    background-color: #fff; }\n    .chat-box .chat-header .name {\n      color: #746f6f;\n      font-weight: 600;\n      margin: 16px 0 0 10px; }\n    .chat-box .chat-header .btn {\n      background-color: #fff;\n      color: #9e9e9e !important;\n      box-shadow: none;\n      border: 1px solid #bdbdbd;\n      border: 0; }\n  .chat-box .message {\n    height: 483px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    margin-bottom: 28px;\n    padding-bottom: 40px; }\n    .chat-box .message .msg-right, .chat-box .message .msg-left {\n      margin: 6px 0;\n      padding-left: 25px; }\n      .chat-box .message .msg-right .row, .chat-box .message .msg-left .row {\n        margin: 0; }\n      .chat-box .message .msg-right .col, .chat-box .message .msg-left .col {\n        padding: 0; }\n      .chat-box .message .msg-right img, .chat-box .message .msg-left img {\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        border: 1px solid #bdbdbd; }\n      .chat-box .message .msg-right .msg, .chat-box .message .msg-left .msg {\n        font-size: 13px;\n        border-radius: 12px;\n        padding: 10px;\n        background-color: #fff;\n        color: #616161;\n        margin: 6px 10px 6px 28px;\n        position: relative;\n        width: 100%; }\n        .chat-box .message .msg-right .msg:after, .chat-box .message .msg-left .msg:after, .chat-box .message .msg-right .msg :before, .chat-box .message .msg-left .msg :before {\n          border-right: 20px solid  #fff;\n          border-bottom: 20px solid transparent;\n          position: absolute;\n          left: -12px;\n          content: '';\n          top: 10px; }\n    .chat-box .message .time {\n      color: #9e9e9e;\n      font-size: 11px;\n      text-transform: uppercase;\n      text-align: center;\n      margin: 0;\n      font-weight: 500; }\n    .chat-box .message .msg-left {\n      padding-right: 25px;\n      padding-left: 0; }\n      .chat-box .message .msg-left .msg-right, .chat-box .message .msg-left .msg-left {\n        background-color: #fff;\n        font-size: 13px;\n        border-radius: 12px;\n        padding: 10px;\n        color: #616161;\n        margin: 6px 28px 6px 10px;\n        position: relative; }\n        .chat-box .message .msg-left .msg-right:after, .chat-box .message .msg-left .msg-left:after, .chat-box .message .msg-left .msg-right :before, .chat-box .message .msg-left .msg-left :before {\n          border-left: 20px solid #fff;\n          border-bottom: 20px solid transparent;\n          position: absolute;\n          right: -12px;\n          content: '';\n          top: 10px; }\n  .chat-box .footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    border-top: 1px solid #bdbdbd;\n    margin: 0;\n    background-color: #fff; }\n    .chat-box .footer .form-group {\n      margin: 0; }\n      .chat-box .footer .form-group .form-control {\n        box-shadow: none;\n        border-bottom: 0;\n        padding: 8px 0 0 10px;\n        color: #9e9e9e;\n        border: 0; }\n    .chat-box .footer .btn-primary {\n      border-radius: 4px;\n      background-color: #3F729B;\n      width: 6.5rem;\n      margin-top: 1rem; }\n    .chat-box .footer .upload-wrap {\n      position: relative;\n      display: inline-block; }\n      .chat-box .footer .upload-wrap .btn {\n        color: #3F729B;\n        font-size: 21px;\n        height: 27px;\n        padding: 0;\n        width: 30px;\n        margin: 1rem 1rem 0 0;\n        cursor: pointer; }\n      .chat-box .footer .upload-wrap .input {\n        position: absolute;\n        top: 16px;\n        width: 36px;\n        height: 24px;\n        left: 0;\n        opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_orders_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = (function () {
    // url: any = 'https://onesignal.com/api/v1/notifications';
    function ChatBoxComponent(el, routes, af, db, router, storeData, ordersService) {
        this.el = el;
        this.routes = routes;
        this.af = af;
        this.db = db;
        this.router = router;
        this.storeData = storeData;
        this.ordersService = ordersService;
        this.username = '';
        this.chatMessage = {
            message: '',
            sendBy: 'Admin',
            userName: '',
            createdAt: Date.now()
        };
        this.chatData = [];
        this.isLoading = false;
        this.user = {};
        this.messageList();
    }
    ChatBoxComponent.prototype.messageList = function () {
        var _this = this;
        this.messageId = this.storeData.select('data');
        this.messageId.subscribe(function (res) {
            if (res !== '@ngrx/store/init') {
                _this.chatUserId = res;
                _this.db.object('/users/' + _this.chatUserId).valueChanges().subscribe(function (data) {
                    if ((data.name != null) && (data.image != null)) {
                        _this.username = data.name;
                        _this.imageUrl = data.image;
                        _this.playerId = data.playerId;
                        console.log(_this.playerId);
                    }
                });
                _this.db.object('/messages/' + _this.chatUserId).valueChanges().subscribe(function (data) {
                    // this.username = res.name
                    // this.imageUrl = res.imageUrl
                    _this.db.list('/messages/' + _this.chatUserId).valueChanges().subscribe(function (response) {
                        setTimeout(function () {
                            _this.scrollToBottom();
                        });
                        _this.chatData = response;
                    });
                });
            }
        });
    };
    ChatBoxComponent.prototype.ngOnInit = function () { };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('error is' + err);
        }
    };
    //  scrollToBottom() {
    //   let scrollPane: any = this.el
    //     .nativeElement.querySelector('.msg-container-base');
    //   scrollPane.scrollTop = scrollPane.scrollHeight;
    // }
    // send Message
    ChatBoxComponent.prototype.sendMessage = function (form) {
        var _this = this;
        this.db.list('/messages/' + this.chatUserId).push(this.chatMessage).then(function (res) {
            var message = {
                app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
                contents: { 'en': 'You have a new chat message from Tempting Taste' },
                include_player_ids: [_this.playerId]
            };
            _this.ordersService.sendNotification(message).subscribe(function (response) {
            });
            _this.chatMessage = {
                message: '',
                sendBy: 'Admin',
                userName: 'Admin',
                createdAt: Date.now()
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatBoxComponent.prototype, "myScrollContainer", void 0);
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-box',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__orders_orders_service__["a" /* OrdersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__orders_orders_service__["a" /* OrdersService */]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"chat-page\">\r\n<div class=\"chat-container row\">\r\n\r\n\r\n<div class=\"user-list col-md-4\">\r\n  \r\n    <div class=\"search-input\">\r\n        <form (keyup)=\"getChatUser(siteName.value)\">\r\n            <input  id=\"search\" type=\"text\" placeholder=\"search\" name=\"siteVal\"  [(ngModel)]=\"siteVal\" #siteName>\r\n            <i class=\"fa fa-search\"></i>\r\n        </form>\r\n        \r\n    </div>\r\n<div class=\"users\">\r\n  <div class=\"user-list-item\"  *ngFor=\"let user of userlist;let i = index \">\r\n    <div class=\"row\" (click)=\"goToUserChat(user.key)\">\r\n        <div class=\"col-xs-2\" *ngIf = \"(user.imageUrl == '') || (user.imageUrl == null) \">\r\n            <img src=\"assets/img/user/User.png\" class=\"user-img z-depth-1\">\r\n        </div>  <!-- col-3 -->\r\n        <div class=\"col-xs-2\" *ngIf = \"user.imageUrl != null && user.imageUrl !=''\">\r\n            <img src=\"{{user?.imageUrl}}\" class=\"user-img z-depth-1\">\r\n        </div>  <!-- col-3 -->\r\n        <div class=\"col-xs-9\">\r\n            <div class=\"header\">\r\n                <span class=\"user-name\">{{user.name}}</span>\r\n               <!--  <span class=\"time\">9:34PM</span>  -->\r\n            </div>\r\n            <p class=\"msg\">\r\n                {{lastMessageList[i]?.message}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div><!-- col-6 -->\r\n\r\n<!-- col-8 chat box -->\r\n<app-chat-box></app-chat-box>\r\n<!-- col-8 chat box -->\r\n\r\n\r\n</div><!--char container-row -->\r\n</div><!-- chat-page -->\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-page .chat-container {\n  padding: 1px 0 6px;\n  background: #fff;\n  border: 1px solid #bdbdbd;\n  padding-bottom: 0; }\n  .chat-page .chat-container .user-list {\n    border-right: 1px solid #bdbdbd;\n    background: #fff;\n    padding: 0; }\n    .chat-page .chat-container .user-list .users {\n      height: 511px;\n      overflow-y: auto;\n      overflow-x: hidden; }\n      .chat-page .chat-container .user-list .users ::-webkit-scrollbar {\n        display: none; }\n    .chat-page .chat-container .user-list .search-input {\n      position: relative;\n      padding: 8px 8px 16px;\n      border-bottom: 1px solid #d8d1d1; }\n      .chat-page .chat-container .user-list .search-input input {\n        border-radius: 12px;\n        border: 0;\n        box-shadow: none;\n        background-color: #f5f5f5;\n        text-indent: 10px;\n        padding: 0 35px 2px 5px;\n        width: 100%;\n        height: 28px; }\n      .chat-page .chat-container .user-list .search-input i {\n        position: absolute;\n        top: 15px;\n        right: 20px;\n        font-size: 14px;\n        color: #8a8888; }\n    .chat-page .chat-container .user-list .user-list-item {\n      padding: 8px 0 0px 10px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n      height: 5em; }\n      .chat-page .chat-container .user-list .user-list-item:hover {\n        background-color: #f5f5f5; }\n      .chat-page .chat-container .user-list .user-list-item .user-img {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        border: 1px solid  #eeeeee; }\n      .chat-page .chat-container .user-list .user-list-item .header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n        .chat-page .chat-container .user-list .user-list-item .header .user-name {\n          color: #585858;\n          font-weight: 400; }\n        .chat-page .chat-container .user-list .user-list-item .header .time {\n          color: #8a8383;\n          font-size: 11px; }\n      .chat-page .chat-container .user-list .user-list-item .msg {\n        overflow: hidden;\n        font-size: 12px;\n        margin-top: 3px;\n        margin-bottom: 0;\n        height: 40px;\n        color: #8a8383; }\n  .chat-page .chat-container .mid-col {\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = (function () {
    function ChatComponent(af, db, router, storeData) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.router = router;
        this.storeData = storeData;
        this.userlist = [];
        this.searchUserData = [];
        this.userKeyList = [];
        this.lastMessageList = [];
        this.length = 0;
        this.chatUserId = storeData.select('data');
        this.db.list('/messages').snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            if (res.length > 0) {
                _this.userlist = res;
                _this.userKeyList = [];
                //  for (let key in res) {
                //      this.userKeyList.push(res[key].key);
                //  }
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var key = res_1[_i];
                    _this.userKeyList.push(res[key].key);
                }
                _this.lastMessageList = [];
                for (var i = 0; i < _this.userKeyList.length; i++) {
                    _this.db.list('/messages/' + _this.userKeyList[i], function (ref) { return ref.limitToLast(4); })
                        .valueChanges().subscribe(function (response) {
                        _this.lastMessageList.push(response[0]);
                    });
                }
            }
        });
        /* this.db.list('/messages').valueChanges().subscribe((res:any)=>{
   
           if(res.length>0){
             this.userlist = res;
             this.userKeyList =[];
             for(let key in res){
               this.userKeyList.push(res[key].$key);
             }
   
              this.lastMessageList = [];
              for(let i=0;i<this.userKeyList.length;i++){
                 this.db.list('/messages/'+this.userKeyList[i],ref => ref.limitToFirst(4))
                    .valueChanges().subscribe(response=>{
                 this.lastMessageList.push(response[0]);
               })
             }
   
           }
   
         })*/
    }
    ChatComponent.prototype.getChatUser = function (ev) {
        var _this = this;
        var val = ev;
        this.db.list('/messages/', function (ref) { return ref.orderByChild('name').startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges().subscribe(function (data) {
            _this.userlist = data;
        });
    };
    // User List
    ChatComponent.prototype.goToUserChat = function (userId) {
        this.storeData.dispatch({ type: userId });
    };
    ChatComponent.prototype.ngOnInit = function () {
        // this.storeData.dispatch({ type:  this.userlist  });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Add Coupon\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n          <a [routerLink]=\"['/coupons/all']\"> Coupon </a>->\r\n            New Coupon\r\n </small>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-2\"></div>\r\n   <div class=\"col-sm-8\">\r\n   <!-- START panel-->\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\"><strong>New</strong> Coupon</div>\r\n         <div class=\"panel-body\">\r\n            <form (ngSubmit)=\"onSubmitTag(f)\" #f=\"ngForm\">\r\n               <div class=\"form-group\">\r\n                  <label>Coupon Title*</label>\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Enter Coupon Title\" name=\"coupanName\" id=\"coupanName\" [(ngModel)]=\"coupon.name\"/>\r\n               </div>\r\n               <div class=\"form-group\">\r\n                  <label>Coupon Value % *</label>\r\n                  <input class=\"form-control\" type=\"number\" placeholder=\"Enter Coupon Value % \" name=\"couponValue\" id=\"couponValue\" [(ngModel)]=\"coupon.value\"/>\r\n               </div>\r\n               <div class=\"form-group\">\r\n                  <div class=\"col-md-10\">\r\n                    <div class=\"col-md-2\"></div>\r\n                       <div class=\"col-md-9\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n      <!-- END panel-->\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCouponsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCouponsComponent = (function () {
    function AddCouponsComponent(af, router, toastr) {
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.coupon = {
            name: '',
            value: '',
            date: ''
        };
        this.couponDataRef = af.list('/coupons');
    }
    AddCouponsComponent.prototype.onSubmitTag = function (form) {
        var _this = this;
        this.coupon.date = Date.now();
        this.couponDataRef.push(this.coupon).then(function (res) {
            _this.router.navigate(['/coupons/all']);
            _this.toastr.success('Coupon Added Successfully!', 'Success!');
        });
    };
    AddCouponsComponent.prototype.cancel = function () {
        this.router.navigate(['/coupons/all']);
    };
    AddCouponsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-coupons',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], AddCouponsComponent);
    return AddCouponsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/coupons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Tags\r\n <div class=\"pull-right\">\r\n            <label for=\"image-input\" class=\"file-upload\">\r\n              <a [routerLink]=\"'/coupons/addCoupons'\">  <button class=\"btn btn-success\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp;Add Coupon</button> </a>\t\r\n            </label>\r\n </div>\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n            Coupons\r\n </small>\r\n</div>\r\n<!-- Zero Configuration-->\r\n<div class=\"col-sm-2\"></div>\r\n<div class=\"col-sm-8\">\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Manage Coupons</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <table datatable=\"\" class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"wd-md text-center custom\">Name</th>\r\n                        <th class=\"wd-md text-center custom\">Offer %</th>\r\n                       <th class=\"text-center\">Delete</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr class=\"text-center\" *ngFor=\"let coupon of coupons\">\r\n                        <td><a href=\"\">{{coupon.name}}</a>\r\n                        </td>\r\n                        <td><a href=\"\">{{coupon.value}}</a>\r\n                        </td>                        \r\n                        <td class=\"text-center\">\r\n                         <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"couponDelete(coupon.key)\">\r\n                         <em class=\"fa fa-trash-o\"></em>\r\n                         </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/coupons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  width: 70% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/coupons/coupons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var CouponsComponent = (function () {
    function CouponsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.couponsDataRef = af.list('/coupons');
        this.couponObservable = this.couponsDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.couponObservable.subscribe(function (res) {
            _this.coupons = res;
        });
    }
    CouponsComponent.prototype.couponDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.couponsDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'Coupons Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    CouponsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coupons',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/coupons/coupons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/coupons/coupons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], CouponsComponent);
    return CouponsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activeAddBlock\"><!-- Add PIN -->\n\t<div class=\"content-heading\"> Add PIN\n\t <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n\t          <a [routerLink]=\"['/delivery/options']\"> Delivery Options </a>->\n\t            Add Delivery Pin \n\t </small>\n\t</div>\n\t<div class=\"row\">\n\t   <div class=\"col-sm-2\"></div>\n\t   <div class=\"col-sm-8\">\n\t   <!-- START panel-->\n\t      <div class=\"panel panel-default\">\n\t         <div class=\"panel-heading\"><strong>Add</strong>Pin Code</div>\n\t         <div class=\"panel-body\">\n\t            <form (ngSubmit)=\"onAddPin()\" #f=\"ngForm\">\n\t               <div class=\"form-group\">\n\t                  <label>Pin Code*</label>\n\t                  <input class=\"form-control\" type=\"number\" placeholder=\"Enter PIN Number\" name=\"pin\" id=\"pin\" required=\"\" [(ngModel)]=\"add.pincode\"/>\n\t\t\t\t   </div>\n\t\t\t\t   <div class=\"form-group\">\n\t\t\t\t\t\t<label>Delivery Charge*</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" placeholder=\"Enter Amount\" name=\"charge\" id=\"charge\" required=\"\" [(ngModel)]=\"add.deliveryCharge\"/>\n\t\t\t\t\t </div>\n\t\t\t\t   <div class=\"form-group\">\n\t\t\t\t\t<label>Available*&nbsp;&nbsp;&nbsp;</label>\n\t\t\t\t\t<input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\n                            <input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\n\t\t\t\t </div>\n\t               <div class=\"form-group\">\n\t                  <div class=\"col-md-10\">\n\t                    <div class=\"col-md-2\"></div>\n\t                       <div class=\"col-md-9\">\n\t                        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\t                        </div>\n\t                        <div class=\"col-md-1\">\n\t                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancelAdd()\">Cancel</button>\n\t                    </div>\n\t                    </div>\n\t                </div>\n\t            </form>\n\t         </div>\n\t      </div>\n\t      <!-- END panel-->\n\t   </div>\n\t</div>\n</div><!-- Add PIN Close-->\n\n<div *ngIf=\"activeUpdateBlock\"><!-- Update PIN -->\n\t<div class=\"content-heading\"> Update PIN\n\t <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n\t          <a [routerLink]=\"['/delivery/options']\"> Delivery Options </a>->\n\t            Update Delivery Pin \n\t </small>\n\t</div>\n\t<div class=\"row\">\n\t   <div class=\"col-sm-2\"></div>\n\t   <div class=\"col-sm-8\">\n\t   <!-- START panel-->\n\t      <div class=\"panel panel-default\">\n\t         <div class=\"panel-heading\"><strong>Update</strong>Pin Code</div>\n\t         <div class=\"panel-body\">\n\t            <form (ngSubmit)=\"onUpdatePin()\" #f=\"ngForm\">\n\t               <div class=\"form-group\">\n\t                  <label>Pin Code*</label>\n\t\t\t\t\t  <input class=\"form-control\" type=\"number\" placeholder=\"Enter PIN Number\" name=\"updatePin\" id=\"pin\" required=\"\" [(ngModel)]=\"update.pincode\"/>\n\t\t\t\t   </div>\n\t\t\t\t   <div class=\"form-group\">\n\t\t\t\t\t<label>Delivery Charge*</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"number\" placeholder=\"Enter Delivery Charge\" name=\"updateCharge\" id=\"charge\" required=\"\" [(ngModel)]=\"update.deliveryCharge\"/>\n\t\t\t\t </div>\n\t\t\t\t   <div class=\"form-group\">\n\t\t\t\t\t<label>Available*&nbsp;&nbsp;&nbsp;</label>\n\t\t\t\t\t<input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\n\t\t\t\t </div>\n\t               <div class=\"form-group\">\n\t                  <div class=\"col-md-10\">\n\t                    <div class=\"col-md-2\"></div>\n\t                       <div class=\"col-md-9\">\n\t                        <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n\t                        </div>\n\t                        <div class=\"col-md-1\">\n\t                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancelUpdate()\">Cancel</button>\n\t                    </div>\n\t                    </div>\n\t                </div>\n\t            </form>\n\t         </div>\n\t      </div>\n\t      <!-- END panel-->\n\t   </div>\n\t</div>\n</div><!-- Update PIN Close-->\n\n<div *ngIf=\"activeDataTable\"> <!-- data Table start-->\n<div class=\"content-heading\">Pin Codes\n <div class=\"pull-right\">\n            <label for=\"image-input\" class=\"file-upload\">\n              <a>  <button class=\"btn btn-success\" (click)=\"activeAdd()\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp;Add Pin</button> </a>\t\n            </label>\n </div>\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n            Pin Codes\n </small>\n</div>\n<!-- Zero Configuration-->\n<div class=\"col-sm-2\"></div>\n<div class=\"col-sm-8\">\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Manage Delivery Area</div>\n    <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n            <table datatable=\"\" class=\"table table-striped\">\n                <thead>\n                    <tr>\n\t\t\t\t\t\t<th class=\"wd-md text-center custom\">Pin Code</th>\n\t\t\t\t\t\t<th class=\"wd-md text-center custom\">Available</th>\n                        <th class=\"text-center\">Update</th>\n                       <th class=\"text-center\">Delete</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"text-center\" *ngFor=\"let code of allPincodes;let i=index \">\n                        <td><a href=\"\">{{code.pincode}}</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center available\" *ngIf=\"code.available; else notavailable\">\n\t\t\t\t\t\t  Yes\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<ng-template #notavailable>\n                            <td class=\"text-center notavailable\">No\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</ng-template>\n                        <td class=\"text-center\">\n                         <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"activeUpdate(code.key,i)\">\n                         <em class=\"fa fa-pencil\"></em> \n                         </button>\n                        </td>\n                        <td class=\"text-center\">\n                         <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"pinDelete(code.key)\">\n                         <em class=\"fa fa-trash-o\"></em>\n                         </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n</div>\n</div><!-- data Table end-->"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myRadio {\n  padding-right: 20px; }\n\n.available {\n  color: green; }\n\n.notavailable {\n  color: #d80000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var DeliveryOptionsComponent = (function () {
    function DeliveryOptionsComponent(af, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.allPincodes = [];
        this.activeAddBlock = false;
        this.activeUpdateBlock = false;
        this.activeDataTable = true;
        this.add = {
            pincode: 0,
            available: true,
            deliveryCharge: 0
        };
        this.available = 'true';
        this.update = {
            pincode: 0,
            available: true,
            deliveryCharge: 0
        };
        this.pinDataRef = af.list('/delivery-options', function (ref) { return ref.orderByChild('pincode'); });
        this.pinObservable = this.pinDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.pinObservable.subscribe(function (res) {
            _this.allPincodes = res;
        });
    }
    DeliveryOptionsComponent.prototype.activeAdd = function () {
        this.activeAddBlock = true;
        this.activeUpdateBlock = false;
        this.activeDataTable = false;
    };
    DeliveryOptionsComponent.prototype.onAddPin = function () {
        var _this = this;
        this.spinnerService.show();
        if (!this.available) {
            this.add.available = false;
        }
        else {
            this.add.available = true;
        }
        this.pinDataRef.push(this.add).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Delivery Area Added!', 'Success!');
            _this.cancelAdd();
        });
    };
    DeliveryOptionsComponent.prototype.activeUpdate = function (key, i) {
        this.activeUpdateBlock = true;
        this.activeAddBlock = false;
        this.activeDataTable = false;
        this.update = this.allPincodes[i];
        this.updateObjKey = key;
        if (this.update.available) {
            this.available = 'true';
        }
        else {
            this.available = 'false';
        }
    };
    DeliveryOptionsComponent.prototype.onUpdatePin = function () {
        var _this = this;
        this.spinnerService.show();
        console.log(this.available);
        if (this.available === 'false') {
            this.update.available = false;
        }
        else {
            this.update.available = true;
        }
        console.log(this.update.available);
        this.pinObjRef = this.af.object('/delivery-options/' + this.updateObjKey);
        console.log('updated data ' + JSON.stringify(this.update));
        this.pinObjRef.update({
            pincode: this.update.pincode,
            deliveryCharge: this.update.deliveryCharge,
            available: this.update.available
        }).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Delivery Area Updated!', 'Success!');
            _this.cancelUpdate();
        });
    };
    DeliveryOptionsComponent.prototype.cancelAdd = function () {
        this.activeDataTable = true;
        this.activeUpdateBlock = false;
        this.activeAddBlock = false;
        this.add.pincode = 0;
    };
    DeliveryOptionsComponent.prototype.cancelUpdate = function () {
        this.updateObjKey = '',
            this.activeDataTable = true;
        this.activeUpdateBlock = false;
        this.activeAddBlock = false;
    };
    DeliveryOptionsComponent.prototype.pinDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.pinDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'Delivery Area Deleted!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    DeliveryOptionsComponent.prototype.ngOnInit = function () {
    };
    DeliveryOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-options',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], DeliveryOptionsComponent);
    return DeliveryOptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Loyalty\r\n   <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Setting</small>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-6\">\r\n   <!-- START panel-->\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\"><strong>Loyalty</strong> Percentage</div>\r\n         <div class=\"panel-body\">\r\n            <form role=\"form\" (ngSubmit)=\"onSubmitLoyality()\" #f=\"ngForm\">\r\n               <div class=\"form-group\">\r\n\r\n                  <label>Program Status\r\n                  </label>\r\n                  <input class=\"form-control\" type=\"checkbox\" name=\"enable\" id=\"enable\" \r\n                  [(ngModel)]=\"loyalitys.enable\" />\r\n                  <div *ngIf=\"loyalitys.enable\">\r\n                     <label>Loyalty Percentage\r\n                     </label>\r\n                     <input class=\"form-control\" type=\"text\" name=\"loylityPercentage\" id=\"loylityPercentage\" [(ngModel)]=\"loyalitys.loylityPercentage\" placeholder=\"Enter Loyality Percentage\" />\r\n                     <label>Min Loyalty\r\n                     </label>\r\n                     <input class=\"form-control custom-input\" type=\"text\" name=\"minLoyalityPointes\" id=\"minLoyalityPointes\" [(ngModel)]=\"loyalitys.minLoyalityPointes\" placeholder=\"Enter Minimum loylity Points\" />\r\n                  </div>\r\n               </div>\r\n               <button class=\"btn btn-sm btn-success\" type=\"submit\">Save</button>\r\n            </form>\r\n         </div>\r\n      </div>\r\n      <!-- END panel-->\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  width: 70% !important; }\n\n.custom-input {\n  margin-top: 6px; }\n\n.required {\n  color: blue;\n  font-size: 16px; }\n\n.info {\n  color: red;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoyalitysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ToastrService } from 'ngx-toastr';


// import {NgForm} from '@angular/forms';
// import { Meta, Title } from '@angular/platform-browser';
// const swal = require('sweetalert');
var LoyalitysComponent = (function () {
    function LoyalitysComponent(af, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.loyalitys = {
            loylityPercentage: 0,
            minLoyalityPointes: 0,
            enable: true
        };
        this.loyalityData = af.object('/loyalitys');
        this.loyalityData.valueChanges().subscribe(function (res) {
            if (res != null) {
                _this.loyalitys = res;
            }
            // console.log("res "+JSON.stringify(res));
        });
        // title: Title, title.setTitle('Dashboard');
    }
    LoyalitysComponent.prototype.onSubmitLoyality = function () {
        var _this = this;
        this.spinnerService.show();
        this.loyalityData.set({ loylityPercentage: this.loyalitys.loylityPercentage,
            minLoyalityPointes: this.loyalitys.minLoyalityPointes,
            enable: this.loyalitys.enable
        }).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Loyalitys updated Successfully!', 'Success!');
        });
    };
    LoyalitysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loyalitys',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], LoyalitysComponent);
    return LoyalitysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n  Add New Category\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n      <a [routerLink]=\"['/mainCategories/manageMainCategories']\"> Manage Main Categories </a>->\n      Add Main Category\n  </small>\n</div>\n<div class=\"container-md\">\n  <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-9\">\n          <div class=\"panel b\">\n              <div class=\"panel-heading  text-bold bg-purple-dark\">Add Main Category</div>\n              <div class=\"panel-body\">\n                  <form (ngSubmit)=\"onSubmitCategory(f)\" #f=\"ngForm\">\n                      <div class=\"form-group\">\n                          <label>Title*</label>\n                          <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\"\n                                 [(ngModel)]=\"category.title\"/>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Description*</label>\n                          <textarea class=\"form-control\" rows=\"3\" name=\"title\" id=\"title\"\n                                    [(ngModel)]=\"category.description\" required></textarea>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Has Sub-Category*</label>\n                        <input class=\"\" type=\"radio\" value=\"false\" required name=\"hasChild\" id=\"hasChild\"\n                               [(ngModel)]=\"hasChild\"/><span class=\"myRadio\">No</span>\n                        <input class=\"\" type=\"radio\" value=\"true\" required name=\"hasChild\" id=\"hasChild\"\n                               [(ngModel)]=\"hasChild\"/>Yes\n                    </div>\n\n                      <div class=\"row form-group\">\n                          <div class=\"col-md-4\">\n                              <div class=\" fileUpload btn btn-primary choose-btn\">\n                                  <span> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> &nbsp; Upload</span>\n                                  <input type=\"file\" class=\"upload\" ng2FileSelect [uploader]=\"uploader\"\n                                         accept=\"image/*\" (change)=\"readUrl($event)\">\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                              <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\"/>\n                          </div><!--COL-->\n                      </div>\n                      <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                      <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Add Category</button>\n                      <p>\n                          <small class=\"text-muted\">* Required Fields</small>\n                      </p>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px;\n  margin: 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.s-n-btn {\n  margin-left: 1.3em; }\n\n.myRadio {\n  padding-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMainCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMainCategoriesComponent = (function () {
    function AddMainCategoriesComponent(af, router, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = '';
        this.category = { title: '',
            description: '',
            hasChild: false,
            thumb: ''
        };
        this.hasChild = 'false';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.categoryRef = af.list('/main-categories');
        // Override onSuccessItem to retrieve the imageId
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
    }
    AddMainCategoriesComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddMainCategoriesComponent.prototype.onSubmitCategory = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.hasChild) {
            this.category.hasChild = true;
        }
        //   this.category.hasChild = false;
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.category.thumb = res.url;
            _this.categoryRef.push(_this.category).then(function (data) {
                _this.spinnerService.hide();
                _this.toastr.success('Categories Data Added Successfully!', 'Success!');
                _this.router.navigate(['/mainCategories/manageMainCategories']);
                console.log('Done');
            });
        };
    };
    AddMainCategoriesComponent.prototype.cancel = function () {
        this.router.navigate(['/mainCategories/manageMainCategories']);
    };
    AddMainCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-main-categories',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddMainCategoriesComponent);
    return AddMainCategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n  Update Main Category\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n         <a [routerLink]=\"['/mainCategories/manageMainCategories']\"> Manage Main Categories </a>->\n          Update Main Category\n  </small>\n</div>\n<div class=\"container-md\">\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n<div class=\"col-md-9\">\n              <div class=\"panel b\">\n                  <div class=\"panel-heading  text-bold bg-purple-dark\">Update Main Category</div>\n                  <div class=\"panel-body\">\n                     <form (ngSubmit)=\"onSubmitCategory(f)\" #f=\"ngForm\">\n                          <div class=\"form-group\">\n                              <label>Title*</label>\n                              <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\" [(ngModel)]=\"categoryDetails.title\" />\n                          </div>\n                          <div class=\"form-group\">\n                              <label>Description*</label>\n                              <textarea class=\"form-control\" rows=\"3\" name=\"description\" id=\"description\" [(ngModel)]=\"categoryDetails.description\" required></textarea>\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Has Sub-Category*</label>\n                        <input class=\"\" type=\"radio\" value=\"false\" required name=\"hasChild\" id=\"hasChild\"\n                               [(ngModel)]=\"hasChild\"/><span class=\"myRadio\">No</span>\n                        <input class=\"\" type=\"radio\" value=\"true\" required name=\"hasChild\" id=\"hasChild\"\n                               [(ngModel)]=\"hasChild\"/>Yes\n                        </div>\n                          <div class=\"form-group\">\n                              <label>Thumb</label>\n                              <label for=\"image-input\" class=\"file-upload\">\n                              <div class=\"col-md-6\" [hidden]=\"url !=''\">\n                                 <img class=\" img-responsive img-thumbnail\" src=\"{{categoryDetails.thumb}}\" alt=\"Image\" height=\"70px\"/>\n                               </div>\n                                <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                                 <img class=\" img-responsive img-thumbnail\" [src]=\"url\" alt=\"Image\" height=\"70px\"/>\n                               </div>\n                                <div class=\"col-md-6\">\n                                  <div class=\"fileUpload btn btn-primary choose-btn pull-right\"><em class=\"fa fa-upload mr\"></em> Choose File</div>\n                                  <input id=\"image-input\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"readUrl($event)\">\n                                </div>\n                                <!--   <div class=\"col-md-6\">\n                                 <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\" />\n                                 </div><!--COL --> \n                              </label>\n                          </div>\n                            <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                             <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Update Category</button>\n\n                          <p>\n                              <small class=\"text-muted\">* Required Fields</small>\n                          </p>\n                      </form>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n-btn {\n  margin-right: 1.3em; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMainCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditMainCategoryComponent = (function () {
    function EditMainCategoryComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.categoryDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            console.log(Id);
            if (Id != null) {
                _this.categoriesdataRef = _this.af.object('/main-categories/' + Id);
                _this.af.object('/main-categories/' + Id).valueChanges()
                    .subscribe(function (response) {
                    _this.categoryDetails = response;
                    if (_this.categoryDetails.hasChild) {
                        _this.hasChild = 'true';
                    }
                    else {
                        _this.hasChild = 'false';
                    }
                });
            }
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.url = _this.uploader.options.url;
            localStorage.setItem('image', 'image Is going');
            return item;
        };
    }
    EditMainCategoryComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    EditMainCategoryComponent.prototype.onSubmitCategory = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.hasChild === 'true') {
            this.categoryDetails.hasChild = true;
        }
        else {
            this.categoryDetails.hasChild = false;
        }
        this.uploader.uploadAll();
        console.log('statement');
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log('statement');
            _this.categoriesdataRef.update({
                title: _this.categoryDetails.title,
                description: _this.categoryDetails.description,
                hasChild: _this.categoryDetails.hasChild,
                thumb: res.url,
            }).then(function (data) {
                _this.spinnerService.hide();
                localStorage.removeItem('image');
                _this.router.navigate(['/mainCategories/manageMainCategories']);
                _this.toastr.success('Categories Data Updated Successfully!', 'Success!');
            });
        };
        if (localStorage.getItem('image') == null) {
            console.log('if');
            this.categoriesdataRef.update({
                title: this.categoryDetails.title,
                description: this.categoryDetails.description,
                hasChild: this.categoryDetails.hasChild,
            }).then(function (res) {
                _this.spinnerService.hide();
                _this.router.navigate(['/mainCategories/manageMainCategories']);
                _this.toastr.success('Categories Data Updated Successfully!', 'Success!');
            });
        }
    };
    EditMainCategoryComponent.prototype.cancel = function () {
        this.router.navigate(['/mainCategories/manageMainCategories']);
    };
    EditMainCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-main-category',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditMainCategoryComponent);
    return EditMainCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/main-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Main Categories\n  <div class=\"pull-right\"> \n              <label class=\"file-upload\">\n                <a [routerLink]=\"'/mainCategories/addMainCategory'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Category</button> </a>  \n              </label>\n   </div><br/><br/>\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a>  ->  Main Categories</small>\n  </div>\n  \n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Main Categories Details</div>\n    <div class=\"table-responsive b0 customTable\">\n      <table class=\"table table-striped\">\n          <thead>\n          <tr>\n              <th class=\"thsearch text-center\">\n                 Name\n                  <form (keyup)=\"getCategory(siteName.value)\">\n                      <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                             id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                             placeholder=\"Search\" #siteName>\n                  </form>\n              </th>\n              <th class=\"thnosearch text-center\">\n                  Edit\n              </th>\n              <th class=\"thnosearch text-center\">\n                  Delete\n              </th>\n               <th class=\"thnosearch text-center\">\n                  View\n              </th>\n              <th class=\"thnosearch text-center\">\n                    Add Sub\n                </th>\n              \n              <th class=\"thnoitem\"></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr class=\" text-center\" *ngFor=\"let item of categories\">\n              <td>{{item.title}}</td>\n              <td>\n               <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"categoryEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button>\n               </td>\n               <td>\n                 <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"categoryDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button>\n              </td> \n              <td>\n               <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"categoryShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n              </td>\n              <td>\n                    <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"categoryAdd(item.key)\"><em class=\"fa fa-plus\"></em></button>\n                   </td>\n              \n          </tr>\n          </tbody>\n          <tfoot>\n          <tr>\n              <td colspan=\"5\" class=\"customPagination\">\n              <!--     <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n              </td>\n          </tr>\n          </tfoot>\n      </table>\n  </div>\n  \n  <div class=\"panel-footer\">\n          <div class=\"row\">\n          \n          </div>\n      </div>\n  </div>\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/main-categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customPagination {\n  padding-right: 150px !important; }\n\n.customTable {\n  margin-right: -136px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 16%; }\n\n.thnosearch {\n  width: 16% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/main-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var MainCategoriesComponent = (function () {
    function MainCategoriesComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.categories = [];
        console.log('main category');
        this.catRef = this.af.list('/main-categories');
        this.categoryData = this.catRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.categoryData.subscribe(function (res) {
            console.log(res);
            _this.categories = res;
        });
    }
    MainCategoriesComponent.prototype.getCategory = function (ev) {
        var _this = this;
        var val = ev;
        this.categoryData = this.af.list('/main-categories', function (ref) { return ref.orderByChild('title')
            .startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.categoryData
            .subscribe(function (data) {
            _this.categories = data;
        });
    };
    MainCategoriesComponent.prototype.categoryShow = function (key) {
        this.router.navigate(['/mainCategories/viewMainCategory', key]);
    };
    MainCategoriesComponent.prototype.categoryEdit = function (key) {
        this.router.navigate(['/mainCategories/editMainCategory', key]);
    };
    MainCategoriesComponent.prototype.categoryAdd = function (key) {
        console.log('add sub');
        this.router.navigate(['/mainCategories/addSubCategory', key]);
    };
    MainCategoriesComponent.prototype.categoryDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.catRef.remove(key).then(function (resp) {
                    swal('Deleted!', 'Categories Data Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    MainCategoriesComponent.prototype.ngOnInit = function () {
    };
    MainCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-categories',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/main-categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/main-categories/main-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], MainCategoriesComponent);
    return MainCategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n    Add Sub-Category\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n           <a [routerLink]=\"['/mainCategories/manageMainCategories']\"> Manage Main Categories </a>->\n            Add Sub-Category\n    </small>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubCategoryComponent = (function () {
    function SubCategoryComponent(af, router, toastr, route, spinnerService) {
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.spinnerService = spinnerService;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            // if(Id != null) {
            //  this.categoriesdataRef = this.af.object('/main-categories/' + Id);
            //  this.af.object('/main-categories/' + Id).valueChanges()
            //    .subscribe((response) => {
            //        this.categoryDetails = response;
            //      })
            //    }
            console.log(Id);
        });
    }
    SubCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sub-category',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View Main Category\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n         <a [routerLink]=\"['/mainCategories/manageMainCategories']\"> Manage Main Categories </a>->\n             View Main Category \n  </small>\n  </div>\n <div class=\"col-masonry\">\n         <div class=\"panel b m0\">\n             <div class=\"panel-heading\">\n             </div>\n             <div class=\"panel-body\">\n                 <div class=\"row\">\n                     <div class=\"col-lg-4 text-center mb-lg\">\n                         <a>\n                             <img class=\"img-responsive img-thumbnail\" src=\"{{categoryDetails.thumb}}\" alt=\"Image\" />\n                         </a>\n                     </div>\n                     <div class=\"col-lg-8\">\n                     <div class=\"col-lg-3\">\n                         <h4 class=\"media-heading\">Name</h4>\n                     </div>\n                     <div class=\"col-lg-5\">\n                         <p>{{categoryDetails.title}}</p>\n                     </div>\n                     </div>\n                     <div class=\"col-lg-8\">\n                     <div class=\"col-lg-3\">\n                         <h4 class=\"media-heading\">Description</h4>\n                     </div>\n                     <div class=\"col-lg-5\">\n                         <p>{{categoryDetails.description}}</p>\n                     </div>\n                     </div>\n                 </div>\n             </div>\n             <div class=\"panel-body\">\n             </div>\n         </div>\n     </div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMainCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewMainCategoryComponent = (function () {
    function ViewMainCategoryComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.categoryDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.catRef = _this.af.object('/main-categories/' + Id);
                _this.catObservable = _this.catRef.valueChanges();
                _this.catObservable.subscribe(function (response) {
                    _this.categoryDetails = response;
                });
            }
        });
    }
    ViewMainCategoryComponent.prototype.ngOnInit = function () {
    };
    ViewMainCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-main-category',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewMainCategoryComponent);
    return ViewMainCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Add Menu Item\r\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/menu/manageItems']\"> Menu Items </a>->\r\n        Add Menu Item\r\n    </small>\r\n</div>\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Item Details</div>\r\n    <div class=\"panel-body\">\r\n        <form (ngSubmit)=\"onSubmitMainItems(f)\" #f=\"ngForm\">\r\n            <fieldset>\r\n                <label class=\"col-sm-2 control-label custom\" for=\"title\">Title*</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"title\" id=\"title\"  #title=\"ngModel\" [(ngModel)]=\"menuItems.title\"\r\n                                   type=\"text\" required placeholder=\"Menu Item Name\"/>\r\n                                   <!-- <input class=\"form-control\" name=\"title\" id=\"title\" ngModel #title=\"ngModel\"\r\n                                   type=\"text\" required placeholder=\"Menu Item Name\" [(ngModel)]=\"menuItems.title\" /> -->\r\n                              <div class=\"alert alert-danger\" *ngIf=\"title.touched && !title.valid\">\r\n                                  <div *ngIf=\"title.errors.required\">Title Is require</div>\r\n                              </div>     \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\" for=\"title\">Product Code*</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" name=\"productcode\" id=\"productcode\" #productcode=\"ngModel\" [(ngModel)]=\"menuItems.productCode\"\r\n                                   type=\"text\" required placeholder=\"Menu Item code\"/>\r\n                                   <div class=\"alert alert-danger\" *ngIf=\"productcode.touched && !productcode.valid\">\r\n                                    <div *ngIf=\"productcode.errors.required\">Product Code is require</div>\r\n                                </div>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Item Description*\r\n                </label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <textarea class=\"form-control\" name=\"description\" id=\"description\" #description=\"ngModel\" \r\n                                      [(ngModel)]=\"menuItems.description\" required minlength=\"10\" rows=\"3\"></textarea>\r\n                                      <div class=\"alert alert-danger\" *ngIf=\"description.touched && !description.valid\">\r\n                                        <div *ngIf=\"description.errors.required\">Description is require</div>\r\n                                        <div *ngIf=\"description.errors.minlength\">Description must have at least {{description.errors.minlength.requiredLength}} characters</div>\r\n                                    </div>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Offer Percentage\r\n                </label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input class=\"form-control\" type=\"number\" name=\"offerPercentage\" id=\"offerPercentage\"\r\n                                   [(ngModel)]=\"menuItems.offerPercentage\" required=\"\" rows=\"3\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Category*</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <select class=\"form-control\" name=\"category\" id=\"category\" #category=\"ngModel\" required [(ngModel)]=\"menuItems.category\">\r\n                                <option *ngFor=\"let category of allCategories\" value=\"{{category.key}}\">\r\n                                    {{category.title}}\r\n                                </option>\r\n                            </select>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"category.touched && !category.valid\">\r\n                                <div *ngIf=\"category.errors.required\">Must select a category</div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\" *ngIf=\"role === 'Admin'\">Vendor*</label>\r\n                <div class=\"col-sm-10\" *ngIf=\"role === 'Admin'\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <select class=\"form-control\" name=\"vendorcode\" id=\"vendorcode\" #vendorcode=\"ngModel\" required [(ngModel)]=\"menuItems.vendorCode\">\r\n                                <option *ngFor=\"let vendor of vendors\" value=\"{{vendor.code}}\">\r\n                                    {{vendor.title}}\r\n                                </option>\r\n                            </select>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"vendorcode.touched && !vendorcode.valid\">\r\n                                <div *ngIf=\"vendorcode.errors.required\">Must select a vendor</div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Featured</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"feature\" value=\"false\" [(ngModel)]=\"feature\"> <span class=\"myRadio\">No</span>\r\n                            <input type=\"radio\" name=\"feature\" value=\"true\" [(ngModel)]=\"feature\"> Yes\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Available</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\r\n                            <input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <label class=\"col-sm-2 control-label custom\">Halal</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"halal\" value=\"false\" [(ngModel)]=\"halal\"> <span class=\"myRadio\">No</span>\r\n                            <input type=\"radio\" name=\"halal\" value=\"true\" [(ngModel)]=\"halal\"> Yes\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <label class=\"col-sm-2 control-label custom\">No Pork, No Lard</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"noPork\" value=\"false\" [(ngModel)]=\"noPork\"> <span class=\"myRadio\">Not Applicable</span>\r\n                            <input type=\"radio\" name=\"noPork\" value=\"true\" [(ngModel)]=\"noPork\">Applicable\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <label class=\"col-sm-2 control-label custom\">Delivery Time*</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <table>\r\n                             <tr>   \r\n                                 <td>\r\n                            <input class=\"form-control\" type=\"number\" min=\"1\" name=\"leadtimeNum\" [(ngModel)]=\"menuItems.leadtimeNum\">\r\n                              </td>\r\n                              <td>\r\n                            <select class=\"form-control\" name=\"leadtimeUnit\" id=\"\" [(ngModel)]=\"menuItems.leadtimeUnit\">\r\n                                <option  selected value=\"day\">\r\n                                    day\r\n                                </option>\r\n                                <option  value=\"hour\">\r\n                                    hour\r\n                                </option>\r\n                                <option  value=\"minute\">\r\n                                        minute\r\n                                    </option>\r\n                            </select>\r\n                             </td>\r\n                            </tr>\r\n                        </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Extra Ingredients</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-11 added-block\"\r\n                                     *ngFor=\"let extra of menuItems.extraOptions; let i = index\" [attr.data-index]=\"i\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"name-{{i}}\" id=\"name\"\r\n                                               [(ngModel)]=\"extra.name\" placeholder=\"Extra Ingredients Name\"/>\r\n                                    </div> \r\n                                    <div class=\"col-md-5\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"selected-{{i}}\" id=\"selected\"\r\n                                               [(ngModel)]=\"extra.selected\" placeholder=\"Extra Ingredients Price\"/>\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeChoice()\">\r\n                                            <em class=\"fa fa-trash\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div><!--col-->\r\n                                <div class=\"col-md-1 added-block\">\r\n                                    <button class=\"btn btn-sm btn-info\" type=\"button\" (click)=\"addNewChoice()\">\r\n                                        <em class=\"fa fa-plus\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div><!--row-->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Price *</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-11 added-block\" *ngFor=\"let choice of menuItems.price; let i = index\"\r\n                                     [attr.data-index]=\"i\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"pname{{i}}\" id=\"pname\" #pname=\"ngModel\" required\r\n                                               [(ngModel)]=\"choice.pname\" placeholder=\"Product Variance (size)\"/>\r\n                                    </div>\r\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"panme.touched && !panme.valid\">\r\n                                        <div *ngIf=\"panme.errors.required\">Size is require</div>\r\n                                    </div>   -->\r\n                                    <div class=\"col-md-5\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"value{{i}}\" id=\"value\" #value=\"ngModel\" required\r\n                                               [(ngModel)]=\"choice.value\" placeholder=\"Product Price\">\r\n                                    </div>\r\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"value.touched && !value.valid\">\r\n                                        <div *ngIf=\"value.errors.required\">Amount is require</div>\r\n                                    </div>  -->\r\n                                    <div class=\"col-md-1\">\r\n                                        <button class=\"btn btn-danger\" type=\"button\" (click)=\"removePrice()\">\r\n                                            <em class=\"fa fa-trash\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div><!--col-->\r\n                                <div class=\"col-md-1 added-block\">\r\n                                    <button class=\"btn btn-sm btn-info\" type=\"button\" (click)=\"addNewPrice()\">\r\n                                        <em class=\"fa fa-plus\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"col-sm-2 control-label custom\">Thumb*</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"row panel\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"panel-body mh0 fileUpload btn btn-primary choose-btn\">\r\n                                <span> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> &nbsp; Upload</span>\r\n                                <input type=\"file\" class=\"upload\" ng2FileSelect [uploader]=\"Cuploader\" accept=\"image/*\"\r\n                                       (change)=\"readUrl($event)\">\r\n                            </div>\r\n                        </div><!--col-->\r\n                        <div class=\"col-md-6\" [hidden]=\"url ==''\">\r\n                            <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\"/>\r\n                        </div><!--COL-->\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                    <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Submit</button>\r\n                </div>\r\n                <label class=\"col-sm-2 control-label custom requireField\">* field are require</label>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- Gallery Images Upload -->\r\n  <h1>Gallery Images Upload</h1>\r\n  <style>\r\n    .my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n  \r\n    html, body { height: 100%; }\r\n  </style>\r\n  \r\n  <div class=\"container\">\r\n  \r\n    <div class=\"row\">\r\n  \r\n        <div class=\"col-md-3\">\r\n  \r\n            <h3>Select files</h3>\r\n  \r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Base drop zone\r\n            </div>\r\n  \r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\r\n                 (fileOver)=\"fileOverAnother($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Another drop zone\r\n            </div>\r\n  \r\n            Multiple\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n  \r\n            Single\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"selected()\"/>\r\n        </div>\r\n  \r\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n  \r\n            <h3>Upload queue</h3>\r\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n  \r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item?.file?.name }}</strong></td>\r\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td *ngIf=\"uploader.isHTML5\">\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n  \r\n            <div>\r\n                <div>\r\n                    Queue progress:\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n                </button>\r\n            </div>\r\n  \r\n        </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myRadio {\n  padding-right: 20px; }\n\n.custom {\n  padding-top: 22px; }\n\n.panel {\n  box-shadow: none;\n  margin-bottom: auto; }\n\n.added-block {\n  padding: 5px 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n\n.s-n-btn {\n  margin-right: 1.3em; }\n\n.requireField {\n  color: #ca0505;\n  font-size: 1.2em;\n  padding: 0 0 0 10px;\n  /* margin-top: 20px; */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var URL = 'http://www.oneforcestore.com/script/temptingtaste.php';
var AddItemComponent = (function () {
    // categories: Array<any>
    // categoryDataRef: AngularFireList<any>;
    // categoryObservable:Observable<any>;
    // menuItemsDataRef: AngularFireList<any>;
    // imageId: string;
    // uploader: CloudinaryUploader = new CloudinaryUploader(
    //   new CloudinaryOptions(cloudinarUpload)
    // );
    function AddItemComponent(af, toastr, router, spinnerService) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.router = router;
        this.spinnerService = spinnerService;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({ url: URL });
        this.url = '';
        this.menuItems = {
            title: '',
            description: '',
            offerPercentage: 0,
            extraOptions: [{}],
            offer: false,
            price: [{}],
            category: '',
            thumb: '',
            feature: false,
            available: true,
            halal: false,
            noPork: false,
            //   vendor: '',
            productCode: '',
            vendorCode: '',
            leadtimeNum: 1,
            leadtimeUnit: ''
        };
        this.ItemPrice = [];
        this.feature = 'false';
        this.available = 'true';
        this.halal = 'false';
        this.noPork = 'false';
        this.Cuploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        // addNewChoice = function() {
        //   var newItemNo = this.menuItems.extraOptions.length+1;
        //   this.menuItems.extraOptions.push({});
        // };
        this.addNewChoice = function () {
            var newItemNo = this.menuItems.extraOptions.length + 1;
            this.menuItems.extraOptions.push({});
        };
        this.removeChoice = function () {
            if (this.menuItems.extraOptions.length > 0) {
                var lastItem = this.menuItems.extraOptions.length - 1;
                this.menuItems.extraOptions.splice(lastItem);
            }
        };
        this.addNewPrice = function () {
            var newItemNo = this.menuItems.price.length + 1;
            this.menuItems.price.push({});
        };
        this.removePrice = function () {
            if (this.menuItems.price.length > 1) {
                var lastItem = this.menuItems.price.length - 1;
                this.menuItems.price.splice(lastItem);
            }
        };
        this.leadtimeUnit = 'day';
        this.role = localStorage.getItem('role');
        console.log(this.role);
        this.menuItemsDataRef = af.list('/menuItems');
        this.categoryDataRef = af.list('/categories', function (ref) { return ref.orderByChild('hasChild').equalTo(false); });
        this.vendorDataRef = af.list('/vendors');
        this.mainCategoryDataRef = af.list('/main-categories', function (ref) { return ref.orderByChild('hasChild').equalTo(false); });
        this.fileUpload();
        this.categoryObservable = this.categoryDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.mainCategoryObservable = this.mainCategoryDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.mainCategoryObservable.subscribe(function (response) {
            _this.mainCategories = response;
            _this.categoryObservable.subscribe(function (res) {
                _this.categories = res;
                _this.allCategories = _this.mainCategories.concat(_this.categories);
            });
        });
        this.categoryObservable = this.categoryDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        // this.categoryObservable.subscribe((response) => {
        //   this.categories = response;
        // });
        this.vendorObservable = this.vendorDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.vendorObservable.subscribe(function (response) {
            _this.vendors = response;
        });
        // Override onSuccessItem to retrieve the imageId
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
    }
    AddItemComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            //   reader.onload = (event: any) => {
            reader.onload = function (data) {
                //     this.url = event.target.result;
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddItemComponent.prototype.onSubmitMainItems = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.role !== 'Admin') {
            this.menuItems.vendorCode = this.role;
        }
        //  this.menuItems.leadtimeNum = this.leadtimeNum;
        //   this.menuItems.leadtimeUnit = this.leadtimeUnit;
        if (this.feature === 'true') {
            this.menuItems.feature = true;
        }
        if (this.available === 'false') {
            this.menuItems.available = false;
        }
        if (this.halal === 'true') {
            this.menuItems.halal = true;
        }
        if (this.noPork === 'true') {
            this.menuItems.noPork = true;
        }
        if (this.menuItems.offerPercentage > 0) {
            this.ItemPrice = this.menuItems.price;
            for (var i = 0; i < this.ItemPrice.length; i++) {
                this.ItemPrice[i].specialPrice = (this.ItemPrice[i].value - (this.menuItems.offerPercentage * this.ItemPrice[i].value) / 100);
                console.log('this.ItemPrice' + JSON.stringify(this.ItemPrice));
            }
            this.menuItems.offer = true;
        }
        else {
            console.log('else');
            this.ItemPrice = this.menuItems.price;
            this.menuItems.offerPercentage = 0;
            this.menuItems.offer = false;
        }
        this.Cuploader.uploadAll();
        this.Cuploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.menuItems.thumb = res.url;
            _this.menuItemsDataRef.push(_this.menuItems).then(function (data) {
                _this.spinnerService.hide();
                _this.toastr.success('Menu-Items Data Added Successfully!', 'Success!');
                _this.router.navigate(['/menu/manageItems']);
            });
        };
    };
    AddItemComponent.prototype.cancel = function () {
        this.router.navigate(['/menu/manageItems']);
    };
    AddItemComponent.prototype.selected = function () {
        console.log('selected');
    };
    AddItemComponent.prototype.fileUpload = function () {
        // this.uploader = new FileUploader({url: URL});
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log(res);
            console.log(res.name); // the url will be in the response
        };
    };
    AddItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Update Menu Items\r\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/menu/manageItems']\"> Menu Items </a>->\r\n        Update Menu Item\r\n    </small>\r\n</div>\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Item Details</div>\r\n    <div class=\"panel-body\">\r\n        <form (ngSubmit)=\"onSubmitMainItems(f)\" #f=\"ngForm\">\r\n            <fieldset>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\" for=\"title\">Product Name *</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <input class=\"form-control\" name=\"title\" id=\"title\" [(ngModel)]=\"menuItems.title\"\r\n                                       type=\"text\" required placeholder=\"Product Name\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\" for=\"productcode\">Product Code *</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <input class=\"form-control\" name=\"productcode\" id=\"productcode\" [(ngModel)]=\"menuItems.productCode\"\r\n                                       type=\"text\" required placeholder=\"Product Code\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Menu Description\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <textarea class=\"form-control\" name=\"description\" id=\"description\"\r\n                                          [(ngModel)]=\"menuItems.description\" required=\"\" rows=\"3\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Offer Percentage\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <input class=\"form-control\" type=\"number\" name=\"offerPercentage\" id=\"offerPercentage\"\r\n                                       [(ngModel)]=\"menuItems.offerPercentage\" required=\"\" rows=\"3\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Category</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <select class=\"form-control\" name=\"category\" id=\"category\"\r\n                                        [(ngModel)]=\"menuItems.category\" placeholder=\"select a category\" ng-change=\"categoryCahnge()\">\r\n                                    <option *ngFor=\"let category of allCategories\" value=\"{{category.key}}\">\r\n                                        {{category.title}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"role === 'Admin'\">\r\n                    <label class=\"col-sm-2 control-label custom\">Vendor</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <select class=\"form-control\" name=\"vendor\" id=\"vendor\"\r\n                                        [(ngModel)]=\"menuItems.vendorCode\" placeholder=\"select a vendor\" ng-change=\"vendorChange()\">\r\n                                    <option *ngFor=\"let vendor of vendors\" value=\"{{vendor.code}}\">\r\n                                        {{vendor.title}}\r\n                                    </option>\r\n                                </select> \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                <label class=\"col-sm-2 control-label custom\">Featured</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"feature\" value=\"false\" [(ngModel)]=\"feature\"> <span class=\"myRadio\">No</span>\r\n                            <input type=\"radio\" name=\"feature\" value=\"true\" [(ngModel)]=\"feature\"> Yes\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                <label class=\"col-sm-2 control-label custom\">Available</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\r\n                            <input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Halal</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <input type=\"radio\" name=\"halal\" value=\"false\" [(ngModel)]=\"halal\"> <span class=\"myRadio\">No</span>\r\n                                <input type=\"radio\" name=\"halal\" value=\"true\" [(ngModel)]=\"halal\"> Yes\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-2 control-label custom\">No Pork, No Lard</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <div class=\"panel\">\r\n                                <div class=\"panel-body mh0\">\r\n                                    <input type=\"radio\" name=\"noPork\" value=\"false\" [(ngModel)]=\"noPork\"> <span class=\"myRadio\">Not Applicable</span>\r\n                            <input type=\"radio\" name=\"noPork\" value=\"true\" [(ngModel)]=\"noPork\">Applicable\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n\r\n                <div class=\"form-group\">\r\n                <label class=\"col-sm-2 control-label custom\">Delivery Lead Time</label>\r\n                <div class=\"col-sm-10\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body mh0\">\r\n                            <table>\r\n                             <tr>   \r\n                                 <td>\r\n                                    <input class=\"form-control\" type=\"number\" min=\"1\" max=\"5\" name=\"leadtimeNum\" [(ngModel)]=\"menuItems.leadtimeNum\">\r\n                                 </td>\r\n                                 <td>\r\n                                     <select class=\"form-control\" name=\"leadtimeUnit\" id=\"\" [(ngModel)]=\"menuItems.leadtimeUnit\">\r\n                                          <option  value=\"day\">\r\n                                               day\r\n                                           </option>\r\n                                           <option  value=\"hour\">\r\n                                                hour\r\n                                          </option>\r\n                                          <option  value=\"minute\">\r\n                                                minute\r\n                                            </option>\r\n                                     </select>\r\n                                  </td>\r\n                              </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Extra Ingredients *</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-11 added-block\"\r\n                                         *ngFor=\"let extra of menuItems.extraOptions; let i = index\"\r\n                                         [attr.data-index]=\"i\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <input class=\"form-control\" type=\"text\" name=\"name-{{i}}\" id=\"name\"\r\n                                                   [(ngModel)]=\"extra.name\" placeholder=\"Extra Ingredients Name\"/>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                            <input class=\"form-control\" type=\"text\" name=\"selected-{{i}}\" id=\"selected\"\r\n                                                   [(ngModel)]=\"extra.value\" placeholder=\"Extra Ingredients Price\"/>\r\n                                        </div>\r\n                                        <div class=\"col-md-1\">\r\n                                            <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeChoice()\">\r\n                                                <em class=\"fa fa-trash\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <button class=\"btn btn-sm btn-info plus\" type=\"button\" (click)=\"addNewChoice()\">\r\n                                            <em class=\"fa fa-plus\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Price*</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-11 added-block\"\r\n                                         *ngFor=\"let choice of menuItems.price; let i = index\" [attr.data-index]=\"i\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <input class=\"form-control\" type=\"text\" name=\"pname-{{i}}\" id=\"pname\"\r\n                                                   [(ngModel)]=\"choice.pname\" placeholder=\"Product Variance (size)\"/>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-5\">\r\n                                            <input class=\"form-control\" type=\"text\" name=\"value-{{i}}\" id=\"value\"\r\n                                                   [(ngModel)]=\"choice.value\" placeholder=\"Product Price\">\r\n                                        </div>\r\n                                        <div class=\"col-md-1\">\r\n                                            <button class=\"btn btn-danger\" type=\"button\" (click)=\"removePrice()\">\r\n                                                <em class=\"fa fa-trash\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <button class=\"btn btn-sm btn-info plus\" type=\"button\" (click)=\"addNewPrice()\">\r\n                                            <em class=\"fa fa-plus\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label custom\">Menu Image</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-body mh0\">\r\n                                <label for=\"image-input\" class=\"file-upload\">\r\n                                    <div [hidden]=\"url !=''\">\r\n                                        <img class=\"img-thumbnail img-width\" src=\"{{menuItems.thumb}}\" alt=\"Image\"/>\r\n                                    </div>\r\n                                    <div [hidden]=\"url ==''\">\r\n                                        <img class=\"img-thumbnail img-width\" [src]=\"url\" alt=\"Image\"/>\r\n                                    </div>\r\n\r\n                                    <button class=\"btn btn-primary\"><em class=\"fa fa-upload mr\"></em> Choose File\r\n                                    </button>\r\n                                    <input id=\"image-input\" type=\"file\" ng2FileSelect [uploader]=\"uploader\"\r\n                                           accept=\"image/*\" (change)=\"readUrl($event)\">\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                    <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Submit</button>\r\n                </div>\r\n                <label class=\"col-sm-2 control-label custom requireField\">* field are require</label>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  margin-top: 27px; }\n\n.myRadio {\n  padding-right: 20px; }\n\n.panel {\n  box-shadow: none; }\n\n.added-block {\n  padding: 5px 0px; }\n\n.plus {\n  margin-top: 5px; }\n\n.s-n-btn {\n  margin-right: 1.3em; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.img-width {\n  max-width: 30%; }\n\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.requireField {\n  color: #ca0505;\n  font-size: 1.2em;\n  padding: 0 0 0 10px;\n  /* margin-top: 20px; */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditItemComponent = (function () {
    // menuItemsdataRef: AngularFireObject<any>;
    // menuObservable:Observable<any>;
    // categoryDataRef: AngularFireList<any>;
    // categoryObservable:Observable<any>;
    function EditItemComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.menuItems = {
            title: '',
            description: '',
            offerPercentage: 0,
            offer: false,
            extraOptions: [{}],
            price: [{}],
            category: '',
            thumb: '',
            available: true,
            feature: false,
            halal: false,
            noPork: false,
            //    vendor: '',
            productCode: '',
            vendorCode: '',
            code: '',
            leadtimeNum: 1,
            leadtimeUnit: ''
        };
        this.ItemPrice = [];
        this.feature = 'false';
        this.available = 'true';
        this.halal = 'false';
        this.noPork = 'false';
        this.url = '';
        this.categories = [{}];
        this.vendors = [{}];
        this.addNewChoice = function () {
            console.log(this.menuItems.extraOptions);
            if (this.menuItems.extraOptions == null) {
                this.menuItems.extraOptions = [{}];
            }
            else {
                var newItemNo = this.menuItems.extraOptions.length + 1;
                this.menuItems.extraOptions.push({});
            }
        };
        this.removeChoice = function () {
            if (this.menuItems.extraOptions.length > 0) {
                var lastItem = this.menuItems.extraOptions.length - 1;
                this.menuItems.extraOptions.splice(lastItem);
            }
        };
        this.addNewPrice = function () {
            var newItemNo = this.menuItems.price.length + 1;
            this.menuItems.price.push({});
        };
        this.removePrice = function () {
            if (this.menuItems.price.length > 1) {
                var lastItem = this.menuItems.price.length - 1;
                this.menuItems.price.splice(lastItem);
            }
        };
        this.role = localStorage.getItem('role');
        this.categoryDataRef = this.af.list('/categories', function (ref) { return ref.orderByChild('hasChild').equalTo(false); });
        this.vendorDataRef = this.af.list('/vendors');
        this.mainCategoryDataRef = af.list('/main-categories', function (ref) { return ref.orderByChild('hasChild').equalTo(false); });
        this.categoryObservable = this.categoryDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.mainCategoryObservable = this.mainCategoryDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.mainCategoryObservable.subscribe(function (response) {
            _this.mainCategories = response;
            _this.categoryObservable.subscribe(function (res) {
                _this.categories = res;
                _this.allCategories = _this.mainCategories.concat(_this.categories);
            });
        });
        //      this.categoryObservable.subscribe((response)=>{
        //      this.categories = response;
        //      console.log(this.categories);
        //  });
        this.vendorObservable = this.vendorDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.vendorObservable.subscribe(function (response) {
            _this.vendors = response;
            console.log(_this.vendors);
        });
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.menuItemsdataRef = _this.af.object('/menuItems/' + Id);
                _this.menuObservable = _this.menuItemsdataRef.valueChanges();
                _this.menuObservable.subscribe(function (response) {
                    _this.menuItems = response;
                    if (_this.menuItems.feature) {
                        _this.feature = 'true';
                    }
                    //   else {
                    //    this.feature = 'false';
                    //  }
                    if (!_this.menuItems.available) {
                        _this.available = 'false';
                    }
                    if (_this.menuItems.halal) {
                        _this.halal = 'true';
                    }
                    // if(this.menuItems.halal){
                    //   this.halal = 'true';
                    // }
                    if (_this.menuItems.noPork) {
                        _this.noPork = 'true';
                    }
                    // else {
                    //   this.available = 'true';
                    // }
                    console.log('menu' + JSON.stringify(response));
                });
            }
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.url = _this.uploader.options.url;
            console.log('image is going');
            localStorage.setItem('image', 'image Is going');
            return item;
        };
    }
    EditItemComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    EditItemComponent.prototype.onSubmitMainItems = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.feature === 'true') {
            this.menuItems.feature = true;
        }
        else {
            this.menuItems.feature = false;
        }
        if (this.available === 'false') {
            this.menuItems.available = false;
        }
        else {
            this.menuItems.available = true;
        }
        if (this.halal === 'false') {
            this.menuItems.halal = false;
        }
        else {
            this.menuItems.halal = true;
        }
        if (this.noPork === 'false') {
            this.menuItems.noPork = false;
        }
        else {
            this.menuItems.noPork = true;
        }
        console.log(this.menuItems);
        if (this.menuItems.offerPercentage > 0) {
            this.ItemPrice = this.menuItems.price;
            for (var i = 0; i < this.ItemPrice.length; i++) {
                this.ItemPrice[i].specialPrice = (this.ItemPrice[i].value - (this.menuItems.offerPercentage * this.ItemPrice[i].value) / 100);
                console.log('this.ItemPrice' + JSON.stringify(this.ItemPrice));
            }
            console.log('else');
            this.menuItems.offer = true;
        }
        else {
            console.log('else');
            this.ItemPrice = this.menuItems.price;
            this.menuItems.offerPercentage = 0;
            this.menuItems.offer = false;
        }
        if (this.menuItems.extraOptions === undefined) {
            this.menuItems.extraOptions = [{}];
        }
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.menuItemsdataRef.update({
                title: _this.menuItems.title,
                description: _this.menuItems.description,
                thumb: res.url,
                offerPercentage: _this.menuItems.offerPercentage,
                offer: _this.menuItems.offer,
                extraOptions: _this.menuItems.extraOptions,
                price: _this.ItemPrice,
                feature: _this.menuItems.feature,
                available: _this.menuItems.available,
                halal: _this.menuItems.halal,
                noPork: _this.menuItems.noPork,
                category: _this.menuItems.category,
                vendorCode: _this.menuItems.vendorCode,
                productCode: _this.menuItems.productCode,
                leadtimeNum: _this.menuItems.leadtimeNum,
                leadtimeUnit: _this.menuItems.leadtimeUnit
            }).then(function (data) {
                localStorage.removeItem('image');
                _this.spinnerService.hide();
                _this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
                _this.router.navigate(['/menu/manageItems']);
            });
        };
        if (localStorage.getItem('image') == null) {
            console.log('if');
            // console.log("this.ItemPrice"+ JSON.stringify());
            this.menuItemsdataRef.update({
                title: this.menuItems.title,
                description: this.menuItems.description,
                offerPercentage: this.menuItems.offerPercentage,
                offer: this.menuItems.offer,
                extraOptions: this.menuItems.extraOptions,
                price: this.ItemPrice,
                feature: this.menuItems.feature,
                available: this.menuItems.available,
                halal: this.menuItems.halal,
                noPork: this.menuItems.noPork,
                category: this.menuItems.category,
                vendorCode: this.menuItems.vendorCode,
                productCode: this.menuItems.productCode,
                leadtimeNum: this.menuItems.leadtimeNum,
                leadtimeUnit: this.menuItems.leadtimeUnit
            }).then(function (res) {
                console.log('edit successful');
                _this.spinnerService.hide();
                _this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
                _this.router.navigate(['/menu/manageItems']);
                console.log(_this.menuItems.category);
            });
        }
    };
    EditItemComponent.prototype.cancel = function () {
        console.log(this.menuItems.category);
        this.router.navigate(['/menu/manageItems']);
    };
    EditItemComponent.prototype.categoryCahnge = function () {
        console.log('category changed');
    };
    EditItemComponent.prototype.categoryChange = function () {
        console.log('vendor changed');
    };
    EditItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/menu-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Menu Items\n  <div class=\"pull-right\">\n            <label for=\"image-input\" class=\"file-upload\">\n              <a [routerLink]=\"'/menu/addItems'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Item</button> </a>  \n            </label>\n  </div>\n   <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Menu Items </small>\n </div>\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">Items Details</div>\n  <div class=\"table-responsive b0\">\n<table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th class=\"thsearch\">\n                Name\n                <form (keyup)=\"getMenuItems(siteName.value)\">\n                    <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                           id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                           placeholder=\"Search\" #siteName>\n                </form>\n            </th>\n            <th class=\"thnosearch\">\n                Price\n            </th>\n            <th class=\"thnosearch\">\n                Offers\n            </th>\n             <th class=\"thnosearch\">\n                Featured\n            </th>\n            <th class=\"thnosearch\">\n                Available\n            </th>\n            <th class=\"thnosearch\">\n                View\n            </th>\n            <th class=\"thnosearch\">\n                Edit\n            </th>\n            <th class=\"thnosearch\">\n                Delete\n            </th>\n\n\n            <th class=\"thnoitem\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of menuItems\">\n            <td>{{item.title}}</td>\n            <td>${{item.price[0].value}}</td>\n            <td>\n            <span class=\"label label-success\" *ngIf=\"item.offer==true\">Yes</span>\n            <span class=\"label label-warning\" *ngIf=\"!item.offer || item.offer==false \">No</span>\n           </td>\n           <td>\n            <span class=\"label label-success\" *ngIf=\"item.feature==true\">Yes</span>\n            <span class=\"label label-warning\" *ngIf=\"!item.feature || item.feature==false \">No</span>\n           </td>\n           <td>\n            <span class=\"label label-success\" *ngIf=\"item.available==true\">Yes</span>\n            <span class=\"label label-warning\" *ngIf=\"!item.available || item.available==false \">No</span>\n           </td>\n            <td>\n            <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"menuItemShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n            </td>\n            <td>\n               <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"menuItemEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button> \n            </td>\n            <td>\n               <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"menuItemDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button> \n            </td>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"5\" class=\"customPagination\">\n               <!--  <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n            </td>\n        </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/menu-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.customPagination {\n  padding-right: 15px !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customImage {\n  margin-right: -14px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 20%; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/menu-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var MenuItemsComponent = (function () {
    function MenuItemsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        var role = localStorage.getItem('role');
        //    console.log(x);
        if (role !== 'Admin') {
            this.menuItemsDataRef = af.list('/menuItems', function (ref) { return ref.orderByChild('vendorCode').equalTo(role); });
        }
        else {
            this.menuItemsDataRef = af.list('/menuItems');
        }
        //     this.menuItemsDataRef = af.list('/menuItems', ref => ref.orderByChild('vendorCode').equalTo(role));
        this.menuObservable = this.menuItemsDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.menuObservable.subscribe(function (res) {
            _this.menuItems = res;
            console.log(_this.menuItems);
        });
    }
    MenuItemsComponent.prototype.getMenuItems = function (ev) {
        var _this = this;
        var val = ev;
        this.menuObservable = this.af.list('/menuItems', function (ref) { return ref.orderByChild('title').startAt(val.charAt(0)
            .toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.menuObservable.subscribe(function (data) {
            _this.menuItems = data;
            //       console.log(this.menuItems);
        });
    };
    MenuItemsComponent.prototype.menuItemShow = function (key) {
        this.router.navigate(['/menu/viewItems', key]);
    };
    MenuItemsComponent.prototype.menuItemEdit = function (key) {
        this.router.navigate(['/menu/editItems', key]);
    };
    MenuItemsComponent.prototype.menuItemDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.menuItemsDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'Menu Item Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    MenuItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-items',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/menu-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/menu-items/menu-items.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], MenuItemsComponent);
    return MenuItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View Category\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/menu/manageItems']\"> Menu Items </a>->\r\n            View Menu Item\r\n </small>\r\n</div>\r\n<div class=\"col-masonry\">\r\n        <div class=\"panel b m0\">\r\n            <div class=\"panel-heading\">\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 text-center mb-lg\">\r\n                        <a>\r\n                            <img class=\"img-responsive img-thumbnail\" src=\"{{menuDetails.thumb}}\" alt=\"Image\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                    <div class=\"col-lg-3\">\r\n                        <h4 class=\"media-heading custom\">Name</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <h2><p>{{menuDetails.title}}</p></h2>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                    <div class=\"col-lg-3\">\r\n                        <h4 class=\"media-heading\">Description</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <p>{{menuDetails.description}}</p>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                    <div class=\"col-lg-3\">\r\n                        <h4 class=\"media-heading\">Category</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <p>{{menuDetails.categoryTitle}}</p>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  padding-top: 28px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewItemComponent = (function () {
    function ViewItemComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.menuDetails = {};
        var x = localStorage.getItem('role');
        console.log(x);
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.menuItemsdataRef = _this.af.object('/menuItems/' + Id);
                _this.menuItemObservable = _this.menuItemsdataRef.valueChanges();
                _this.menuItemObservable.subscribe(function (response) {
                    _this.menuDetails = response;
                    _this.categoryRef = _this.af.object('/categories/' + response.category);
                    _this.categoryObservable = _this.categoryRef.valueChanges();
                    _this.categoryObservable.subscribe(function (res) {
                        _this.menuDetails.categoryTitle = res.title;
                    });
                });
            }
        });
    }
    ViewItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-item',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewItemComponent);
    return ViewItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/add-news/add-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n    Add New News\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n           <a [routerLink]=\"['/news/manageNews']\"> Manage News </a>->\n            Add News\n    </small>\n</div>\n<div class=\"container-md\">\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n<div class=\"col-md-9\">\n                <div class=\"panel b\">\n                    <div class=\"panel-heading  text-bold bg-purple-dark\">Add News</div>\n                    <div class=\"panel-body\">\n                           <form (ngSubmit)=\"onSubmitNews(f)\" #f=\"ngForm\">\n                            <div class=\"form-group\">\n                                <label>Title*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\" [(ngModel)]=\"news.title\" />\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Author*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"author\" id=\"author\" [(ngModel)]=\"news.author\" />\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Category*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"category\" id=\"category\" [(ngModel)]=\"news.category\" />\n                            </div>\n                    \n                            <div class=\"form-group\">\n                                <label>Publish*</label>\n                            <input type=\"radio\" name=\"publish\" value=\"false\" [(ngModel)]=\"publish\"> <span class=\"myRadio\">No</span>\n                            <input type=\"radio\" name=\"publish\" value=\"true\" [(ngModel)]=\"publish\"> Yes\n                           </div>\n                           <div class=\"form-group\">\n                            <label>Send Notification*</label>\n                        <input type=\"radio\" name=\"notification\" value=\"false\" [(ngModel)]=\"notification\"> <span class=\"myRadio\">No</span>\n                        <input type=\"radio\" name=\"notification\" value=\"true\" [(ngModel)]=\"notification\"> Yes\n                       </div>\n                            <div class=\"form-group\">\n                                <label>Short Description*</label>\n                                <textarea class=\"form-control\" rows=\"2\" name=\"shortDescription\" id=\"shortDescription\" required \n                                [(ngModel)]=\"news.shortDescription\" ></textarea>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Description*</label>\n                                <textarea class=\"form-control\" rows=\"4\" name=\"description\" id=\"description\" [(ngModel)]=\"news.description\" required></textarea>\n                            </div>\n                            <div class=\"row form-group\">\n                              <div class=\"col-md-4\">\n                                <div class=\" fileUpload btn btn-primary choose-btn\">\n                                    <span> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> &nbsp; Upload</span>\n                                        <input type=\"file\" class=\"upload\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"readUrl($event)\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                               <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\" />\n                              </div><!--COL-->\n                            </div>\n\n                          <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                          <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Add News</button>\n                            <p>\n                                <small class=\"text-muted\">* Required Fields</small>\n                            </p>\n                        </form>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/add-news/add-news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.myRadio {\n  padding-right: 20px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px;\n  margin: 0px; }\n\n.s-n-btn {\n  margin-left: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/add-news/add-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddNewsComponent = (function () {
    function AddNewsComponent(af, router, toastr, newsService, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.newsService = newsService;
        this.spinnerService = spinnerService;
        this.url = '';
        this.news = {
            title: '',
            category: '',
            author: '',
            shortDescription: '',
            description: '',
            createdAt: Date.now(),
            publish: true
            //   notification: false
        };
        this.publish = 'true';
        this.notification = 'false';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_6__firebase_config__["a" /* cloudinarUpload */]));
        this.newsDataRef = af.list('/news');
        // Override onSuccessItem to retrieve the imageId
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
    }
    // Image Preview
    AddNewsComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Submit function
    AddNewsComponent.prototype.onSubmitNews = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.publish === 'true') {
            this.news.publish = true;
        }
        if (this.publish === 'false') {
            this.news.publish = false;
        }
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.news.thumb = res.url;
            _this.newsDataRef.push(_this.news).then(function (data) {
                _this.toastr.success('News Data Added Successfully!', 'Success!');
                _this.sendNotification(res.key);
                _this.spinnerService.hide();
                _this.router.navigate(['/news/manageNews']);
            });
        };
    };
    AddNewsComponent.prototype.cancel = function () {
        this.router.navigate(['/news/manageNews']);
    };
    AddNewsComponent.prototype.sendNotification = function (key) {
        if (this.notification === 'true' && this.news.publish) {
            //   this.ordersDataRef.update(key,{status:event.target.value,orderView:true}).then((res)=>{
            var message = {
                //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
                app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
                contents: { 'en': this.news.shortDescription },
                data: { 'key': key, 'page': 'NewsDetailPage' },
                included_segments: ['All']
            };
            //      this.af.list('/orders/'+key+'/statusReading').push({title:event.target.value, time:Date.now()})
            this.newsService.sendNotification(message).subscribe(function (response) {
            });
            //       this.toastr.success('Order status updated!', 'Success!');
            //     });
            // }
        }
    };
    AddNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-news',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/news/add-news/add-news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/news/add-news/add-news.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddNewsComponent);
    return AddNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n    Update News\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n           <a [routerLink]=\"['/categories/manageNews']\"> Manage News </a>->\n            Update News\n    </small>\n</div>\n<div class=\"container-md\">\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n<div class=\"col-md-9\">\n                <div class=\"panel b\">\n                    <div class=\"panel-heading  text-bold bg-purple-dark\">Update News</div>\n                    <div class=\"panel-body\">\n                       <form (ngSubmit)=\"onSubmitNews(f)\" #f=\"ngForm\">\n                            <div class=\"form-group\">\n                                <label>Title*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\" [(ngModel)]=\"newsDetails.title\" />\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Author*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"author\" id=\"author\" [(ngModel)]=\"newsDetails.author\" />\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Category*</label>\n                                <input class=\"form-control\" type=\"text\" required name=\"category\" id=\"category\" [(ngModel)]=\"newsDetails.category\" />\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Publish*</label>\n                                <input type=\"radio\" name=\"publish\" value=\"false\" [(ngModel)]=\"publish\"> <span class=\"myRadio\">No</span>\n                               <input type=\"radio\" name=\"publish\" value=\"true\" [(ngModel)]=\"publish\"> Yes\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Short Description*</label>\n                                <textarea class=\"form-control\" rows=\"2\" name=\"shortDescription\" id=\"shortDescription\" required [(ngModel)]=\"newsDetails.shortDescription\" ></textarea>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Description*</label>\n                                <textarea class=\"form-control\" rows=\"4\" name=\"description\" id=\"description\" [(ngModel)]=\"newsDetails.description\" required></textarea>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Thumb</label>\n                                <label for=\"image-input\" class=\"file-upload\">\n                                   <div class=\"col-md-6\" [hidden]=\"url !=''\">\n                                   <img class=\" img-responsive img-thumbnail\" src=\"{{newsDetails.thumb}}\"alt=\"Image\" height=\"70px\"/>\n                                 </div>\n                                  <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                                   <img class=\" img-responsive img-thumbnail\" [src]=\"url\" alt=\"Image\" height=\"70px\"/>\n                                 </div>\n                                  <div class=\"col-md-6\">\n                                    <div class=\"fileUpload btn btn-primary choose-btn pull-right\"><em class=\"fa fa-upload mr\"></em> Choose File</div>\n                                    <input id=\"image-input\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"readUrl($event)\">\n                                  </div>\n                                </label>\n                            </div>\n                              <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                               <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Update News</button>\n\n                            <p>\n                                <small class=\"text-muted\">* Required Fields</small>\n                            </p>\n                        </form>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n-btn {\n  margin-right: 1.3em; }\n\n.myRadio {\n  padding-right: 20px; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditNewsComponent = (function () {
    function EditNewsComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.url = '';
        this.newsDetails = {
            title: '',
            shortDescription: '',
            description: '',
        };
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.newsdataRef = _this.af.object('/news/' + Id);
                _this.newsObservable = _this.newsdataRef.valueChanges();
                _this.newsObservable.subscribe(function (response) {
                    _this.newsDetails = response;
                    console.log(_this.newsDetails);
                    if (_this.newsDetails.publish) {
                        _this.publish = 'true';
                    }
                    else {
                        _this.publish = 'false';
                    }
                });
            }
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.url = _this.uploader.options.url;
            console.log('image is going');
            localStorage.setItem('image', 'image Is going');
            return item;
        };
    }
    // Image Preview
    EditNewsComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Submit function
    EditNewsComponent.prototype.onSubmitNews = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.publish === 'true') {
            this.newsDetails.publish = true;
        }
        if (this.publish === 'false') {
            console.log('is false');
            this.newsDetails.publish = false;
        }
        this.uploader.uploadAll();
        console.log('statement');
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log(_this.newsDetails.publish);
            _this.newsdataRef.update({
                title: _this.newsDetails.title,
                description: _this.newsDetails.description,
                shortDescription: _this.newsDetails.shortDescription,
                thumb: res.url,
                author: _this.newsDetails.author,
                publish: _this.newsDetails.publish,
                category: _this.newsDetails.category
            }).then(function (data) {
                _this.spinnerService.hide();
                localStorage.removeItem('image');
                _this.router.navigate(['/news/manageNews']);
                _this.toastr.success('news Data Updated Successfully!', 'Success!');
            });
        };
        if (localStorage.getItem('image') == null) {
            this.newsdataRef.update({
                title: this.newsDetails.title,
                description: this.newsDetails.description,
                shortDescription: this.newsDetails.shortDescription,
                author: this.newsDetails.author,
                publish: this.newsDetails.publish,
                category: this.newsDetails.category
            }).then(function (res) {
                _this.spinnerService.hide();
                _this.router.navigate(['/news/manageNews']);
                _this.toastr.success('news Data Updated Successfully!', 'Success!');
            });
        }
    };
    EditNewsComponent.prototype.cancel = function () {
        this.router.navigate(['/news/manageNews']);
    };
    EditNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-news',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditNewsComponent);
    return EditNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">News\n<div class=\"pull-right\">\n            <label for=\"image-input\" class=\"file-upload\">\n              <a [routerLink]=\"'/news/addNews'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New News</button> </a>  \n            </label>\n </div>\n<small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> News</small>\n</div>\n\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">News Details</div>\n  <div class=\"table-responsive b0 customTable\">\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th class=\"thsearch text-center\">\n                Title\n                <form (keyup)=\"getnews(siteName.value)\">\n                    <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                           id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                           placeholder=\"Search\" #siteName>\n                </form>\n            </th>\n            <th class=\"thnosearch text-center\">\n                Publish\n            </th>\n             <th class=\"thnosearch text-center\">\n                Edit\n            </th>\n            <th class=\"thnosearch text-center\">\n                Delete\n            </th>\n            <th class=\"thnosearch text-center\">\n                View\n            </th>\n            \n\n            <th class=\"thnoitem\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\"text-center\" *ngFor=\"let item of news\">\n            <td>{{item.title}}</td>\n\n             \n            <td>\n                <span class=\"label label-success\" *ngIf=\"item.publish==true\">Yes</span>\n            <span class=\"label label-warning\" *ngIf=\"!item.publish || item.publish==false \">No</span>\n                </td>\n            <td>\n             <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"newsEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button>\n             </td>\n             <td>\n               <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"newsDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button>\n            </td>\n            <td>\n             <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"newsShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n            </td>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"5\" class=\"customPagination\">\n               <!--  <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n            </td>\n        </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customTable {\n  margin-right: -135px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.customPagination {\n  padding-right: 150px !important; }\n\n.thsearch {\n  width: 20%; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var NewsComponent = (function () {
    function NewsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.newsDataRef = af.list('/news');
        this.newsObservable = this.newsDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.newsObservable.subscribe(function (res) {
            _this.news = res;
        });
    }
    NewsComponent.prototype.getnews = function (ev) {
        var _this = this;
        var val = ev;
        this.newsObservable = this.af.list('/news', function (ref) { return ref.orderByChild('title').startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.newsObservable.subscribe(function (data) {
            _this.news = data;
        });
    };
    NewsComponent.prototype.newsShow = function (key) {
        this.router.navigate(['/news/viewNews', key]);
    };
    NewsComponent.prototype.newsEdit = function (key) {
        this.router.navigate(['/news/editNews', key]);
    };
    NewsComponent.prototype.menuItemEdit = function (key) {
        this.router.navigate(['/menu/editItems', key]);
    };
    NewsComponent.prototype.newsDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.newsDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'News Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.url = 'https://onesignal.com/api/v1/notifications';
    }
    NewsService.prototype.sendNotification = function (message) {
        var body = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // copy your Rest api key below ;
        headers.append('Authorization', 'Basic Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
        return this.http.post(this.url, body, {
            headers: headers
        }).map(function (data) { return data.json(); });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/view-news/view-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View News\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n        <a [routerLink]=\"['/news/manageNews']\"> Manage News </a>->\n            View News \n </small>\n </div>\n<div class=\"col-masonry\">\n        <div class=\"panel b m0\">\n            <div class=\"panel-heading\">\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 text-center mb-lg\">\n                        <a>\n                            <img class=\"img-thumbnail custom-img\" src=\"{{newsDetails.thumb}}\" alt=\"Image\" />\n                        </a>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div class=\"col-lg-3\">\n                            <h4 class=\"media-heading\">Title</h4>\n                        </div>\n                        <div class=\"col-lg-5\">\n                            <p>{{newsDetails.title}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div class=\"col-lg-3\">\n                            <h4 class=\"media-heading\">Author</h4>\n                        </div>\n                        <div class=\"col-lg-5\" *ngIf=\"newsDetails.author!='' \" >\n                            <p>{{newsDetails.author}}</p>\n                        </div>\n                        <div class=\"col-lg-5\" *ngIf=\"!newsDetails.author \" >\n                            <p>Admin</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div class=\"col-lg-3\">\n                            <h4 class=\"media-heading\">Category</h4>\n                        </div>\n                        <div class=\"col-lg-5\">\n                            <p>{{newsDetails.category}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div class=\"col-lg-3\">\n                            <h4 class=\"media-heading\">Description</h4>\n                        </div>\n                        <div class=\"col-lg-5\">\n                            <p>{{newsDetails.description}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/view-news/view-news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-img {\n  height: 25em;\n  width: 21em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/news/view-news/view-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewNewsComponent = (function () {
    function ViewNewsComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.newsDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            console.log("id" + JSON.stringify(Id));
            if (Id != null) {
                _this.newsdataRef = _this.af.object('/news/' + Id);
                _this.newsObservable = _this.newsdataRef.valueChanges();
                _this.newsObservable.subscribe(function (response) {
                    _this.newsDetails = response;
                    //console.log("details "+JSON.stringify(this.newsDetails));      
                });
            }
        });
    }
    ViewNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-news',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/news/view-news/view-news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/news/view-news/view-news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewNewsComponent);
    return ViewNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"content-heading\">\n   <button class=\"btn btn-primary pull-right\" type=\"button\">\n      <em class=\"fa fa-plus-circle fa-fw mr-sm\"></em>New Invoice</button>Invoice\n</div> -->\n<div class=\"waiting-loader\" *ngIf=\"loading\">\n    <i class=\"fa fa-5x fa-spin fa-spinner\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"panel\" *ngIf=\"!loading\">\n    <div class=\"panel-body\">\n        <!-- <button class=\"pull-right btn btn-default btn-sm\" type=\"button\">Copy this invoice</button> -->\n        <h3 class=\"mt0\">Invoice {{orderDetails.orderId}}</h3>\n        <hr/>\n        <div class=\"row mb-lg\">\n            <div class=\"col-lg-4 col-xs-6 br pv\">\n                <div class=\"row\">\n                    <div class=\"col-md-2 text-center visible-md visible-lg\">\n                        <em class=\"fa fa-user fa-4x text-muted\"></em>\n                    </div>\n                    <div class=\"col-md-10\">\n\t                    <div class=\"form-group\">\n\t                        <div class=\"col-sm-4\">Name:</div>\n\t                        <div class=\"col-sm-8\">\n\t                            <strong>{{userDetails.name}}</strong>\n\t                        </div>\n\t                    </div>\n\t                    <div class=\"form-group\">\n\t                        <div class=\"col-sm-4\">Email:</div>\n\t                        <div class=\"col-sm-8\">\n\t                            <strong>{{userDetails.email}}</strong>\n\t                        </div>\n\t                    </div>\n\t                    <div class=\"form-group\">\n\t                        <div class=\"col-sm-4\">Phone:</div>\n\t                        <div class=\"col-sm-8\">\n\t                            <strong>{{userDetails.mobileNo}}</strong>\n\t                        </div>\n\t                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-xs-6 br pv\" *ngIf=\"pickUp\">\n                <div class=\"row\">\n                    <div class=\"col-md-2 text-center visible-md visible-lg\">\n                        <em class=\"fa fa-truck fa-4x text-muted\"></em>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Shop Name</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Address:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.address}}</strong>\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <div class=\"col-sm-4\">City:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.city}}</strong>\n                        </div>\n                    </div> -->\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">ZIP/Post</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.zipcode}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.phone}}</strong>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-xs-6 br pv\" *ngIf=\"delivery\">\n                <div class=\"row\">\n                    <div class=\"col-md-2 text-center visible-md visible-lg\">\n                        <em class=\"fa fa-truck fa-4x text-muted\"></em>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Full Name</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Address:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.address}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">City:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.city}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">ZIP/Post</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.pincode}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.mobileNo}}</strong>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix hidden-md hidden-lg\">\n                <hr/>\n            </div>\n            <div class=\"col-lg-4 col-xs-12 pv\">\n                <div class=\"clearfix\">\n                    <p class=\"pull-left\">INVOICE NO.</p>\n                    <p class=\"pull-right mr\">{{orderDetails.orderId}}</p>\n                </div>\n                <div class=\"clearfix\">\n                    <p class=\"pull-left\">Date</p>\n                    <p class=\"pull-right mr\">{{orderDetails.createdAt|date}}</p>\n                </div>\n                <div class=\"clearfix\">\n                    <p class=\"pull-left\">Status</p>\n                    <p class=\"pull-right mr\">{{orderDetails.status}}</p>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n                <p class=\"lead bb\">Payment Details</p>\n                <form class=\"form-horizontal p-20\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Total :</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.subTotal}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Discount/Coupon:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.deductedPrice}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-2\">Tax:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.tax}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Pay Amount:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.grandTotal}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-5\">Payment Status:</div>\n                        <div class=\"col-sm-7\">\n                            <span class=\"label label-success\" *ngIf=\"orderDetails.paymentStatus =='success'\">{{orderDetails.paymentStatus}}\n                            </span>\n                             <span class=\"label label-warning\" *ngIf=\"orderDetails.paymentStatus =='pending'\">{{orderDetails.paymentStatus}}\n                             </span>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Payment Type:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{orderDetails.paymentType}}</strong>\n                        </div>\n                    </div>\n                    </div>\n                </form>\n            </div>\n         </div> -->\n        <div class=\"table-responsive table-bordered mb-lg\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Item #</th>\n                        <th>Description</th>\n                        <th>Quantity</th>\n                        <th>Unit Price</th>\n                        <th class=\"text-right\">Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let data of orderDetails.cart; let i=index \">\n                    <td class=\"\">{{i+1}}</td>\n                    <td class=\"\"> {{data.item.title}}</td>\n                    <td class=\"\">{{data.item.price.value}}</td>\n                    <td class=\"\">{{data.item.itemQunatity}}</td>\n                    <td class=\"text-center\">{{data.itemTotalPrice|number}}</td>\n                </tr>\n                <tr>\n                     <td colspan=\"3\"></td>\n                     <td class=\"text-right\"><strong>Total :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.subTotal|number}}</td>\n                  </tr>\n                  <tr>\n                     <td colspan=\"3\"></td>\n                     <td class=\"text-right\"><strong>Coupon Applied :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.deductedPrice|number}}</td>\n                  </tr>\n                  <tr>\n                     <td colspan=\"3\"></td>\n                     <td class=\"text-right\"><strong>Tax :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.tax|number}}</td>\n                  </tr>  \n                  <tr>\n                     <td colspan=\"3\"></td>\n                     <td class=\"text-right\"><strong>Grand Total :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.grandTotal|number}}</td>\n                  </tr> \n            </tbody>\n            </table>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-sm-offset-8 col-sm-4 pv\">\n                <div class=\"clearfix\">\n                    <p class=\"pull-left\">Subtotal</p>\n                    <p class=\"pull-right mr\">$ 10300</p>\n                </div>\n                <div class=\"clearfix\">\n                    <p class=\"pull-left\">Tax (21%)</p>\n                    <p class=\"pull-right mr\">$ 2700</p>\n                </div>\n                <div class=\"clearfix\">\n                    <p class=\"pull-left h3\">GRAND TOTAL</p>\n                    <p class=\"pull-right mr h3\">$ 13000</p>\n                </div>\n            </div>\n        </div> -->\n        <hr class=\"hidden-print\" />\n        <div class=\"clearfix\">\n            <button class=\"btn btn-info pull-left mr\" (click)=\"back()\" type=\"button\">Back\n            </button>\n            <button class=\"btn btn-success pull-left\" type=\"button\" onclick=\"window.print();\">Print</button>\n            <!-- <button class=\"btn btn-success pull-right\" type=\"button\">Send Invoice</button> -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".waiting-loader {\n  margin-left: 38em;\n  margin-top: 20em;\n  color: #52ab8b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceComponent = (function () {
    function InvoiceComponent(route, router, af, toastr) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.userDetails = {};
        this.orderDetails = {};
        this.loading = true;
        this.delivery = false;
        this.pickUp = false;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.ordersdataRef = _this.af.object('/orders/' + Id);
                _this.orderId = Id;
                _this.orderObservable = _this.ordersdataRef.valueChanges();
                _this.orderObservable.subscribe(function (response) {
                    _this.orderDetails = response;
                    _this.userDetails = response.userDetails;
                    if (response.deliveryOption === 'delivery') {
                        _this.address = response.shippingAddress;
                        _this.delivery = true;
                    }
                    else {
                        _this.address = response.pickUpAddress;
                        _this.pickUp = true;
                    }
                    _this.loading = false;
                });
            }
        });
    }
    InvoiceComponent.prototype.back = function () {
        this.router.navigate(['/order/viewOrder', this.orderId]);
    };
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Orders\n<small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Oders</small>\n</div>\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">Orders Details</div>\n  <div class=\"table-responsive b0\">\n    <table class=\"table table-hover\" *ngIf=\"role === 'Admin'\">\n        <thead>\n            <tr>\n                <th class=\"text-center\">\n                    <strong>#</strong>\n                </th>\n            <th class=\"text-center\">\n                    <strong>Order Id</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Payment Status</strong>\n                </th>\n            <!-- <th class=\"text-center\">\n                    <strong>Name</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Email</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Mobile Number</strong>\n                </th> -->\n                <th class=\"text-center\">\n                    <strong>Order status</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Delivery Method</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Total</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>ORDER ACTION</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>PAYMENT ACTION</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>View</strong>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"text-center\" *ngFor=\"let order of orders;let i = index \">\n                <td>{{i+1}}</td>\n                <td>{{order.orderId}}</td>\n                <!-- <td>{{order.userDetails.name}}</td>\n                <td>{{order.userDetails.email}}</td>\n                <td>{{order.userDetails.mobileNo}}</td> -->\n                <td class=\"text-center\">\n                    <span class=\"label label-warning\" *ngIf=\"order.paymentStatus=='Pending'\">{{order.paymentStatus}}\n                    </span>\n                    <span class=\"label label-success\" *ngIf=\"order.paymentStatus=='Success'\">{{order.paymentStatus}}\n                    </span>\n                </td>\n                <td class=\"text-center\">\n                    <span class=\"label label-success\" *ngIf=\"order.status=='Delivered'\">{{order.status}}\n                    </span>\n                    <span class=\"label label-process\" *ngIf=\"order.status=='Processing'\">{{order.status}}\n                    </span>\n                    <span class=\"label label-warning\" *ngIf=\"order.status =='Pending'\">{{order.status}}</span>\n                    <span class=\"label label-purple\" *ngIf=\"order.status=='On the way'\">{{order.status}}\n                    </span>\n                    <span class=\"label label-danger\" *ngIf=\"order.status=='Canceled'\">{{order.status}}</span>\n                </td>\n                <td>{{order.deliveryOption}}</td>\n                <td>${{order.grandTotal |number:'1.2'}}</td>\n                <td class=\"text-center\">\n                    <select class=\"input-sm form-control\" (change)=\"OnChangeStatus(order.key,$event,order.userId,order.orderId)\" [disabled]=\"order.status=='Delivered'\">\n                        <option>Select Status</option>\n                        <option value=\"Pending\">Pending</option>\n                        <option value=\"Processing\">Processing</option>\n                        <option value=\"On the way\">On the Way</option>\n                        <option value=\"Ready for pickup\">Ready for pickup</option>\n                        <option value=\"Canceled\">Canceled</option>\n                        <option value=\"Delivered\">Delivered</option>\n                    </select>\n                </td>\n                <td class=\"text-center\">\n                    <select class=\"input-sm form-control\" (change)=\"OnPaymentChangeStatus(order.key,$event,order.userId,order.orderId)\" [disabled]=\"order.paymentStatus=='success'\">\n                        <option>Select Status</option>\n                        <option value=\"Pending\">Pending</option>\n                        <option value=\"Success\">Payment Done</option>\n                    </select>\n                </td>\n                <td class=\"text-center\">\n                    <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"ordersShow(order.key)\">\n                        <em class=\"fa fa-search\"></em>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     \n    <!-- For Vendor view -->\n    <table class=\"table table-hover\" *ngIf=\"role !== 'Admin'\">\n        <thead>\n            <tr>\n                <th class=\"text-center\">\n                    <strong>#</strong>\n                </th>\n            <th class=\"text-center\">\n                    <strong>Order Id</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Item Name</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Item Code</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Delivery Method</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>Date</strong>\n                </th>\n                <!-- <th class=\"text-center\">\n                    <strong>ORDER ACTION</strong>\n                </th>\n                <th class=\"text-center\">\n                    <strong>PAYMENT ACTION</strong>\n                </th> -->\n                <th class=\"text-center\">\n                    <strong>View</strong>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"text-center\" *ngFor=\"let order of vendorItems;let i = index \">\n                <td>{{i+1}}</td>\n                <td>{{order.orderId}}</td>\n                <!-- <td>{{order.userDetails.name}}</td>\n                <td>{{order.userDetails.email}}</td>\n                <td>{{order.userDetails.mobileNo}}</td> -->\n                <td class=\"text-center\">\n                   {{order.item.title}}\n                </td>\n                <td class=\"text-center\">\n                   {{order.productCode}}\n                </td>\n                <td>{{order.deliveryOption}}</td>\n                <td>{{order.createdAt | date:'dd MMM yyyy' }}</td>\n                <!-- <td>${{order.grandTotal |number:'1.2'}}</td>\n                <td class=\"text-center\">\n                    <select class=\"input-sm form-control\" (change)=\"OnChangeStatus(order.key,$event,order.userId,order.orderId)\" [disabled]=\"order.status=='Delivered'\">\n                        <option>Select Status</option>\n                        <option value=\"Pending\">Pending</option>\n                        <option value=\"Processing\">Processing</option>\n                        <option value=\"On the way\">On the Way</option>\n                        <option value=\"Ready for pickup\">Ready for pickup</option>\n                        <option value=\"Canceled\">Canceled</option>\n                        <option value=\"Delivered\">Delivered</option>\n                    </select>\n                </td>\n                <td class=\"text-center\">\n                    <select class=\"input-sm form-control\" (change)=\"OnPaymentChangeStatus(order.key,$event,order.userId,order.orderId)\" [disabled]=\"order.paymentStatus=='success'\">\n                        <option>Select Status</option>\n                        <option value=\"Pending\">Pending</option>\n                        <option value=\"Success\">Payment Done</option>\n                    </select>\n                </td> -->\n                <td class=\"text-center\">\n                    <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"itemShow(order.key, i)\">\n                        <em class=\"fa fa-search\"></em>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label-process {\n  background-color: #002fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = (function () {
    function OrdersComponent(af, toastr, router, ordersService, spinnerService) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.router = router;
        this.ordersService = ordersService;
        this.spinnerService = spinnerService;
        this.updatedOnce = false;
        this.loylityPercentage = 0;
        this.cartItems = [{}];
        this.vendorItems = [];
        this.loyaltyStatus = false;
        this.minLoyalityPointes = 0;
        this.orderData = {};
        this.userData = {};
        this.role = localStorage.getItem('role');
        this.ordersDataRef = af.list('/orders');
        this.orderObservable = this.ordersDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.orderObservable.subscribe(function (res) {
            _this.orders = res.reverse();
            if (_this.role !== 'Admin') {
                _this.getVendorItems();
            }
        });
        // loality points
        this.loyalityData = af.object('/loyalitys');
        this.loyalityData.valueChanges().subscribe(function (res) {
            if (res != null) {
                _this.loyaltyStatus = res.enable;
                _this.loylityPercentage = res.loylityPercentage;
            }
        });
    }
    OrdersComponent.prototype.getVendorItems = function () {
        this.vendorItems = [];
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            for (var _b = 0, _c = order.cart; _b < _c.length; _b++) {
                var orderItem = _c[_b];
                if (orderItem.vendorCode === this.role) {
                    orderItem.orderId = order.orderId;
                    orderItem.createdAt = order.createdAt;
                    orderItem.deliveryOption = order.deliveryOption;
                    orderItem.key = order.key;
                    this.vendorItems.push(orderItem);
                }
            }
        }
        console.log(this.vendorItems);
    };
    OrdersComponent.prototype.OnPaymentChangeStatus = function (key, event, userId, orderId) {
        var _this = this;
        this.spinnerService.show();
        if (event.target.value === 'success') {
            this.displayMessage = "Your order " + orderId + " payment has been received. Thank you.";
        }
        this.orderObjRef = this.af.object('/orders/' + key);
        this.userObjRef = this.af.object('/users/' + userId);
        var x = this.userObjRef.valueChanges().subscribe(function (res) {
            _this.playerId = res.playerId;
            x.unsubscribe();
            _this.updatePaymentStatus(key, event);
        });
    };
    OrdersComponent.prototype.OnChangeStatus = function (key, event, userId, orderId) {
        var _this = this;
        this.spinnerService.show();
        if (event.target.value === 'Pending') {
            this.displayMessage = "Your order " + orderId + " is under pending";
        }
        if (event.target.value === 'Processing') {
            this.displayMessage = "Your order " + orderId + " is now in progress";
        }
        if (event.target.value === 'On the way') {
            this.displayMessage = "Your order " + orderId + " is now on the way to you";
        }
        if (event.target.value === 'Ready for pickup') {
            this.displayMessage = "Your order " + orderId + " is ready for pickup";
        }
        if (event.target.value === 'Canceled') {
            this.displayMessage = "Your order " + orderId + " has been canceled";
        }
        if (event.target.value === 'Delivered') {
            this.displayMessage = "Your order " + orderId + " has been delivered. Thank you for your purchase";
        }
        this.orderObjRef = this.af.object('/orders/' + key);
        this.userObjRef = this.af.object('/users/' + userId);
        var x = this.userObjRef.valueChanges().subscribe(function (res) {
            _this.playerId = res.playerId;
            x.unsubscribe();
            if (event.target.value === 'Delivered' && _this.loyaltyStatus) {
                var data_1 = _this.orderObjRef.valueChanges().subscribe(function (resp) {
                    _this.orderData = resp;
                    var userPoint;
                    userPoint = Math.floor((_this.orderData.grandTotal * _this.loylityPercentage) / 100);
                    data_1.unsubscribe();
                    var loayltyObj = {
                        credit: true,
                        points: userPoint,
                        orderId: key,
                        createdAt: Date.now()
                    };
                    _this.af.list('users/' + userId + '/loyaltyPoints').push(loayltyObj);
                    _this.af.list('/orders/' + key + '/loyaltyPoints').push(loayltyObj);
                    _this.updateLoyaltyStatus(event, key);
                    //        if(this.orderData.loyaltyPoints == null){
                    //          let loylityPoints:any [] = [];
                    //          //console.log("lo loyaltyPoints");
                    //          this.orderData.loyaltyPoints = loylityPoints;
                    //          //console.log("now order "+JSON.stringify(this.orderData));
                    //        }
                    //        let addPoint:number;
                    //        addPoint = Math.floor((this.orderData.grandTotal * this.loylityPercentage)/100);
                    //        this.orderData.loyaltyPoints.push({
                    //          credit:true,
                    //          points: addPoint,
                    //          orderId: key,
                    //          createdAt:Date.now()
                });
                //    let user =   this.userObjRef.valueChanges().subscribe((res) => {
                //      this.userData = res;
                //      //console.log("userData is before"+JSON.stringify(this.userData));
                // if(this.userData.loyaltyPoints == null){
                //   let loylityPoints:any [] = [];
                //   //console.log("lo loyaltyPoints");
                //   this.userData.loyaltyPoints = loylityPoints;
                //   //console.log("now userData "+JSON.stringify(this.userData));
                // }
                // user.unsubscribe();
                // });
            } // if outer closed
            else {
                _this.updateStatus(key, event);
            }
        });
    };
    OrdersComponent.prototype.updateLoyaltyStatus = function (event, key) {
        var _this = this;
        // if(this.updatedOnce == false){
        this.orderObjRef.update({
            status: event.target.value,
            orderView: true
        }).then(function (res) {
            var message = {
                app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
                contents: { 'en': _this.displayMessage },
                include_player_ids: [_this.playerId]
            };
            _this.af.list('/orders/' + key + '/statusReading').push({ title: event.target.value, time: Date.now() });
            _this.ordersService.sendNotification(message).subscribe(function (response) {
            });
            _this.spinnerService.hide();
            _this.toastr.success('Order status updated!', 'Success!');
        });
        // this.updatedOnce = true;
        // }
    };
    OrdersComponent.prototype.updateStatus = function (key, event) {
        var _this = this;
        this.cartObjRef = this.af.list('/orders/' + key + '/cart');
        var x = this.cartObjRef.snapshotChanges().subscribe(function (data) {
            console.log(data);
            _this.cartItems = [];
            data.forEach(function (item) {
                var temp = item.payload.val();
                temp['$key'] = item.payload.key;
                _this.cartItems.push(temp);
            });
            x.unsubscribe();
            console.log(_this.cartItems);
            //   let cartItemRef = this.af.object('/orders/' + key + '/cart/' + i);
            for (var i = 0; i < _this.cartItems.length; i++) {
                //          item.itemStatus = event.target.value;
                var cartItemRef = _this.af.object('/orders/' + key + '/cart/' + i);
                cartItemRef.update({
                    itemStatus: event.target.value
                });
            }
        });
        this.ordersDataRef.update(key, { status: event.target.value, orderView: true }).then(function (res) {
            var message = {
                //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
                app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
                contents: { 'en': _this.displayMessage },
                data: { 'key': key, 'page': 'OrderStatusPage' },
                include_player_ids: [_this.playerId]
            };
            _this.af.list('/orders/' + key + '/statusReading').push({ title: event.target.value, time: Date.now() });
            _this.ordersService.sendNotification(message).subscribe(function (response) {
            });
            _this.spinnerService.hide();
            _this.toastr.success('Order status updated!', 'Success!');
        });
        // }
    };
    OrdersComponent.prototype.updatePaymentStatus = function (key, event) {
        var _this = this;
        this.ordersDataRef.update(key, { paymentStatus: event.target.value, orderView: true }).then(function (res) {
            var message = {
                //   app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
                app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
                contents: { 'en': _this.displayMessage },
                data: { 'key': key, 'page': 'thankyou' },
                include_player_ids: [_this.playerId]
            };
            _this.af.list('/orders/' + key + '/statusReading').push({ title: event.target.value, time: Date.now() });
            _this.ordersService.sendNotification(message).subscribe(function (response) {
            });
            _this.spinnerService.hide();
            _this.toastr.success('Order status updated!', 'Success!');
        });
        // }
    };
    OrdersComponent.prototype.ordersShow = function (key) {
        var _this = this;
        this.spinnerService.show();
        this.ordersDataRef.update(key, { orderView: true }).then(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['/order/viewOrder', key]);
        });
    };
    OrdersComponent.prototype.itemShow = function (key, i) {
        var _this = this;
        this.spinnerService.show();
        this.ordersDataRef.update(key, { orderView: true }).then(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['/order/viewOrder', key], { queryParams: { cartIndex: i } });
        });
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__orders_service__["a" /* OrdersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
    }
    OrdersService.prototype.sendNotification = function (message) {
        var body = JSON.stringify(message);
        console.log('message======' + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //   headers.append('Authorization', 'Basic NDRhYTJhM2UtZDRmYi00N2ZhLTlhODItYzhmMWJlYmMyNjMx');
        headers.append('Authorization', 'Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post('https://onesignal.com/api/v1/notifications', body, {
            headers: headers
        })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    OrdersService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json());
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/view-order/date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateService = (function () {
    function DateService() {
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    DateService.prototype.getDate = function (num) {
        if (num === 0) {
            var y = new Date().getFullYear();
            var m = new Date().getMonth();
            var M = this.months[m];
            var d = new Date().getDate();
        }
        else {
            var y = new Date(num).getFullYear();
            var m = new Date(num).getMonth();
            var M = this.months[m];
            var d = new Date(num).getDate();
        }
        return d + " " + M + " " + y;
    };
    DateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Orders\n<div class=\"pull-right\">\n    <label for=\"image-input\" class=\"file-upload\" *ngIf=\"role === 'Admin'\">\n      <a><button class=\"btn btn-warning\" (click)=\"generateInvoice()\"><em class=\"fa fa-print\"></em>&nbsp;&nbsp;Print Invoice</button> </a>  \n    </label>\n    <label for=\"image-input\" class=\"file-upload\">\n        <a><button class=\"btn btn-warning\" (click)=\"createPDF()\"><em class=\"fa fa-print\"></em>&nbsp;&nbsp;Print Production Order</button> </a>  \n      </label>\n </div>\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n        <a [routerLink]=\"['/order/allOrder']\"> Orders </a>->\n            Order Detail\n </small>\n</div>\n<div *ngIf=\"orderDetails.cart && role === 'Admin'\">\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Order Information</div>\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <p class=\"lead bb\">Details</p>\n                <form class=\"form-horizontal p-20\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Purchased On:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{orderDetails.createdAt | date:'medium'}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Order Id:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{orderDetails.orderId}}</strong>\n                            </div>\n                        </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Client Name:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{userDetails.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Items:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{orderDetails.cart.length}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Amount:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.grandTotal}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Status</div>\n                        <div class=\"col-sm-8\">\n                     <span class=\"label label-success\" *ngIf=\"orderDetails.status=='Delivered'\">{{orderDetails.status}}\n                    </span>\n                    <span class=\"label label-process\" *ngIf=\"orderDetails.status=='processing'\">{{orderDetails.status}}\n                    </span>\n                    <span class=\"label label-warning\" *ngIf=\"orderDetails.status =='pending'\">{{orderDetails.status}}</span>\n                    <span class=\"label label-purple\" *ngIf=\"orderDetails.status=='On the Way'\">{{orderDetails.status}}\n                    </span>\n                    <span class=\"label label-danger\" *ngIf=\"orderDetails.status=='Canceled'\">{{orderDetails.status}}</span>\n                    </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-6\">\n                <p class=\"lead bb\">Client</p>\n                <form class=\"form-horizontal p-20\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Name:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{userDetails.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Email:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{userDetails.email}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{userDetails.mobileNo}}</strong>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"pickUp\">\n            <div class=\"col-md-6\">\n                <p class=\"lead bb\">Pick-Up Address</p>\n                <form class=\"form-horizontal p-20\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Shop Name</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Address:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.address}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">City:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.city}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">ZIP/Post Code</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.zipcode}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.phone}}</strong>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"delivery\">\n            <div class=\"col-md-6\">\n                <p class=\"lead bb\">Billing Address</p>\n                <form class=\"form-horizontal p-20\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Full Name</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Address:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.address}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">City:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.city}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">ZIP/Post Code</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.pincode}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.mobileNo}}</strong>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-6\">\n                <p class=\"lead bb\">Shipping Address</p>\n                <form class=\"form-horizontal p-20\">\n                     <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Full Name</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.name}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Address:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.address}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">City:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.city}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">ZIP/Post Code</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.pincode}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Phone</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{address.mobileNo}}</strong>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <p class=\"lead bb\">Payment Details</p>\n                <form class=\"form-horizontal p-20\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Total :</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.subTotal|number:'1.2'}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Discount/Coupon:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.deductedPrice|number:'1.2'}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\" *ngIf=\"orderDetails.usedLoyaltyPoints\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-6\">Used loyalty Points:</div>\n                        <div class=\"col-sm-6\">\n                            <strong>${{orderDetails.usedLoyaltyPoints|number:'1.2'}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-2\">Tax:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.tax|number:'1.2'}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Pay Amount:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>${{orderDetails.grandTotal|number:'1.2'}}</strong>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-5\">Payment Status:</div>\n                        <div class=\"col-sm-7\">\n                            <span class=\"label label-success\" *ngIf=\"orderDetails.paymentStatus =='Success'\">{{orderDetails.paymentStatus}}\n                            </span>\n                             <span class=\"label label-warning\" *ngIf=\"orderDetails.paymentStatus =='Pending'\">{{orderDetails.paymentStatus}}\n                             </span>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-4\">Payment Type:</div>\n                        <div class=\"col-sm-8\">\n                            <strong>{{orderDetails.paymentType}}</strong>\n                        </div>\n                    </div>\n                    </div>\n                </form>\n            </div>\n         </div>\n    </div>\n</div>\n\n<div class=\"panel\">\n    <div class=\"panel-heading\">Products in order</div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover table-bordered table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"text-center\">#</th>\n                    <th class=\"text-center\">Product Name</th>\n                    <th class=\"text-center\">Price(RM)</th>\n                    <th class=\"text-center\">Extra Option</th>\n                    <th class=\"text-center\">Quantity</th>   \n                    <th class=\"text-center\">Total</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of orderDetails.cart; let i=index \">\n                    <td class=\"text-center\">{{i+1}}</td>\n                    <td class=\"text-center\"> {{data.item.title}}</td>\n                    <td class=\"text-center\">${{data.item.price.value | number:'1.2'}} ({{data.item.price.pname}})</td>\n                    <td class=\"text-center\"><span *ngFor=\"let item of data.item.extraOptions; let i=index\">\n                           {{item.name}}<br>\n                    </span>\n                   </td>\n                    <td class=\"text-center\">{{data.item.itemQunatity}}</td>\n                    <td class=\"text-center\">{{data.itemTotalPrice|number:'1.2'}}</td>\n                </tr>\n                <tr>\n                     <td colspan=\"4\"></td>\n                     <td class=\"text-right\"><strong>Total :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.subTotal|number:'1.2'}}</td>\n                  </tr>\n                  <tr>\n                     <td colspan=\"4\"></td>\n                     <td class=\"text-right\"><strong>Coupon Applied :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.deductedPrice|number:'1.2'}}</td>\n                  </tr>\n                  <tr>\n                     <td colspan=\"4\"></td>\n                     <td class=\"text-right\"><strong>Tax :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.tax|number:'1.2'}}</td>\n                  </tr>  \n                  <tr>\n                        <td colspan=\"4\"></td>\n                        <td class=\"text-right\"><strong>Delivery :</strong></td>\n                        <td class=\"text-center\">${{orderDetails.deliveryCharge|number:'1.2'}}</td>\n                 </tr>  \n                  <tr>\n                     <td colspan=\"4\"></td>\n                     <td class=\"text-right\"><strong>Grand Total :</strong></td>\n                     <td class=\"text-center\">${{orderDetails.grandTotal|number:'1.2'}}</td>\n                  </tr> \n            </tbody>    \n        </table>\n    </div>\n    <div class=\"panel-footer\">\n        <div class=\"row \">\n        </div>\n     </div>\n</div>\n</div>\n\n\n<!-- For Vendor View -->\n<div *ngIf=\"orderDetails.cart && role !== 'Admin'\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Item Information</div>\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p class=\"lead bb\">Details</p>\n                    <form class=\"form-horizontal p-20\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Purchased On:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{orderDetails.createdAt | date:'medium'}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                                <div class=\"col-sm-4\">Order Id:</div>\n                                <div class=\"col-sm-8\">\n                                    <strong>{{orderDetails.orderId}}</strong>\n                                </div>\n                            </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Client Name:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{userDetails.name}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Items:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{orderDetails.cart.length}}</strong>\n                            </div>\n                        </div>\n                        <!-- <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Amount:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>${{orderDetails.grandTotal}}</strong>\n                            </div>\n                        </div> -->\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Status</div>\n                            <div class=\"col-sm-8\">\n                         <span class=\"label label-success\" *ngIf=\"orderDetails.status=='Delivered'\">{{orderDetails.status}}\n                        </span>\n                        <span class=\"label label-process\" *ngIf=\"orderDetails.status=='Processing'\">{{orderDetails.status}}\n                        </span>\n                        <span class=\"label label-warning\" *ngIf=\"orderDetails.status =='Pending'\">{{orderDetails.status}}</span>\n                        <span class=\"label label-purple\" *ngIf=\"orderDetails.status=='On the Way'\">{{orderDetails.status}}\n                        </span>\n                        <span class=\"label label-purple\" *ngIf=\"orderDetails.status=='Ready for pickup'\">{{orderDetails.status}}\n                            </span>\n                        <span class=\"label label-danger\" *ngIf=\"orderDetails.status=='Canceled'\">{{orderDetails.status}}</span>\n                        </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-md-6\">\n                    <p class=\"lead bb\">Client</p>\n                    <form class=\"form-horizontal p-20\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Name:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{userDetails.name}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Email:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{userDetails.email}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Phone:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{userDetails.mobileNo}}</strong>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"pickUp\">\n                <div class=\"col-md-6\">\n                    <p class=\"lead bb\">Pick-Up Address</p>\n                    <form class=\"form-horizontal p-20\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Shop Name</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.name}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Address:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.address}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">City:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.city}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">ZIP/Post Code</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.zipcode}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Phone</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.phone}}</strong>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"delivery\">\n                <!-- <div class=\"col-md-6\">\n                    <p class=\"lead bb\">Delivery Address</p>\n                    <form class=\"form-horizontal p-20\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Full Name</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.name}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Address:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.address}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">City:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.city}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">ZIP/Post Code</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.pincode}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Phone</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.mobileNo}}</strong>\n                            </div>\n                        </div>\n                    </form>\n                </div> -->\n                <div class=\"col-md-6\">\n                    <p class=\"lead bb\">Delivery Address</p>\n                    <form class=\"form-horizontal p-20\">\n                         <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Full Name</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.name}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Address:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.address}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">City:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.city}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">ZIP/Post Code</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.pincode}}</strong>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Phone</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{address.mobileNo}}</strong>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n    \n            <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <p class=\"lead bb\">Payment Details</p>\n                    <form class=\"form-horizontal p-20\">\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Total :</div>\n                            <div class=\"col-sm-8\">\n                                <strong>${{orderDetails.subTotal|number:'1.2'}}</strong>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Discount/Coupon:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>${{orderDetails.deductedPrice|number:'1.2'}}</strong>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\" *ngIf=\"orderDetails.usedLoyaltyPoints\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6\">Used loyalty Points:</div>\n                            <div class=\"col-sm-6\">\n                                <strong>${{orderDetails.usedLoyaltyPoints|number:'1.2'}}</strong>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-2\">Tax:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>${{orderDetails.tax|number:'1.2'}}</strong>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Pay Amount:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>${{orderDetails.grandTotal|number:'1.2'}}</strong>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-5\">Payment Status:</div>\n                            <div class=\"col-sm-7\">\n                                <span class=\"label label-success\" *ngIf=\"orderDetails.paymentStatus =='Success'\">{{orderDetails.paymentStatus}}\n                                </span>\n                                 <span class=\"label label-warning\" *ngIf=\"orderDetails.paymentStatus =='Pending'\">{{orderDetails.paymentStatus}}\n                                 </span>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4\">Payment Type:</div>\n                            <div class=\"col-sm-8\">\n                                <strong>{{orderDetails.paymentType}}</strong>\n                            </div>\n                        </div>\n                        </div>\n                    </form>\n                </div>\n             </div> -->\n        </div>\n    </div>\n    \n    <div class=\"panel\">\n        <div class=\"panel-heading\">Products in order</div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered table-striped\">\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">#</th>\n                        <th class=\"text-center\">Product Name</th>\n                        <th class=\"text-center\">Special Instruction</th>\n                        <th class=\"text-center\">Extra Option</th>\n                        <th class=\"text-center\">Quantity</th>   \n                        <!-- <th class=\"text-center\">Total</th> -->\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of orderDetails.cart; let i=index \">\n                        <td class=\"text-center\">{{i+1}}</td>\n                        <td class=\"text-center\"> {{data.item.title}}</td>\n                        <!-- <td class=\"text-center\">${{data.item.price.value | number:'1.2'}} ({{data.item.price.pname}})</td> -->\n                        <td class=\"text-center\"> {{data.item.itemMessage}}</td>\n                        <td class=\"text-center\"><span *ngFor=\"let item of data.item.extraOptions; let i=index\">\n                               {{item.name}}<br>\n                        </span>\n                       </td>\n                        <td class=\"text-center\">{{data.item.itemQunatity}}</td>\n                        <!-- <td class=\"text-center\">{{data.itemTotalPrice|number:'1.2'}}</td> -->\n                    </tr>\n                    <!-- <tr>\n                         <td colspan=\"4\"></td>\n                         <td class=\"text-right\"><strong>Total :</strong></td>\n                         <td class=\"text-center\">${{orderDetails.subTotal|number:'1.2'}}</td>\n                      </tr>\n                      <tr>\n                         <td colspan=\"4\"></td>\n                         <td class=\"text-right\"><strong>Coupon Applied :</strong></td>\n                         <td class=\"text-center\">${{orderDetails.deductedPrice|number:'1.2'}}</td>\n                      </tr>\n                      <tr>\n                         <td colspan=\"4\"></td>\n                         <td class=\"text-right\"><strong>Tax :</strong></td>\n                         <td class=\"text-center\">${{orderDetails.tax|number:'1.2'}}</td>\n                      </tr>  \n                      <tr>\n                            <td colspan=\"4\"></td>\n                            <td class=\"text-right\"><strong>Delivery :</strong></td>\n                            <td class=\"text-center\">${{orderDetails.deliveryCharge|number:'1.2'}}</td>\n                     </tr>  \n                      <tr>\n                         <td colspan=\"4\"></td>\n                         <td class=\"text-right\"><strong>Grand Total :</strong></td>\n                         <td class=\"text-center\">${{orderDetails.grandTotal|number:'1.2'}}</td>\n                      </tr>  -->\n                </tbody>    \n            </table>\n        </div>\n        <div class=\"panel-footer\">\n            <div class=\"row \">\n            </div>\n         </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.thsearch {\n  width: 20%; }\n\n.label-process {\n  background-color: #002fff; }\n\n.file-upload {\n  display: inline !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js__ = __webpack_require__("../../../../pdfmake/build/pdfmake.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts_js__ = __webpack_require__("../../../../pdfmake/build/vfs_fonts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js__["vfs"] = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts_js__["pdfMake"].vfs;
var ViewOrderComponent = (function () {
    function ViewOrderComponent(route, router, af, toastr, dateService, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.dateService = dateService;
        this.spinnerService = spinnerService;
        this.userDetails = {};
        this.orderDetails = {};
        this.delivery = false;
        this.pickUp = false;
        this.tempArray = [];
        this.dataRow = [];
        this.filteredItems = [];
        this.role = localStorage.getItem('role');
        this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.cartIndex = +params['cartIndex'] || 0;
            console.log(_this.cartIndex);
        });
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.ordersdataRef = _this.af.object('/orders/' + Id);
                _this.orderId = Id;
                _this.orderObservable = _this.ordersdataRef.valueChanges();
                _this.orderObservable.subscribe(function (response) {
                    _this.orderDetails = response;
                    if (_this.role !== 'Admin') {
                        _this.filterCart();
                    }
                    console.log(_this.orderDetails);
                    console.log(_this.orderDetails.createdAt);
                    _this.todayDate = _this.dateService.getDate(0);
                    _this.purchaseDate = _this.dateService.getDate(_this.orderDetails.createdAt);
                    if (_this.orderDetails.deliveryOption === 'delivery') {
                        _this.addressheader = 'Delivery Address';
                        _this.address = response.shippingAddress;
                        _this.delivery = true;
                    }
                    else {
                        _this.addressheader = 'Pick-Up Address';
                        _this.address = response.pickUpAddress;
                        _this.pickUp = true;
                        console.log(_this.address);
                    }
                    _this.generateRows(_this.orderDetails);
                    _this.userDetails = response.userDetails;
                    // if(response.deliveryOption === 'delivery'){
                    //     this.address=response.shippingAddress;
                    //     this.delivery = true;
                    // } else {
                    //       this.address=response.pickUpAddress;
                    //       this.pickUp = true;
                    // }
                    console.log(JSON.stringify(_this.address));
                });
            }
        });
    }
    ViewOrderComponent.prototype.filterCart = function () {
        var _this = this;
        console.log(this.orderDetails.cart);
        //  for (const item of this.orderDetails.cart){
        //     if (item.vendorCode === this.role) {
        //           this.filteredItems.push(item);
        //    const index = this.orderDetails.cart.indexOf(item);
        //    console.log(index);
        //    if (index !== -1) {
        //     this.orderDetails.cart .splice(index, 1);
        // }
        this.orderDetails.cart = this.orderDetails.cart.filter(function (order) { return order.vendorCode === _this.role; });
        //     }
        //    }
    };
    ViewOrderComponent.prototype.createPDF = function () {
        //   this.router.navigate(['/order/invoice',this.orderId]);
        var docDefinition = {
            pageSize: 'A4',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'portrait',
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [20, 40, 20, 40],
            content: [
                { text: 'Production Order', style: 'header' },
                {
                    columns: [
                        {
                            style: 'detail',
                            table: {
                                //                widths:['*','*'],
                                body: [
                                    [{ text: 'Customer Details:', bold: true, fontSize: 15, colSpan: 2 }, {}],
                                    [{ text: 'Name:' }, { text: this.orderDetails.userDetails.name }],
                                    [{ text: 'Purchase Date:' }, { text: this.purchaseDate }],
                                    [{ text: 'Phone:' }, { text: this.orderDetails.userDetails.mobileNo }],
                                ]
                            }, layout: 'noBorders'
                        },
                        {
                            table: {
                                //              widths:['*','*'],
                                body: [
                                    [{ text: this.addressheader, bold: true, fontSize: 15 }, {}],
                                    [{ text: this.address.name }, {}],
                                    [{ text: this.address.address }, {}],
                                    [{ text: this.address.area }, {}]
                                ]
                            }, layout: 'noBorders'
                        }
                    ]
                },
                { text: 'Order No: ' + this.orderDetails.orderId, margin: [0, 20, 0, 10], fontSize: 20 },
                { text: 'Date:' + this.todayDate, margin: [0, 10, 0, 10], fontSize: 15 },
                {
                    style: 'tableheader',
                    table: {
                        headerRows: 1,
                        widths: [10, '*', '*', '*'],
                        body: [
                            [{ text: '#', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Product', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Extra', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Qty', fillColor: '#eeeeee', margin: [true, true, true, false] }]
                        ]
                    }
                },
                this.table(this.tempArray, 'production'),
                { text: '', margin: [0, 0, 0, 20] },
                {
                    style: '',
                    table: {
                        widths: [35, '*'],
                        body: [
                            [{ text: 'Item #', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Special Instruction', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }],
                        ]
                    }
                },
                //             {text:'Special Instruction', style:'header'},
                this.instructionTable(this.tempArray)
            ],
            //           this.table(this.tempArray, ['#', 'Product', 'Price(RM)','ExtraOption',"Q'ty",'Total'])
            styles: {
                header: {
                    fontSize: 30,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 30]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                tableheader: {
                    alignment: 'center'
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js__["createPdf"](docDefinition);
        this.downloadPdf(this.pdfObj);
    };
    ViewOrderComponent.prototype.table = function (data, type) {
        //  const x;
        if (type === 'invoice') {
            return {
                style: '',
                table: {
                    widths: [10, '*', '*', '*', 40, 80],
                    body: this.buildTableBody(data, type)
                }
            };
        }
        else {
            return {
                style: '',
                table: {
                    widths: [10, '*', '*', '*'],
                    body: this.buildTableBody(data, type)
                }
            };
        }
    };
    ViewOrderComponent.prototype.instructionTable = function (data) {
        return {
            style: '',
            table: {
                widths: [35, '*'],
                body: this.instructionBody(data)
            }
        };
    };
    ViewOrderComponent.prototype.instructionBody = function (data) {
        var body = [];
        var dataRow = [];
        data.forEach(function (row) {
            if (row.itemMessage) {
                dataRow = [{ text: row.ID, alignment: 'center' }, row.itemMessage];
            }
            body.push(dataRow);
        });
        return body;
    };
    //  buildTableBody(data,columns) {
    ViewOrderComponent.prototype.buildTableBody = function (data, type) {
        //  console.log(columns);
        var body = [];
        var dataRow = [];
        var extra = '';
        //     body.push(columns);
        console.log(body);
        console.log(data);
        console.log(this.dataRow);
        data.forEach(function (row) {
            //   for(let i=0;i<data.length;i++){
            extra = '';
            if (row.extraOptions) {
                if (row.extraOptions.length > 0) {
                    console.log(row.extraOptions.length);
                    //    for(let option of row.extraOptions{
                    for (var i = 0; i < row.extraOptions.length; i++) {
                        if (i === row.extraOptions.length - 1) {
                            extra = extra.concat(row.extraOptions[i].name);
                        }
                        else {
                            extra = extra.concat(row.extraOptions[i].name) + ',';
                        }
                    }
                    console.log(extra);
                }
            }
            console.log(row);
            if (type === 'invoice') {
                dataRow = [row.ID, row.title, Number(row.price).toFixed(2) + " (" + row.pname + ")", extra, row.quantity, '' + Number(row.total).toFixed(2)];
            }
            else {
                dataRow = [row.ID, row.title, extra, row.quantity];
            }
            body.push(dataRow);
            console.log(body);
        });
        return body;
    };
    ViewOrderComponent.prototype.generateRows = function (order) {
        console.log(order);
        //  var tempObj = {}
        //  var tempArr = [];
        for (var i = 0; i < order.cart.length; i++) {
            this.tempArray.push({
                ID: i + 1,
                //  title: order.cart[i].item.title,
                title: order.cart[i].item.title + "(" + order.cart[i].item.productCode + ")",
                price: order.cart[i].item.price.value,
                pname: order.cart[i].item.price.pname,
                itemMessage: order.cart[i].item.itemMessage,
                extraOptions: order.cart[i].item.extraOptions,
                quantity: order.cart[i].item.itemQunatity,
                total: order.cart[i].itemTotalPrice
            });
        }
        console.log(this.tempArray);
    };
    ViewOrderComponent.prototype.generateInvoice = function () {
        var docDefinition = {
            pageSize: 'A4',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'portrait',
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [20, 40, 20, 40],
            content: [
                { text: 'Invoice', style: 'header' },
                {
                    columns: [
                        {
                            style: 'detail',
                            table: {
                                //                widths:['*','*'],
                                body: [
                                    [{ text: 'Customer Details:', bold: true, fontSize: 15, colSpan: 2 }, {}],
                                    [{ text: 'Name:' }, { text: this.orderDetails.userDetails.name }],
                                    [{ text: 'Purchase Date:' }, { text: this.purchaseDate }],
                                    [{ text: 'Phone:' }, { text: this.orderDetails.userDetails.mobileNo }],
                                ]
                            }, layout: 'noBorders'
                        },
                        {
                            table: {
                                //              widths:['*','*'],
                                body: [
                                    [{ text: this.addressheader, bold: true, fontSize: 15 }, {}],
                                    [{ text: this.address.name }, {}],
                                    [{ text: this.address.address }, {}],
                                    [{ text: this.address.area }, {}]
                                ]
                            }, layout: 'noBorders'
                        }
                    ]
                },
                { text: 'Invoice No: ' + this.orderDetails.orderId, margin: [0, 20, 0, 10], fontSize: 20 },
                { text: 'Date:' + this.todayDate, margin: [0, 10, 0, 10], fontSize: 15 },
                {
                    style: 'tableheader',
                    table: {
                        headerRows: 1,
                        widths: [10, '*', '*', '*', 40, 80],
                        body: [
                            [{ text: '#', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Product', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Price(RM)', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Extra', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Qty', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Total(RM)', fillColor: '#eeeeee', margin: [true, true, true, false] }]
                        ]
                    }
                },
                this.table(this.tempArray, 'invoice'),
                {
                    style: 'marginBottom',
                    table: {
                        widths: [10, '*', '*', '*', 40, 80],
                        body: [
                            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: 'Sub-Total', colSpan: 2, border: [true, false, true, false] }, {}, { text: '' + Number(this.orderDetails.subTotal).toFixed(2), border: [true, false, true, false] }],
                            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: 'Coupon Applied', colSpan: 2, border: [true, false, true, false] }, {}, { text: '' + Number(this.orderDetails.couponDiscount).toFixed(2), border: [true, false, true, false] }],
                            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: 'Tax', colSpan: 2, border: [true, false, true, false] }, {}, { text: '' + Number(this.orderDetails.tax).toFixed(2), border: [true, false, true, false] }],
                            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: 'Delivery', colSpan: 2, border: [true, false, true, false] }, {}, { text: '' + Number(this.orderDetails.deliveryCharge).toFixed(2), border: [true, false, true, false] }],
                            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: 'Grand Total', colSpan: 2, border: [true, false, true, true] }, {}, { text: '' + Number(this.orderDetails.grandTotal).toFixed(2), border: [true, false, true, true] }]
                        ]
                    }
                },
                {
                    style: '',
                    table: {
                        widths: [35, '*'],
                        body: [
                            [{ text: 'Item #', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }, { text: 'Special Instruction', alignment: 'center', fillColor: '#eeeeee', margin: [true, true, true, false] }],
                        ]
                    }
                },
                //             {text:'Special Instruction', style:'header'},
                this.instructionTable(this.tempArray)
            ],
            //           this.table(this.tempArray, ['#', 'Product', 'Price(RM)','ExtraOption',"Q'ty",'Total'])
            styles: {
                header: {
                    fontSize: 30,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 30]
                },
                marginBottom: {
                    margin: [0, 0, 0, 20]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                tableheader: {
                    alignment: 'center'
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake_js__["createPdf"](docDefinition);
        this.downloadPdf(this.pdfObj);
    };
    ViewOrderComponent.prototype.downloadPdf = function (pdf) {
        pdf.download();
    };
    ViewOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-order',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ViewOrderComponent);
    return ViewOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Add Pick-Up Location\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n      <a [routerLink]=\"['/pickUpLocation/managePickUpLocation']\"> Pick-Up Location </a>->\n      Add Pick-Up Location\n  </small>\n</div>\n<!-- START panel-->\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Location Details</div>\n  <div class=\"panel-body\">\n      <form (ngSubmit)=\"onSubmitLocation(f)\" #f=\"ngForm\"> \n          <fieldset>\n              <label class=\"col-sm-2 control-label custom\" for=\"title\">Name*</label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"location.name\"\n                                 type=\"text\" required placeholder=\"Location Name\"/>\n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Address\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <textarea class=\"form-control\" name=\"address\" id=\"address\"\n                                    [(ngModel)]=\"location.address\" required=\"\" rows=\"3\"></textarea>\n                      </div>\n                  </div>\n              </div>\n              <label class=\"col-sm-2 control-label custom\">Area\n            </label>\n              <div class=\"col-sm-10\">\n                <div class=\"panel\">\n                    <div class=\"panel-body mh0\">\n                        <textarea class=\"form-control\" name=\"area\" id=\"area\"\n                                  [(ngModel)]=\"location.area\" required=\"\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <label class=\"col-sm-2 control-label custom\">City\n            </label>\n            <div class=\"col-sm-10\">\n                <div class=\"panel\">\n                    <div class=\"panel-body mh0\">\n                        <textarea class=\"form-control\" name=\"city\" id=\"city\"\n                                  [(ngModel)]=\"location.city\" required=\"\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n            </div>\n\n              <label class=\"col-sm-2 control-label custom\">Zip Code\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" type=\"number\" name=\"zipcode\" id=\"zipcode\"\n                                 [(ngModel)]=\"location.pincode\" required=\"\" rows=\"3\">\n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Phone\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" type=\"number\" name=\"phone\" id=\"phone\"\n                                 [(ngModel)]=\"location.mobileNo\" required=\"\" rows=\"3\"> \n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Available</label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\n                          <input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                  <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                  <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Submit</button>\n              </div>\n\n          </fieldset>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myRadio {\n  padding-right: 20px; }\n\n.custom {\n  padding-top: 22px; }\n\n.panel {\n  box-shadow: none;\n  margin-bottom: auto; }\n\n.added-block {\n  padding: 5px 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n\n.s-n-btn {\n  margin-right: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPickUpLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPickUpLocationComponent = (function () {
    // imageId: string;
    function AddPickUpLocationComponent(af, toastr, router, spinnerService) {
        this.af = af;
        this.toastr = toastr;
        this.router = router;
        this.spinnerService = spinnerService;
        this.url = '';
        this.location = {
            name: '',
            address: '',
            city: '',
            area: '',
            pincode: 0,
            mobileNo: 0,
            available: true,
        };
        this.available = 'true';
        this.locationDataRef = af.list('/pick-up-location');
    }
    AddPickUpLocationComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddPickUpLocationComponent.prototype.onSubmitLocation = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.available === 'false') {
            this.location.available = false;
        }
        this.locationDataRef.push(this.location).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Location Added Successfully!', 'Success!');
            _this.router.navigate(['/pickUpLocation/managePickUpLocation']);
        });
    };
    AddPickUpLocationComponent.prototype.cancel = function () {
        this.router.navigate(['/pickUpLocation/managePickUpLocation']);
    };
    AddPickUpLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-pick-up-location',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddPickUpLocationComponent);
    return AddPickUpLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Update Location\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n      <a [routerLink]=\"['/pickUpLocation/managePickUpLocation']\"> Pick-Up Location </a>->\n      Update Pick-Up Location\n  </small>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Location Details</div>\n  <div class=\"panel-body\">\n      <form (ngSubmit)=\"onSubmitLocation(f)\" #f=\"ngForm\"> \n          <fieldset>\n              <label class=\"col-sm-2 control-label custom\" for=\"title\">Name*</label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"location.name\"\n                                 type=\"text\" required placeholder=\"Location Name\"/>\n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Address\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <textarea class=\"form-control\" name=\"address\" id=\"address\"\n                                    [(ngModel)]=\"location.address\" required=\"\" rows=\"3\"></textarea>\n                      </div>\n                  </div>\n              </div>\n              <label class=\"col-sm-2 control-label custom\">Area\n            </label>\n            <div class=\"col-sm-10\">\n                <div class=\"panel\">\n                    <div class=\"panel-body mh0\">\n                        <textarea class=\"form-control\" name=\"area\" id=\"area\"\n                                  [(ngModel)]=\"location.area\" required=\"\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <label class=\"col-sm-2 control-label custom\">City\n            </label>\n            <div class=\"col-sm-10\">\n                <div class=\"panel\">\n                    <div class=\"panel-body mh0\">\n                        <textarea class=\"form-control\" name=\"city\" id=\"city\"\n                                  [(ngModel)]=\"location.city\" required=\"\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n            </div>\n\n              <label class=\"col-sm-2 control-label custom\">Zip Code\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" type=\"number\" name=\"zipcode\" id=\"zipcode\"\n                                 [(ngModel)]=\"location.pincode\" required=\"\" rows=\"3\">\n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Phone\n              </label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input class=\"form-control\" type=\"number\" name=\"phone\" id=\"phone\"\n                                 [(ngModel)]=\"location.mobileNo\" required=\"\" rows=\"3\"> \n                      </div>\n                  </div>\n              </div>\n\n              <label class=\"col-sm-2 control-label custom\">Available</label>\n              <div class=\"col-sm-10\">\n                  <div class=\"panel\">\n                      <div class=\"panel-body mh0\">\n                          <input type=\"radio\" name=\"available\" value=\"false\" [(ngModel)]=\"available\"> <span class=\"myRadio\">No</span>\n                          <input type=\"radio\" name=\"available\" value=\"true\" [(ngModel)]=\"available\"> Yes\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                  <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                  <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Update</button>\n              </div>\n\n          </fieldset>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  margin-top: 27px; }\n\n.myRadio {\n  padding-right: 20px; }\n\n.panel {\n  box-shadow: none; }\n\n.added-block {\n  padding: 5px 0px; }\n\n.plus {\n  margin-top: 5px; }\n\n.s-n-btn {\n  margin-right: 1.3em; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.img-width {\n  max-width: 30%; }\n\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPickUpLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPickUpLocationComponent = (function () {
    function EditPickUpLocationComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.location = {
            name: '',
            address: '',
            area: '',
            city: '',
            pincode: 0,
            mobileNo: '',
            available: true,
        };
        this.available = 'true';
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.locationdataRef = _this.af.object('/pick-up-location/' + Id);
                _this.locationObservable = _this.locationdataRef.valueChanges();
                _this.locationObservable.subscribe(function (response) {
                    _this.location = response;
                    if (!_this.location.available) {
                        _this.available = 'false';
                    }
                    console.log('menu' + JSON.stringify(response));
                });
            }
        });
    }
    EditPickUpLocationComponent.prototype.onSubmitLocation = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.available === 'false') {
            this.location.available = false;
        }
        else {
            this.location.available = true;
        }
        this.locationdataRef.update({
            name: this.location.name,
            address: this.location.address,
            pincode: this.location.pincode,
            mobileNo: this.location.mobileNo,
            area: this.location.area,
            city: this.location.city,
            available: this.location.available
        }).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Menu-Items Data Updated Successfully!', 'Success!');
            _this.router.navigate(['/pickUpLocation/managePickUpLocation']);
        });
    };
    EditPickUpLocationComponent.prototype.cancel = function () {
        this.router.navigate(['/pickUpLocation/managePickUpLocation']);
    };
    EditPickUpLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-pick-up-location',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditPickUpLocationComponent);
    return EditPickUpLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Pick-Up Locations\n  <div class=\"pull-right\">\n            <label for=\"image-input\" class=\"file-upload\">\n              <a [routerLink]=\"'/pickUpLocation/addPickUpLocation'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Location</button> </a>  \n            </label>\n  </div>\n   <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Pick-Up Location </small>\n </div>\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">Location List</div>\n  <!-- <div class=\"table-responsive b0\">\n<table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th class=\"thsearch\">\n                Name -->\n                <div class=\"thsearch\">\n                <form (keyup)=\"getLocation(siteName.value)\">\n                    <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                           id=\"siteVal\" [(ngModel)]=\"siteVal\" \n                           placeholder=\"Search\" #siteName>\n                </form>\n                </div>\n                <div *ngFor=\"let location of locations\" class=\"location\">\n                  Name: {{location.name}}<br> \n                  Address: {{location.address}} {{location.zipcode}}<br>\n                  Phone: {{location.phone}}<br>\n                  <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"locationEdit(location.key)\"><em class=\"fa fa-pencil\"></em></button> \n                  <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"locationDelete(location.key)\"><em class=\"fa fa-trash-o\"></em></button>\n                </div>\n            <!-- </th>\n            <th class=\"thnosearch\">\n                Offers\n            </th>\n             <th class=\"thnosearch\">\n                Price\n            </th>\n            <th class=\"thnosearch\">\n                View\n            </th>\n            <th class=\"thnosearch\">\n                Edit\n            </th>\n            <th class=\"thnosearch\">\n                Delete\n            </th>\n\n\n            <th class=\"thnoitem\"></th>\n        </tr>\n        </thead>\n        <tbody> -->\n        <!-- <tr *ngFor=\"let item of menuItems\">\n            <td>{{item.title}}</td>\n            <td>\n            <span class=\"label label-success\" *ngIf=\"item.offer==true\">Yes</span>\n            <span class=\"label label-warning\" *ngIf=\"!item.offer || item.offer==false \">No</span>\n           </td>\n            <td>${{item.price[0].value}}</td>\n            <td>\n            <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"menuItemShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n            </td>\n            <td>\n               <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"menuItemEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button> \n            </td>\n            <td>\n               <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"menuItemDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button> \n            </td>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"5\" class=\"customPagination\">\n               <!--  <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n            <!-- </td>\n        </tr>\n        </tfoot>\n    </table>\n</div>  -->\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.location {\n  padding: 0px 0 20px 20px; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.customPagination {\n  padding-right: 15px !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customImage {\n  margin-right: -14px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 20%;\n  padding-left: 20px;\n  margin-bottom: 30px; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickUpLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var PickUpLocationComponent = (function () {
    function PickUpLocationComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.locationDataRef = af.list('/pick-up-location');
        this.locationObservable = this.locationDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.locationObservable.subscribe(function (res) {
            _this.locations = res;
        });
    }
    PickUpLocationComponent.prototype.getLocation = function (ev) {
        var _this = this;
        var val = ev;
        this.locationObservable = this.af.list('/pick-up-location', function (ref) { return ref.orderByChild('address').startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.locationObservable.subscribe(function (data) {
            _this.locations = data;
            //       console.log(this.menuItems);
        });
    };
    PickUpLocationComponent.prototype.locationEdit = function (key) {
        this.router.navigate(['/pickUpLocation/editPickUpLocation', key]);
    };
    PickUpLocationComponent.prototype.locationDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.locationDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'Menu Item Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    PickUpLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pick-up-location',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], PickUpLocationComponent);
    return PickUpLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n       <div class=\"col-md-9\">\r\n            <div>\r\n                <div class=\"panel b\">\r\n                    <div class=\"panel-heading bg-purple-dark text-bold \">Profile</div>\r\n                    <div class=\"panel-body\">\r\n                        <form role=\"form\" (ngSubmit)=\"onUpadteUser(f)\" #f=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name</label>\r\n                                <input  class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"userData.name\"  placeholder=\"Enter Name...\" type=\"text\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Street</label>\r\n                                <input class=\"form-control\" name=\"street\" id=\"street\" [(ngModel)]=\"userData.street\" placeholder=\"Enter Street...\" type=\"text\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>City</label>\r\n                                <input class=\"form-control\" name=\"city\" id=\"city\" [(ngModel)]=\"userData.city\" placeholder=\"Enter City...\" type=\"text\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Zip</label>\r\n                                <input class=\"form-control\" name=\"zip\" id=\"zip\" [(ngModel)]=\"userData.zip\" placeholder=\"Enter Zip...\" type=\"text\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Country</label>\r\n                                <input class=\"form-control\" name=\"country\" id=\"country\" [(ngModel)]=\"userData.country\" placeholder=\"Enter Country...\" type=\"text\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Phone</label>\r\n                                <input class=\"form-control\" name=\"mobileNo\" id=\"mobileNo\" [(ngModel)]=\"userData.mobileNo\" placeholder=\"Enter Phone Number...\" type=\"text\" />\r\n                            </div>\r\n                            <button class=\"btn btn-info\" type=\"submit\">Update Profile</button>\r\n                            <p>\r\n                                <small class=\"text-muted\"></small>\r\n                            </p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n       </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(af, router, toastr, authentication, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.authentication = authentication;
        this.spinnerService = spinnerService;
        this.userData = {};
        this.af.object('/users/' + this.authentication.auth.currentUser.uid).valueChanges().subscribe(function (res) {
            console.log('Firebase res: ' + JSON.stringify(res));
            _this.userData = res;
        });
    }
    ProfileComponent.prototype.onUpadteUser = function (form) {
        var _this = this;
        this.spinnerService.show();
        console.log('Users Data : ' + JSON.stringify(this.userData));
        this.af.object('/users/' + this.authentication.auth.currentUser.uid).update({
            email: this.userData.email,
            name: this.userData.name,
            street: this.userData.street,
            city: this.userData.city,
            zip: this.userData.zip,
            country: this.userData.country,
            mobileNo: this.userData.mobileNo
        }).then(function (res) {
            _this.spinnerService.hide();
            console.log('Success');
            _this.toastr.success('Successfully!', ' Updated!');
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/push-notification/push-notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\r\n  Push Notification\r\n</div>\r\n<div class=\"container-md\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"panel b\">\r\n        <div class=\"panel-heading  text-bold bg-purple-dark\">Send Notification</div>\r\n        <div class=\"panel-body\">\r\n          <form (ngSubmit)=\"onpushNotification(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label>Title*</label>\r\n              <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\"\r\n                     [(ngModel)]=\"message.headings.en\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Message*</label>\r\n              <textarea class=\"form-control\" rows=\"3\" name=\"title\" id=\"title\"\r\n                        [(ngModel)]=\"message.contents.en\" required></textarea>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <p>\r\n                <small class=\"text-muted\">* Required Fields</small>\r\n                </p>                \r\n              </div>\r\n              <div class=\"col-sm-8 text-right\">\r\n                  <button class=\"btn btn-danger  s-n-btn\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;&nbsp;\r\n                  <button class=\"btn btn-primary s-n-btn\" type=\"submit\">Send</button>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/push-notification/push-notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/push-notification/push-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_notification_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/push-notification/push-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PushNotificationComponent = (function () {
    function PushNotificationComponent(router, pushNotification, toster, spinnerService) {
        this.router = router;
        this.pushNotification = pushNotification;
        this.toster = toster;
        this.spinnerService = spinnerService;
        this.notification = {};
        this.message = {
            // app_id: "614240e3-c369-44a1-82fb-73227bd2c71c",
            // app_id:"9740a50f-587f-4853-821f-58252d998399",
            app_id: '452b400d-27a2-4df3-a485-8161a7d2d323',
            contents: { 'en': '' },
            headings: { 'en': '' },
            included_segments: ['All']
        };
    }
    PushNotificationComponent.prototype.onpushNotification = function (form) {
        var _this = this;
        this.spinnerService.show();
        // console.log("notification"+JSON.stringify(this.message));
        this.pushNotification.sendNotification(this.message).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.toster.success('Notification Send Successfully!', 'Success!');
        });
    };
    PushNotificationComponent.prototype.cancel = function () {
        this.router.navigate(['/coupons/all']);
    };
    PushNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-push-notification',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/push-notification/push-notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/push-notification/push-notification.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__push_notification_service__["a" /* PushNotificationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__push_notification_service__["a" /* PushNotificationService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], PushNotificationComponent);
    return PushNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/push-notification/push-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationService = (function () {
    function PushNotificationService(http) {
        this.http = http;
        this.url = 'https://onesignal.com/api/v1/notifications';
    }
    PushNotificationService.prototype.sendNotification = function (message) {
        var body = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // copy your Rest api key below ;
        headers.append('Authorization', 'Basic Nzk5NWI4MGEtMjlkYi00ZWU5LWE4OWEtODQ2ODMyMTRkYTdh');
        return this.http.post(this.url, body, {
            headers: headers
        }).map(function (data) { return data.json(); });
    };
    PushNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PushNotificationService);
    return PushNotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/restaurant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_add_categories_add_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_items_menu_items_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/menu-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_items_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_view_order_view_order_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_view_user_view_users_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/view-user/view-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_settings_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tags_tags_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tags_edit_tages_edit_tages_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tags_add_tags_add_tags_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__business_info_business_info_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/business-info/business-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__categories_edit_category_edit_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__categories_view_category_view_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_items_view_item_view_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__menu_items_edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__news_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__news_add_news_add_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/add-news/add-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__news_edit_news_edit_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__news_view_news_view_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/view-news/view-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__coupons_coupons_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/coupons/coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__coupons_add_coupons_add_coupons_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__push_notification_push_notification_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/push-notification/push-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__loyalitys_loyalitys_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_auth_service__ = __webpack_require__("../../../../../src/app/routes/pages/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_login_login_service__ = __webpack_require__("../../../../../src/app/routes/pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__restaurant_orders_view_order_date_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__chat_chat_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__chat_chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/chat/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__chat_action__ = __webpack_require__("../../../../../src/app/routes/restaurant/chat/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__testimonials_add_testimonials_add_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__testimonials_edit_testimonials_edit_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__testimonials_view_testimonials_view_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__subscribers_subscribers_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/subscribers/subscribers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__table_booking_table_booking_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/table-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__table_booking_view_view_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__delivery_options_delivery_options_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__orders_invoice_invoice_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__main_categories_main_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/main-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__main_categories_add_main_categories_add_main_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__main_categories_edit_main_category_edit_main_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__main_categories_view_main_category_view_main_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pick_up_location_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pick_up_location_add_pick_up_location_add_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pick_up_location_edit_pick_up_location_edit_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__main_categories_sub_category_sub_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__vendors_vendors_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/vendors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__vendors_add_vendor_add_vendor_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__vendors_edit_vendor_edit_vendor_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {ColorPickerModule, ColorPickerService} from 'angular2-color-picker/lib';



























































var RestaurantModule = (function () {
    function RestaurantModule() {
    }
    RestaurantModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_36_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_31_ng2_cloudinary__["c" /* Ng2CloudinaryModule */],
                __WEBPACK_IMPORTED_MODULE_32_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_39__ngrx_store__["b" /* StoreModule */].forRoot({ data: __WEBPACK_IMPORTED_MODULE_40__chat_action__["a" /* chatData */] })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__categories_add_categories_add_categories_component__["a" /* AddCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_items_menu_items_component__["a" /* MenuItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__menu_items_add_item_add_item_component__["a" /* AddItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tags_edit_tages_edit_tages_component__["a" /* EditTagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__tags_add_tags_add_tags_component__["a" /* AddTagsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__business_info_business_info_component__["a" /* BusinessInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__orders_view_order_view_order_component__["a" /* ViewOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__categories_edit_category_edit_category_component__["a" /* EditCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__categories_view_category_view_category_component__["a" /* ViewCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__news_add_news_add_news_component__["a" /* AddNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__news_edit_news_edit_news_component__["a" /* EditNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__news_view_news_view_news_component__["a" /* ViewNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__menu_items_view_item_view_item_component__["a" /* ViewItemComponent */],
                __WEBPACK_IMPORTED_MODULE_22__menu_items_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_28__coupons_add_coupons_add_coupons_component__["a" /* AddCouponsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__coupons_coupons_component__["a" /* CouponsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__push_notification_push_notification_component__["a" /* PushNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_37__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_38__chat_chat_box_chat_box_component__["a" /* ChatBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__users_view_user_view_users_component__["a" /* ViewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__users_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_41__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__testimonials_add_testimonials_add_testimonials_component__["a" /* AddTestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__testimonials_edit_testimonials_edit_testimonials_component__["a" /* EditTestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__loyalitys_loyalitys_component__["a" /* LoyalitysComponent */],
                __WEBPACK_IMPORTED_MODULE_44__testimonials_view_testimonials_view_testimonials_component__["a" /* ViewTestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__subscribers_subscribers_component__["a" /* SubscribersComponent */],
                __WEBPACK_IMPORTED_MODULE_46__table_booking_table_booking_component__["a" /* TableBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_47__table_booking_view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_48__delivery_options_delivery_options_component__["a" /* DeliveryOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__orders_invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_50__main_categories_main_categories_component__["a" /* MainCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_51__main_categories_add_main_categories_add_main_categories_component__["a" /* AddMainCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_52__main_categories_edit_main_category_edit_main_category_component__["a" /* EditMainCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_53__main_categories_view_main_category_view_main_category_component__["a" /* ViewMainCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pick_up_location_pick_up_location_component__["a" /* PickUpLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pick_up_location_add_pick_up_location_add_pick_up_location_component__["a" /* AddPickUpLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pick_up_location_edit_pick_up_location_edit_pick_up_location_component__["a" /* EditPickUpLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__main_categories_sub_category_sub_category_component__["a" /* SubCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_58__vendors_vendors_component__["a" /* VendorsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__vendors_add_vendor_add_vendor_component__["a" /* AddVendorComponent */],
                __WEBPACK_IMPORTED_MODULE_60__vendors_edit_vendor_edit_vendor_component__["a" /* EditVendorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__pages_login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_34__pages_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_35__restaurant_orders_view_order_date_service__["a" /* DateService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_36_ng2_pagination__["Ng2PaginationModule"]
            ]
        })
    ], RestaurantModule);
    return RestaurantModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Setting\n   <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Setting</small>\n</div>\n<div class=\"row\">\n   <div class=\"col-sm-6\">\n   <!-- START panel-->\n      <div class=\"panel panel-default\">\n         <div class=\"panel-heading\"><strong>Global</strong> Setting</div>\n         <div class=\"panel-body\">\n            <form role=\"form\" (ngSubmit)=\"onSubmitSetting(f)\" #f=\"ngForm\">\n               <div class=\"form-group\">\n                  <label>Global VAT*</label>\n                  <input class=\"form-control\" type=\"text\" name=\"totalVat\" id=\"totalVat\" [(ngModel)]=\"settings.totalVat\" placeholder=\"Enter Global VAT\" />\n               </div>\n               \n               <div class=\"form-group\">\n                  <label>Total Tables*</label>\n                  <input class=\"form-control\" type=\"text\" name=\"totalTables\" id=\"totalTables\" [(ngModel)]=\"settings.totalTables\" placeholder=\"Enter Total Tables\" />\n               </div>\n\n               <button class=\"btn btn-sm btn-success\" type=\"submit\">Save</button>\n            </form>\n         </div>\n      </div>\n      <!-- END panel-->\n   </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(af, toastr) {
        var _this = this;
        this.af = af;
        this.toastr = toastr;
        this.settings = {};
        this.settingDataRef = af.object('/settings');
        this.settingObservable = this.settingDataRef.valueChanges();
        this.settingObservable.subscribe(function (res) {
            _this.settings = res;
        });
    }
    SettingsComponent.prototype.onSubmitSetting = function (form) {
        var _this = this;
        this.settingDataRef.set({ totalVat: this.settings.totalVat, totalTables: this.settings.totalTables }).then(function (res) {
            _this.toastr.success('Settings updated Successfully!', 'Success!');
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/subscribers/subscribers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Subscribers\n<!-- <div class=\"pull-right\">\n            <label for=\"image-input\" class=\"file-upload\">\n              <a [routerLink]=\"'/news/addNews'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New News</button> </a>  \n            </label>\n </div> -->\n<small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Subscribers</small>\n</div>\n<div class=\"col-md-2\"></div>\n<div class=\"panel panel-default text-cente col-md-8\">\n<div class=\"panel-heading\">Subscribers Details</div>\n  <div class=\"table-responsive b0 customTable\">\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th class=\"\">\n                Email\n            </th>\n        </tr>\n        </thead> \n        <tbody>\n        <tr class=\"\" *ngFor=\"let item of subscribersData\">\n            <td>{{item.subscribe}}</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/subscribers/subscribers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/subscribers/subscribers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscribersComponent = (function () {
    function SubscribersComponent(af) {
        var _this = this;
        this.af = af;
        this.subscribeDataRef = af.list('/subscribe');
        this.subscribeObservable = this.subscribeDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.subscribeObservable.subscribe(function (res) {
            _this.subscribersData = res;
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
    SubscribersComponent.prototype.ngOnInit = function () {
    };
    SubscribersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscribers',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/subscribers/subscribers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/subscribers/subscribers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SubscribersComponent);
    return SubscribersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/table-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Table Booking\n  <small><a [routerLink]=\" ['/home'] \">Home</a> -> Table Booking</small>\n</div>\n<div class=\"waiting-loader\" *ngIf=\"loading == true\">\n    <i class=\"fa fa-5x fa-spin fa-spinner\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"panel panel-default\" *ngIf=\"loading == false\">\n  <div class=\"panel-heading\">Booking Details</div>\n  <div class=\"table-responsive b0\">\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <!-- <th class=\"text-center\">\n          <strong>Name</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Email</strong>\n        </th> -->\n        <!-- <th class=\"text-center\">\n          <strong>Mobile Number</strong>\n        </th> -->\n        <th class=\"text-center\">\n          <strong>Time Slot</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Date</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Person</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Table No.</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>status</strong>\n        </th>\n        <!-- <th class=\"text-center\">\n          <strong>Delivery Method</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Total</strong>\n        </th> -->\n        <th class=\"text-center\">\n          <strong>ACTION</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>Assign Table</strong>\n        </th>\n        <th class=\"text-center\">\n          <strong>View</strong>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"text-center\" *ngFor=\"let data of bookingData;let i = index \">\n        <td>{{data.time}}</td>\n        <td>{{data.date}}</td>\n        <td>{{data.person}}</td>\n        <td *ngIf=\"data.tableNumber\">{{data.tableNumber}}</td>\n        <td *ngIf=\"!data.tableNumber\">Not assigned</td>\n        <td class=\"text-center\">\n          <span class=\"label label-warning\" *ngIf=\"data.status =='Pending'\">{{data.status}}\n          </span>\n          <span class=\"label label-success\" *ngIf=\"data.status =='Approved'\">{{data.status}}\n          </span>\n          <span class=\"label label-danger\" *ngIf=\"data.status=='Cancelled'\">{{data.status}}\n          </span>\n        </td>\n        <td class=\"text-center\">\n          <select class=\"input-sm form-control\" (change)=\"onChangeStatus(i,$event,data.key)\">\n            <option>Select Status</option>\n            <option value=\"Approved\">Approved</option>\n            <option value=\"Cancelled\">Cancelled</option>\n          </select>\n        </td>\n        <td class=\"text-center\">\n          <select class=\"input-sm form-control\" (change)=\"onAssignTable(i,$event,data.key)\" \n          [disabled]=\"data.status != 'Approved' \" > \n            <option>Select Table</option>\n            <option *ngFor=\"let tab of tables\" value=\"{{tab.table}}\">{{tab.table}}</option>\n          </select>\n        </td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"ordersShow(data.key)\">\n            <em class=\"fa fa-search\"></em>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"panel-footer\">\n    <div class=\"row\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/table-booking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".waiting-loader {\n  margin-left: 38em;\n  margin-top: 20em;\n  color: #52ab8b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/table-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders_service__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableBookingComponent = (function () {
    function TableBookingComponent(route, af, toastr, ordersService, spinnerService) {
        var _this = this;
        this.route = route;
        this.af = af;
        this.toastr = toastr;
        this.ordersService = ordersService;
        this.spinnerService = spinnerService;
        this.bookingData = [];
        this.tables = [];
        this.loading = true;
        this.bookingDataRef = af.list('/table-bookings');
        this.bookingObservable = this.bookingDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.bookingObservable.subscribe(function (res) {
            _this.bookingData = res;
            _this.loading = false;
            console.log('booking data ' + JSON.stringify(_this.bookingData));
        });
        this.settingDataRef = af.object('/settings');
        this.settingObservable = this.settingDataRef.valueChanges();
        this.settingObservable.subscribe(function (res) {
            for (var i = 1; i <= res.totalTables; i++) {
                _this.tables.push({ table: i });
            }
        });
    }
    TableBookingComponent.prototype.onChangeStatus = function (index, event, key) {
        var _this = this;
        this.spinnerService.show();
        // console.log("index "+ index + " Event "+ event.target.value);
        this.bookingData[index].status = event.target.value;
        if (event.target.value === 'Approved') {
            this.spinnerService.hide();
            this.toastr.warning('Please assign table', 'Table booking');
        }
        if (event.target.value === 'Cancelled') {
            this.bookingDataRef.update(key, { status: event.target.value }).then(function (res) {
                var message = {
                    app_id: 'ace5d8a2-5018-4523-ab21-cff285d32524',
                    contents: { 'Try next time your booking ': event.target.value },
                    include_player_ids: ['31851f36-3730-4c4d-a129-fdcf380d4d86']
                };
                _this.af.list('/table-bookings/' + key + '/statusReading').push({ title: event.target.value, time: Date.now() });
                _this.ordersService.sendNotification(message).subscribe(function (response) {
                });
                _this.spinnerService.hide();
                _this.toastr.success('Table booking status updated!', 'Success!');
            });
        }
    };
    TableBookingComponent.prototype.onAssignTable = function (index, event, key) {
        var _this = this;
        this.spinnerService.show();
        // console.log("data "+ JSON.stringify(index) + " Event "+event.target.value);
        this.bookingData[index].tableNumber = event.target.value;
        // console.log("change data "+JSON.stringify(this.bookingData[index]));
        this.bookingDataRef.update(key, { tableNumber: event.target.value, status: 'Approved' }).then(function (res) {
            var message = {
                app_id: 'ace5d8a2-5018-4523-ab21-cff285d32524',
                contents: { 'Your booking approved, table number ': event.target.value },
                include_player_ids: ['31851f36-3730-4c4d-a129-fdcf380d4d86']
            };
            _this.af.list('/table-bookings/' + key + '/tableReading').push({ title: event.target.value, time: Date.now() });
            _this.ordersService.sendNotification(message).subscribe(function (response) {
            });
            _this.spinnerService.hide();
            _this.toastr.success('Table booking status updated!', 'Success!');
        });
    };
    TableBookingComponent.prototype.ordersShow = function (key) {
        this.route.navigate(['tables/view/', key]);
    };
    TableBookingComponent.prototype.ngOnInit = function () {
    };
    TableBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-booking',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/table-booking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/table-booking/table-booking.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__orders_orders_service__["a" /* OrdersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__orders_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], TableBookingComponent);
    return TableBookingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n View Table Booking\n  <small><a [routerLink]=\" ['/home'] \">Home -></a>\n    <a [routerLink]=\"['/tables/booking']\">Manage Table Booking  </a>->View Table Booking\n  </small>\n</div>\n   <h4 class=\"booking\">BOOKING INFORMATION</h4> \n<div class=\"col-masonry col-md-6 info\">\n  <div class=\"panel b m0\">\n    <div class=\"panel-heading\">\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"container\">\n            <div  class=\"row\">\n                    <div class=\" col-md-6\">\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Time Slot</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{tableDetails.time}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Booking Date</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{tableDetails.date}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Person</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{tableDetails.person}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Table No.</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{tableDetails.tableNumber}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Status</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{tableDetails.status}}</div>\n\t                    </div>\n                    </div>   \n              </div>\n              <h4 class=\"\"><u>Customer Information</u></h4>\n              <div  class=\"row\">\n                    <div class=\" col-md-6\">\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Name</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{userDetails.name}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">Email</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{userDetails.email}}</div>\n\t                    </div>\n\t                    <div class=\"row\">\n\t                      <div class=\"col-md-4\">mobileNo</div>\n\t                      <div class=\"col-md-8\">:&nbsp;&nbsp;{{userDetails.mobileNo}}</div>\n\t                    </div>\n\t                </div>   \n              </div>\n          </div>\n        </div>\n    </div>\n  "

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info {\n  margin-left: 280px; }\n\n.booking {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/table-booking/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = (function () {
    function ViewComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.tableDetails = {};
        this.userDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                console.log("Id " + Id);
                _this.tablesdataRef = _this.af.object('/table-bookings/' + Id);
                _this.tablesObservable = _this.tablesdataRef.valueChanges();
                _this.tablesObservable.subscribe(function (response) {
                    _this.tableDetails = response;
                    _this.userRef = _this.af.object('/users/' + response.userID);
                    _this.userObservable = _this.userRef.valueChanges();
                    _this.userObservable.subscribe(function (res) {
                        _this.userDetails = res;
                        console.log("user details " + JSON.stringify(_this.userDetails));
                    });
                    console.log("booking tables " + JSON.stringify(_this.tableDetails));
                });
            }
        });
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/table-booking/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Add Tags\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n          <a [routerLink]=\"['/tags/all']\"> Tags </a>->\r\n            New Tag\r\n </small>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-2\"></div>\r\n   <div class=\"col-sm-8\">\r\n   <!-- START panel-->\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\"><strong>New</strong> Tag</div>\r\n         <div class=\"panel-body\">\r\n            <form (ngSubmit)=\"onSubmitTag(f)\" #f=\"ngForm\">\r\n               <div class=\"form-group\">\r\n                  <label>Tag Name*</label>\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Enter Tag Name\" name=\"tag\" id=\"tag\" [(ngModel)]=\"tag.tags\"/>\r\n               </div>\r\n               <div class=\"form-group\">\r\n                  <div class=\"col-md-10\">\r\n                    <div class=\"col-md-2\"></div>\r\n                       <div class=\"col-md-9\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n      <!-- END panel-->\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTagsComponent = (function () {
    function AddTagsComponent(af, router, toastr, spinnerService) {
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.tag = {
            tags: ''
        };
        this.tagDataRef = af.list('/tags');
    }
    AddTagsComponent.prototype.onSubmitTag = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.tagDataRef.push(this.tag).then(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['/tags/all']);
            _this.toastr.success('Tags Added Successfully!', 'Success!');
        });
    };
    AddTagsComponent.prototype.cancel = function () {
        this.router.navigate(['/tags/all']);
    };
    AddTagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-tags',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddTagsComponent);
    return AddTagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\"> Edit Tags\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n          <a [routerLink]=\"['/tags/all']\"> Tags </a>->\r\n            Update Tag\r\n </small>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-2\"></div>\r\n   <div class=\"col-sm-8\">\r\n   <!-- START panel-->\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\"><strong>Update</strong> Tag</div>\r\n         <div class=\"panel-body\">\r\n                <form (ngSubmit)=\"onSubmitTag(f)\" #f=\"ngForm\">\r\n               <div class=\"form-group\">\r\n                  <label>Tag Name*</label>\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Enter Tag Name\" name=\"tag\" id=\"tag\" [(ngModel)]=\"tagDetails.tags\" />\r\n               </div>\r\n               <div class=\"form-group\">\r\n                    <button class=\"btn btn-info s-n-btn\" type=\"submit\">Update</button>\r\n                    <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n      <!-- END panel-->\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n-btn {\n  margin-right: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTagesComponent = (function () {
    function EditTagesComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.tagDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.tagsdataRef = _this.af.object('/tags/' + Id);
                _this.tagsObservable = _this.tagsdataRef.valueChanges();
                _this.tagsObservable.subscribe(function (response) {
                    _this.tagDetails = response;
                });
            }
        });
    }
    EditTagesComponent.prototype.onSubmitTag = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.tagsdataRef.update({
            tags: this.tagDetails.tags,
        }).then(function (res) {
            _this.spinnerService.hide();
            _this.toastr.success('Tags Updated Successfully!', 'Success!');
            _this.router.navigate(['/tags/all']);
        });
    };
    EditTagesComponent.prototype.cancel = function () {
        this.router.navigate(['/tags/all']);
    };
    EditTagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-tages',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditTagesComponent);
    return EditTagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Tags\r\n <div class=\"pull-right\">\r\n            <label for=\"image-input\" class=\"file-upload\">\r\n              <a [routerLink]=\"'/tags/addTags'\">  <button class=\"btn btn-success\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp;Add Tag</button> </a>\t\r\n            </label>\r\n </div>\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n            Tags\r\n </small>\r\n</div>\r\n<!-- Zero Configuration-->\r\n<div class=\"col-sm-2\"></div>\r\n<div class=\"col-sm-8\">\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Manage Tags</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <table datatable=\"\" class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"wd-md text-center custom\">Name</th>\r\n                        <th class=\"text-center\">Update</th>\r\n                       <th class=\"text-center\">Delete</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr class=\"text-center\" *ngFor=\"let tag of tags\">\r\n                        <td><a href=\"\">{{tag.tags}}</a>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                         <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"tagEdit(tag.key)\">\r\n                         <em class=\"fa fa-pencil\"></em>\r\n                         </button>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                         <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"tagDelete(tag.key)\">\r\n                         <em class=\"fa fa-trash-o\"></em>\r\n                         </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom {\n  width: 70% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var TagsComponent = (function () {
    function TagsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.tagsDataRef = af.list('/tags');
        this.tagsObservable = this.tagsDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.tagsObservable.subscribe(function (res) {
            _this.tags = res;
        });
    }
    TagsComponent.prototype.tagEdit = function (key) {
        this.router.navigate(['/tags/editTags', key]);
    };
    TagsComponent.prototype.tagDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.tagsDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'Tag Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n    Add New Testimonials\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n        <a [routerLink]=\"['/testimonials/manageTestimonials']\"> Manage Testimonials </a>->\n        Add Testimonials\n    </small>\n</div>\n<div class=\"container-md\">\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-9\">\n            <div class=\"panel b\">\n                <div class=\"panel-heading  text-bold bg-purple-dark\">Add Testimonials</div>\n                <div class=\"panel-body\">\n                    <form (ngSubmit)=\"onSubmitTestimonial(f)\" #f=\"ngForm\" >\n                        <div class=\"form-group\">\n                            <label>Name*</label>\n                            <input class=\"form-control\" required placeholder=\"Your Name\" name=\"name\" id=\"name\" [(ngModel)]=\"testimonial.name\"/>\n                        </div>\n                         <div class=\"form-group\">\n                            <label>Company Name*</label>\n                            <input class=\"form-control\" type=\"text\" required name=\"companyName\" id=\"companyName\" [(ngModel)]=\"testimonial.companyName\"/>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label>Description*</label>\n                            <textarea class=\"form-control\" rows=\"4\" name=\"message\" id=\"message\" [(ngModel)]=\"testimonial.message\"\n                                required></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Rating*</label>\n                            <span class=\"rating\">\n                                <rating name=\"ratingReview\" [(ngModel)]=\"testimonial.rating\" [max]=\"maxRat\" \n                                [readonly]=\"isReadonly\"\n                                stateOn=\"fa fa-star text-yellow\" stateOff=\"fa fa-star-o\">\n                                </rating>\n                            </span>\n                        </div>\n                        <div class=\"row form-group\">\n                        \t<div class=\"col-md-6\">\n                                <img src=\"{{url}}\" alt=\"Image\" class=\"profImg\">\n                            </div>\n                           <div class=\"col-md-6 updateBtn\">\n                                <div class=\" btn btn-primary choose-btn pull-right\">\n                                    <em class=\"fa fa-upload mr\"></em> Upload File\n                                    <input id=\"image-input\" type=\"file\" class=\"selectBtn\" \n                                    (change)=\"readerImage($event)\" required=\"\" \n                                    ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\">\n                                     </div>\n                                  </div>\n                            <!--COL-->\n                        </div>\n                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                        <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\" [disabled]=\"!f.valid\" >Add Testimonials</button>\n                        <p>\n                            <small class=\"text-muted\">* Required Fields</small>\n                        </p>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* custon file upload */\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n/*.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    }*/\n.choose-btn {\n  padding: 5px 15px;\n  margin: 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.s-n-btn {\n  margin-left: 1.3em; }\n\n.rating {\n  margin-left: 30px; }\n\n.review {\n  font-size: 20px;\n  color: #FFD700; }\n\n.uploadImg {\n  margin-top: 30px;\n  margin-left: 112px; }\n\n.profImg {\n  height: 120px;\n  width: 120px; }\n\n.updateBtn {\n  margin-top: 50px; }\n\n.uploadBtn {\n  margin-right: 20px; }\n\n.selectBtn {\n  opacity: 0;\n  margin-top: -20px; }\n\n.choose-btn {\n  height: 30px;\n  width: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTestimonialsComponent = (function () {
    function AddTestimonialsComponent(af, router, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = './assets/img/profile/people-01.jpg';
        this.testimonial = {};
        this.ratingStates = [
            { stateOn: 'fa fa-star',
                stateOff: 'fa fa-star-o' },
        ];
        this.maxRat = 5;
        this.isReadonly = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.testimonialDataRef = af.list('/testimonials');
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
    }
    AddTestimonialsComponent.prototype.readerImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Submit function
    AddTestimonialsComponent.prototype.onSubmitTestimonial = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.testimonial.thumb = res.url;
            _this.testimonialDataRef.push(_this.testimonial).then(function (resp) {
                _this.spinnerService.hide();
                _this.toastr.success('News Data Added Successfully!', 'Success!');
                _this.router.navigate(['/testimonials/manageTestimonials']);
            });
        };
    };
    AddTestimonialsComponent.prototype.cancel = function () {
        this.router.navigate(['/testimonials/manageTestimonials']);
    };
    AddTestimonialsComponent.prototype.ngOnInit = function () {
    };
    AddTestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-testimonials',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddTestimonialsComponent);
    return AddTestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n    Update Testimonials\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n           <a [routerLink]=\"['/testimonials/manageTestimonials']\"> Manage Testimonials </a>->\n            Update Testimonials\n    </small>\n</div>\n<div class=\"container-md\">\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n<div class=\"col-md-9\">\n                <div class=\"panel b\">\n                    <div class=\"panel-heading  text-bold bg-purple-dark\">Update Testimonials</div>\n                    <div class=\"panel-body\">\n                       <form (ngSubmit)=\"onUpdateTestimonial(f)\" #f=\"ngForm\" >\n                        <div class=\"form-group\">\n                            <label>Name*</label>\n                            <input class=\"form-control\" placeholder=\"Your name\" required name=\"name\" id=\"name\" [(ngModel)]=\"testimonial.name\"/>\n                        </div>\n                         <div class=\"form-group\">\n                            <label>Company Name*</label>\n                            <input class=\"form-control\" type=\"text\" required name=\"companyName\" id=\"companyName\" [(ngModel)]=\"testimonial.companyName\"/>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label>Description*</label>\n                            <textarea class=\"form-control\" rows=\"4\" name=\"message\" id=\"message\" [(ngModel)]=\"testimonial.message\"\n                                required></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Rating*</label>\n                            <span class=\"rating\">\n                                <rating name=\"ratingReview\" [(ngModel)]=\"testimonial.rating\" [max]=\"maxRat\" \n                                [readonly]=\"isReadonly\"\n                                stateOn=\"fa fa-star text-yellow\" stateOff=\"fa fa-star-o\">\n                                </rating>\n                            </span>\n                        </div>\n                        \n                          <div class=\"form-group\">\n                                <label>Thumb</label>\n                                <label for=\"image-input\" class=\"file-upload\">\n                                <div class=\"col-md-6\">\n                                   <img src=\"{{url}}\" alt=\"Image\" class=\"profImg\">\n                                </div>\n                                  <div class=\"col-md-6 updateBtn\">\n                                    <div class=\"fileUpload btn btn-primary choose-btn pull-right\"\n                                   ><em class=\"fa fa-upload mr\"></em> Upload File</div>\n                                    <input id=\"image-input\" type=\"file\" \n                                    (change)=\"readerImage($event)\" required=\"\" \n                                    ng2FileSelect [uploader]=\"uploader\"\n                                     accept=\"image/*\">\n                                  </div>\n                                  \n                                </label>\n                            </div>\n                        <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                        <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\" \n                        [disabled]=\"!f.valid\" >Update</button>\n                        <p>\n                            <small class=\"text-muted\">* Required Fields</small>\n                        </p>\n                    </form>\n                    </div>\n                </div>\n            </div>\n          </div>\n</div>\n\n<!-- class=\" img-responsive img-thumbnail profileImg\" -->"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\n  margin-left: 30px; }\n\n.review {\n  font-size: 20px;\n  color: #FFD700; }\n\n.profileImg {\n  height: 130px;\n  width: 130px; }\n\n.updateBtn {\n  margin-top: 50px; }\n\n.uploadBtn {\n  margin-right: 20px; }\n\n.profImg {\n  height: 120px;\n  width: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditTestimonialsComponent = (function () {
    function EditTestimonialsComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = './assets/img/profile/people-01.jpg';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.testimonial = {};
        this.imageRef = false;
        this.ratingStates = [
            { stateOn: 'fa fa-star',
                stateOff: 'fa fa-star-o' },
        ];
        this.maxRat = 5;
        this.isReadonly = false;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.categoriesdataRef = _this.af.object('/testimonials/' + Id);
                _this.af.object('/testimonials/' + Id).valueChanges()
                    .subscribe(function (response) {
                    _this.testimonial = response;
                    _this.url = response.thumb;
                });
            }
        });
    }
    EditTestimonialsComponent.prototype.readerImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                _this.imageRef = true;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    EditTestimonialsComponent.prototype.onUpdateTestimonial = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.imageRef) {
            this.uploader.uploadAll();
            console.log('statement');
            this.uploader.onSuccessItem = function (item, response, status, headers) {
                var res = JSON.parse(response);
                console.log('statement');
                _this.categoriesdataRef.update({
                    name: _this.testimonial.name,
                    companyName: _this.testimonial.companyName,
                    message: _this.testimonial.message,
                    rating: _this.testimonial.rating,
                    thumb: res.url,
                }).then(function (resp) {
                    _this.imageRef = false;
                    _this.spinnerService.hide();
                    _this.router.navigate(['/testimonials/manageTestimonials']);
                    _this.toastr.success('Testimonials Data Updated Successfully!', 'Success!');
                });
            };
        }
        else {
            this.categoriesdataRef.update({
                name: this.testimonial.name,
                companyName: this.testimonial.companyName,
                message: this.testimonial.message,
                rating: this.testimonial.rating
            }).then(function (res) {
                _this.spinnerService.hide();
                _this.router.navigate(['/testimonials/manageTestimonials']);
                _this.toastr.success('Testimonials Data Updated Successfully!', 'Success!');
            });
        }
    };
    EditTestimonialsComponent.prototype.cancel = function () {
        this.router.navigate(['/testimonials/manageTestimonials']);
    };
    EditTestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-testimonials',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditTestimonialsComponent);
    return EditTestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Testimonials\n<div class=\"pull-right\">\n            <label class=\"file-upload\">\n              <a [routerLink]=\"'/testimonials/addTestimonials'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Testimonials</button> </a>  \n            </label>\n </div><br/><br/>\n<small><a [routerLink]=\" ['/home'] \">Dashboard</a>  ->  Testimonials</small>\n</div>\n\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">Testimonials Details</div>\n  <div class=\"table-responsive b0 customTable\">\n    <table class=\"table table-striped\" >\n        <thead>\n        <tr>\n            <th class=\"thsearch text-center\">\n               Name\n                <form (keyup)=\"searchTestimonials(siteName.value)\">\n                    <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                           id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                           placeholder=\"Search\" #siteName>\n                </form>\n            </th>\n            <th class=\"thnosearch text-center\">\n                Edit\n            </th>\n            <th class=\"thnosearch text-center\">\n               View\n            </th>\n             <th class=\"thnosearch text-center\">\n             \tDelete\n             </th>\n            \n            <th class=\"thnoitem\"></th>\n        </tr>\n        </thead>\n        <tbody>\n          <tr class=\" text-center\" *ngFor=\"let item of testimonials\">\n            <td>{{item.name}}</td>\n            <td class=\"icons\">\n                  <a (click)=\"updateTestimonial(item.key)\" > \n                  <button class=\"btn btn-sm btn-primary\" type=\"button\">\n                  <i class=\"fa fa-pencil\"></i>\n                  </button>\n                  </a>\n            </td>\n            <td class=\"icons\">\n                   <a (click)=\"viewTestimonial(item.key)\"> \n                   <button class=\"btn btn-sm btn-default\" type=\"button\">\n                   <i class=\"fa fa-search\"></i>\n                   </button>\n                   </a>\n            </td>\n            <td class=\"icons\">\n              <button class=\"btn btn-sm btn-danger delete \" type=\"button\" (click)=\"testimonialDelete(item.key)\">\n              <i class=\"fa fa-trash-o\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"5\" class=\"customPagination\">\n                \n            </td>\n        </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"panel-footer\">\n        <div class=\"row\">\n        \n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customPagination {\n  padding-right: 150px !important; }\n\n.customTable {\n  margin-right: -136px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 20%; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n\n.icons {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var TestimonialsComponent = (function () {
    function TestimonialsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.testimonials = [];
        this.testimonialRef = this.af.list('/testimonials');
        this.testimonialsData = this.testimonialRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.testimonialsData.subscribe(function (res) {
            _this.testimonials = res;
        });
    }
    TestimonialsComponent.prototype.searchTestimonials = function (ev) {
        var _this = this;
        var val = ev;
        this.testimonialsData = this.af.list('/testimonials', function (ref) { return ref.orderByChild('name').startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.testimonialsData
            .subscribe(function (data) {
            _this.testimonials = data;
        });
    };
    TestimonialsComponent.prototype.viewTestimonial = function (key) {
        this.router.navigate(['/testimonials/viewTestimonials', key]);
    };
    TestimonialsComponent.prototype.updateTestimonial = function (key) {
        this.router.navigate(['/testimonials/editTestimonials', key]);
    };
    TestimonialsComponent.prototype.testimonialDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.testimonialRef.remove(key).then(function (resp) {
                    swal('Deleted!', 'Testimonial Data Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View Testimonials\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n        <a [routerLink]=\"['/testimonials/manageTestimonials']\"> Manage Testimonials </a>->\n            View Testimonials\n </small>\n </div>\n<div class=\"col-masonry\">\n        <div class=\"panel b m0\">\n            <div class=\"panel-heading\">\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <a>\n                            <img class=\"img-responsive img-thumbnail\" src=\"{{testimonial.thumb}}\" alt=\"Image\" />\n                        </a>\n                    </div>\n                    <div class=\"col-md-8\">\n                    <div>\n                        <h4 class=\"media-heading\">Name</h4>\n                        <p>{{testimonial.name}}</p>\n                    </div>\n                    <div>\n                        <h4 class=\"media-heading\">Comapany Name</h4>\n                        <p>{{testimonial.companyName}}</p>\n                    </div>\n                    <div> \n                        <h4 class=\"media-heading\">Ratings</h4>\n                        <rating name=\"ratingReview\" [(ngModel)]=\"testimonial.rating\" \n                        [max]=\"maxRat\" \n                        [readonly]=\"isReadonly\"\n                        stateOn=\"fa fa-star text-yellow\" stateOff=\"fa fa-star-o\">\n                        </rating>\n                    </div>\n                    <div>\n                        <h4 class=\"media-heading\">Description</h4>\n                    \n                        <p>{{testimonial.message}}</p>\n                           \n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details {\n  margin: 20px; }\n\n.review {\n  font-size: 20px;\n  color: #FFD700; }\n\n.img-thumbnail {\n  border-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTestimonialsComponent = (function () {
    function ViewTestimonialsComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.testimonial = {};
        this.ratingStates = [
            { stateOn: 'fa fa-star',
                stateOff: 'fa fa-star-o' },
        ];
        this.maxRat = 5;
        this.isReadonly = true;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.testimonialRef = _this.af.object('/testimonials/' + Id);
                _this.testimonialObservable = _this.testimonialRef.valueChanges();
                _this.testimonialObservable.subscribe(function (response) {
                    _this.testimonial = response;
                });
            }
        });
    }
    ViewTestimonialsComponent.prototype.ngOnInit = function () {
    };
    ViewTestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-testimonials',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewTestimonialsComponent);
    return ViewTestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\r\n    Add User\r\n <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\r\n        <a [routerLink]=\"['/users/manageUsers']\"> Users Detail </a>->\r\n            Add User\r\n </small>\t\r\n</div>\r\n<div class=\"container-md\">\r\n<div class=\"row\">\r\n<div class=\"col-md-1\"></div>\r\n<div class=\"col-md-10\">\r\n                <div class=\"panel b\">\r\n                    <div class=\"panel-heading  text-bold bg-purple-dark\">Add User</div>\r\n                    <div class=\"panel-body\">\r\n                            <form (ngSubmit)=\"onAddUsers(f)\" #f=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name*</label>\r\n                                <input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" [(ngModel)]=\"userDetails.name\" placeholder=\"Enter Name...\" required />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Email*</label>\r\n                                <input class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"userDetails.email\" type=\"email\" placeholder=\"Enter Email...\" required />\r\n                            </div>\r\n                             <div class=\"form-group\">\r\n                                <label>Password*</label>\r\n                                <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"userDetails.password\" placeholder=\"sEnter Password...\" required />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Mobile Number*</label>\r\n                                <input class=\"form-control\" name=\"mobileNo\" id=\"mobileNo\" [(ngModel)]=\"userDetails.mobileNo\" type=\"text\" placeholder=\"Enter Contact Number...\" required />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Role*</label>\r\n                                <select name=\"role\" [(ngModel)]=\"userDetails.role\" required (change)=\"roleChange()\">\r\n                                    <option value=\"User\" selected>User</option>\r\n                                    <option value=\"Admin\">Admin</option>\r\n                                    <option value=\"Others\">Vendor</option>\r\n                                </select>\r\n                                <input class=\"form-control\" name=\"otherRole\" id=\"otherRole\" [(ngModel)]=\"otherRole\" type=\"text\" placeholder=\"Enter Vendor Code\" required  *ngIf=\"others\"/>\r\n                            </div>\r\n                            \r\n                            <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\r\n\r\n                            <button class=\"btn btn-info pull-right\" type=\"submit\">Add User</button>\r\n                            <p>\r\n                                <small class=\"text-muted\">* Required Fields</small>\r\n                            </p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/add-user/add-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddUserComponent = (function () {
    function AddUserComponent(route, router, af, authentication, toastr, spinnerService) {
        this.route = route;
        this.router = router;
        this.af = af;
        this.authentication = authentication;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.userDetails = {
            name: '',
            email: '',
            mobileNo: '',
            role: 'Others',
            password: ''
        };
        this.others = false;
        //   this.af.object('/users');
        this.roleChange();
    }
    AddUserComponent.prototype.onAddUsers = function (form) {
        var _this = this;
        this.spinnerService.show();
        if (this.userDetails.role === 'Others') {
            this.role = this.otherRole;
        }
        else {
            this.role = this.userDetails.role;
        }
        console.log('Users Data : ' + JSON.stringify(this.userDetails));
        /*    this.authentication.auth.createUserWithEmailAndPassword(this.userDetails.email, this.userDetails.password)
         .then(success => {
           console.log("Auth Uid"+success.auth.uid );
                this.af.object('/users/'+ success.auth.uid).update({
                      email:this.userDetails.email,
                   name:this.userDetails.name,
                   mobileNo:this.userDetails.mobileNo,
                   role:'User'
           }).then((res)=>{
           console.log("Success");
            this.router.navigate(['/users/manageUsers'])
         })
      })
        */
        //   var config = {apiKey: "apiKey",
        // authDomain: "projectId.firebaseapp.com",
        // databaseURL: "https://databaseName.firebaseio.com"};
        var secondaryApp = __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["c" /* firebaseConfigTwo */], 'secondary');
        secondaryApp.auth().createUserWithEmailAndPassword(this.userDetails.email, this.userDetails.password).then(function (res) {
            _this.af.object('/users/' + res.uid).update({
                email: _this.userDetails.email,
                name: _this.userDetails.name,
                mobileNo: _this.userDetails.mobileNo,
                //               role:'User',
                role: _this.role
            }).then(function (response) {
                secondaryApp.auth().signOut();
                _this.spinnerService.hide();
                _this.toastr.success('User Added Successfully !', 'Success!');
                _this.router.navigate(['/users/manageUsers']);
            }).catch(function (error) {
                _this.spinnerService.hide();
                _this.toastr.error('User Not Added!', 'Error!');
            });
        });
    };
    AddUserComponent.prototype.cancel = function () {
        this.router.navigate(['/users/manageUsers']);
    };
    AddUserComponent.prototype.roleChange = function () {
        if (this.userDetails.role === 'Others') {
            this.others = true;
        }
        else {
            this.others = false;
        }
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/users/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/users/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Users Detail\n    <div class=\"pull-right\">\n        <label class=\"file-upload\">\n            <a [routerLink]=\"'/users/addUser'\">\n                <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New User</button>\n            </a>\n        </label>\n    </div>\n    <small><a [routerLink]=\" ['/home'] \">Dashboard</a> -> Users Detail</small>\n</div>\n<!-- Zero Configuration-->\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">All Users Information</div>\n    <div class=\"panel-body\">\n        <div class=\"table-responsive customTable\">\n            <table class=\"table table-striped\">\n                <thead>\n                <tr>\n                    <th class=\"thsearch text-center\">\n                        Name\n                    </th>\n                    <th class=\"thsearch text-center\">\n                        Email\n                    </th>\n                    <th class=\"thsearch text-center\">\n                        Mobile Number\n                    </th>\n                    <th class=\"thnosearch  text-center\">\n                        View\n                    </th>\n                    <th class=\"thnosearch  text-center\">\n                        Delete\n                    </th>\n\n                    <th class=\"thnoitem\"></th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let item of users\">\n                <tr class=\" text-center\" *ngIf=\"item.role != 'Admin'\">\n                    <td>{{item.name}}\n                    <td>{{item.email}}</td>\n                    <td>{{item.mobileNo}}</td>\n                    <td>\n                        <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"usersShow(item.key)\"><em\n                                class=\"fa fa-search\"></em></button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"usersDelete(item.key)\"><em\n                                class=\"fa fa-trash-o\"></em></button>\n                    </td>\n                </tr>\n                </tbody>\n                <tfoot>\n                <tr>\n                    <td colspan=\"5\">\n                    </td>\n                </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customTable {\n  margin-right: -48px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var UsersComponent = (function () {
    function UsersComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.usersDataRef = af.list('/users');
        this.userObservable = this.usersDataRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.userObservable.subscribe(function (res) {
            _this.users = res;
        });
    }
    UsersComponent.prototype.usersShow = function (key) {
        this.router.navigate(['/users/viewUser', key]);
    };
    UsersComponent.prototype.usersDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.usersDataRef.remove(key).then(function (res) {
                    swal('Deleted!', 'User Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/view-user/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">View Users\r\n<small>\r\n        <a [routerLink]=\"['/users/manageUsers']\"> Manage Users </a>->\r\n            View Users \r\n </small>\r\n </div>\r\n<div class=\"col-masonry\">\r\n        <div class=\"panel b m0\">\r\n            <div class=\"panel-heading\">\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                     <div class=\"col-lg-8\">\r\n                     <div class=\"row\">\r\n                    <div class=\"col-lg-5\">\r\n                        <h4 class=\"media-heading\">Name</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <p>{{userDetails.name}}</p>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                     <div class=\"col-lg-8\">\r\n                     <div class=\"row\">\r\n\r\n                    <div class=\"col-lg-5\">\r\n                        <h4 class=\"media-heading\">Email</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <p>{{userDetails.email}}</p>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                     <div class=\"col-lg-8\">\r\n                     <div class=\"row\">\r\n                    <div class=\"col-lg-5\">\r\n                        <h4 class=\"media-heading\">Mobile Number</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <p>{{userDetails.mobileNo}}</p>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/view-user/view-users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/users/view-user/view-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewUserComponent = (function () {
    function ViewUserComponent(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.userDetails = {};
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.userRef = _this.af.object('/users/' + Id);
                _this.userObservable = _this.userRef.valueChanges();
                _this.userObservable.subscribe(function (response) {
                    _this.userDetails = response;
                });
            }
        });
    }
    ViewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-users',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/users/view-user/view-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/users/view-user/view-users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n  Add New Vendor\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n      <a [routerLink]=\"['/vendors/manageVendors']\"> Manage Vendors </a>->\n      Add Vender\n  </small>\n</div>\n<div class=\"container-md\">\n  <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-9\">\n          <div class=\"panel b\">\n              <div class=\"panel-heading  text-bold bg-purple-dark\">Add Vendor</div>\n              <div class=\"panel-body\">\n                  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n\n                      <div class=\"form-group\">\n                          <label>Title*</label>\n                          <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\"\n                                 [(ngModel)]=\"vendor.title\"/>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Vendor Code*</label>\n                        <input class=\"form-control\" type=\"text\" required name=\"code\" id=\"code\"\n                               [(ngModel)]=\"vendor.code\"/>\n                    </div>\n                      <div class=\"form-group\">\n                        <label>Description*</label>\n                        <textarea class=\"form-control\" rows=\"3\" required name=\"description\" id=\"description\"\n                               [(ngModel)]=\"vendor.description\"></textarea>\n                    </div>\n                      <div class=\"form-group\">\n                          <label>Address*</label>\n                          <textarea class=\"form-control\" rows=\"3\" name=\"address\" id=\"address\"\n                                    [(ngModel)]=\"vendor.address.address\" required></textarea>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>City*</label>\n                        <input type=\"text\" class=\"form-control\" rows=\"1\" name=\"city\" id=\"city\"\n                                  [(ngModel)]=\"vendor.address.city\" required />\n                    </div>\n                  <div class=\"form-group\">\n                    <label>Zipcode*</label>\n                    <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"zipCode\" id=\"zipCode\"\n                              [(ngModel)]=\"vendor.address.zipcode\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label>State*</label>\n                    <input type=\"text\" class=\"form-control\" rows=\"1\" name=\"state\" id=\"state\"\n                              [(ngModel)]=\"vendor.address.state\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label>Latitude*</label>\n                    <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"lat\" id=\"lat\"\n                              [(ngModel)]=\"vendor.address.lat\" required />\n                </div>\n                <div class=\"form-group\">\n                <label>Longitude*</label>\n                    <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"lng\" id=\"lng\"\n                              [(ngModel)]=\"vendor.address.lng\" required />\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone*</label>\n                  <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"phone\" id=\"phone\"\n                            [(ngModel)]=\"vendor.phone\" required />\n                </div>\n                <div class=\"form-group\">\n                  <label>Email*</label>\n                  <input type=\"email\" class=\"form-control\" rows=\"1\" name=\"email\" id=\"email\"\n                            [(ngModel)]=\"vendor.email\" required />\n              </div>\n                      <div class=\"row form-group\">\n                          <div class=\"col-md-4\">\n                              <div class=\" fileUpload btn btn-primary choose-btn\">\n                                  <span> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> &nbsp; Upload</span>\n                                  <input type=\"file\" class=\"upload\" ng2FileSelect [uploader]=\"uploader\"\n                                         accept=\"image/*\" (change)=\"readUrl($event)\">\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                              <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\"/>\n                          </div><!--COL-->\n                      </div>\n                      <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                      <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Add Vendor</button>\n                      <p>\n                          <small class=\"text-muted\">* Required Fields</small>\n                      </p>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px;\n  margin: 0px; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.s-n-btn {\n  margin-left: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVendorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddVendorComponent = (function () {
    function AddVendorComponent(af, router, toastr, spinnerService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = '';
        this.vendor = { title: '',
            description: '',
            address: {},
            email: '',
            thumb: '' };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_1_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.vendorRef = af.list('/vendors');
        // Override onSuccessItem to retrieve the imageId
        this.uploader.onAfterAddingFile = function (item) {
            item.url = _this.uploader.options.url;
            return item;
        };
    }
    AddVendorComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddVendorComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.spinnerService.show();
        //   this.af.object('/main-categories/'+ this.category.mainCategory).update({
        //       hasChild: true
        //   }).then(success => {
        //     this.category.hasChild = false;
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.vendor.thumb = res.url;
            _this.vendorRef.push(_this.vendor).then(function (re) {
                _this.spinnerService.hide();
                _this.toastr.success('Vendor Added Successfully!', 'Success!');
                _this.router.navigate(['/vendors/manageVendors']);
            });
        };
        //    });
    };
    AddVendorComponent.prototype.cancel = function () {
        this.router.navigate(['/vendors/manageVendors']);
    };
    AddVendorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-vendor',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AddVendorComponent);
    return AddVendorComponent;
}());

// }


/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading \">\n  Update Vendor\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a> ->\n         <a [routerLink]=\"['/vendors/manageVendors']\"> Manage Vendors </a>->\n          Update Vendor\n  </small>\n</div>\n<div class=\"container-md\">\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n<div class=\"col-md-9\">\n              <div class=\"panel b\">\n                  <div class=\"panel-heading  text-bold bg-purple-dark\">Update Category</div>\n                  <div class=\"panel-body\">\n                     <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                          <div class=\"form-group\">\n                              <label>Title*</label>\n                              <input class=\"form-control\" type=\"text\" required name=\"title\" id=\"title\" [(ngModel)]=\"vendorDetails.title\" />\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Vendor Code*</label>\n                            <input class=\"form-control\" type=\"text\" required name=\"code\" id=\"code\" [(ngModel)]=\"vendorDetails.code\" />\n                        </div>\n\n                          <div class=\"form-group\">\n                            <label>Description*</label>\n                            <textarea class=\"form-control\" rows=\"3\" required name=\"description\" id=\"description\" [(ngModel)]=\"vendorDetails.description\"></textarea>\n                        </div>\n                          <div class=\"form-group\">\n                              <label>Address*</label>\n                              <textarea class=\"form-control\" rows=\"3\" name=\"address\" id=\"address\" [(ngModel)]=\"vendorDetails.address.address\" required></textarea>\n                          </div>\n                          <div class=\"form-group\">\n                            <label>City*</label>\n                            <input type=\"text\" class=\"form-control\" rows=\"1\" name=\"city\" id=\"city\" [(ngModel)]=\"vendorDetails.address.city\" required />\n                        </div>\n                        <div class=\"form-group\">\n                          <label>State*</label>\n                          <input type=\"text\" class=\"form-control\" rows=\"1\" name=\"state\" id=\"state\" [(ngModel)]=\"vendorDetails.address.state\" required />\n                      </div>\n                        <div class=\"form-group\">\n                          <label>Zipcode*</label>\n                          <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"zipcode\" id=\"zipcode\" [(ngModel)]=\"vendorDetails.address.zipcode\" required />\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Latitude*</label>\n                        <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"lat\" id=\"lat\" [(ngModel)]=\"vendorDetails.address.lat\" required />\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Longitude*</label>\n                      <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"lng\" id=\"lng\" [(ngModel)]=\"vendorDetails.address.lng\" required />\n                  </div>\n                      <div class=\"form-group\">\n                        <label>Phone*</label>\n                        <input type=\"number\" class=\"form-control\" rows=\"1\" name=\"phone\" id=\"phone\" [(ngModel)]=\"vendorDetails.phone\" required />\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Email*</label>\n                        <input type=\"email\" class=\"form-control\" rows=\"1\" name=\"email\" id=\"email\" [(ngModel)]=\"vendorDetails.email\" required />\n                      </div>\n                          <div class=\"form-group\">\n                              <label>Thumb</label>\n                              <label for=\"image-input\" class=\"file-upload\">\n                              <div class=\"col-md-6\" [hidden]=\"url !=''\">\n                                 <img class=\" img-responsive img-thumbnail\" src=\"{{vendorDetails.thumb}}\" alt=\"Image\" height=\"70px\"/>\n                               </div>\n                                <div class=\"col-md-6\" [hidden]=\"url ==''\">\n                                 <img class=\" img-responsive img-thumbnail\" [src]=\"url\" alt=\"Image\" height=\"70px\"/>\n                               </div>\n                                <div class=\"col-md-6\">\n                                  <div class=\"fileUpload btn btn-primary choose-btn pull-right\"><em class=\"fa fa-upload mr\"></em> Choose File</div>\n                                  <input id=\"image-input\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"readUrl($event)\">\n                                </div>\n                                <!--   <div class=\"col-md-6\">\n                                 <img class=\"media-object img-thumbnail thumb96\" [src]=\"url\" alt=\"Image\" />\n                                 </div><!--COL --> \n                              </label>\n                          </div>\n                            <button class=\"btn btn-danger pull-right s-n-btn\" (click)=\"cancel()\">Cancel</button>\n                             <button class=\"btn btn-primary pull-right s-n-btn\" type=\"submit\">Update Vendor</button>\n\n                          <p>\n                              <small class=\"text-muted\">* Required Fields</small>\n                          </p>\n                      </form>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n-btn {\n  margin-right: 1.3em; }\n\n/* custon file upload */\ninput[type=\"file\"] {\n  display: block;\n  color: transparent; }\n\n.img-thumbnail {\n  border: 0 !important;\n  padding: 0;\n  border-radius: 0; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer; }\n\n.choose-btn {\n  padding: 5px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVendorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditVendorComponent = (function () {
    function EditVendorComponent(route, router, af, toastr, spinnerService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.af = af;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.url = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_2_ng2_cloudinary__["a" /* CloudinaryOptions */](__WEBPACK_IMPORTED_MODULE_5__firebase_config__["a" /* cloudinarUpload */]));
        this.vendorDetails = { address: {} };
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (Id) {
            if (Id != null) {
                _this.vendorsdataRef = _this.af.object('/vendors/' + Id);
                _this.af.object('/vendors/' + Id).valueChanges()
                    .subscribe(function (response) {
                    _this.vendorDetails = response;
                    //  this.vendorRef = this.af.list('/main-categories');
                    //   this.categoryData = this.catRef.snapshotChanges().map(changes => {
                    //    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                    //  });
                    //   this.categoryData.subscribe((res)=>{
                    //     console.log(res);
                    //    this.mainCategories = res;
                    //   });
                });
            }
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.url = _this.uploader.options.url;
            localStorage.setItem('image', 'image Is going');
            return item;
        };
    }
    EditVendorComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (data) {
                _this.url = data.target.result;
                // this.imageRef = 1;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    EditVendorComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.vendorsdataRef.update({
                title: _this.vendorDetails.title,
                address: _this.vendorDetails.address,
                code: _this.vendorDetails.code,
                thumb: res.url,
                //   city: this.vendorDetails.city,
                //   zipcode: this.vendorDetails.zipcode,
                phone: _this.vendorDetails.phone,
                email: _this.vendorDetails.email,
                description: _this.vendorDetails.description
            }).then(function (re) {
                localStorage.removeItem('image');
                _this.spinnerService.hide();
                _this.router.navigate(['/vendors/manageVendors']);
                _this.toastr.success('Vendors Data Updated Successfully!', 'Success!');
            });
        };
        if (localStorage.getItem('image') == null) {
            this.vendorsdataRef.update({
                title: this.vendorDetails.title,
                address: this.vendorDetails.address,
                code: this.vendorDetails.code,
                // city: this.vendorDetails.city,
                // zipcode: this.vendorDetails.zipcode,
                phone: this.vendorDetails.phone,
                email: this.vendorDetails.email,
                description: this.vendorDetails.description
            }).then(function (res) {
                _this.spinnerService.hide();
                _this.router.navigate(['/vendors/manageVendors']);
                _this.toastr.success('Vendors Data Updated Successfully!', 'Success!');
            });
        }
    };
    EditVendorComponent.prototype.cancel = function () {
        this.router.navigate(['/vendors/manageVendors']);
    };
    EditVendorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-vendor',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EditVendorComponent);
    return EditVendorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/vendors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Vendors\n  <div class=\"pull-right\"> \n              <label class=\"file-upload\">\n                <a [routerLink]=\"'/vendors/addVendor'\">  <button class=\"btn btn-warning\"><em class=\"fa fa-plus\"></em>&nbsp;&nbsp; Add New Vendor</button> </a>  \n              </label>\n   </div><br/><br/>\n  <small><a [routerLink]=\" ['/home'] \">Dashboard</a>  ->  Vendors</small>\n  </div>\n  \n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Vendors Details</div>\n    <div class=\"table-responsive b0 customTable\">\n      <table class=\"table table-striped\">\n          <thead>\n          <tr>\n              <th class=\"thsearch text-center\">\n                 Name\n                  <form (keyup)=\"getVendor(siteName.value)\">\n                      <input class=\"form-control searchinput\" type=\"text\" name=\"siteVal\"\n                             id=\"siteVal\" [(ngModel)]=\"siteVal\"\n                             placeholder=\"Search\" #siteName>\n                  </form>\n              </th>\n              <th class=\"thnosearch text-center\">\n                  Edit\n              </th>\n              <th class=\"thnosearch text-center\">\n                  Delete\n              </th>\n               <th class=\"thnosearch text-center\">\n                  View\n              </th>\n              \n              <th class=\"thnoitem\"></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr class=\" text-center\" *ngFor=\"let item of vendors\">\n              <td>{{item.title}}</td>\n              <td>\n               <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"vendorEdit(item.key)\"><em class=\"fa fa-pencil\"></em></button>\n               </td>\n               <td>\n                 <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"vendorDelete(item.key)\"><em class=\"fa fa-trash-o\"></em></button>\n              </td>\n              <td>\n               <button class=\"btn btn-sm btn-default\" type=\"button\" (click)=\"vendorShow(item.key)\"><em class=\"fa fa-search\"></em></button>\n              </td>\n              \n          </tr>\n          </tbody>\n          <tfoot>\n          <tr>\n              <td colspan=\"5\" class=\"customPagination\">\n              <!--     <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\n              </td>\n          </tr>\n          </tfoot>\n      </table>\n  </div>\n  \n  <div class=\"panel-footer\">\n          <div class=\"row\">\n          \n          </div>\n      </div>\n  </div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/vendors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\F106\" !important; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\F107\" !important; }\n\n.customPagination {\n  padding-right: 150px !important; }\n\n.customTable {\n  margin-right: -136px; }\n\n.imageWork {\n  height: 40px;\n  width: 57px; }\n\n.thsearch {\n  width: 20%; }\n\n.thnosearch {\n  width: 20% !important;\n  padding-bottom: 45px !important; }\n\n.downloadBtn {\n  margin-top: 1em;\n  float: right;\n  margin-right: 1em; }\n\n.thnoitem {\n  width: 10%; }\n\n.searchinput :hover {\n  background-color: #ccc !important; }\n\n.searchdate :hover {\n  background-color: #ccc !important; }\n\n.searchdate-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .searchdate-wrapper .searchdate {\n    width: 5rem;\n    font-size: 11px; }\n  .searchdate-wrapper .searchdate-year {\n    width: 7rem;\n    font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/restaurant/vendors/vendors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");
var VendorsComponent = (function () {
    function VendorsComponent(af, router, toastr) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.toastr = toastr;
        this.vendors = [];
        this.vendorRef = this.af.list('/vendors');
        this.vendorData = this.vendorRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.vendorData.subscribe(function (res) {
            _this.vendors = res;
        });
    }
    VendorsComponent.prototype.getVendor = function (ev) {
        var _this = this;
        var val = ev;
        this.vendorData = this.af.list('/vendors', function (ref) { return ref.orderByChild('title').startAt(val.charAt(0).toUpperCase() + val.slice(1))
            .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'); }).valueChanges();
        this.vendorData
            .subscribe(function (data) {
            _this.vendors = data;
        });
    };
    VendorsComponent.prototype.vendorShow = function (key) {
        this.router.navigate(['/vendors/viewVendor', key]);
    };
    VendorsComponent.prototype.vendorEdit = function (key) {
        this.router.navigate(['/vendors/editVendor', key]);
    };
    VendorsComponent.prototype.vendorDelete = function (key) {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                _this.vendorRef.remove(key).then(function (resp) {
                    swal('Deleted!', 'Categories Data Deleted Successfully!', 'success');
                });
            }
            else {
                swal('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    VendorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vendors',
            template: __webpack_require__("../../../../../src/app/routes/restaurant/vendors/vendors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/restaurant/vendors/vendors.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], VendorsComponent);
    return VendorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages_module__ = __webpack_require__("../../../../../src/app/routes/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/routes/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restaurant_restaurant_module__ = __webpack_require__("../../../../../src/app/routes/restaurant/restaurant.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu__ = __webpack_require__("../../../../../src/app/routes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("../../../../../src/app/routes/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RoutesModule = (function () {
    function RoutesModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_7__menu__["a" /* menu */]);
    }
    RoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_6__restaurant_restaurant_module__["a" /* RestaurantModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]])
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__ = __webpack_require__("../../../../../src/app/routes/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register_component__ = __webpack_require__("../../../../../src/app/routes/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recover_recover_component__ = __webpack_require__("../../../../../src/app/routes/pages/recover/recover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_error404_error404_component__ = __webpack_require__("../../../../../src/app/routes/pages/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_home_component__ = __webpack_require__("../../../../../src/app/routes/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__restaurant_categories_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__restaurant_main_categories_main_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/main-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restaurant_categories_add_categories_add_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/add-categories/add-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__restaurant_main_categories_add_main_categories_add_main_categories_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/add-main-categories/add-main-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__restaurant_main_categories_edit_main_category_edit_main_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/edit-main-category/edit-main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__restaurant_main_categories_view_main_category_view_main_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/view-main-category/view-main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__restaurant_menu_items_menu_items_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/menu-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__restaurant_menu_items_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__restaurant_orders_orders_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__restaurant_orders_view_order_view_order_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/view-order/view-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__restaurant_users_users_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__restaurant_users_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__restaurant_users_view_user_view_users_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/users/view-user/view-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__restaurant_settings_settings_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__restaurant_chat_chat_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__restaurant_tags_tags_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__restaurant_tags_edit_tages_edit_tages_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/edit-tages/edit-tages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__restaurant_tags_add_tags_add_tags_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/tags/add-tags/add-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__restaurant_business_info_business_info_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/business-info/business-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__restaurant_profile_profile_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__restaurant_categories_edit_category_edit_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/edit-category/edit-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__restaurant_categories_view_category_view_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/categories/view-category/view-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__restaurant_menu_items_view_item_view_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/view-item/view-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__restaurant_menu_items_edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/menu-items/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__restaurant_news_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__restaurant_news_add_news_add_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/add-news/add-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__restaurant_news_edit_news_edit_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/edit-news/edit-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__restaurant_news_view_news_view_news_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/news/view-news/view-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__ = __webpack_require__("../../../../../src/app/routes/pages/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_login_login_service__ = __webpack_require__("../../../../../src/app/routes/pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__restaurant_coupons_coupons_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/coupons/coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__restaurant_coupons_add_coupons_add_coupons_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/coupons/add-coupons/add-coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__restaurant_loyalitys_loyalitys_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/loyalitys/loyalitys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__restaurant_push_notification_push_notification_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/push-notification/push-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__restaurant_testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__restaurant_testimonials_add_testimonials_add_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/add-testimonials/add-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__restaurant_testimonials_edit_testimonials_edit_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/edit-testimonials/edit-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__restaurant_testimonials_view_testimonials_view_testimonials_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/testimonials/view-testimonials/view-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__restaurant_subscribers_subscribers_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/subscribers/subscribers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__restaurant_table_booking_table_booking_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/table-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__restaurant_table_booking_view_view_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/table-booking/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__restaurant_delivery_options_delivery_options_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/delivery-options/delivery-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__restaurant_orders_invoice_invoice_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/orders/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__restaurant_pick_up_location_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__restaurant_pick_up_location_add_pick_up_location_add_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/add-pick-up-location/add-pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__restaurant_pick_up_location_edit_pick_up_location_edit_pick_up_location_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/pick-up-location/edit-pick-up-location/edit-pick-up-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__restaurant_main_categories_sub_category_sub_category_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/main-categories/sub-category/sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__restaurant_vendors_vendors_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/vendors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__restaurant_vendors_add_vendor_add_vendor_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/add-vendor/add-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__restaurant_vendors_edit_vendor_edit_vendor_component__ = __webpack_require__("../../../../../src/app/routes/restaurant/vendors/edit-vendor/edit-vendor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */], useAsDefault: true },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */] },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'pushNotification', component: __WEBPACK_IMPORTED_MODULE_40__restaurant_push_notification_push_notification_component__["a" /* PushNotificationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            {
                path: 'coupons',
                children: [
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_37__restaurant_coupons_coupons_component__["a" /* CouponsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addCoupons', component: __WEBPACK_IMPORTED_MODULE_38__restaurant_coupons_add_coupons_add_coupons_component__["a" /* AddCouponsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
                ]
            },
            {
                path: 'categories',
                children: [
                    { path: 'manageCategories', component: __WEBPACK_IMPORTED_MODULE_7__restaurant_categories_categories_component__["a" /* CategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addCategory', component: __WEBPACK_IMPORTED_MODULE_9__restaurant_categories_add_categories_add_categories_component__["a" /* AddCategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editCategory/:id', component: __WEBPACK_IMPORTED_MODULE_27__restaurant_categories_edit_category_edit_category_component__["a" /* EditCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewCategory/:id', component: __WEBPACK_IMPORTED_MODULE_28__restaurant_categories_view_category_view_category_component__["a" /* ViewCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
                ]
            },
            {
                path: 'mainCategories',
                children: [
                    { path: 'manageMainCategories', component: __WEBPACK_IMPORTED_MODULE_8__restaurant_main_categories_main_categories_component__["a" /* MainCategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addMainCategory', component: __WEBPACK_IMPORTED_MODULE_10__restaurant_main_categories_add_main_categories_add_main_categories_component__["a" /* AddMainCategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editMainCategory/:id', component: __WEBPACK_IMPORTED_MODULE_11__restaurant_main_categories_edit_main_category_edit_main_category_component__["a" /* EditMainCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewMainCategory/:id', component: __WEBPACK_IMPORTED_MODULE_12__restaurant_main_categories_view_main_category_view_main_category_component__["a" /* ViewMainCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addSubCategory/:id', component: __WEBPACK_IMPORTED_MODULE_53__restaurant_main_categories_sub_category_sub_category_component__["a" /* SubCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                ]
            },
            {
                path: 'pickUpLocation',
                children: [
                    { path: 'managePickUpLocation', component: __WEBPACK_IMPORTED_MODULE_50__restaurant_pick_up_location_pick_up_location_component__["a" /* PickUpLocationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addPickUpLocation', component: __WEBPACK_IMPORTED_MODULE_51__restaurant_pick_up_location_add_pick_up_location_add_pick_up_location_component__["a" /* AddPickUpLocationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editPickUpLocation/:id', component: __WEBPACK_IMPORTED_MODULE_52__restaurant_pick_up_location_edit_pick_up_location_edit_pick_up_location_component__["a" /* EditPickUpLocationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                ]
            },
            {
                path: 'vendors',
                children: [
                    { path: 'manageVendors', component: __WEBPACK_IMPORTED_MODULE_54__restaurant_vendors_vendors_component__["a" /* VendorsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addVendor', component: __WEBPACK_IMPORTED_MODULE_55__restaurant_vendors_add_vendor_add_vendor_component__["a" /* AddVendorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editVendor/:id', component: __WEBPACK_IMPORTED_MODULE_56__restaurant_vendors_edit_vendor_edit_vendor_component__["a" /* EditVendorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                ]
            },
            {
                path: 'testimonials',
                children: [
                    { path: 'manageTestimonials', component: __WEBPACK_IMPORTED_MODULE_41__restaurant_testimonials_testimonials_component__["a" /* TestimonialsComponent */] },
                    { path: 'addTestimonials', component: __WEBPACK_IMPORTED_MODULE_42__restaurant_testimonials_add_testimonials_add_testimonials_component__["a" /* AddTestimonialsComponent */] },
                    { path: 'editTestimonials/:id', component: __WEBPACK_IMPORTED_MODULE_43__restaurant_testimonials_edit_testimonials_edit_testimonials_component__["a" /* EditTestimonialsComponent */] },
                    { path: 'viewTestimonials/:id', component: __WEBPACK_IMPORTED_MODULE_44__restaurant_testimonials_view_testimonials_view_testimonials_component__["a" /* ViewTestimonialsComponent */] }
                ]
            },
            {
                path: 'news',
                children: [
                    { path: 'manageNews', component: __WEBPACK_IMPORTED_MODULE_31__restaurant_news_news_component__["a" /* NewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addNews', component: __WEBPACK_IMPORTED_MODULE_32__restaurant_news_add_news_add_news_component__["a" /* AddNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editNews/:id', component: __WEBPACK_IMPORTED_MODULE_33__restaurant_news_edit_news_edit_news_component__["a" /* EditNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewNews/:id', component: __WEBPACK_IMPORTED_MODULE_34__restaurant_news_view_news_view_news_component__["a" /* ViewNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
                ]
            },
            {
                path: 'order',
                children: [
                    { path: 'allOrder', component: __WEBPACK_IMPORTED_MODULE_15__restaurant_orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewOrder/:id', component: __WEBPACK_IMPORTED_MODULE_16__restaurant_orders_view_order_view_order_component__["a" /* ViewOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'invoice/:id', component: __WEBPACK_IMPORTED_MODULE_49__restaurant_orders_invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                ]
            },
            {
                path: 'menu',
                children: [
                    { path: 'manageItems', component: __WEBPACK_IMPORTED_MODULE_13__restaurant_menu_items_menu_items_component__["a" /* MenuItemsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addItems', component: __WEBPACK_IMPORTED_MODULE_14__restaurant_menu_items_add_item_add_item_component__["a" /* AddItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewItems/:id', component: __WEBPACK_IMPORTED_MODULE_29__restaurant_menu_items_view_item_view_item_component__["a" /* ViewItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editItems/:id', component: __WEBPACK_IMPORTED_MODULE_30__restaurant_menu_items_edit_item_edit_item_component__["a" /* EditItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                ]
            },
            {
                path: 'users',
                children: [
                    { path: 'manageUsers', component: __WEBPACK_IMPORTED_MODULE_17__restaurant_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addUser', component: __WEBPACK_IMPORTED_MODULE_18__restaurant_users_add_user_add_user_component__["a" /* AddUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'viewUser/:id', component: __WEBPACK_IMPORTED_MODULE_19__restaurant_users_view_user_view_users_component__["a" /* ViewUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
                ]
            },
            {
                path: 'tags',
                children: [
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_22__restaurant_tags_tags_component__["a" /* TagsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'addTags', component: __WEBPACK_IMPORTED_MODULE_24__restaurant_tags_add_tags_add_tags_component__["a" /* AddTagsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
                    { path: 'editTags/:id', component: __WEBPACK_IMPORTED_MODULE_23__restaurant_tags_edit_tages_edit_tages_component__["a" /* EditTagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
                ]
            },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_21__restaurant_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_20__restaurant_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'loyalty', component: __WEBPACK_IMPORTED_MODULE_39__restaurant_loyalitys_loyalitys_component__["a" /* LoyalitysComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'businessInfo', component: __WEBPACK_IMPORTED_MODULE_25__restaurant_business_info_business_info_component__["a" /* BusinessInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'UserProfile', component: __WEBPACK_IMPORTED_MODULE_26__restaurant_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'delivery/options', component: __WEBPACK_IMPORTED_MODULE_48__restaurant_delivery_options_delivery_options_component__["a" /* DeliveryOptionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'subscribers', component: __WEBPACK_IMPORTED_MODULE_45__restaurant_subscribers_subscribers_component__["a" /* SubscribersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'tables/booking', component: __WEBPACK_IMPORTED_MODULE_46__restaurant_table_booking_table_booking_component__["a" /* TableBookingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] },
            { path: 'tables/view/:id', component: __WEBPACK_IMPORTED_MODULE_47__restaurant_table_booking_view_view_component__["a" /* ViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */]] }
        ] // children End
    },
    // Not lazy-loaded routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_4__pages_recover_recover_component__["a" /* RecoverComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_5__pages_error404_error404_component__["a" /* Error404Component */] },
    // Not found
    { path: '**', redirectTo: '404' }
];
var RestModule = (function () {
    function RestModule() {
    }
    RestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__pages_login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_36__pages_login_login_service__["a" /* LoginService */]
            ]
        })
    ], RestModule);
    return RestModule;
}());


/***/ }),

/***/ "../../../../../src/app/shared/colors/colors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsService = (function () {
    function ColorsService() {
        this.APP_COLORS = {
            'primary': '#5d9cec',
            'success': '#27c24c',
            'info': '#23b7e5',
            'warning': '#ff902b',
            'danger': '#f05050',
            'inverse': '#131e26',
            'green': '#37bc9b',
            'pink': '#f532e5',
            'purple': '#7266ba',
            'dark': '#3a3f51',
            'yellow': '#fad732',
            'gray-darker': '#232735',
            'gray-dark': '#3a3f51',
            'gray': '#dde6e9',
            'gray-light': '#e4eaec',
            'gray-lighter': '#edf1f2'
        };
    }
    ColorsService.prototype.byName = function (name) {
        // console.log(name +' -> ' + this.APP_COLORS[name])
        return (this.APP_COLORS[name] || '#fff');
    };
    ColorsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/checkall/checkall.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckallDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckallDirective = (function () {
    function CheckallDirective(el) {
        this.el = el;
        var $element = $(el.nativeElement);
        $element.on('change', function () {
            var index = $element.index() + 1, checkbox = $element.find('input[type="checkbox"]'), table = $element.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                .prop('checked', checkbox[0].checked);
        });
    }
    CheckallDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[checkAll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CheckallDirective);
    return CheckallDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasypiechartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasypiechartDirective = (function () {
    function EasypiechartDirective(element) {
        this.element = element;
        /**
         * default easy pie chart options
         * @type {Object}
         */
        this.defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.percent = this.percent || 0;
        this.options = $.extend({}, this.defaultOptions, this.options);
    }
    EasypiechartDirective.prototype.ngOnInit = function () {
        if (EasyPieChart) {
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    };
    EasypiechartDirective.prototype.ngOnChanges = function (changes) {
        if (this.pieChart && changes['percent']) {
            this.pieChart.update(this.percent);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EasypiechartDirective.prototype, "percent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EasypiechartDirective.prototype, "options", void 0);
    EasypiechartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[easypiechart]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], EasypiechartDirective);
    return EasypiechartDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/flot/flot.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotDirective = (function () {
    function FlotDirective(el) {
        this.el = el;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = $(this.el.nativeElement);
        if (!$.plot) {
            console.log('Flot chart no available.');
        }
        this.plot = null;
    }
    FlotDirective.prototype.ngOnInit = function () { };
    FlotDirective.prototype.ngOnChanges = function (changes) {
        if (!$.plot) {
            return;
        }
        if (changes['dataset']) {
            this.onDatasetChanged(this.dataset);
        }
        if (changes['series']) {
            this.onSerieToggled(this.series);
        }
    };
    FlotDirective.prototype.init = function () {
        var heightDefault = 220;
        this.width = this.attrWidth || '100%';
        this.height = this.height || heightDefault;
        this.element.css({
            width: this.width,
            height: this.height
        });
        var plotObj;
        if (!this.dataset || !this.options) {
            return;
        }
        plotObj = $.plot(this.el.nativeElement, this.dataset, this.options);
        if (this.ready) {
            this.ready.next({ plot: plotObj });
        }
        return plotObj;
    };
    FlotDirective.prototype.onDatasetChanged = function (dataset) {
        if (this.plot) {
            this.plot.setData(dataset);
            this.plot.setupGrid();
            return this.plot.draw();
        }
        else {
            this.plot = this.init();
            this.onSerieToggled(this.series);
            return this.plot;
        }
    };
    FlotDirective.prototype.onSerieToggled = function (series) {
        if (!this.plot || !series) {
            return;
        }
        var someData = this.plot.getData();
        for (var sName in series) {
            series[sName].forEach(toggleFor(sName));
        }
        this.plot.setData(someData);
        this.plot.draw();
        function toggleFor(sName) {
            return function (s, i) {
                if (someData[i] && someData[i][sName]) {
                    someData[i][sName].show = s;
                }
            };
        }
    };
    FlotDirective.prototype.ngOnDestroy = function () {
        if (this.plot) {
            this.plot.shutdown();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "dataset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "attrWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FlotDirective.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "series", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "ready", void 0);
    FlotDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[flot]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FlotDirective);
    return FlotDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/now/now.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowDirective = (function () {
    function NowDirective(element) {
        this.element = element;
    }
    NowDirective.prototype.ngOnInit = function () {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime.bind(this), 1000);
    };
    NowDirective.prototype.updateTime = function () {
        var dt = __WEBPACK_IMPORTED_MODULE_1_moment__().format(this.format);
        this.element.nativeElement.innerHTML = dt;
    };
    NowDirective.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NowDirective.prototype, "format", void 0);
    NowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[now]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NowDirective);
    return NowDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/scrollable/scrollable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableDirective = (function () {
    function ScrollableDirective(element) {
        this.element = element;
        this.defaultHeight = 250;
    }
    ScrollableDirective.prototype.ngOnInit = function () {
        $(this.element.nativeElement).slimScroll({
            height: (this.height || this.defaultHeight)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ScrollableDirective.prototype, "height", void 0);
    ScrollableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'scrollable'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ScrollableDirective);
    return ScrollableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(el) {
        this.el = el;
        // generate a unique resize event so we can detach later
        this.resizeEventId = 'resize.sparkline' + 1324;
        this.$element = $(el.nativeElement);
    }
    SparklineDirective.prototype.ngOnInit = function () {
        this.initSparkLine();
    };
    SparklineDirective.prototype.initSparkLine = function () {
        var _this = this;
        var options = this.sparkline, data = this.$element.data();
        if (!options) {
            options = data;
        }
        else {
            if (data) {
                options = $.extend({}, options, data);
            }
        }
        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;
        this.$element.sparkline('html', options);
        if (options.resize) {
            $(window).on(this.resizeEventId, function () {
                _this.$element.sparkline('html', options);
            });
        }
    };
    SparklineDirective.prototype.ngOnDestroy = function () {
        $(window).off(this.resizeEventId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineDirective.prototype, "sparkline", void 0);
    SparklineDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[sparkline]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SparklineDirective);
    return SparklineDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_rating__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_flot_flot_directive__ = __webpack_require__("../../../../../src/app/shared/directives/flot/flot.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_sparkline_sparkline_directive__ = __webpack_require__("../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__ = __webpack_require__("../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__colors_colors_service__ = __webpack_require__("../../../../../src/app/shared/colors/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_checkall_checkall_directive__ = __webpack_require__("../../../../../src/app/shared/directives/checkall/checkall.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_now_now_directive__ = __webpack_require__("../../../../../src/app/shared/directives/now/now.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_scrollable_scrollable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scrollable/scrollable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// https://angular.io/styleguide#!#04-10
var SharedModule = (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__colors_colors_service__["a" /* ColorsService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__directives_flot_flot_directive__["a" /* FlotDirective */],
                __WEBPACK_IMPORTED_MODULE_20__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
                __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
                __WEBPACK_IMPORTED_MODULE_23__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
                __WEBPACK_IMPORTED_MODULE_24__directives_now_now_directive__["a" /* NowDirective */],
                __WEBPACK_IMPORTED_MODULE_25__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__["a" /* AccordionModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_collapse__["a" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_datepicker__["a" /* DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_pagination__["a" /* PaginationModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_rating__["a" /* RatingModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_timepicker__["a" /* TimepickerModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tooltip__["a" /* TooltipModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */],
                __WEBPACK_IMPORTED_MODULE_19__directives_flot_flot_directive__["a" /* FlotDirective */],
                __WEBPACK_IMPORTED_MODULE_20__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
                __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
                __WEBPACK_IMPORTED_MODULE_23__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
                __WEBPACK_IMPORTED_MODULE_24__directives_now_now_directive__["a" /* NowDirective */],
                __WEBPACK_IMPORTED_MODULE_25__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            ]
        })
        // https://github.com/ocombe/ng2-translate/issues/209
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-a.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #23b7e5; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #23b7e5; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #117391; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #23b7e5;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #23b7e5;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #117391; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #23b7e5; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #23b7e5; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #23b7e5; }\n  .sidebar .nav > li.active {\n    border-left-color: #23b7e5; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #23b7e5; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #23b7e5; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #23b7e5;\n      background-color: #23b7e5; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-b.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #37bc9b; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #37bc9b; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #206d5a; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #206d5a; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #37bc9b; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #37bc9b; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #37bc9b; }\n  .sidebar .nav > li.active {\n    border-left-color: #37bc9b; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #37bc9b; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #37bc9b; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #37bc9b;\n      background-color: #37bc9b; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-c.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #7266ba; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #7266ba; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #443a80; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #443a80; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #7266ba; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #7266ba; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #7266ba; }\n  .sidebar .nav > li.active {\n    border-left-color: #7266ba; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #7266ba; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #7266ba; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #7266ba;\n      background-color: #7266ba; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-d.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #f05050; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #f05050; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #c91111; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #c91111; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-e.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #1797be; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #1797be; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #0c4f63; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #1797be;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #1797be;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #0c4f63; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #1797be; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #1797be; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #1797be; }\n  .sidebar .nav > li.active {\n    border-left-color: #1797be; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #1797be; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #1797be; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #1797be;\n      background-color: #1797be; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-f.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #2b957a; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #2b957a; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #144639; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #144639; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #2b957a; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #2b957a; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #2b957a; }\n  .sidebar .nav > li.active {\n    border-left-color: #2b957a; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #2b957a; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #2b957a; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #2b957a;\n      background-color: #2b957a; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-g.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #564aa3; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #564aa3; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #312a5d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #312a5d; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #9289ca; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #9289ca; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #9289ca; }\n  .sidebar .nav > li.active {\n    border-left-color: #9289ca; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #9289ca; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #9289ca; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #9289ca;\n      background-color: #9289ca; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-h.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #ec2121; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #ec2121; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #9a0d0d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #9a0d0d; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_ts__ = __webpack_require__("../../../../../src/vendor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
var p = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
p.then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));


/***/ }),

/***/ "../../../../../src/modernizr.js":
/***/ (function(module, exports) {

/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-cssanimations-csscalc-csstransforms-csstransforms3d-csstransitions-flexboxtweener-fontface-inlinesvg-localstorage-multiplebgs-preserve3d-sessionstorage-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-websqldatabase-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  var classes = [];
  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
/* DOC
Detects if you can use the shorthand method to define multiple parts of an
element's background-position simultaniously.

eg `background-position: right 10px bottom 10px`
*/

  Modernizr.addTest('bgpositionshorthand', function() {
    var elem = createElement('a');
    var eStyle = elem.style;
    var val = 'right 10px bottom 10px';
    eStyle.cssText = 'background-position: ' + val + ';';
    return (eStyle.backgroundPosition === val);
  });


  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  


  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    var elems = ['modernizr', 'tspan'];
    while (!mStyle.style) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;
  
/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
/* DOC
Detects the ability to control an element's background position using css
*/

  Modernizr.addTest('bgpositionxy', function() {
    return testAllProps('backgroundPositionX', '3px', true) && testAllProps('backgroundPositionY', '5px', true);
  });

/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
/* DOC
Detects the ability to use round and space as properties for background-repeat
*/

  // Must value-test these
  Modernizr.addTest('bgrepeatround', testAllProps('backgroundRepeat', 'round'));
  Modernizr.addTest('bgrepeatspace', testAllProps('backgroundRepeat', 'space'));

/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/

  // Must test value, as this specifically tests the `cover` value
  Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));

/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/

  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));


  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  
/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
/* DOC
Method of allowing calculated values for length units. For example:

```css
//lem {
  width: calc(100% - 3em);
}
```
*/

  Modernizr.addTest('csscalc', function() {
    var prop = 'width:';
    var value = 'calc(10px);';
    var el = createElement('a');

    el.style.cssText = prop + prefixes.join(value + prop);

    return !!el.style.length;
  });

/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransforms', function() {
    // Android < 3.0 is buggy, so we sniff and blacklist
    // http://git.io/hHzL7w
    return navigator.userAgent.indexOf('Android 2.') === -1 &&
           testAllProps('transform', 'scale(1)', true);
  });


  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

  Modernizr.addTest('csstransforms3d', function() {
    var ret = !!testAllProps('perspective', '1px', true);
    var usePrefix = Modernizr._config.usePrefixes;

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && (!usePrefix || 'webkitPerspective' in docElement.style)) {
      var mq;
      var defaultStyle = '#modernizr{width:0;height:0}';
      // Use CSS Conditional Rules if available
      if (Modernizr.supports) {
        mq = '@supports (perspective: 1px)';
      } else {
        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.
        // `@media (transform-3d),(-webkit-transform-3d){ ... }`
        mq = '@media (transform-3d)';
        if (usePrefix) {
          mq += ',(-webkit-transform-3d)';
        }
      }

      mq += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';

      testStyles(defaultStyle + mq, function(elem) {
        ret = elem.offsetWidth === 7 && elem.offsetHeight === 18;
      });
    }

    return ret;
  });

/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["edmellum"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/762"
  }]
}
!*/
/* DOC
Detects support for `transform-style: preserve-3d`, for getting a proper 3D perspective on elements.
*/

  Modernizr.addTest('preserve3d', testAllProps('transformStyle', 'preserve-3d'));

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/

  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));

/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/

  var blacklist = (function() {
    var ua = navigator.userAgent;
    var wkvers = ua.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1);
    var webos = ua.match(/w(eb)?osbrowser/gi);
    var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    var oldandroid = wkvers < 533 && ua.match(/android/gi);
    return webos || oldandroid || wppre8;
  }());
  if (blacklist) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
;
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
/* DOC
Detects support for SVG in `<embed>` or `<object>` elements.
*/

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);


  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();

  


   // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */

  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */

  function addTest(feature, test) {

    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        /* jshint -W053 */
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      /* jshint -W041 */
      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);
      /* jshint +W041 */

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });

  

/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/


  // Original Async test by Stu Cox
  // https://gist.github.com/chriscoyier/8774501

  // Now a Sync test based on good results here
  // http://codepen.io/chriscoyier/pen/bADFx

  // Note http://www.w3.org/TR/SVG11/feature#Image is *supposed* to represent
  // support for the `<image>` tag in SVG, not an SVG file linked from an `<img>`
  // tag in HTML – but it’s a heuristic which works
  Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));


  /**
   * Object.prototype.toString can be used with every object and allows you to
   * get its class easily. Abstracting it off of an object prevents situations
   * where the toString property has been overridden
   *
   * @access private
   * @function toStringFn
   * @returns {function} An abstracted toString function
   */

  var toStringFn = ({}).toString;
  
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
/* DOC
Detects support for clip paths in SVG (only, not on HTML content).

See [this discussion](https://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
*/

  Modernizr.addTest('svgclippaths', function() {
    return !!document.createElementNS &&
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  });

/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/

  // Should fail in Safari: https://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function() {
    var result = false;
    try {
      result = 'SVGFEColorMatrixElement' in window &&
        SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    }
    catch (e) {}
    return result;
  });

/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
/* DOC
Detects support for foreignObject tag in SVG.
*/

  Modernizr.addTest('svgforeignobject', function() {
    return !!document.createElementNS &&
      /SVGForeignObject/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')));
  });

/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
/* DOC
Detects support for inline SVG in HTML (not within XHTML).
*/

  Modernizr.addTest('inlinesvg', function() {
    var div = createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  });

/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/

  // SVG SMIL animation
  Modernizr.addTest('smil', function() {
    return !!document.createElementNS &&
      /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
  });

/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window) && ` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  Modernizr.addTest('localstorage', function() {
    var mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files
  Modernizr.addTest('sessionstorage', function() {
    var mod = 'modernizr';
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/

  // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.
  Modernizr.addTest('websqldatabase', 'openDatabase' in window);

/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/

  // Setting multiple images AND a color on the background shorthand property
  // and then querying the style.background property value for the number of
  // occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

  Modernizr.addTest('multiplebgs', function() {
    var style = createElement('a').style;
    style.cssText = 'background:url(https://),url(https://),red url(https://)';

    // If the UA supports multiple backgrounds, there should be three occurrences
    // of the string "url(" in the return value for elemStyle.background
    return (/(url\s*\(.*?){3}/).test(style.background);
  });


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);

/***/ }),

/***/ "../../../../../src/vendor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js__ = __webpack_require__("../../../../../src/modernizr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modernizr_js__);
 // 'npm run modernizr' to create this file


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map