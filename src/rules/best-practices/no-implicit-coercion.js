// NG
let isFoo = !!foo

if (~foo.indexOf(0)) {

}

// OK
let isFoo = Boolean(foo)

if (foo.indexOf(0) !== -1) {

}