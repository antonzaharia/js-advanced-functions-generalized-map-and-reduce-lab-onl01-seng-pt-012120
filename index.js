// Add your functions here
const map = function(arr, fn) {
  let r = [];
  for( let element of arr ) {
    r.push(fn(element));
  }
  return r;
}

function reduce(sourceArray, callbackFn, startPoint) {
    let total
    let i = 0

    if (startPoint) {
        total = startPoint
    } else {
        total = sourceArray[0]
        i++
    }

    for (i; i < sourceArray.length; i++) {
        total = callbackFn(sourceArray[i], total)
    }
    return total
}
