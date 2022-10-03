import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-page-stores-name-or-category',
  templateUrl: './page-stores-name-or-category.component.html',
  styleUrls: ['./page-stores-name-or-category.component.scss']
})
export class PageStoresNameOrCategoryComponent implements OnInit {

  nameCategory:any;
  response: any;
  show: any;
  get=false;
  message = '';

  constructor(private route:ActivatedRoute,private storeService: StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.nameCategory = par['nameCategory']
    });

    this.response = this.storeService.getStoresByNameOrCategory(this.nameCategory) .subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

}

