const { add } = require('../arithmetica');

test('2 + 3 equals to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('3 + 3 equals to 6', () => {
    expect(add(3, 3)).toBe(6);
});

test('7 + 3 equals to 10', () => {
    expect(add(7, 3)).toBe(10);
});
