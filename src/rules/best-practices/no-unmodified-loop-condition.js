// NG
while (node) {
  doSomething(node);
}

// OK
while (node) {
  doSomething(node);
  node = node.parent;
}
