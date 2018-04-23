// NG
function doSomething() {
  var a = 1
  console.log(a)
  var b = 2
}

for (var i = 0; i < 10; i++) {
  console.log(i)
}

// OK
function doSomething() {
  var a = 1
  var b = 2
  console.log(a)
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}