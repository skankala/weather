var array = [1, 2, 3, 4, 5, 6, 7, 22, 44, 66, 77, 88, 123, 8, 9];

array.sort();
console.log(array);

var array3 = ["a", "abe", "d", "b", "A", "AB", "KL", "C", 123, 555, 677, 35];

array3.sort();
console.log(array3);

var obj1 = [
  {
    x: 3,
    y: 4,
  },
  {
    x: 5,
    y: 3,
  },
];

function compare(a, b) {
  return b.y - a.y;
}

obj1.sort(compare);
console.log(obj1);

var obj = [
  {
    firstname: "Steven",
    lastname: "Hancock",
    score: 90,
  },
  {
    firstname: "Lynette",
    lastname: "Jorgensen",
    score: 100,
  },
  {
    firstname: "Annika",
    lastname: "Turner",
    score: 82,
  },
  {
    firstname: "Andrew",
    lastname: "Wilson",
    score: 71,
  },
];

obj.sort(function (a, b) {
  if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
  if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
  return 0;
});

console.log(obj);

var arrray = [-1, 1, 0];
arrray.sort();
console.log(arrray);
