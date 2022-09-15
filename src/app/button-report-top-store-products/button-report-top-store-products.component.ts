import { StoreService } from '../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-report-top-store-products',
  templateUrl: './button-report-top-store-products.component.html',
  styleUrls: ['./button-report-top-store-products.component.scss']
})
export class ButtonReportTopStoreProductsComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,private service:StoreService) { }

  response:any;
  message = '';

  ngOnInit(): void {
  }

  requestTopStoreProducts() {
    this.router.navigate(['/stores/reportTop10StoreProducts']);
    return this.service.getTopStoreProducts().subscribe({
      next: data =>  {
        this.response = data
      },
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }
}
