import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-report-top-store-products',
  templateUrl: './page-report-top-store-products.component.html',
  styleUrls: ['./page-report-top-store-products.component.scss']
})
export class PageReportTopStoreProductsComponent implements OnInit {

  response: any;
  allStores:any;
  get=false;
  message = '';
  show:any;
  constructor(private storeService:StoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storeService.getTopStoreProducts().subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

  requestData() {

  }


}

