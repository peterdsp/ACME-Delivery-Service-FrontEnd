import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-button-account',
  templateUrl: './button-account.component.html',
  styleUrls: ['./button-account.component.scss']
})
export class ButtonAccountComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {
  }

  requestAccountByID(){
    this.router.navigate(['/accounts']);
  }
}
