var getSortedArray = function (mass, key) {
for (var i = 0; i < mass.length - 1; i++) {
for (var j = i + 1; j < mass.length; j++) {
if (mass[j][key] <= mass[i][key]) {
swap = mass[i];
mass[i] = mass[j];
mass[j] = swap;
}
}
}
return mass;
}
let n=[
 {
 name: 'Петя',
 age: 5
 },
 {
 name: 'Лёля',
 age: 2
 },
 {
 name: 'Сима',
 age: 3
 }
];
console.log(getSortedArray(n,'age'));
