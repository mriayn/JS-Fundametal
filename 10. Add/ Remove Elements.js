function solve(arrs){
	let newArray = [];

	for (var i = 0; i < arrs.length; i++) {
		let temp = arrs[i].split(' ');
		let index = temp[0];
		let value = temp[1];
		if (index === "add") {
			newArray.push(value);
		}else if (index === "remove") {
			newArray.splice(value, 1)
		}
	}
	for (var i = 0; i < newArray.length; i++) {
		console.log(newArray[i])
		}
 }
