// Everything is a Value in JS
// falsy Values: false, 0, null, "", NaN, undefined
// var age = "10.06";

// console.log(+age);

// Functions
function add(a, b) {
  if (typeof a === "function") {
    a = a();
  } else if (Array.isArray(a))
    if (typeof b === "function") {
      b = b();
    }

  var c = a + b;
  return c;
}

function f1() {
  return 600;
}

function f2() {
  return 500;
}

console.log(add(f1, f2));

prompt("Input number");
