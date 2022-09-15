import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-button-basket',
  templateUrl: './button-basket.component.html',
  styleUrls: ['./button-basket.component.scss']
})
export class ButtonBasketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
