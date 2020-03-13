import { Book } from './intefaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];

    return books;
}

export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const numerOfBooks: number = books.length;
    let title = '';

    for (const book of books) {
        if (book['available']) {
            title = book['title'];
            break;
        }
    }

    console.log(`Total books ${numerOfBooks}`);
    console.log(`First available book ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const bookTitlesByCategory: string[] = [];
    const books = getAllBooks() as any[];

    for (const book of books) {
        if (book.category === category) {
            bookTitlesByCategory.push(book.title);
        }
    }

    console.log(`Category: ${Category[category]}`);

    return bookTitlesByCategory;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = <any>books[index];

    return [title, author];
}

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find((book: Book) => book.id === id);
}

export function createCustomerId(name: string, id: number): string {
    return `${name} - ${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Create customer ${name}`);
    if (age) {
        console.log(`Create customer age ${age}`);
    }
    if (city) {
        console.log(`Create customer city ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const titles: string[] = [];

    console.log(`Checkin out books for ${customer}`);

    for (const id of bookIDs) {
        const book: any = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(author: string, available: boolean): string[];
export function getTitles(...args: [string | number | boolean, boolean?]): string[] {
    const books: ReadonlyArray<any> = getAllBooks();

    if ((args.length < 1) || (args.length > 2)) {
        return [];
    }

    if (args.length === 1) {
        const arg = args[0];
        if (typeof arg === 'string') {
            return books.filter((book: any) => book.author === arg).map((book: any) => book.title);
        }
        if (typeof arg === 'boolean') {
            return books.filter((book: any) => book.available === arg).map((book: any) => book.title);
        }
    }

    if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'string' && typeof available === 'boolean') {
            return books.filter((book: any) => book.id === id && book.available === available).map(book => book.title);
        }

    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitlesTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }

    return book[prop];
}

// export function calcTotalPages(): bigint {
//   const data = [
//     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//   ];
//   let pages = data.reduce((acc: bigint, obj) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//   }, 0n);

//   return pages;
// }

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}


