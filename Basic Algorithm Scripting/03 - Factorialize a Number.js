/*

Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

*/

function factorialize(num) {

  // If the number is 0 or 1 we return 1.
  if(num === 0 || num == 1) {
    return 1;
  } else {
    // Multiply the number minus 1 for example 5 * 4 to get the factorial.
    return num*factorialize(num-1);
  }

}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
