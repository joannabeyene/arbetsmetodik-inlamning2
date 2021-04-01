const subtract = require('./subtract');

test('subtracts 50 - 25 to equal 25', () => {
    expect(subtract(50, 25)).toBe(25);
});