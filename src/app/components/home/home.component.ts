import {Component, OnInit} from '@angular/core';
import {Books} from "../../models/book";
import {BooksService} from "../../services/books.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Books[] = []
  searchTerm: string;
  searchResults: Books[] = []
  errorMessage: string;

  constructor(private bookService: BooksService) {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.bookService.getAll().subscribe(books => {
      console.log(books)
      this.books = books
    })
  }


  search(searchTerm: string) {
    this.bookService.searchBook(searchTerm).subscribe(
      (data) => {
        console.log(data);
        this.searchResults = data;
        this.errorMessage = "";
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = "Show that it was not found"
          console.log('The requested resource was not found.');
        } else {
          // Handle other errors
          console.error(error.message);
        }
      });
    ;
  }

  sortBooksAsc() {
    this.bookService.sortBooksAscending().subscribe(books => {
      console.log(books);
      this.books = books
    })
  }
  sortBooksDesc() {
    this.bookService.sortBooksDescending().subscribe(books => {
      console.log(books);
      this.books = books
    })
  }
}

