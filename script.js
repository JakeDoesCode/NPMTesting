function firstCap(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) return word[i];
  }
}

const reverseString = function (string) {
  let tempArray = string.split('');
  let backward = tempArray.reverse();
  return backward.join('');
};

const calculator = {};

calculator.add = function (a, b) {
  return a + b;
};
calculator.subtract = function (a, b) {
  return a - b;
};
calculator.multiply = function (a, b) {
  return a * b;
};
calculator.divide = function (a, b) {
  return a / b;
};



const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};


function analyze(...arr){
  let arrObj= { }
  let newArr = arr[0].sort((a,b) => a-b)
  let arrayLength = arr[0].length 
  arrObj.length = arrayLength
  arrObj.min = newArr[0]
  arrObj.max = newArr[newArr.length - 1]
  const sum = newArr.reduce((a, b) => a + b, 0);
  arrObj.average = sum/arrayLength
  return arrObj
}


export { firstCap, reverseString, calculator, caesar, analyze}
