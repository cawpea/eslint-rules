// NG
for (const key in object) {
  console.log(key)
}

// OK
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key)
  }
}