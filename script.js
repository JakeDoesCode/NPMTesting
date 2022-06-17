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

export { firstCap, reverseString, calculator };
