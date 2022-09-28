import { StoreCategoryService } from './../services/store-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-store-categories',
  templateUrl: './page-store-categories.component.html',
  styleUrls: ['./page-store-categories.component.scss']
})
export class PageStoreCategoriesComponent implements OnInit {

  response: any;
  get=false;
  message = '';

  constructor(private service: StoreCategoryService) { }

  ngOnInit(): void {
    this.service.getStoreCategories().subscribe ({
      next: (data: any) => {
        this.response = data;
        this.get = true;
      },
      error: (error: string) => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }
}
