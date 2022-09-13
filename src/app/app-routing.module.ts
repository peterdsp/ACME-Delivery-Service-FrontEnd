import { TopStoreProductsPageComponent } from './top-store-products-page/top-store-products-page.component';
import { TopStoresPageComponent } from './top-stores-page/top-stores-page.component';
import { ListOfAllStoresComponent } from './list-of-all-stores/list-of-all-stores.component';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { HomeComponent } from './home/home.component';
import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description/find-store-by-store-category-description.component';
import { ReportTopStoresComponent } from './report-top-stores/report-top-stores.component';
import { ReportTopStoreProductsComponent } from './report-top-store-products/report-top-store-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //an grapso https://localhost:4200/product tote deixno component product
  {path: 'stores/reportTop10StoreProducts', component: TopStoreProductsPageComponent},
  {path: 'stores/reportTopStores', component: TopStoresPageComponent},
  {path: 'stores', component: ListOfAllStoresComponent},
  // {path: 'stores/:id', component: StoreDetailsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
