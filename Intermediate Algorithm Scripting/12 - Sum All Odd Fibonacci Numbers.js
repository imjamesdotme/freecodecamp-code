/*

Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Note: Wrote simialar code for Project Euler.
https://github.com/imjamesdotme/project-euler/blob/master/2%20-%20Even%20Fibonacci%20numbers.js

*/

function sumFibs(num) {

  // Fibonacci sequence begins with 1.
  var fib = 1;
  var a = 0;
  var b = 1;
  var sum = 0;

  while(fib <= num) {

    // Check if the number is odd - divide it by two & check it doesn't have a remainder of zero.
    if(fib % 2 !== 0) {
      sum += fib;
    }

    /*
    Everytime the while loop runs the variables of fib, a & b will change as so;
    Note: The 'fib' global variable is set to 1 when we start the while loop, that's how we pass 1 to the if statement on the first & second iteration.

    ** 1st loop **
    fib = 0 + 1;
    a = 1;
    b = 1;

    ** 2nd loop **
    fib = 1 + 1;
    a = 1;
    b = 2

    * 3rd loop*
    fib = 1 + 2;
    a = 2;
    b = 3;
  */

    fib = a + b;
    a = b;
    b = fib;

  }

  return sum;

}

sumFibs(1000);
// Returns 1785
sumFibs(4000000);
// Returns 4613732
sumFibs(4);
// Returns 5
sumFibs(75024);
// Returns 60696
sumFibs(75025);
// Returns 135721
