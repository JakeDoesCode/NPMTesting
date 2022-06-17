import { firstCap, reverseString, calculator } from './script';

test('Does not return first capital letter.', () => {
  expect(firstCap('donKey')).toBe('K');
});

test('Does not return first capital letter.', () => {
  expect(firstCap('Dilzz')).toBe('D');
});

test('Does not return first capital letter.', () => {
  expect(firstCap('arrrRgggHHH')).toBe('R');
});

test('Does not return reversed string.', () => {
  expect(reverseString('ronald')).toBe('dlanor');
});

test('Does not return reversed string.', () => {
  expect(reverseString('wife')).toBe('efiw');
});

test('Does not return reversed string.', () => {
  expect(reverseString('rollo')).toBe('ollor');
});

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
