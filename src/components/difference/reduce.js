var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

const total = array.reduce((accumlate, currentval) => {
  return accumlate + currentval;
}, 0);
console.log(total);

var arrray2 = [1, 2, 3, 4, 5, -4, -5, -10, 30, 16];

const total2 = arrray2.reduce((accc, curr) => {
  return accc - curr;
}, 0);
console.log(total2);
