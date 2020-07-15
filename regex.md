### regex
```javascript
//All numbers and letter ,underscore

 let longHand = /[A-Za-z0-9_]/
 let result = longHand.test('a')
  console.log(result) //true
  
  //match special char 
  let specialChar = /[*!?]/
  specialChar.test('*') //true
```
