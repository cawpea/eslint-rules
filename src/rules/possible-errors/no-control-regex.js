// NG
var pattern1 = /Hello\x0aWorld/
var pattern2 = new RegExp("Hello\x0aWorld")

// OK
var pattern1 = /Hello\sWorld/
var pattern2 = new RegExp("Hello\sWorld")