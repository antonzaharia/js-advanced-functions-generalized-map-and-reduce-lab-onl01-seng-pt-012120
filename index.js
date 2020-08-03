// Add your functions here
const map = function(arr, fn) {
  let r = [];
  for( let element of arr ) {
    r.push(fn(element));
  }
  return r;
}

const reduce = function(arr, fn, base=0) {
  let r;
  for( let element of arr ) {
    if(Number.isInteger(element))
    r = fn(element, base);
  }
  return r;
}
