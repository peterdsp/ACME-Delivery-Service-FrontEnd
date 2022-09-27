import { StoreProduct } from './store-product.model';
export class OrderItem {
  constructor(public storeProduct:StoreProduct, public quantity:number, public orderPrice:number) {}

}
