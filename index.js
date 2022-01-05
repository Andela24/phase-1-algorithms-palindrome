function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('');
  console.log(reversed)

  if(reversed === word)
  return true;

  return false
}
isPalindrome("robot")
/* 
  Add your pseudocode here
  make a function that returns true if a word is polindrome(in meaning if is 
    reads the same forwards and backwards), or return false if not.
  test case:
  mom === mom //true
  abc ===bca //false
*/

/*
  Add written explanation of your solution here
  doing .split() to convert an array of letters,
  then .reverse()to reverse all the letters in the array
  then .join() to convert back to an string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
