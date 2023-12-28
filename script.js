const extendHex = (shortHex) => {
  // write your code here

// lets us take an example->
	
	// "#aB0"

	// first make a index

	let index = shortHex.length-3;

	// then make a boolean for check capital or small letter

	let isCapital = false; // first is false

	// Also make an output store varibale

	let output = "#"; // all hascode always start with #


	// then start a while loop 

	while (i<shortHex.length) {


		// then make a asscii code variable to check assccii value


		let asscii = shortHex[i].charCodeAt(0);


		if(asscii >=65 && asscii <=90){

			// then make it true.
			
			isCapital = true;
		}

		output += shortHex[i] + shortHex[i];

		i++;		
		
	}


	// Then return our function

	// Also have one condition if our isCapital is true than

	// our whole hascode is in upperCase otherwise as same as Output we

	// We get.


	return isCapital ? output.toUpperCase() : output;
	

	
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
