//Question. write a function that return true if any element of array1 common in array2 else return false
// solution 1:- time complexity O(n^2) and space complexity O(1)
function findCommonElements1(array1, array2) {
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var elementofArray1 = array1_1[_i];
        for (var _a = 0, array2_1 = array2; _a < array2_1.length; _a++) {
            var elementofArray2 = array2_1[_a];
            if (elementofArray1 === elementofArray2) {
                return true;
            }
        }
    }
    return false;
}
//solution 2:- time complexity O(n) and space complexity O(n)
function findCommonElements2(array1, array2) {
    var map = {};
    for (var _i = 0, array1_2 = array1; _i < array1_2.length; _i++) {
        var item = array1_2[_i];
        map[item] = true;
    }
    for (var _a = 0, array2_2 = array2; _a < array2_2.length; _a++) {
        var item = array2_2[_a];
        if (map[item]) {
            return true;
        }
    }
    return false;
}
//function calling
var array1 = ["a", "b", "c", "d"];
var array2 = ["x", "y", "a", "z", "p"];
console.log(findCommonElements1(array1, array2));
console.log(findCommonElements2(array1, array2));
