import { Category } from './enums';
import { PersonBook } from './types';
import { Book, Author, Logger, Person, Librarian } from './intefaces';
import { createCustomer, createCustomerId, getAllBooks, purge } from './functions';
import { ReferenceItem, UniversityLibrarian, RefBook } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =================================================================================================================================

let idGenerator: (name: string, id: number) => string =
              (name: string, id: number) => `${id}-${name}`;

idGenerator = createCustomerId;

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

const logDamaged: Logger = (reason: string) => {
  console.log(`Damaged ${reason}`);
}

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

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript',
//   },
// };

// console.log(offer?.magazin?.book);

// Task 4/05

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'id'));
// console.log(getBookProp(getAllBooks()[0], 'markedDamged'));

// Task 5

// const ref = new ReferenceItem('My Title', 2020);
// console.log(ref);
// ref.printItem();

// ref.publisher = 'My web';

// console.log(ref.publisher);

const refEn = new RefBook('My env', 2019, 10);

// console.log(refEn);

// refEn.printItem();


// refEn.publisher = 'My htyr';

// console.log(refEn.publisher);

//Task 05.03

// const refBook = new Encyclopedia('Title', 2020, 10);

// refBook.printCitation();
// console.log(refBook);

const faivoriteLibrarian: Librarian = new UniversityLibrarian();

console.log(faivoriteLibrarian);
faivoriteLibrarian.name = 'Anna';
faivoriteLibrarian.assistCustomer('Boris');

const personBook: PersonBook = {
  name: 'Anna',
  email: 'anna@mail.ru',
  id: 1,
  title: 'My title',
  available: true,
  category: Category.CSS,
  author: 'Anton Pet',
}

console.log(personBook);

import('./classes').then(module => {
  const reader = new module.Reader();
  reader.name = 'Anna';
  reader.take(getAllBooks()[0]);
  console.log(reader);
})

const inventory: Book[] = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
  ];

let result = purge(inventory);
  
console.log(result);

const result2 = purge([1, 2, 3, 4]);

console.log(result2);