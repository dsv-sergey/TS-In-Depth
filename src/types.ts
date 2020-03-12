import { Book, Person } from './intefaces';

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

export { BookProperties, PersonBook, BookOrUndefined };