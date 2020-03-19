import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //   this.title = newTitle;
    //   this.year = newYear;
    // }

    private _publisher: string;

    static department: string = 'Classical';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenseItem');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}