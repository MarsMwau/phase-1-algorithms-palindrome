function isPalindrome(word) {
   // Convert the string to lowercase and remove non-letter characters
   word = word.toLowerCase().replace(/[^a-z]/g, '');
  
   // Check if the string is equal to its reverse
   return word === word.split('').reverse().join('');

}

/* 
  Add your pseudocode here
   // Convert the string to lowercase and remove non-letter characters
   word = word.toLowerCase().replace(/[^a-z]/g, '');
  
   // Check if the string is equal to its reverse
   return word === word.split('').reverse().join('');


*/

/*
  Add written explanation of your solution here
1. Remove any spaces or punctuation from the input word.
2. Start at the beginning and end of the word.
3. Compare the letters at the beginning and end of the word. If they are different, the word is not a palindrome.
4. Move one step closer to the middle of the word, and compare the letters again. Keep doing this until the pointers meet in the middle of the word, or until you find two letters that don't match.
5. If you make it all the way through the word without finding two letters that don't match, then the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;