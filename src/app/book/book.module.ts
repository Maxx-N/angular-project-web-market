import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookstoreComponent } from './bookstore/bookstore.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    BookstoreComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
