import {Component} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  id: number | any;
  newTitle: string;
  newDescription: string;

  constructor(public modalRef: MdbModalRef<ModalComponent>, private bookService: BooksService) {
  }

  updateBook() {
    this.bookService.updateBook(this.id, this.newTitle, this.newDescription).subscribe(
      response => {
        console.log(response), this.reloadPage()
      },
      error => console.log(error),
    );
  }

  reloadPage() {
    window.location.reload()
  }
}
