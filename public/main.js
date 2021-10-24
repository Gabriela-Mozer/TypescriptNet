console.log("test");
//Funkcje
// let greet = () => {
//     console.log("Funkcja strzałkowa")
// }
var greet;
greet = function () {
    console.log("Funkcja strzałkowa");
};
// greet = 'funkcja strzałkowa'; 
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 23);
// result ="something else"; // nie możemy tego zrobić bo określiliśmy już typ
//znaki funkcji 
var saygreet;
saygreet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetail;
logDetail = function (Lola) {
    console.log(Lola.name + " is " + Lola.age + " years old");
};
//DOM & Type Casting
var anchor = document.querySelector('a');
console.log(anchor);
