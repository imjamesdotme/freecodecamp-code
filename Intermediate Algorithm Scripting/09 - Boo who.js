/*

Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/

function boo(bool) {

  /*
  Use 'typeof' to test if 'bool' is a boolean.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  */
  if(typeof(bool) === 'boolean') {
    return true;
  } else {
    return false;
  }

  return bool;
}

// Should return true.
boo(true);
boo(false);
// Should return false.
boo([1, 2, 3]);
boo([].slice);
boo({ "a": 1 });
boo(1);
boo(NaN);
boo("a");
boo("true");
boo("false");
