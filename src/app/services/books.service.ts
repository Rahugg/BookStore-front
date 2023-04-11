import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http";
import {Books} from "../models/book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  apiUrl = 'http://127.0.0.1:8000/api/book/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Books[]> {
    return this.http.get<Books[]>("http://127.0.0.1:8000/api/books")
  }

  createBook(book: { Description: string; Title: string; Cost: string }): Observable<Books[]> {
    return this.http.post<Books[]>("http://127.0.0.1:8000/api/book", book)
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  searchBook(searchTerm: string): Observable<Books[]> {
    return this.http.get<Books[]>(`http://127.0.0.1:8000/api/book`, {params: {searchTerm}})
  }

  updateBook(id: number, title: string, description: string): Observable<any> {
    const patchData = {title, description};
    return this.http.patch(`${this.apiUrl}${id}`, patchData);
  }

  sortBooksAscending(): Observable<Books[]> {
    return this.http.get<Books[]>("http://127.0.0.1:8000/api/sortedBooksAscending")
  }

  sortBooksDescending(): Observable<Books[]> {
    return this.http.get<Books[]>("http://127.0.0.1:8000/api/sortedBooksDescending")
  }
}
