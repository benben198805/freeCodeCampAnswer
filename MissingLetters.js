'esversion:6';
function fearNotLetter(str) {
  var index = str.charCodeAt(0);
  var result;
  str.split('').forEach(item=>{
    if(item.charCodeAt(0)!==index++&&!result){
      result = String.fromCharCode(index-1);
    }
  });
  return result;
}

fearNotLetter("abcdefghjklmno");
