import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-top-store-products',
  templateUrl: './report-top-store-products.component.html',
  styleUrls: ['./report-top-store-products.component.scss']
})
export class ReportTopStoreProductsComponent implements OnInit {

  constructor(private service:StoreService) { }
  response:any;
  message = '';

  ngOnInit(): void {
  }

  requestTopStoreProducts() {
    return this.service.getTopStoreProducts().subscribe({
      next: data =>  {
        this.response = data
      },
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }
}
