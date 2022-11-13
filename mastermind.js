import database from './database.json' assert {type: 'json'};
console.log(database);
console.log(database.lines.line01.items);
var obj = JSON.parse(database);

console.log(obj);
//
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);
//   console.log(items);
// };
// xmlhttp.open("GET", "./database.json");
// xmlhttp.send();



// var linesMax = Object.keys(database.lines).length;
//
// for (var i = 0; i < linesMax ; i++) {
//   console.log('cc');
// }


const colorsarray = [
  "green",
  "blue",
  "white",
  "orange",
  "red",
  "gray",
  "pink",
  "yellow"
]

const row = []

const maxListItem = 4;


const randomElement = colorsarray[Math.floor(Math.random() * colorsarray.length)];

console.log(colorsarray.length, randomElement );



var PrivateCode = function() {
  for (var i = 0; i < maxListItem; i++) {
    var pickElement = colorsarray[Math.floor(Math.random() * colorsarray.length)];
    row.push(pickElement);
    const index = colorsarray.indexOf(pickElement);
    if (index > -1) { // only splice array when item is found
      colorsarray.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  console.log(colorsarray, row);

  return row
}

PrivateCode();




//
// database.forEach((item, index) => {
//   console.log(item) //value
//   console.log(index) //index
// })
//
// //index is optional
// database.forEach(item => console.log(item))
