import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookAddComponent,BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BookListComponent {
  title="Liste des nouveaux livres";
  //books contient des instanciations de book
  books = [
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"Atomic Habits 2","James Clear",25),
    new Book(3,"Atomic Habits 3","James Clear",45)
  ];

  action ="";
  selectedBook?: Book;
  selectedId?: number;

  changeAction(action:string){
    this.action= action;
  }

  addBook(book:Book){
    this.books=[...this.books,book];//copier les elts du tab ancien et les ajoute ds le nvx tab qui va écraser l'ancien
    this.changeAction("");//masque le formulaire
  }

  getId(id: number) {
    this.selectedId=id;
    this.selectedBook= this.books.find(book => book.id === id);
    this.changeAction('edit');
  }

  editBook(book:Book){
    this.books[book.id -1]=book;
    this.changeAction("");
  }
  deleteBook(book: Book): void {
    if (confirm('Es-tu sûr de vouloir supprimer ce livre ?')) {
      this.books = this.books.filter(b => b.id !== book.id);
      console.log(book.id);
    }
  }
}