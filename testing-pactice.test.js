// testing-practice.test.js

const { default: expect } = require("expect");
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./testing-practice");

test("should capitalize the first letter of the word", () => {
    const input = "bonjour";
    const output = "Bonjour";
    expect(capitalize(input)).toBe(output);
});

test("should reverse a string", () => {
    const input = "bonjour";
    const output = "ruojnob";
    expect(reverseString(input)).toBe(output);
});

test("should add two numbers", () => {
    expect(calculator.add(3, 5)).toBe(8);
})

test("should subtract two numbers", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("should multiply two numbers", () => {
    expect(calculator.multiply(5, 10)).toBe(50);
});

test("should divide two numbers", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test("should shift a string based on ceasar cipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("should follow the original letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("should keep punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("should return the average", () => {
const object = analyzeArray([1, 8, 3, 4, 2, 6]);
expect(object.average).toBe(4);
});

test("should return the minimum value", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object.min).toBe(1); 
})

test("should return the minimum value", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object.max).toBe(8); 
})

test("should retrun an object with length property", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object.length).toBe(6);
})