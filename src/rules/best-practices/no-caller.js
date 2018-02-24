// NG
function foo () {
  console.log(arguments.caller)
  arguments.callee()
}