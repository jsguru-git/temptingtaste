import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    settings: any = {};
    settingDataRef: AngularFireObject<any>;
    settingObservable: Observable<any>;
    constructor(public af: AngularFireDatabase, public toastr: ToastrService) {
        this.settingDataRef = af.object('/settings');
        this.settingObservable = this.settingDataRef.valueChanges();
        this.settingObservable.subscribe((res) => {
            this.settings = res;
        });
    }

    onSubmitSetting(form: NgForm) {
        this.settingDataRef.set({totalVat: this.settings.totalVat, totalTables: this.settings.totalTables}).then((res) => {
            this.toastr.success('Settings updated Successfully!', 'Success!');
        });
    }
}
