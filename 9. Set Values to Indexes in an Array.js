function solve(arrs){

	let count = Number(arrs[0]);
	let newArray = [];

	for (var i = 1; i < arrs.length; i++) {
	 	let now = arrs[i].split(' - ');
	 	let index = now[0];
	 	let value = now[1];
	 	newArray[index] = value;
	 }

	 for (var i = 0; i < count; i++) {
	  	if (newArray[i] === undefined) {
	  		console.log(0);
	  	} else {
	  		console.log(newArray[i])
	  	}
	  } 
 }
