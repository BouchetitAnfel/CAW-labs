const fs = require('fs');
jest.mock('fs');

describe('readFile function', () => {
  const { readFile } = require('../exo3');

  test('reads file content', () => {
    fs.readFileSync.mockReturnValue('Hello Jest!');
    const result = readFile('fakefile.txt');
    expect(result).toBe('Hello Jest!');
    expect(fs.readFileSync).toHaveBeenCalledWith('fakefile.txt', 'utf8');
  });
});

describe('running exo3.js directly with missing argument', () => {
  let mockExit, mockError;

  beforeEach(() => {
    mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    mockExit.mockRestore();
    mockError.mockRestore();
  });

  test('should call console.error and process.exit', () => {
    // simulate running script directly
    jest.isolateModules(() => {
      process.argv = ['node', 'exo3.js'];
      require('../exo3'); // this will trigger the code in "if (require.main === module)"
    });

    expect(mockError).toHaveBeenCalledWith('Usage: node exo3.js <filename>');
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
