import { SearchbarFindStoreByStoreCategoryDescriptionComponent } from './searchbar-find-store-by-store-category-description/searchbar-find-store-by-store-category-description.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreService } from './services/store.service';
import { ButtonReportTopStoresComponent } from './button-report-top-stores/button-report-top-stores.component';
import { ButtonReportTopStoreProductsComponent } from './button-report-top-store-products/button-report-top-store-products.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonAllStoresComponent } from './button-all-stores/button-all-stores.component';
import { HomeComponent } from './home/home.component';
import { PageAllStoresComponent } from './page-all-stores/page-all-stores.component';
import { PageReportTopStoresComponent } from './page-report-top-stores/page-report-top-stores.component';
import { PageReportTopStoreProductsComponent } from './page-report-top-store-products/page-report-top-store-products.component';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarFindStoreByStoreCategoryDescriptionComponent,
    ButtonReportTopStoresComponent,
    ButtonReportTopStoreProductsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ButtonAllStoresComponent,
    HomeComponent,
    PageAllStoresComponent,
    PageReportTopStoresComponent,
    PageReportTopStoreProductsComponent,
    AccountComponent,
    StoreDetailsComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
