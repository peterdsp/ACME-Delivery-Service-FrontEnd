import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private storeService: StoreService, private router: Router) { }

  id:any;
  response: any;
  show: any;
  get=false;
  message = '';

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.id = par['id']
    });

    this.response = this.storeService.getStoresById(this.id) .subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }

}
