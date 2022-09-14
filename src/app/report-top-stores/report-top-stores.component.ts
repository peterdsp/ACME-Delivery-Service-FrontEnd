import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-report-top-stores',
  templateUrl: './report-top-stores.component.html',
  styleUrls: ['./report-top-stores.component.scss']
})
export class ReportTopStoresComponent implements OnInit {

  response: any;
  message = '';
  get = false;

  constructor(public router: Router, private route: ActivatedRoute,private service:StoreService) {}

  ngOnInit(): void {
  }

  requestTopStores(){
    this.router.navigate(['/stores/reportTopStores']);
   return this.service.getTopStores().subscribe ({
      next: (data: any) => {
        this.response = data;
        this.get = true;
      },
      error: (error: string) => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

}
