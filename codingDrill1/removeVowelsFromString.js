const string = "This is test string to remove vowels";

const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  if (!str) return false;
  let updatedStr = "";
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      updatedStr += char;
    }
  }
  return updatedStr;
};

const removedVowel = removeVowels(string);
console.log(removedVowel);
