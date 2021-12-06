
const a = ['a', 'b', 'c', 'd', 'e'];

for(let i= 0; i < a.length; i++) {

}

a.forEach((item => {

}));

for(let item of a) {
    item = "toto";
    console.log(item);
}

console.log(a);

console.log('---');

for(let item in a) {
    a[item] = 'toto';
    console.log(item);
}
console.log(a);