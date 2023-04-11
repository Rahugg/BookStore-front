import {Component} from '@angular/core';
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent {
  book = {
    Title: "",
    Description: "",
    Cost: ""
  }

  constructor(private bookService: BooksService) {

  }

  createPost() {
    this.bookService.createBook(this.book).subscribe((response: any) => {
      console.log(response);
    })
  }
}
