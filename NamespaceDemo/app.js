/// <reference path='utility-functions.ts' />
var r = Utility.Fees.calculateLateFee(45);
console.log(r);
var util = Utility.Fees;
r = util.calculateLateFee(10);
console.log(r);
