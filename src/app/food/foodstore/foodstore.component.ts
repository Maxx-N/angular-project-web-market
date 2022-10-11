import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from 'src/app/core/food.service';
import { Food } from '../food';

@Component({
  selector: 'app-foodstore',
  templateUrl: './foodstore.component.html',
  styleUrls: ['./foodstore.component.scss'],
})
export class FoodstoreComponent implements OnInit {
  constructor(private foodService: FoodService) {}

  get foods$(): Observable<Food[]> {
    return this.foodService.foods$;
  }

  ngOnInit(): void {}
}
