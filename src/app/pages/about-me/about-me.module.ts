import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me.component";
import { ShortInfoComponent } from "./short-info/short-info.component";
import { SkillsComponent } from "./skills/skills.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from "@angular/common";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

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
    imports: [
        CommonModule,
        RouterModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatCardModule,
    ],
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
export class AboutMePrimaryModule { }