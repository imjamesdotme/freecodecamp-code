/*

DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pair(str) {

  // Create an array so we can iterate through the items.
  tempArr = str.split("");

  // Create an empty array that we can populate with the output from the switch statement.
  basePairs = [];

  // Loop over the items in tempArr pushing each item through the switch statement.
  for(var i = 0; i < tempArr.length; i++){
    /*
    The switch statement will look to match a case to our array item, otherwise it'll do nothing but print to the console.

    If a case matches in the statement, it will push an array into the main basePairs array.
    */
    switch(tempArr[i]) {
      case 'A':
        basePairs.push(['A', 'T']);
        break;
      case 'G':
        basePairs.push(['G', 'C']);
        break;
      case 'C':
        basePairs.push(['C', 'G']);
        break;
      case 'T':
        basePairs.push(['T', 'A']);
        break;
      default:
        console.log('default case run');
    }

  }
  // Finally return the new array.
  return basePairs;
}

pair("ATCGA");
// Will return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pair("TTGAG");
// Will return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pair("CTCTA");
// Will return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
