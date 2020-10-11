const random = function (n, m) {
  return Math.round(Math.random() * (m - n) + n);
}

const area1 = '0123456789';
const area2 = 'abcdefghijklmnopqrstuvwxyz';
const queryPhone = function () {
  return new Array(8).fill(null).map(item => {
    return area2[random(0, 25)];
  }).join('')
};

let arr = [];
for (let i = 2; i < 93; i++) {
  arr.push({
    id: i,
    name: '',
    phone: `1${queryPhone()}`
  })
}

const fs = require('fs');
let USER_DATA = fs.readFileSync('./user.json', 'utf-8');
USER_DATA ? USER_DATA = JSON.parse(USER_DATA) : [];
USER_DATA = USER_DATA.concat(arr);
fs.writeFileSync('./user.json', JSON.stringify(USER_DATA), 'utf-8');