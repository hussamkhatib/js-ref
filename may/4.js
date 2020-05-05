/* 
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
 Example
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

*/
var findComplement = (num) => {
    num= num.toString(2)
    for(let i=0;i<num.length;i++){
    num = num.replace("0","2")
  }  
      for(let i=0;i<num.length;i++){
      num = num.replace("1","0")
  }  
        for(let i=0;i<num.length;i++){
  num = num.replace("2","1")
  }  
   
    num = parseInt(num,2)
    return num  
  };
  
console.log(findComplement(7,15,31,63,127))
// -> 0
console.log(findComplement(4)) //->3
console.log(findComplement(10))  // -> 5