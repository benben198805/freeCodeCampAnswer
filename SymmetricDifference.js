'esversion:^';

var getDif=(arr1, arr2)=>arr1.concat(arr2).filter(item=>(arr1.indexOf(item)<0&&arr2.indexOf(item)>=0)||arr1.indexOf(item)>=0&&arr2.indexOf(item)<0)
.filter((item, index, arr)=>arr.indexOf(item)===index);


function sym(...args) {
  return args.reduce((acc, item)=>getDif(acc, item),[])
  ;
}


sym([1, 2, 3], [5, 2, 1, 4]);
