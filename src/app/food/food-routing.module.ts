import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodResolver } from './food.resolver';
import { FoodstoreComponent } from './foodstore/foodstore.component';

const routes: Routes = [
  {
    path: '',
    component: FoodstoreComponent,
    children: [
      {
        path: ':id',
        component: FoodDetailComponent,
        resolve: { food: FoodResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule {}
