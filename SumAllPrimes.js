
'esversion:6';

function sumPrimes(num) {
  var result = [2];
  for(var index = 3;index<=num; index++){
    if(isPrime(index, result))
      result.push(index);
  }
  return result.reduce((acc, item) => acc + item);
}

function isPrime(number, primes){
 return primes.filter(item=>number%item ===0).length === 0 ?true:false;
 
}

sumPrimes(977);
