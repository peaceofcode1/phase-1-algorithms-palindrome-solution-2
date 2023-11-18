function reverse(word){
  // 'abc' => 'cba'
  const wordArray = word.split("")
  const reversedWordArray =wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
  }
  
  function isPalindrome(word) {
    // Write your algorithm here
   // reverse the input string
   const reversedWord = reverse(word)
  //if the reversed string is the same as the input
   if (word === reversedWord){
    return true
   } else {
    return false
   } 
  }
   // return true
  //else
    //return false
  
  
  /* 
    Add your pseudocode here
  /
  
  /
    Add written explanation of your solution here
  */
  
  // You can run node index.js to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome(""));
  }
  
  module.exports = isPalindrome;
  