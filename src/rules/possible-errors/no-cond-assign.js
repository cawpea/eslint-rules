// NG
const obj = {}
if (obj.hoge = true) {
  console.log(i)
}

// OK
const obj = {
  hoge: true
}
if (obj.hoge) {
  console.log(i)
}