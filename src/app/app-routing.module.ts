import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PackageDetailsPageComponent} from "./pages/package-details-page/package-details-page.component";
import {PackageImportPageComponent} from "./pages/package-import-page/package-import-page.component";
import {
  ManipulationDataImportPageComponent
} from "./pages/manipulation-data-import-page/manipulation-data-import-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'package/:packageNumber',
    component: PackageDetailsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'packages/import',
    component: PackageImportPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manipulation-data/import',
    component: ManipulationDataImportPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
