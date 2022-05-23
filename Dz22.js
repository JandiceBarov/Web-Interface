let numbers = [3, 5, 15, 6, 2, 1];
let swap;

for (let i = 0; i < numbers.length; i++) {
for (let j = i + 1; j < numbers.length; j++) {
if (numbers[j] < numbers[i]) {
swap = numbers[i];
numbers[i] = numbers[j];
numbers[j] = swap;}
}
}
console.log(numbers);
