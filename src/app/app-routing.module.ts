import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description/find-store-by-store-category-description.component';
import { ReportTopStoresComponent } from './report-top-stores/report-top-stores.component';
import { ReportTopStoreProductsComponent } from './report-top-store-products/report-top-store-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //an grapso https://localhost:4200/product tote deixno component product
  {path: 'reportTop10StoreProducts', component: ReportTopStoreProductsComponent},
  {path: 'reportTopStores', component: ReportTopStoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
