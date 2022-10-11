import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Food } from '../food/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private _foods$: BehaviorSubject<Food[]>;
  readonly foods$: Observable<Food[]>;

  constructor() {
    this._foods$ = new BehaviorSubject<Food[]>(this.initialFoods());
    this.foods$ = this._foods$.asObservable();
  }

  get foods(): Food[] {
    return this._foods$.getValue();
  }

  getFoodById$(id: number): Observable<Food> {
    return this.foods$.pipe(
      map((foods) => {
        return foods.find((food) => food.id === id)!;
      })
    );
  }

  private initialFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Burger',
        imageUrl:
          'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
      },
      {
        id: 2,
        name: 'Salade',
        imageUrl:
          'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad.jpg',
      },
      {
        id: 3,
        name: 'Pizza',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
      },
    ];
  }
}
