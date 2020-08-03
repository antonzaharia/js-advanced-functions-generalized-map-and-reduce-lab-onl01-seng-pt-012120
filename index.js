// Add your functions here
const map = function(arr, fn) {
  let r = [];
  for( let element of arr ) {
    r.push(fn(element));
  }
  return r;
}

const reduce = function(arr, fn, base=0) {
  let total;
  let i = 0;

  if (base) {
      total = base;
  } else {
      total = arr[0];
      i++
  }

  for (let element of arr ) {
        total = fn(element, total)
    }
}
