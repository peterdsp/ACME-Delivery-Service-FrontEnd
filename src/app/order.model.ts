import { Account } from './account.model';
import { OrderItem } from './order-item.model';
export class Order {
  constructor (public account: Account,public orderItems: OrderItem[], public paymentMethod: string) {}
}
