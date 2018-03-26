// NG
var funcs = []
for (var i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i
  }
}

for (var i = 0; i < 10; i++) {
  function foo () {
    console.log(i)
  }
  foo()
}

// OK
var funcs = []
for (let i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i
  }
}
for (let i = 0; i < 10; i++) {
  function foo () {
    console.log(i)
  }
  foo()
}