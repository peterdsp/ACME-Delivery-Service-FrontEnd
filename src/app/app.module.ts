import { PageBasketComponent } from './page-basket/page-basket.component';
import { SearchbarFindStoreByStoreCategoryDescriptionComponent } from './searchbar-find-store-by-store-category-description/searchbar-find-store-by-store-category-description.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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
import { PageAccountComponent } from './page-account/page-account.component';
import { ButtonAccountComponent } from './button-account/button-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { ButtonBasketComponent } from './button-basket/button-basket.component';
import { AccountService } from './services/account.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatRadioModule }  from '@angular/material/radio';
import { MatSelectModule }  from '@angular/material/select';
import { MatSliderModule }  from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ButtonAccountComponent,
    PageAccountComponent,
    PageBasketComponent,
    StoreDetailsComponent,
    ButtonBasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [StoreService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
