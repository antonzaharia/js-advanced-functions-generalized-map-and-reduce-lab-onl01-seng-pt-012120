// Add your functions here
const map = function(arr, fn) {
  let r = [];
  for( let element of arr ) {
    r.push(fn(element));
  }
  return r;
}
