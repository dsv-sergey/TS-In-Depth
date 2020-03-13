import { Book } from '../intefaces';

export const Reader = class {
    name: string;
    books: Book[] = [];

    take(book: Book): void {
        this.books.push(book);
    }
}