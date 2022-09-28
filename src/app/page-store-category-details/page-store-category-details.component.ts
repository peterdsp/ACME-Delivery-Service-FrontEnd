import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-page-store-category-details',
  templateUrl: './page-store-category-details.component.html',
  styleUrls: ['./page-store-category-details.component.scss']
})
export class PageStoreCategoryDetailsComponent implements OnInit {

  id:any;
  response: any;
  show: any;
  get=false;
  message = '';

  constructor(private route:ActivatedRoute,private storeService: StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.id = par['id']
    });

    this.response = this.storeService.getTopStoresPerCategory(this.id).subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

}
