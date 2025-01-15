//Smart Approach
/**
 * Time : O(n)
 * Space : O(n)
 */
var isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let str = x.toString();
  return str === str.split("").reverse().join("");
};
console.log(isPalindrome(121));

//Usual Approach
/**
 *  Time : O(n)
 * Space : O(1)
 */
var isPalindrome1 = (x) => {
  if (x < 0) {
    return false;
  }
  let original = x;
  let reversed = 0;
  while (x > 0) {
    const lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return reversed === original;
};
console.log(isPalindrome1(-121));

// Approach 2 is actually efficient and simple
