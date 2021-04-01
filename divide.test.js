const divide = require('./divide');

test('divides 30 / 3 to equal 10', () => {
    expect(divide(30, 3)).toBe(10);
});