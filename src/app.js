var array = [1, 2, 3, 4, 5];
function calculationn(array) {
  narr = [];
  for (var i = 0; i < array.length; i++) {
    narr[i] = array[array.length - i - 1];
    //console.log(narr);
  }

  console.log("its coming");
  return narr;
}

console.log(calculationn(array));
