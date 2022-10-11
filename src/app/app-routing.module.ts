import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { ErrorComponent } from './core/error/error.component';
import { IndexComponent } from './core/index/index.component';
import { ProfileComponent } from './core/profile/profile.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then((m) => m.FoodModule),
    canLoad: [AuthGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
