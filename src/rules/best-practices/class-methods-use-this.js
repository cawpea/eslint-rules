// NG
class Something {
  constructor () {
    this.num = 1
  }
  print () {
    console.log(1)
  }
}

// OK
class Something {
  constructor () {
    this.num = 1
  }
  static print () {
    console.log(1)
  }
}
class Something {
  constructor () {
    this.num = 1
  }
  print () {
    console.log(this.num)
  }
}