module.exports = function reverse (n) {
  let result = '';
  const number = Math.abs(n);
  for (i = 0; i <= number.toString().length - 1; i++) {
    result = `${number.toString()[i]}${result}`;
  }
  return result;
}
