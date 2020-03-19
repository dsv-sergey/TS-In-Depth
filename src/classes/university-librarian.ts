import { Librarian } from '../intefaces';
import { logger, sealed, writable, logMethod, logParameter, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    teachCommunity() {
        console.log(`Teaching community`);
    }
}