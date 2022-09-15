import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-button-account',
  templateUrl: './button-account.component.html',
  styleUrls: ['./button-account.component.scss']
})
export class ButtonAccountComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private service: AccountService) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {
  }

  requestAccountByID(){
    this.router.navigate(['/acoount']);
    return this.service.getAccountById(1).subscribe({
      next: data =>  {
        this.response = data
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }
}
