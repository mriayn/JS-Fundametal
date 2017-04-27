function solve(arrs){
	let num = Number(arrs[0]);
	let num1 = Number(arrs[1]);
	let num2 = Number(arrs[2]);

	let result = num * num1 * num2;

	if (result >=0) {
		console.log('Positive')
	} else {
		console.log('Negative')
	}
}
