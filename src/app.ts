showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Part 1 =================================================================================================================================
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

interface Person {
  name: string
  email: string
}

interface Author extends Person {
  numBooksPublised: number
}

interface Librarian extends Person {
  department: string
  assistCustomer: (custName: string) => void
}

interface DamageLogger {
  (reason: string): void
}

interface Book {
  id: number
  title: string
	author: string
	available: boolean
  category: Category
  pages?: number
  markedDamged?: DamageLogger
}

type BookProperties = keyof Book;

function getAllBooks(): readonly Book[] {
const books: readonly Book[] = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
  ];

  return books;
}

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
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

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
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

function logBookTitles(titles: string[]): void {
  titles.forEach((title: string) => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = <any>books[index];

  return [title, author];
}

// function calcTotalPages(): bigint {
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

// Part 2 ======================================================================

function getBookById(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find((book: Book) => book.id === id);
}

function createCustomerId(name: string, id: number): string {
  return `${name} - ${id}`;
}


let idGenerator: (name: string, id: number) => string =
              (name: string, id: number) => `${id}-${name}`;

idGenerator = createCustomerId;


function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Create customer ${name}`);
  if (age) {
    console.log(`Create customer age ${age}`);
  }
  if (city) {
    console.log(`Create customer city ${city}`);
  }
}

function сheckoutBooks(customer: string,	...bookIDs: number[]): string[] {
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

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(author: string, available: boolean): string[];
function getTitles(...args: [string | number | boolean, boolean?]): string[] {
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

function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

function bookTitlesTransform(title: any): string {
  assertStringValue(title);

  return [...title].reverse().join('');
}

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

function getBookProp(book: Book, prop: BookProperties) {
  if (typeof book[prop] === 'function') {
    return (book[prop] as Function).name;
  }

  return book[prop];
}

class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  private _publisher: string;

  static department: string = 'Classical';

  constructor(public title: string, public year: number) {
    console.log('Creating a new ReferenseItem')
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department ${ReferenceItem.department}`);
  }
}

class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition ${this.edition} ${this.year}`);
  }
}

// Part 1 _____________________________________________________

// getAllBooks();

// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);

// logBookTitles(titles);

// const result = getBookAuthorByIndex(2);

// console.log(result);

// console.log(calcTotalPages());

// Part 2 __________________________________________________

// const titles = getBookTitlesByCategory(Category.JavaScript);

// titles.forEach(title => console.log(title));

// const book = getBookById(1);

// console.log(book);

// let myId = createCustomerId('Ann', 10);

// console.log(myId);

// myId = idGenerator('Bob', 20);

// console.log(myId);

// idGenerator = (name: string, id: number) => `${id}-${name}`;

// myId = idGenerator('Bdfrob', 30);

// console.log(myId);

// createCustomer('Ann');

// createCustomer('Borka', 30);

// createCustomer('Henfreka', 50, 'Glasgo');

// const books = getAllBooks();

// console.log(books);

// logFirstAvailable();

// const myBooks = сheckoutBooks('Ann', 1, 2, 3);

// console.log(myBooks);

// const checkedOutBooks = getTitles(false);

// console.log(checkedOutBooks);

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3,
//   pages: 200,
//   markedDamged(reason: string) {
//     console.log(`Damaged ${reason}`);
//   }
// }

// printBook(myBook);
// myBook.markedDamged('missing back cover');

// const logDamaged: DamageLogger = (reason: string) => {
//   console.log(`Damaged ${reason}`);
// }

// logDamaged('missing back cover');

// const favoriteAuthor: Author = {
//   name: 'Anna',
//   email: 'anna@gmail.com',
//   numBooksPublised: 10,
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@gmail.com',
//   department: 'Classical Literature',
//   assistCustomer: null,
// };

// const offer = {
//   book: {
//     title: 'Essential TypeScript',
//   },
// };

// console.log(offer?.magazin);
  
// Task 4/05

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'id'));
// console.log(getBookProp(getAllBooks()[0], 'markedDamged'));

// Task 5

const ref = new ReferenceItem('My Title', 2020);
console.log(ref);
ref.printItem()

ref.publisher = 'My web';

console.log(ref.publisher);

const refEn = new Encyclopedia('My env', 2019, 10);

console.log(refEn);

refEn.printItem();

refEn.publisher = 'My htyr';

console.log(refEn.publisher);