console.log(document);

document.write('hello world!');

console.log(document.title);
console.log(document.forms);
console.log(document.images);

let h1 = document.getElementById('title'),
  p1 = document.getElementsByClassName('text'),
  p2 = document.getElementsByTagName('p');

console.log(h1, p1, p2);

let images = document.querySelectorAll('img'),
  secondImage = document.querySelector('.second');

console.log(images, secondImage);

for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
}
