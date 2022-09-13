import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-top-store-products',
  templateUrl: './report-top-store-products.component.html',
  styleUrls: ['./report-top-store-products.component.scss']
})
export class ReportTopStoreProductsComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,private service:StoreService) { }

  response:any;
  message = '';
  topStoreProducts:any;

  ngOnInit(): void {
  }

  requestTopStoreProducts() {
    this.router.navigate(['/stores/reportTop10StoreProducts']);
    return this.service.getTopStoreProducts(this.topStoreProducts).subscribe({
      next: data =>  {
        this.response = data
      },
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }
}
