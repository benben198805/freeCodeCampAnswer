
'esversion:6';
function translatePigLatin(str) {
  let vowels= ['a', 'e', 'i', 'o', 'u'];
  
  let firstVowelLocation = getFirstVowelLocation(str, vowels);
  
  let result = '';
  if(firstVowelLocation===0){
    result=str+'way';
  }else{
    var beforeVowel = str.substr(0, firstVowelLocation)+'ay';
    result = str.substr(firstVowelLocation)+beforeVowel;
  }
  
  return result;
}

function getFirstVowelLocation(str, vowels){
  let index = [];
 
  for(let vowel in vowels){
    index.push(str.indexOf(vowels[vowel])>=0?str.indexOf(vowels[vowel]):999);
  }
  
  return Math.min.apply(null, index);
    
}


translatePigLatin("consonant");
