import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  get book(): Book {
    return this.route.snapshot.data['book'];
  }

  ngOnInit(): void {}
}
