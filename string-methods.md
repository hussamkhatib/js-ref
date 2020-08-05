```javascript
//indexOf
let mozilla = 'mozilla'
console.log(mozilla.indexOf('zilla'));
//2

//slice ,get part of the string
let mozilla = 'mozilla'
let zilla = mozilla.slice(2)
console.log(mozilla,zilla);
//"mozilla" "zilla"

//replace string
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);//"I am a sausage"

//converting string to array using split and vice versa with join
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
let myNewString = myArray.join(',');
console.log(myArray,myNewString)
//Array ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"] "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"



```
