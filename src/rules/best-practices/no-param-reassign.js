// NG
function doSomething(arg) {
  arg = 'foo'
}

// OK
function doSomething(arg) {
  let foo = arg
  foo = 'foo'
}