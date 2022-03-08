//square root was found to eliminate over 600 million iterations.
// Any iteration above the square root will be accounted for by values below the square root
const b = 600851475143;
let x = Math.ceil(Math.sqrt(b));
let y = [];

while (x > 2) {
  if (b % x == 0) {
    //console.log(x);
    y.push(x);
  }
  // decrements of two because any multiple of 2 is not a prime number except 2 and initial xa is an odd number.
  // This eliminates over 300000 iterations

  x -= 2;
}

console.log(y);
