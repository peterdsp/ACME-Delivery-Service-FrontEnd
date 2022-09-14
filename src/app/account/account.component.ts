import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,
              private service:StoreService) {}

  ngOnInit(): void {
  }

  // getAccountLogin() {
  //   this.router.navigate(['/account']);
  //   return this.service.getAccountLogin(this.getAccountLogin).subscribe({
  //     next: data =>  {
  //       this.response = data
  //     },
  //     error: error => this.message = error,
  //     complete: () => this.message = "Request complete."
  //   });
  // }

}
