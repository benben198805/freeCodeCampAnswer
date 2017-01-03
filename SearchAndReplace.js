
function myReplace(str, before, after) {
  var replaceWordArr =after.split('');
  if(before.charCodeAt(0)<=90){
    replaceWordArr.splice(0,1,String.fromCharCode(after.charCodeAt(0)-32))
  }
var replaceWord =  replaceWordArr.join('');
  
  return str.replace(before,replaceWord);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
