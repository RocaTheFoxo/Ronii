console.log("Result var version: " + calc());
console.log("Result let version: " + calcLet());
function calc() {
	var n = 45;
	{
		var n = 55;
		n++;
		console.log(n)
	}
	return n;
}

function calcLet() {
	let n = 45;
	{
		let n = 55;
		n++;
		console.log(n)
	}
	return n;
}
