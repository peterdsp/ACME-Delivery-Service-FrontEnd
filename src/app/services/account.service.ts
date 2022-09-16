import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:8080/accounts';

  constructor(private http: HttpClient) { }

  getAccountById(id:number) {
    return this.http.get(this.baseUrl + '/' +id);
  }
}

