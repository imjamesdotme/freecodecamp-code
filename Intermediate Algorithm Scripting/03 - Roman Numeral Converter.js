/*

Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convert(num) {

  // Initialize empty string for our output.
  var converted = '';

  /*
  Create an array for numbers & roman numerals.
  Need to go largest number first in both our arrays - if we started with 1 then our code would keep printing 1 for the value of num.
  */
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // Loop through the length of our decimal array
  for (var i = 0; i < numbers.length; i++) {

    /*
    Example: If our num value is 28 then our loop would work like so;

    On the first loop our num 28 would be more than equals to 10. So converted would now be 'X' and we remove the value of 10 from our num variable.

    On the second loop our num would now be 18 and be more than or equals 10; so we'd do the same again. converted would now equal 'XX' and we'd again remove 10 from the num variable.

    On the third loop our num would now be 8 and be more than or equals to 5; so we'd repeat again. converted would now equal 'XXV' and we'd remove 5 from the num variable.

    On the fourth, fifth and sixth look our num would be more than or equals to 1 so would would add 'I' to our converted variable 3 times and reduce the value of num to 0 ending our while loop.


    The best way to see this is action is to console log converted & num under their respective lines in the while loop.
    */

    // While loop
    while (num >= numbers[i]) {
    converted += romanNumerals[i];
    num -= numbers[i];
    }
  }

  // Finally return the value of converted.
  return converted;
}

convert(2);
convert(3);
convert(4);
convert(5);
convert(9);
convert(12);
convert(16);
convert(29);
convert(44);
convert(45);
convert(68);
convert(83);
convert(97);
convert(99);
convert(500);
convert(501);
convert(649);
convert(798);
convert(891);
convert(1000);
convert(1004);
convert(1006);
convert(1023);
convert(2014);
convert(3999);
