'esversion:6';
function steamrollArray(arr) {
  return getFirstFloor(arr);
}


function getFirstFloor(arr){
 var result =[];
  arr.forEach(item=>{
    if(Array.isArray(item)){
      result= result.concat(getFirstFloor(item));
    }else{
      result.push(item);
    }
  });
  return result;
}

steamrollArray([[["a"]], [["b"]]]);
