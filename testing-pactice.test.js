// testing-practice.test.js

const {capitalize, reverseString} = require("./testing-practice");

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