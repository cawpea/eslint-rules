// NG
if (true) {
  function example () {
    console.log('example')
  }
}

// OK
if (true) {
  var example = function () {
    console.log('example')
  }
}