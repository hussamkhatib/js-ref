### regex

#### flags
ignore case while matching :  *i* flag
find more than first search : *g* flag
```javascript
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

#### methods
test : true or false
```javascript
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```
match : extracts matches
```javascript
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```
#### other
```javascript
search multiple string with | operator
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);


//All numbers and letter ,underscore

 let longHand = /[A-Za-z0-9_]/
 let result = longHand.test('a')
  console.log(result) //true
  
  //match special char 
  let specialChar = /[*!?]/
  specialChar.test('*') //true

  //match everything 
  /../g  //two chars
 /.{1,4}/g  //four
```
