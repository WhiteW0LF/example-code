import { NgModule } from "@angular/core";
import { AboutMeRoutingModule, ROUTES as ABOUT_ME_ROUTES } from "./about-me/about-me-routing.module";
import { ContactRoutingModule, ROUTES as CONTACT_ROUTES } from "./contact/contact-routing.module";

export const ROUTES = [
    ...ABOUT_ME_ROUTES,
    ...CONTACT_ROUTES,
];

@NgModule({
    imports: [
        AboutMeRoutingModule,
        ContactRoutingModule,
    ],
    exports: [
        AboutMeRoutingModule,
        ContactRoutingModule,
    ],
})
export class PagesModule { }
