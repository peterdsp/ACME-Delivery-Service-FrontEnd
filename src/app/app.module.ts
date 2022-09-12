import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description/find-store-by-store-category-description.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryService } from './services/delivery.service';

@NgModule({
  declarations: [
    AppComponent,
    FindStoreByStoreCategoryDescriptionComponent
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
