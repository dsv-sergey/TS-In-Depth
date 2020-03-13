export function sealed(param: string) {
    return function(target: Function): void {
        console.log(`«Sealing the constructor + ${param}»`);
        console.log(target);
        console.log(target.prototype);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function() {
        console.log('Creating new instance');
        console.log(target);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = newConstructor;

    newConstructor.prototype.printLibrarian = function() {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunction;
}