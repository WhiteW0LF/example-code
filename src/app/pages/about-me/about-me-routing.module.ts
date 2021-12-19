import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

export const ROUTES: Routes = [{
    path: 'about-me',
    loadChildren: () => import('./about-me.module').then(m => m.CustomerPrimaryModule,)
}];

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})
export class AboutMeRoutingModule { }