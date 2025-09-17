const string = "geeks";

const checkPalindrome = (str) => {
  if (!str) return false;
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = checkPalindrome(string);
console.log(isPalindrome);
