const str = "Abhishez";

const encodeString = (str, shiftBy) => {
  if (!str) return;
  let encodedStr = "";
  for (i = 0; i < str.length; i++) {
    encodedStr += String.fromCharCode(str.charCodeAt(i) + shiftBy);
  }

  return encodedStr;
};

const encodedStr = encodeString(str, 2);
console.log(encodedStr);
