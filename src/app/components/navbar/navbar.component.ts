import {Component} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Books} from "../../models/book";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private bookService: BooksService) {

  }
}
