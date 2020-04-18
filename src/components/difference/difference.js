//here is the difference how for lop itrate and map itrats

var fun = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

function calucul(farr) {
  return farr * 2 + 1;
}

function myfarr(inside, limit) {
  for (var i = 0; i < limit.length; i++) {
    var transformed = [];
    const currentval = limit[i];
    const neveer = inside(currentval);
    transformed.push(neveer);
  }
  return transformed;
}
var newfarr = myfarr(calucul, fun);
console.log(newfarr);

var solu = fun.map(calucul);
console.log(solu);
