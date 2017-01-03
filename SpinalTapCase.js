
'esversion:6';
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  return str.replace(/([A-Z]?[a-z]*)([\s_-]?)/g,'$1'+'-')
    .replace(/-*$/,'').toLowerCase();
}

spinalCase('Teletubbies say Eh-oh');
