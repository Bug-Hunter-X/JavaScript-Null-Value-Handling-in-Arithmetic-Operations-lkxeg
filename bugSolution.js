function myFunc(a, b) {
  // Handle null values explicitly
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b; 
  return a + b;
}

console.log(myFunc(null, 5)); // Output: 5
console.log(myFunc(2, null)); // Output: 2
console.log(myFunc(2, 5));   // Output: 7
console.log(myFunc(null, null)); // Output: 0