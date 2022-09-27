import { OrderItem } from './../order-item.model';
import { StoreProduct } from './../store-product.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../account.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketItems: OrderItem[] = [];
  account!: Account;

  urlOrderPost = 'http://localhost:8080/orders';
  public order!: Order;
  public orderItem!: OrderItem;

  constructor(private http: HttpClient) {

    let savedBasketItemsAsJSON = sessionStorage.getItem("basketItems");
    if (savedBasketItemsAsJSON != null) {
       let parsedsavedBasketItems = JSON.parse(savedBasketItemsAsJSON);
       parsedsavedBasketItems.forEach((parsedItem: OrderItem) => this.basketItems.push(new OrderItem(parsedItem.storeProduct,1,parsedItem.orderPrice)));
    } else {
      this.basketItems = [];
    }
  }

  addItem(store_Product: StoreProduct) {

    this.orderItem = new OrderItem(store_Product,1,store_Product.price)


    this.orderItem.quantity = 1;
    this.orderItem.storeProduct = store_Product;
    this.orderItem.orderPrice = store_Product.price;

    this.basketItems.push(this.orderItem);
    sessionStorage.setItem("basketItems",JSON.stringify(this.basketItems));

    }

    getBasketItems() {
      return this.basketItems;
    }

    checkout() {
      this.account = new Account(2,'Ermis','Valides','Patriarchou Ioakim 45 10676 Athina Attica','mommykmr@hotmail.red','44&4C&b7Z21','6998438152',46);
      this.order = new Order(this.account,this.basketItems,'CASH');
      return this.http.post(this.urlOrderPost, this.order, this.httpOptions);
    }

    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'crossDomain': 'true'
      })
    }


}


