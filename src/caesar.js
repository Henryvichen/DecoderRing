// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other nonalphabetic symbols.
// Ignore Caps
// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).

// you can add any code you want within this function scope
 function caesar(input, shift, encode = true) {
  if (!shift || shift > 25 || shift < -25 || shift === 0) {return false} 
   
 shift *= encode ? 1 : -1; //if we are decoding, we need to shift in the opposite direction

 let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
 let newWord = ""
 
    for (i = 0; i < input.length; i++) {
    // move input by shift amount
    const character = input[i]
    // Spaces should be maintained throughout, as should other nonalphabetic symbols.
   
    
      // Ignore Caps
     const letterIndex = letters.indexOf(character.toLowerCase())
     
     // if letterIndex is negative just add og character
     if(letterIndex === -1) {
       newWord += character
     }
      // shift etc.
      else {
    
        let newIndex = (letterIndex + shift) % 26;
        if(newIndex < 0) {
          newIndex += 26
        }
        
      console.log("newIndex",newIndex)
     const newCharacter = letters[newIndex]
    
     newWord += newCharacter
      }
   
  }
   console.log("newWord",newWord)
return newWord
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
