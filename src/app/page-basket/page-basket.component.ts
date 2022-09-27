import { StoreProduct } from './../store-product.model';
import { BasketService } from './../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderItem } from '../order-item.model';

@Component({
  selector: 'app-page-basket',
  templateUrl: './page-basket.component.html',
  styleUrls: ['./page-basket.component.scss']
})
export class PageBasketComponent implements OnInit {

  response: any;
  get = false;
  message = '';
  private paymentMethod!: string;
  basketItems: OrderItem[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketItems = this.basketService.getBasketItems();
  }

  validateInput(event:any, i:number) {
    const quantity =+ event.target.value;
    if (quantity < 1) {
      event.target.value = this.basketItems[i].quantity;
      return;
    }

  }

  getBasketItems() {
    return this.basketService.getBasketItems();
  }

  postOrder() {
    this.basketService.checkout().subscribe({
      next: (data: any) => {
        this.response = data;
        this.get = true;
      },
      error: (error: string) => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }
}
