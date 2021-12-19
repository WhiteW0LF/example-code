import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me.component";
import { ShortInfoComponent } from "./short-info/short-info.component";
import { SkillsComponent } from "./skills/skills.component";

export const PRIMARY_ROUTES: Routes = [{
    path: '',
    component: AboutMeComponent,
    children: [{
        path: '',
        redirectTo: 'short-info',
        pathMatch: 'full',
    }, {
        path: 'short-info',
        component: ShortInfoComponent,
    }, {
        path: 'skills',
        component: SkillsComponent,
    }],
}]

@NgModule({
    imports: [],
    declarations: [
        AboutMeComponent,
        ShortInfoComponent,
        SkillsComponent,
    ],
    exports: [],
})
export class AboutMeModule { }

@NgModule({
    imports: [
        RouterModule.forChild(PRIMARY_ROUTES),
        AboutMeModule,
    ],
})
export class CustomerPrimaryModule {}