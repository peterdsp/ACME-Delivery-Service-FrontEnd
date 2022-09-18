import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-all-stores',
  templateUrl: './page-all-stores.component.html',
  styleUrls: ['./page-all-stores.component.scss']
})
export class PageAllStoresComponent implements OnInit {

  response: any;
  allStores:any;
  get=false;
  message = '';
  show:any;
  constructor(private storeService:StoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storeService.getAllStores().subscribe({
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
