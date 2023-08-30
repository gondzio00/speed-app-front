import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PackageDetailsPageComponent} from "./pages/package-details-page/package-details-page.component";
import {PackageImportPageComponent} from "./pages/package-import-page/package-import-page.component";
import {
  ManipulationDataImportPageComponent
} from "./pages/manipulation-data-import-page/manipulation-data-import-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'package/:packageNumber',
    component: PackageDetailsPageComponent
  },
  {
    path: 'packages/import',
    component: PackageImportPageComponent
  },
  {
    path: 'manipulation-data/import',
    component: ManipulationDataImportPageComponent
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
