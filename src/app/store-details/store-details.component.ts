import { OrderItem } from './../order-item.model';
import { StoreProduct } from './../store-product.model';
import { BasketService } from './../services/basket.service';
import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private basketService: BasketService , private storeService: StoreService) { }

  id:any;
  response: any;
  show: any;
  get=false;
  message = '';

  basketItems: OrderItem[] = [];

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.id = par['id']
    });

    this.response = this.storeService.getStoresById(this.id) .subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

  addToBasket(storeProduct: StoreProduct,id:any){
    this.basketService.addItem(storeProduct,id);
  }
}
