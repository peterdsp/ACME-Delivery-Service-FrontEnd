import { StoreService } from '../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-all-stores',
  templateUrl: './button-all-stores.component.html',
  styleUrls: ['./button-all-stores.component.scss']
})
export class ButtonAllStoresComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private service: StoreService) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {

  }

  requestAllStores(){
    this.router.navigate(['/stores/lazy']);
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
