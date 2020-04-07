import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    name = 'Lukas notes';

    constructor(
        public translate: TranslateService) {
        translate.addLangs(['en', 'cz']);
        if (localStorage.getItem('locale')) {
            const browserLang = localStorage.getItem('locale');
            translate.use(browserLang.match(/en|cz/) ? browserLang : 'en');
        } else {
            localStorage.setItem('locale', 'en');
            translate.setDefaultLang('en');
        }
    }
    changeLang(language: string) {
        localStorage.setItem('locale', language);
        this.translate.use(language);
    }
}
