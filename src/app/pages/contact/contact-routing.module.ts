import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

export const ROUTES: Routes = [{
    path: 'contact',
    loadChildren: () => import('./contact.module').then(m => m.ContactPrimaryModule,)
}];

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})
export class ContactRoutingModule { }