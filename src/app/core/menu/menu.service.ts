import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems: Array<any>;

    constructor() {
        this.menuItems = [];
    }

    addMenu(items: Array<{
        text: string,
        access: Array<string>,
        heading?: boolean,
        link?: string,
        icon?: string,
        alert?: string,
        submenu?: Array<any>
    }>) {
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    getMenu() {
        return this.menuItems;
    }

}
