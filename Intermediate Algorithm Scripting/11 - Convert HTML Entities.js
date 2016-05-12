/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {

  // Split the passed argument into an array.
  str = str.split('');

  /*
  Create an object containing the HTML entites we need.

  Alternatively the entites could be contain in the case statement but using an object makes this data easier to manage if we need to scale it.

  Example:

  case "&":
    splitString[i] = "&amp;";
    break;
  */

  var entites = {
    "amperstand": "&amp;",
    "lessThan": "&lt;",
    "greaterThan": "&gt;",
    "quote": "&quot;",
    "apostrophe": "&apos;"
  };

  // Use a 'for' loop to iterate over each item in the array. If an item in the array matches a case in the 'switch' statement then we'll replace the item with the HTML entity.
  for(var i =0; i < str.length; i++){

    switch(str[i]) {

      case "&":
        str[i] = entites.amperstand;
        break;

      case "<":
        str[i] = entites.lessThan;
        break;

      case ">":
        str[i] = entites.greaterThan;
        break;

      case "\"":
        str[i] = entites.quote;
        break;

      case "'":
        str[i] = entites.apostrophe;
        break;

    }

  }

  // Turn the array back into a string.
  str = str.join('');

  return str;

}

convertHTML("Dolce & Gabbana");
// Returns Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");
// Returns Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve");
// Returns Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"');
// Returns Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List");
// Returns Shindler&​apos;s List
convertHTML("<>");
// Returns &​lt;&​gt;
convertHTML("abc");
// Returns abc
