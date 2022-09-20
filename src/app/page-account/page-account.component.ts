import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './../services/account.service';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss']
})
export class PageAccountComponent implements OnInit {
  response: any;
  get=false;
  message='';

  constructor(private route:ActivatedRoute, private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccountById(1).subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }


  }
