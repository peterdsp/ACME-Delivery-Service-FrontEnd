import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.scss']
})
export class AllStoresComponent implements OnInit {

  constructor(private service: StoreService) { }
  response:any;
  get = false;
  message = '';
  
  ngOnInit(): void {
  }

  requestAllStores(){
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
