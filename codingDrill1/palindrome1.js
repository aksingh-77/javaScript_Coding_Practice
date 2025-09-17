const string = "geeks";

const checkPalindrome = (str) => {
  if (!str) return false;
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = checkPalindrome(string);
console.log(isPalindrome);
