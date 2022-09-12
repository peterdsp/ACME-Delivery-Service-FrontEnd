import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-report-top-stores',
  templateUrl: './report-top-stores.component.html',
  styleUrls: ['./report-top-stores.component.scss']
})
export class ReportTopStoresComponent implements OnInit {
  response: any;
  message = '';

  constructor(private service:StoreService) {}

  ngOnInit(): void {
  }

  requestTopStores(){
   return this.service.getTopStores().subscribe ({
      next: (data: any) => {
        this.response = data;
        this.message = '';
      },
      error: (error: string) => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }



}
