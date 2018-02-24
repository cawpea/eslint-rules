// NG
switch (something) {
  case 1:
    let foo = 'foo'
    break
  case 2:
    const bar = 'bar'
    break
  case 3:
    function baz () {
      console.log('baz')
    }
    break
  default:
    class qux {
    }
}

// OK
switch (something) {
  case 1: {
    let foo = 'foo'
  }
  case 2: {
    const bar = 'bar'
  }
  case 3: {
    function baz () {
      console.log('baz')
    }
  }
  default: {
    class qux {
      
    }
  }
}