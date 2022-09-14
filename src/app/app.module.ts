import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description/find-store-by-store-category-description.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreService } from './services/store.service';
import { ReportTopStoresComponent } from './report-top-stores/report-top-stores.component';
import { ReportTopStoreProductsComponent } from './report-top-store-products/report-top-store-products.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { HomeComponent } from './home/home.component';
import { ListOfAllStoresComponent } from './list-of-all-stores/list-of-all-stores.component';
import { TopStoresPageComponent } from './top-stores-page/top-stores-page.component';
import { TopStoreProductsPageComponent } from './top-store-products-page/top-store-products-page.component';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FindStoreByStoreCategoryDescriptionComponent,
    ReportTopStoresComponent,
    ReportTopStoreProductsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AllStoresComponent,
    HomeComponent,
    ListOfAllStoresComponent,
    TopStoresPageComponent,
    TopStoreProductsPageComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
