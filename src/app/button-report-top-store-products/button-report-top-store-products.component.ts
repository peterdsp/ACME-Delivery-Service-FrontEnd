import { StoreService } from '../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-report-top-store-products',
  templateUrl: './button-report-top-store-products.component.html',
  styleUrls: ['./button-report-top-store-products.component.scss']
})
export class ButtonReportTopStoreProductsComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  response:any;
  message = '';

  ngOnInit(): void {
  }

  requestTopStoreProducts() {
    this.router.navigate(['/stores/reportTop10StoreProducts']);
  }
}
