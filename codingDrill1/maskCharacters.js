const str = "9876543212345";

const maskCharacters = (inputStr, noOfLastCharToShow) => {
  if (!inputStr || noOfLastCharToShow < 0) return false;
  const strLength = inputStr?.length;

  if (noOfLastCharToShow >= strLength) return inputStr;
  const maskCharacters = "*".repeat(strLength - noOfLastCharToShow);
  const lastChars = inputStr.slice(-noOfLastCharToShow);

  return maskCharacters + lastChars;
};

const maskedStr = maskCharacters(str, 4);
console.log(maskedStr);
