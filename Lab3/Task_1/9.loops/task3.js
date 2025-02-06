let n = 10;
let bool = true;

for (let i = 2; i <= n; i++) {
    bool = true
  for (let j = 2; j < i; j++) {
    if (i % j == 0) bool = false; 
  }

  if (bool) alert( i ); // a prime
}