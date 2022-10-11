import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Food } from '../food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  get food(): Food {
    return this.route.snapshot.data['food'];
  }

  ngOnInit(): void {}
}
