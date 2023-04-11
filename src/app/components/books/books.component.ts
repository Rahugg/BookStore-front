import {Component, Input} from '@angular/core';
import {Books} from "../../models/book";
import {BooksService} from "../../services/books.service";
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private bookService: BooksService, private modalService: MdbModalService) {

  }

  @Input() book: Books

  deleteItem(itemId: number) {
    return this.bookService.deleteBook(itemId).subscribe(
      () => {
        console.log('Item deleted successfully')
        this.reloadPage()
      });
  }

  reloadPage() {
    window.location.reload()
  }

  openModal(sendId: number) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {id: sendId},
    })
  }
}
