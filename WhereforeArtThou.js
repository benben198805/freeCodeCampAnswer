'esversion:6';
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach(function (obj) {
    var result =isContain(obj,source);
    if(result){
      arr.push(isContain(obj,source));      
    }

  });
  
  // Only change code above this line
  return arr;
}

function isContain(obj,source){
  var flag =true;
  for(var key in source){
    if(!obj[key]||obj[key]!==source[key]){
      flag&=false;
    }
  }
  
  return flag?obj:false;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
