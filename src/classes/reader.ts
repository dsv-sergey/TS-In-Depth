import { Book } from '../intefaces';

export class Reader {
    name: string;
    books: Book[] = [];
    take(book: Book): void;

}