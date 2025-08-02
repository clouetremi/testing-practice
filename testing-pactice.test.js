// testing-practice.test.js

const capitalize = require("./testing-practice");

test("should capitalize the first letter of the word", () => {
    const input = "bonjour";
    const output = "Bonjour"; 
    expect(capitalize(input)).toBe(output);
});