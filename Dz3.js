let calculateSalary = function (blackSalary) {
let percent = 0.35
if (blackSalary >= 100000) {
percent = 0.45;
}
let tax = percent * blackSalary;
let whiteSalary = blackSalary - tax;
return whiteSalary;
};
console.log(calculateSalary(100000))
