import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';



import '../assets/styles';


import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NoteService} from "./shared/services/note.service";
import {DetailComponent} from "./shared/components/detail/detail.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddComponent} from "./shared/components/add/add.component";
import {TranslateModule, TranslateLoader, TranslateStore} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateService} from "@ngx-translate/core";



export const createTranslatorLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, "./assets/i18n/", '.json')
}


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent,
        AddComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslatorLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [NoteService, TranslateService, TranslateStore ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
