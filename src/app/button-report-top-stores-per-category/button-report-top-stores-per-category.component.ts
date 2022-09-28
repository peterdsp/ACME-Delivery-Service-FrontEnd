import { StoreCategoryService } from './../services/store-category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-report-top-stores-per-category',
  templateUrl: './button-report-top-stores-per-category.component.html',
  styleUrls: ['./button-report-top-stores-per-category.component.scss']
})
export class ButtonReportTopStoresPerCategoryComponent implements OnInit {

  response: any;
  message = '';
  get = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  requestTopStoresPerCategory() {
    this.router.navigate(['/storecategories']);
   }

}
