//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)

// Solution1
// function validAnagram(string1, string2)  {
//     return cleanString(string1) === cleanString(string2);
//     } 
// function cleanString(str){
//         return  str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
//     }




function validAnagram(string1, string2)  {
    let first = string1.toLowerCase().split('').sort().join();
    let second = string2.toLowerCase().split('').sort().join(); 
    if (first == second) {
        return true
    } else {
        return false
    }

    }

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car"))// false) // false