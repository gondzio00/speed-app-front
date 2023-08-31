import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SearchListComponent} from "./components/search-list/search-list.component";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {PackageDetailsPageComponent} from './pages/package-details-page/package-details-page.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {PackageImportPageComponent} from './pages/package-import-page/package-import-page.component';
import {
  ManipulationDataImportPageComponent
} from './pages/manipulation-data-import-page/manipulation-data-import-page.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {NZ_I18N, pl_PL} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import pl from '@angular/common/locales/pl';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {httpInterceptorProviders} from "./_helpers/http.interceptor";
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzListModule} from "ng-zorro-antd/list";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzTableModule} from "ng-zorro-antd/table";

registerLocaleData(pl);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SearchListComponent,
    PackageDetailsPageComponent,
    NavigationComponent,
    PackageImportPageComponent,
    ManipulationDataImportPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule,
    NzUploadModule,
    NzListModule,
    NzCardModule,
    NzPageHeaderModule,
    NzAutocompleteModule,
    NzEmptyModule,
    NzBreadCrumbModule,
    NzDescriptionsModule,
    NzTableModule
  ],
  providers: [
    httpInterceptorProviders,
    {provide: NZ_I18N, useValue: pl_PL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
