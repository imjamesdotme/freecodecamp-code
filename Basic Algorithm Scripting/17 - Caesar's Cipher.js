/*

Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {

  // Split the string into an array so we can loop over it.
  var encodedArr = str.split("");
  // Inital a variable for the final output.
  var decoded = "";

  for(var i = 0; i < encodedArr.length; i++) {
    /*
    If the character is between A-M we want to add 13 to its character to code to retrieve a character futher down the alphabet.

    Other wise if the charcter is between N-Z we want to minus 13 from its character code to retrieve a charcter further up the alphabet.

    If any character codes (such as symbols) don't match the statement they will be left.
    */
    if(encodedArr[i].charCodeAt(0) >= 64 && encodedArr[i].charCodeAt(0) < 78) {
      encodedArr[i] = encodedArr[i].charCodeAt(0) + 13;
      encodedArr[i] = String.fromCharCode(encodedArr[i]);
    } else if(encodedArr[i].charCodeAt(0) >= 78 && encodedArr[i].charCodeAt(0) < 91) {
      encodedArr[i] = encodedArr[i].charCodeAt(0) - 13;
      encodedArr[i] = String.fromCharCode(encodedArr[i]);
    }
  }

  // Join the arry back into a string.
  decoded = encodedArr.join("");

  return decoded;

}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
