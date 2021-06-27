//Build an array
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.arrlength = 0;
        this.data = {};
    }
    MyArray.prototype.length = function () {
        return this.arrlength;
    };
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.arrlength] = item;
        this.arrlength++;
        return this.length();
    };
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.arrlength - 1];
        delete this.data[this.arrlength - 1];
        this.arrlength--;
        return lastItem;
    };
    MyArray.prototype.delete = function (index) {
        var item = this.data[index];
        delete this.data[index];
        this.shiftItems(index);
        return item;
    };
    MyArray.prototype.shiftItems = function (index) {
        for (var i = index; i < this.arrlength - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.arrlength - 1];
        this.arrlength--;
    };
    return MyArray;
}());
var newArray = new MyArray();
newArray.push("hi");
newArray.push("hello");
newArray.push("how");
newArray.push("where");
// console.log(newArray.get(1));
console.log(newArray);
console.log(newArray.delete(0));
console.log(newArray);
console.log(newArray.get(2));
