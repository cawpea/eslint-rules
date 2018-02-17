// NG: eslint complexity: ["error", 2]
function something (i) {
  if (i === 1) {
    console.log('foo') // 1
  } else if (i === 2) {
    console.log('bar') // 2
  } else {
    console.log('baz') // 3
  }
}