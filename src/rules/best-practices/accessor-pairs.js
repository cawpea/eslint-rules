// NG
let object = {
  set foo (val) {
    this.val = val
  }
}

// OK
let object = {
  set foo (val) {
    this.val = val
  },
  get foo () {
    return this.val
  }
}