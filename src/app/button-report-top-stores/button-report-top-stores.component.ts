import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-button-report-top-stores',
  templateUrl: './button-report-top-stores.component.html',
  styleUrls: ['./button-report-top-stores.component.scss']
})
export class ButtonReportTopStoresComponent implements OnInit {

  response: any;
  message = '';
  get = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  requestTopStores(){
    this.router.navigate(['/stores/reportTopStores']);
  }

}
