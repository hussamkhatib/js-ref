```javascript
//fixed to decimal
let lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal.toFixed(2));
//"1.77"

//converting string to number
let myNumber = '74';
myNumber =Number(myNumber) + 3;
console.log(myNumber)
//77

//get no of digits in a number 
var length = Math.log(number) * Math.LOG10E + 1 | 0;
  //0 and non negatives doesn't work

function numDigits(x) {
  return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
}
// works for all cases
```
