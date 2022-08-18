
// const NUMBER = 3;
// // debugger
// console.log(NUMBER);
// alert('HELLOOOOO!')
// var door = 4;

// let x = 10;
// let y = "20";

// let z = String(x) + parseInt(y);
// console.log(z);
// console.log(typeof z);

// let name = prompt('Give me the name pleaseeee!');
// console.log(name);

// let isDev = confirm('Are you a developer?');
// alert(isDev);

debugger
var memory = prompt('Enter you flash drive memory in GB:');
const fileSize = 820;
let numberOfFiles = Math.trunc((memory*1000)/fileSize);
console.log ('In this flash drive can be stored '+ numberOfFiles +' files with size ' + fileSize + ' MB' );