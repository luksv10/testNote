import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import {DetailComponent} from "./shared/components/detail/detail.component";
import {AddComponent} from "./shared/components/add/add.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'notes', pathMatch: 'full'},
    {path: 'notes', component: HomeComponent},
    {path: 'note/:id', component: DetailComponent},
    {path: 'add', component: AddComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
