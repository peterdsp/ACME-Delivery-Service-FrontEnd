import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-report-top-stores',
  templateUrl: './page-report-top-stores.component.html',
  styleUrls: ['./page-report-top-stores.component.scss']
})
export class PageReportTopStoresComponent implements OnInit {

  response: any;
  allStores:any;
  get=false;
  message = '';
  show:any;
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.storeService.getTopStores().subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }


}
