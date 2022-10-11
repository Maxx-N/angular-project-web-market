import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../core/book.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<Book> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    const id: number = +route.params['id'];
    return this.bookService.getBookById$(id);
  }
}
