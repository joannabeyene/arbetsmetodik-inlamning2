const palindromeString = require("./palindrome");

test("checks if string is a palindrome, true or false", () => {
    expect(palindromeString("cat")).toBe(false);
    expect(palindromeString("bob")).toBe(true);
});