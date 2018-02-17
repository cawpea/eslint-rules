// NG
function something () {
  if (true) {
    var foo = 'hello'
  }
  console.log(foo)
}

// OK
function something () {
  var foo
  if (true) {
    foo = 'hello'
  }
  console.log(foo)
}