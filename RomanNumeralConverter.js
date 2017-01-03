
function convertToRoman(num) {
  var result='';
  var rules=[
    {value:1,label:'I'},
    {value:5,label:'V'},
    {value:10,label:'X'},
    {value:50,label:'L'},
    {value:100,label:'C'},
    {value:500,label:'D'},
    {value:1000,label:'M'}
  ];
  
  var allRules = getAllRules(rules);
  
  result = calc(num, allRules);
  return result.join('');
}


function getAllRules(rules){
  var newRules=[];
  for(var index=0;index<rules.length;index++){
    if(rules[index].value.toString().indexOf('5')>=0){
      if(index-1>=0){
        newRules.push({
          value:rules[index].value-rules[index-1].value,
          label:rules[index-1].label+rules[index].label
        });
      }
    }else{
        if(index-2>=0){
          newRules.push({
            value:rules[index].value-rules[index-2].value,
            label:rules[index-2].label+rules[index].label
          });
        } 
      }
    newRules.push(rules[index]);
  }
    return newRules;
}
function calc(num, rules) {
        var targetNum = num || 0;
        var tempResult = [];
        var rule = getRule(num, rules);

        while (!!rule) {
            tempResult.push(rule.label);
            targetNum -= rule.value;           

            rule = getRule(targetNum, rules);
        }
        return tempResult;
    }

    function getRule(num, rules) {
        for (var index = rules.length - 1; index >= 0; index--) { 
              if(rules[index].value <=num){
                return rules[index];
              }
        }
        return 0;
    }


convertToRoman(36);
