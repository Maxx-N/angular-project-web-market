import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from 'src/app/core/book.service';
import { Food } from 'src/app/food/food';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {

  constructor(private bookService: BookService) {}

  get books$(): Observable<Food[]> {
    return this.bookService.books$;
  }

  ngOnInit(): void {
  }

}
