const fs = require('fs');

// Exercise 2: read a file, with a specific message for each kind of error.
function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        callback(`File not found: ${filePath}`); // file doesn't exist
      } else if (err.code === 'EISDIR') {
        callback(`Error: '${filePath}' is a directory, not a file`);
      } else {
        callback(`An error occurred: ${err.message}`);
      }
      return;
    }
    // data is a Buffer; .length is the size in bytes
    callback(`File read successfully. Size: ${data.length} bytes`);
  });
}

// tests: existing file, missing file, a directory
readFileWithErrorHandling('existing.txt', (result) => console.log(result));
readFileWithErrorHandling('missing.txt', (result) => console.log(result));
readFileWithErrorHandling('.', (result) => console.log(result));
