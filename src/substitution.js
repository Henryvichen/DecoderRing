// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
   
  //Helper function to direct encode or decode
   function direction(input, fromKey, toKey) {
    if (input.match(/\s/)) return input 
    const index = fromKey.indexOf(input)
    return toKey[index]
  }

  function substitution(input, alphabet, encode = true) {
    
    
   // do some initial checks against the parameters
  if (!alphabet || alphabet.length !== 26) return false

  const container = []
// if unique characters, return false
  for (let i = 0; i < alphabet.length; i++) {
    if (container.includes(alphabet[i])) return false
    container.push(alphabet[i])
  }
    
 // do our encoding; this is the base case   
 const english = 'abcdefghijklmnopqrstuvwxyz'.split("")
 const substitute = alphabet.toLowerCase().split("")
    console.log("input",input)
    return input 
    .toLowerCase()
    .split("")
    .map(
    (message) =>
            encode
              ? direction(message, english, substitute) // if encoding, we're going from base alphabet to coded alphabet
              : direction(message, substitute, english) // else, we're going from coded to base
        )
        .join(""); // join the array of letters back into an output string
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
