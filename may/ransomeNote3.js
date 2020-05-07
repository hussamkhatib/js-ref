/*Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.
 example
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

var canConstruct = function(ransomNote, magazine) {
let count = 0,i= 0
    for(let j=0;i<=ransomNote.length-1;j++)
    {
         if(ransomNote[i] == magazine[j])
            { 
                    count++
                    i++
            }
    }
    
console.log(count,ransomNote.length)
 return count === ransomNote.length ? true : false

};
console.log(canConstruct("aa","ab")) // ->false
console.log(canConstruct("bjaajgea",
"affhiiicabhbdchbidghccijjbfjfhjeddgggbajhidhjchiedhdibgeaecffbbbefiabjdhggihccec"))  //->true