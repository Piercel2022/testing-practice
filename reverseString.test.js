const reverseString = require('./reverseString');

test('the reverse of hello is olleh', () => {
    expect(reverseString("hello")).toBe('olleh');
});