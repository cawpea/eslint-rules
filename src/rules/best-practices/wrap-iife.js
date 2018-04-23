// NG
var x = function () { return { y: 1 } }()

// OK
var x = (function () { return { y: 1 } }())