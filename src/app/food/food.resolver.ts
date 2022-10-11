import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodService } from '../core/food.service';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class FoodResolver implements Resolve<Food> {
  constructor(private foodService: FoodService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Food> {
    const id: number = +route.params['id'];
    return this.foodService.getFoodById$(id);
  }
}
