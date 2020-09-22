#### Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

```javascript
function largestPrimeFactor(number) { 
  let ans = 0,i=2
  while(i <= number){
 number%i === 0 ?
number /= i && (ans = i) : i++  
} 
  return ans;
}
console.log(largestPrimeFactor(13195));

/*largestPrimeFactor(2) should return a number.
Passed
largestPrimeFactor(2) should return 2.
Passed
largestPrimeFactor(3) should return 3.
Passed
largestPrimeFactor(5) should return 5.
Passed
largestPrimeFactor(7) should return 7.
Passed
largestPrimeFactor(8) should return 2.
Passed
largestPrimeFactor(13195) should return 29.
Passed
largestPrimeFactor(600851475143) should return 6857.*/
```
