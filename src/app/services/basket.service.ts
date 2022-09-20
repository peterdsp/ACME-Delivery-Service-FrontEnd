import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

basketItems = [];

  constructor(private http: HttpClient) { }

  addToBasket() {

  }
}

