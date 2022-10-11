import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoodRoutingModule } from './food-routing.module';
import { FoodstoreComponent } from './foodstore/foodstore.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
  declarations: [FoodstoreComponent, FoodDetailComponent],
  imports: [CommonModule, FoodRoutingModule],
})
export class FoodModule {}
