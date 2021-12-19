import { NgModule } from "@angular/core";
import { AboutMeRoutingModule, ROUTES as ABOUT_ME_ROUTES } from "./about-me/about-me-routing.module";

export const ROUTES = [
    ...ABOUT_ME_ROUTES,
];

@NgModule({
    imports: [
        AboutMeRoutingModule,
    ],
    exports: [
        AboutMeRoutingModule,
    ],
})
export class PagesModule { }
