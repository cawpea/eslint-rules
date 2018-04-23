// NG
with (point) {
  r = Math.sqrt(x * x + y * y);
}

// OK
const r = ({x, y}) => Math.sqrt(x * x + y * y);