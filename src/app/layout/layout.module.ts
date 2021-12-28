import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        MatSidenavModule,
        MatListModule,
    ],
    declarations: [
        LayoutComponent,
    ],
    exports: [],
})
export class LayoutModule { }