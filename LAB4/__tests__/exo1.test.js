const { exo1 } = require('../exo1');

test('exo1 logs "echo" 5 times', () => {
  console.log = jest.fn(); // mock console.log
  exo1("echo", 5);
  expect(console.log).toHaveBeenCalledTimes(5);
  expect(console.log).toHaveBeenCalledWith("echo");
});
