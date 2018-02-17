var example = 10

// NG
if (Boolean(example)) {

}
if (!!example) {

}

// OK
if (example) {

}
if (!example) {

}