import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.scss']
})
export class AllStoresComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private service: StoreService) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {

  }

  requestAllStores(){
    this.router.navigate(['/stores']);
    return this.service.getAllStores().subscribe({
      next: data =>  {
        this.response = data
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }

}
