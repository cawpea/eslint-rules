// NG
this.foo = 'foo'

function func () {
  this.foo = 'foo'
}

let foo = () => {
  this.foo = 'foo'
}

// OK
function Func () {
  this.foo = 'foo'
}

class Foo {
  constructor () {
    this.foo = 'foo'
  }
}
