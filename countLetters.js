const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    
  }

  return result;

};

const exmpl1 = countLetters("LHL");
assertEqual(exmpl1['L'],2);
assertEqual(exmpl1['H'],1);


const exmpl2 = countLetters("lighthouse in the house");
assertEqual(exmpl2['l'],1);
assertEqual(exmpl2['i'],2);
assertEqual(exmpl2['g'],1);
assertEqual(exmpl2['h'],4);
assertEqual(exmpl2['t'],2);
assertEqual(exmpl2['o'],2);
assertEqual(exmpl2['u'],2);
assertEqual(exmpl2['s'],2);
assertEqual(exmpl2['e'],3);
assertEqual(exmpl2['n'],1);

