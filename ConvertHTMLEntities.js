
'esversion:6';
function convertHTML(str) {
  // &colon;&rpar;
  var obj = {};
  obj['&'] = "&amp;";
  obj['<'] = "&lt;";
  obj['>'] = "&gt;";
  obj['"'] = "&quot;";
  obj["'"] = "&apos;";
  
  return str.replace(/[&<>"']/g, item=>obj[item]);
}

convertHTML("Hamburgers < Pizza < Tacos");
