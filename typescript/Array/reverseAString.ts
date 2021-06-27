//Create a function that reverse a string:
// case1:-
//"Hi My name is JK"
//solution:-
//"KJ si eman yM iH"

//simple approach
function reverse(str: string) {
  const strArray = [];
  for (let i = (str.length - 1); i >= 0; i--) {
    strArray.push(str[i]);
  }
  let reversedString:string = '';
  for(let st of strArray){
      reversedString = reversedString + st;
  }
  return reversedString;
}

// using string or array functions

function reverse2(str: string) {
 return str.split('').reverse().join('');
}

// using arrow function
const reverse3 = str => [...str].reverse().join('');


// calling functions
console.log(reverse("Hi My name is JK"));
console.log(reverse2("Hi My name is JK"));
console.log(reverse3("Hi My name is JK"));
