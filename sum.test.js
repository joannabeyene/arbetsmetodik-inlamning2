const sum = require('./sum');

test('adds 10 + 22 to equal 32', () => {
    expect(sum(10, 22)).toBe(32);
});