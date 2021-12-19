import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PagesModule, ROUTES as PAGES_ROUTES } from './pages/pages.module';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    ...PAGES_ROUTES,
    {
      path: '',
      redirectTo: 'about-me',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'about-me',
    }
  ],
}];

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
