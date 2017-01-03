
'esversion:6';

function pairElement(str) {
  var obj={A:"T",T:"A",C:"G",G:"C"};
return   str.split('').map(item=>[item,obj[item]]);
}

pairElement("GCG");
