const fs = require("fs"),
  path = require('path');
const { resolve } = require("path");

function readFile(pathname, encoding = 'utf-8') {
  pathname = path.resolve(pathname);
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  })
}
function writeFile(pathname, data, encoding = 'utf-8') {
  return new Promise((reject, resolve) => {
    if (typeof data !== 'string') {
      {
        data = JSON.stringify(data);
      }
    }
    pathname = path.resolve(pathname);
    fs.writeFile(pathname, data, encoding, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  })
}

module.exports = {
  readFile,
  writeFile,
};