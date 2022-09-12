import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description/find-store-by-store-category-description.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryService } from './services/delivery.service';
import { ReportTopStoresComponent } from './report-top-stores/report-top-stores.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FindStoreByStoreCategoryDescriptionComponent
=======
    DeliveryComponent,
    ReportTopStoresComponent,
>>>>>>> 29602080f0a9228aec9d76d5143fcd0f5f7d4130
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
