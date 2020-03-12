/// <reference path='utility-functions.ts' />

let r = Utility.Fees.calculateLateFee(45);
console.log(r);

import util = Utility.Fees;

r = util.calculateLateFee(10);
console.log(r);
