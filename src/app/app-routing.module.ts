import { PageStoreCategoryDetailsComponent } from './page-store-category-details/page-store-category-details.component';
import { PageStoreCategoriesComponent } from './page-store-categories/page-store-categories.component';
import { PageReportTopStoreProductsComponent } from './page-report-top-store-products/page-report-top-store-products.component';
import { PageReportTopStoresComponent } from './page-report-top-stores/page-report-top-stores.component';
import { PageAllStoresComponent } from './page-all-stores/page-all-stores.component';
import { ButtonAllStoresComponent } from './button-all-stores/button-all-stores.component';
import { HomeComponent } from './home/home.component';
import { SearchbarFindStoreByStoreCategoryDescriptionComponent } from './searchbar-find-store-by-store-category-description/searchbar-find-store-by-store-category-description.component';
import { ButtonReportTopStoresComponent } from './button-report-top-stores/button-report-top-stores.component';
import { ButtonReportTopStoreProductsComponent } from './button-report-top-store-products/button-report-top-store-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { PageAccountComponent } from './page-account/page-account.component';
import { PageBasketComponent } from './page-basket/page-basket.component';
import { PageAccountOrdersComponent } from './page-account-orders/page-account-orders.component';

const routes: Routes = [
  {path: 'stores/reportTop10StoreProducts', component: PageReportTopStoreProductsComponent},
  {path: 'stores/reportTopStores', component: PageReportTopStoresComponent},
  {path: 'stores/lazy', component: PageAllStoresComponent},
  {path: 'stores', redirectTo: '/stores/lazy', pathMatch: 'full' },
  {path: 'stores/:id', component: StoreDetailsComponent},
  {path: 'storecategories', component: PageStoreCategoriesComponent},
  {path: 'stores/reportTopStoresPerCategory/:id', component: PageStoreCategoryDetailsComponent},
  {path: 'accounts/2', component: PageAccountComponent},
  {path: 'orders/accountOrders/2', component: PageAccountOrdersComponent},
  {path: 'basket', component: PageBasketComponent},
  {path: '', component: PageAllStoresComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
