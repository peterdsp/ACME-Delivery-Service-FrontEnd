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

@NgModule({
  declarations: [
    AppComponent,
    FindStoreByStoreCategoryDescriptionComponent,
    ReportTopStoresComponent,
    ReportTopStoreProductsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
