import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookResolver } from './book.resolver';
import { BookstoreComponent } from './bookstore/bookstore.component';

const routes: Routes = [
  {
    path: '',
    component: BookstoreComponent,
    children: [
      {
        path: ':id',
        component: BookDetailComponent,
        resolve: {book: BookResolver}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
