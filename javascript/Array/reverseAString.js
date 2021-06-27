//Create a function that reverse a string:
// case1:-
//"Hi My name is JK"
//solution:-
//"KJ si eman yM iH"
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//simple approach
function reverse(str) {
    var strArray = [];
    for (var i = (str.length - 1); i >= 0; i--) {
        strArray.push(str[i]);
    }
    var reversedString = '';
    for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
        var st = strArray_1[_i];
        reversedString = reversedString + st;
    }
    return reversedString;
}
// using string or array functions
function reverse2(str) {
    return str.split('').reverse().join('');
}
// using arrow function
var reverse3 = function (str) { return __spreadArray([], str).reverse().join(''); };
// calling functions
console.log(reverse("Hi My name is JK"));
console.log(reverse2("Hi My name is JK"));
console.log(reverse3("Hi My name is JK"));
