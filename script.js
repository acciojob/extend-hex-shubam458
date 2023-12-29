const extendHex = (shortHex) => {
  // write your code here

 let i = shortHex.length - 3;

	let isCapital = false;

	let output = "#";

	while(i < shortHex.length){

		let assciiCode = shortHex[i]. charCodeAt(0);

		if(assciiCode >= 65 && assciiCode <=90){

			isCapital = true;
		}

		output += shortHex[i] + shortHex[i];

		i++;
	}


	return isCapital ? output.UpperCase() : output;
	
	

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
