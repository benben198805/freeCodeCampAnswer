'esversion:6';

function addTogether(num1, num2) {  
  return Number.isInteger(num1)
    ?(num2 === undefined 
      ?num2=>Number.isInteger(num2)?num1+num2:undefined
     :Number.isInteger(num2)?num1+num2:undefined)
    :undefined;
}

addTogether(2,"3");
