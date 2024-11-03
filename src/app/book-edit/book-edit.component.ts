import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() bookEdit?:Book;
  @Output() bookEdited = new EventEmitter <Book>();
  editBook(title:string,author:string,price:number){
    const newBook= new Book(
      this.bookEdit!.id,
      title,
      author,
      price
    );
    this.bookEdited.emit(newBook);
  }
}