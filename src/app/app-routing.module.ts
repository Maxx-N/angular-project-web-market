import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { IndexComponent } from './core/index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then((m) => m.FoodModule),
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
