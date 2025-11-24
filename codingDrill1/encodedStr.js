const str = "Abhishek";

const encodeString = (str) => {
  if (!str) return;
  let encodedStr = "";
  for (i = 0; i < str.length; i++) {
    encodedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }

  return encodedStr;
};

const encodedStr = encodeString(str);
console.log(encodedStr);
