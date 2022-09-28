import { StoreService } from '../services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-all-stores',
  templateUrl: './button-all-stores.component.html',
  styleUrls: ['./button-all-stores.component.scss']
})
export class ButtonAllStoresComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {

  }

  requestAllStores(){
    this.router.navigate(['/stores/lazy']);
  }

}
