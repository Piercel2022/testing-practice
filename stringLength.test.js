const stringLength = require('./stringLength');

test('the length of hello is 5', () => {
    expect(stringLength("hello")).toBe(5);
});

test('the length of hellohello is 10', () => {
    expect(stringLength("hellohello")).toBe(10);
});

