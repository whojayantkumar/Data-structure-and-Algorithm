//Build an array
class MyArray {
  data: Object;
  arrlength: number;
  constructor() {
    this.arrlength = 0;
    this.data = {};
  }
  length() {
    return this.arrlength;
  }
  get(index) {
    return this.data[index];
  }
  push(item: any) {
    this.data[this.arrlength] = item;
    this.arrlength++;
    return this.length();
  }
  pop() {
    const lastItem = this.data[this.arrlength - 1];
    delete this.data[this.arrlength - 1];
    this.arrlength--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.arrlength - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.arrlength-1];
    this.arrlength --;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("hello");
newArray.push("how");
newArray.push("where");
// console.log(newArray.get(1));

console.log(newArray);
console.log(newArray.delete(0));
console.log(newArray);
console.log(newArray.get(2));
