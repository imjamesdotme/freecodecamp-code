/*

Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/

function sumPrimes(num) {

  // We know 2 is a prime number, so can start with that.
  var sum = 2;

  // Because we'd started 'sum' off a 2, we can trigger out loop to begin with 3.
  for(var i = 3; i <= num; i++) {
    // Pass the current number in the loop to test if it's a prime, if the prime function returns 'true' then we add it to the sum variable.
    if(isPrime(i)) {
      sum += i;
    }
  }

  // Finally we return the value of 'sum'.
  return sum;
}

/*
Check if each passed value is a prime number.
References:
http://www.factmonster.com/math/numbers/prime.html
https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
*/
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10);
// Returns 17
sumPrimes(977);
// Returns 73156
