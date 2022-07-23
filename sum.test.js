// inside sum.test.js - which should test function defined in sum.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('ten plus four is fourteen', () => {
    expect(10 + 4).toBe(14);
  });

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});