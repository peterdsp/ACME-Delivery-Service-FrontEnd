import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryService } from './services/delivery.service';
import { ReportTopStoresComponent } from './report-top-stores/report-top-stores.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    ReportTopStoresComponent,
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
