const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');
test('return the number plus S', () => {
    expect(addFive(1)).toBe(6);
})