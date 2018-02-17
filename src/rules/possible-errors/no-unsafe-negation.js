// NG
if (!hoge in obj) {
  
}
if (!hoge instanceof Object) {

}

// OK
if (!(hoge in obj)) {

}
if (!(hoge instanceof Object)) {
  
}