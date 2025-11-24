const str = "The quick brown fox jumps over the lazy dog";

const countVowelsAndConsonants = (inputStr) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of inputStr) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowelCount, consonantCount };
};

const result = countVowelsAndConsonants(str);
console.log(
  `Vowels: ${result.vowelCount}, Consonants: ${result.consonantCount}`
);
