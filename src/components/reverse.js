var foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 3];
function rev(arr) {
  a = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    a += arr[i];
  }
  console.log(a);
}

rev(foo);

console.log(foo.sort());

function str(b) {
  var barr = b.split(" ");
  var revbarr = barr.reverse();
  var revstr = revbarr.join(" ");
  return revstr;
}

//console.log(str("swamy"));
var c = "swamy";
str(c);

function myarr(num) {
  var sun = [];
  for (let i = 0; i <= num.length; i++) {
    return sun[i + 2];
  }
}

myarr(foo);
console.log(myarr(foo));

// adddition using map fnction same above
//its makes life easy by mapping foo array elements to airpod and in loop we are adding some value to elements

var pod = foo.map((airpod) => {
  return airpod + 3;
});
console.log(pod);
