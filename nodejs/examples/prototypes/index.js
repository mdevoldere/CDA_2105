let a = [1, 2, 3];
a.push(3);
console.log(a);
Array.prototype.push = undefined;
a.push(4);
console.log(a);
console.log([]);

for(let i = 0; i < 10; i++) {

}