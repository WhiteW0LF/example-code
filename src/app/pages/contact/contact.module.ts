import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";

export const PRIMARY_ROUTES: Routes = [{
    path: '',
    component: ContactComponent,
}]

@NgModule({
    imports: [],
    declarations: [
        ContactComponent,
    ],
    exports: [],
})
export class ContactModule { }

@NgModule({
    imports: [
        RouterModule.forChild(PRIMARY_ROUTES),
        ContactModule,
    ],
})
export class ContactPrimaryModule {}