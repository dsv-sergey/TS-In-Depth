import { Category } from './enums';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { Book, Author, Logger, Person, Librarian, Magazine } from './intefaces';
import { createCustomer, createCustomerId, getAllBooks, purge, logCategorySearch, getBooksByCategory, getBooksByCategoryPromise, logSearchResults } from './functions';
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from './classes';
import { sealed } from './decorators';
import Encyclopedia from './classes/encyclopedia';

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

// const faivoriteLibrarian: Librarian = new UniversityLibrarian();

// console.log(faivoriteLibrarian);
// faivoriteLibrarian.name = 'Anna';
// faivoriteLibrarian.assistCustomer('Boris');

// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@mail.ru',
//   id: 1,
//   title: 'My title',
//   available: true,
//   category: Category.CSS,
//   author: 'Anton Pet',
// }

// console.log(personBook);

// import('./classes').then(module => {
//   const reader = new module.Reader();
//   reader.name = 'Anna';
//   reader.take(getAllBooks()[0]);
//   console.log(reader);
// })

// Task 07.01

// const inventory: Book[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// let result = purge(inventory);

// console.log(result);

// const result2 = purge([1, 2, 3, 4]);

// console.log(result2);

// function func<T>(message: T): T { 
//   const regexp = /regexp/g; 

//   if (typeof message !== 'string') { 
//     return message; 
//   } else {
//     return message.replace(regexp, '');
//   }  
// }

// Task 07.02

// const bookShelf: Shelf<Book> = new Shelf<Book>();

// bookShelf.add(inventory[0]);
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazinShelf: Shelf<Magazine> = new Shelf<Magazine>();

// magazines.forEach(mag => magazinShelf.add(mag));

// console.log(magazinShelf.getFirst());

// magazinShelf.printTitles();

// Task 07.04

// const book: BookRequiredFields = {
//   id: 1,
//   title: 'REf;l',
//   author: 'hy',
//   available: false,
//   category: Category.TypeScript,
//   markedDamged: null,
//   pages: 500,
// }

// const updatedBook: UpdatedBook = {
//   id: 1,
//   title: 'djhbvlkdf',
// }

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];

// createCustomer(...params);

// const o = new UniversityLibrarian();
// console.log(o);

// o.name = 'Anna';
// (o as any).printLibrarian();

// o.assistCustomer = null;
// o.assistFaculty = null;

// const o = new RefBook('Title', 2020, 3);

// o.printItem();

// const o = new UniversityLibrarian();
// console.log(o);

// o.name = 'Anna';

// o.assistCustomer('Boris');

// const po = new Encyclopedia('titf', 2020, 6);

// po.copies = 2;

// getBooksByCategory(Category.CSS, logCategorySearch);


// getBooksByCategoryPromise(Category.CSS)
// .then(titles => { titles.forEach(title => console.log(title)); return titles.length })
// .then(numberOfBooks => console.log(numberOfBooks));

// getBooksByCategoryPromise(Category.Software)
// .catch(err => console.log(err));

console.log('Start');
logSearchResults(Category.JavaScript)
.then(console.log)
.catch(console.log);
console.log('Finish');