const string = "geeks";

const checkPalindrome = (str) => {
  if (!str) return false;
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = checkPalindrome(string);
console.log(isPalindrome);
