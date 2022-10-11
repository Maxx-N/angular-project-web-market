import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Book } from '../book/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _books$: BehaviorSubject<Book[]>;
  readonly books$: Observable<Book[]>;

  constructor() {
    this._books$ = new BehaviorSubject<Book[]>(this.initialBooks());
    this.books$ = this._books$.asObservable();
  }

  get books(): Book[] {
    return this._books$.getValue();
  }

  getBookById$(id: number): Observable<Book> {
    return this.books$.pipe(
      map((books) => {
        return books.find((book) => book.id === id)!;
      })
    );
  }

  private initialBooks(): Book[] {
    return [
      {
        id: 1,
        name: 'Harry Potter',
        imageUrl:
          'https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/9781408855669.jpg',
      },
      {
        id: 2,
        name: 'Les Misérables',
        imageUrl:
          'https://kbimages1-a.akamaihd.net/a6bdd3f5-ba60-4ad3-8f6b-5f1427021961/1200/1200/False/les-miserables-305.jpg',
      },
      {
        id: 3,
        name: 'La Métamorphose',
        imageUrl: 'https://images.penguinrandomhouse.com/cover/9781400052998',
      },
    ];
  }
}
