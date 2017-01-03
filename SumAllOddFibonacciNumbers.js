'esversion:6';

function sumFibs(num) {
  var result = Fibonacci(num);
  
  return result.filter(item=>item%2===1).reduce((acc, item) => acc+item);
}

function Fibonacci(num) {
    let arr = [1, 1];
    
while(num>=arr[arr.length-1]+arr[arr.length-2]){
  arr.push(arr[arr.length-1]+arr[arr.length-2]);
}
  return arr;
}

sumFibs(75024);
