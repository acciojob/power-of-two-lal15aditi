const isPowerOfTwo = (number) => {
  //your code here
	// Edge cases
  if (number <= 0) {
    return false;
  }
  
  // Using bitwise AND operator to check if the number is a power of 2
  // A number that is a power of 2 will have only one bit set to 1.
  // For example, 2 (binary: 10), 4 (binary: 100), 8 (binary: 1000), ...
  // By subtracting 1 from the number, we will get all bits set to 1 before the set bit.
  // Taking bitwise AND of the number and the number-1 should give 0 for powers of 2.
	return (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
