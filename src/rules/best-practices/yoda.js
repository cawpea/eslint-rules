/* "yoda": "error" */
// NG
if ('red' === color) {

}

// OK
if (color === 'red') {

}

/* "yoda": ["error", "always"] */
// NG
if (color === 'red') {

}

// OK
if ('red' === color) {

}