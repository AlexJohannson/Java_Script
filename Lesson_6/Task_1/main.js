let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);
console.log(' ');

const array = [a, b, c];
for (const item of array) {
    console.log(item.length);
}