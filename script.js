const extendHex = (shortHex) => {
  // write your code here

 let output = "#";
  let i = 1; // Initialize i to 1 to start from the second character of the string
  while (i < shortHex.length) {
    output += shortHex[i] + shortHex[i];
    i++;
  }
  return output;
	
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
