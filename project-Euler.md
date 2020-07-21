 ```jaascript
 function multiplesOf3and5(number) {
let a=0,b=0,c=0;
let three = Math.floor(number/3)
let five =  Math.floor(number/5)
console.log(three,five)
let tAF =  Math.floor(number/15)
let i=1
while(i<=three)
{ a += 3*i
   i++
}
i=1
 if(number%5 === 0){five--}
 while(i<=five )
  {
  b += 5*i
  i++}
  i= 1
  while(i<=tAF)
  {c += 15*i
  i++}
  
  return a+b-c;
}

console.log(multiplesOf3and5(1000));


function multiplesOf3and5(number) {
  let sum = 0,
    i = 3;
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
    i++;
  }
  return sum;
}
```
