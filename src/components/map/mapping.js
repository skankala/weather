var arr = [1, 2, 3, 4, 5];
var final = arr.map((kisise) => {
  return kisise;
});

console.log(final);

// we can create seperate funtion to map directly  known as functional programming

function sum(numbers) {
  return numbers + 2;
}
var conclu = arr.map(sum);
console.log(conclu);

var calli = (number) => {
  return number * 2.5;
};

var sillyone = arr.map(calli);
console.log(sillyone);

var noone = (items) => items * 2 + 4;

var noooone = arr.map(noone);
console.log(noooone);
