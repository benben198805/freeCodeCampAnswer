function sumAll(arr) {
  var diff =Math.max.apply(null, arr) -Math.min.apply(null, arr)+1;
  return arr.reduce(function(acc, item){return acc + item; }, 0) * diff/2;
}

sumAll([1, 4]);
