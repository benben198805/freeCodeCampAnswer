'esversion:6';

function uniteUnique(...arr) {
  return arr.reduce(function(acc, item){
    return acc.concat(item.filter(item =>acc.indexOf(item)<0));
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
