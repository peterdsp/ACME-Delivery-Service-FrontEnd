import { OrderItem } from './../order-item.model';
import { StoreProduct } from './../store-product.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../account.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  urlOrderPost = 'http://localhost:8080/orders';

  basketItems: OrderItem[] = [];
  account!: Account;
  public order!: Order;
  public orderItem!: OrderItem;
  storeId:any;
  initialOrder:boolean = true;

  constructor(private http: HttpClient, public router: Router) {

    let savedBasketItemsAsJSON = sessionStorage.getItem("basketItems");
    if (savedBasketItemsAsJSON != null) {
       let parsedsavedBasketItems = JSON.parse(savedBasketItemsAsJSON);
       parsedsavedBasketItems.forEach((parsedItem: OrderItem) => this.basketItems.push(new OrderItem(parsedItem.storeProduct,1,parsedItem.orderPrice)));
    } else {
      this.basketItems = [];
    }
  }

  addItem(store_Product: StoreProduct,id:any) {

    if (this.initialOrder) {
      this.storeId = id;
      this.setBasket(store_Product);
      this.initialOrder = false;
      return;
    }
      if (this.storeId == id) {
        this.setBasket(store_Product);
      } else if (this.storeId !== id) {
        this.initialOrder = true;
        sessionStorage.clear;
        this.storeId = id;
        this.basketItems = [];
        this.setBasket(store_Product);
        this.initialOrder = false;
    }
    }

    setBasket(store_Product: StoreProduct) {
      if (this.initialOrder) {
        this.orderItem = new OrderItem(store_Product,1,store_Product.price);
        this.basketItems.push(this.orderItem);
        sessionStorage.setItem("basketItems",JSON.stringify(this.basketItems));
        return;
      } //lamda expression
      for (let oi of this.basketItems) {
        if (oi.storeProduct.id == store_Product.id) {
          oi.quantity += 1;
          sessionStorage.setItem("basketItems",JSON.stringify(this.basketItems));
          return;
        }
      }
        this.orderItem = new OrderItem(store_Product,1,store_Product.price);
        this.basketItems.push(this.orderItem);
        sessionStorage.setItem("basketItems",
        JSON.stringify(this.basketItems));
    }

    getBasketItems() {
      return this.basketItems;
    }

    checkout() {
      this.router.navigate(['/stores/lazy']);
      this.account = new Account(2,'Ermis','Valides','Patriarchou Ioakim 45 10676 Athina Attica','mommykmr@hotmail.red','44&4C&b7Z21','6998438152',46);
      this.order = new Order(this.account,this.basketItems,'CASH');
      sessionStorage.setItem("orders",JSON.stringify(this.order));
      this.basketItems = [];
      return this.http.post(this.urlOrderPost, sessionStorage.getItem("orders"), this.httpOptions);
    }

    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'crossDomain': 'true'
      })
    }
}


