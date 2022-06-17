import { firstCap, reverseString, calculator, caesar, analyze } from './script';
//return first capitalized letter of string
test('Does not return first capital letter.', () => {
  expect(firstCap('donKey')).toBe('K');
});

test('Does not return first capital letter.', () => {
  expect(firstCap('Dilzz')).toBe('D');
});

test('Does not return first capital letter.', () => {
  expect(firstCap('arrrRgggHHH')).toBe('R');
});

//reverse string
test('Does not return reversed string.', () => {
  expect(reverseString('ronald')).toBe('dlanor');
});

test('Does not return reversed string.', () => {
  expect(reverseString('wife')).toBe('efiw');
});

test('Does not return reversed string.', () => {
  expect(reverseString('rollo')).toBe('ollor');
});

//calculator
test('Incorrect value', () => {
  expect(calculator.add(3, 7)).toBe(10);
});

test('Incorrect value', () => {
  expect(calculator.subtract(120, 20)).toBe(100);
});

test('Incorrect value', () => {
  expect(calculator.multiply(4, 10)).toBe(40);
});

test('Incorrect value', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

//ceasarCipher shift letters
test('Incorrect return', () => {
  expect(caesar('RUN',1)).toBe('SVO');
});


test('Incorrect return', () => {
  expect(caesar('ABcD!',13)).toBe('NOpQ!');
});

test('Incorrect return', () => {
  expect(caesar('aBCD',13)).toBe('nOPQ');
});
//analyze array
test("Test 3", () => {
  expect(analyze([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});

test("Test 2", () => {
  expect(analyze([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});