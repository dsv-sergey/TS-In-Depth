import { ReferenceItem as RefBook } from '../classes';

export default class Encyclopedia extends RefBook {
    constructor(title: string, year: number, public edition: number) {
      super(title, year);
    }
  
    printItem(): void {
      super.printItem();
      console.log(`Edition ${this.edition} (${this.year})`);
    }
  
    printCitation(): void {
      console.log(`${this.title} - ${this.year}`);
    }
}