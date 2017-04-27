function solve(arrs){
	let num1 = Number(arrs[0]);
	let num2 = Number(arrs[1]);
    let result = {};
	if (num1 <= num2) {
		result = num1 * num2;
	} else {
		result = num1 / num2;
	}
	
	console.log(result);
