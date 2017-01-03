'esversion:6';

function smallestCommons(arr) {
  [min,max] =arr.sort();
  var target = min;
  for(var index = min;index<=max;index++){
    target=getCommonMultiple(target, index);
  }
  
  return target;
}

function getCommonMultiple(arg1,arg2){
  var min=0, max=0;
  [min, max] =[arg1,arg2].sort();
  var result =0;
  for(var index = 1; index<=max;index++)
    {
      result = index * min;
      if(result % max ===0)
        {
          return result;
        }
    }
    
}


smallestCommons([13, 1]);
