showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Part 1 =================================================================================================================================
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

function getAllBooks(): Array<object> {
const books: Array<object> = [
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

function calcTotalPages(): bigint {
  const data = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];
  let pages = data.reduce((acc: bigint, obj) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, 0n);

  return pages;
}

// Part 2 ======================================================================

function getBookById(id: number): object | undefined {
  const books = getAllBooks();
  return books.find((book: any) => book.id === id);
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

const myBooks = сheckoutBooks('Ann', 1, 2, 3);

console.log(myBooks);

const checkedOutBooks = getTitles(false);

console.log(checkedOutBooks);
