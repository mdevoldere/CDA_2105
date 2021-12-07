let ns = 64;


if(ns > 80) {
    console.log('A');
} else if (ns > 70) {
    console.log('B');
}

let obj = {
    name: 'Mike',
    age: 40
};

console.log(obj.name);

console.log(obj['name']);


Array.prototype.findByName = function(_searchValue) {
    return this.filter(item => item.includes(_searchValue));
}

let tableau = ['a', 'b', 'c', 'd', 'e'];

let result = tableau.findByName('a');

console.log(result);