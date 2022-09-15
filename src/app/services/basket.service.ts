import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = 'http://localhost:8080/account';

  constructor(private http: HttpClient) { }

}

