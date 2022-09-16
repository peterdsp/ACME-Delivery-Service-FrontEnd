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

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.id = par['id']
    });
    this.response = this.storeService.getStoresById(this.id)

    this.show = this.route.queryParams;

    this.route.params.subscribe({
      next: par => {
        if(par){
          this.id = par['id'];

          if (this.id == 0) {
            this.router.navigateByUrl('/')
          } else if (this.id==100){
            // else { this.router.navigate(['user',100])} //navigate to user 100
            this.router.navigate(['page'])
          }
        }
      }
     })
  }

}
