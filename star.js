const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', printStar);

function printStar(N) {
	let answer = "";

	for(let i=1;i<=N;i++) {
		for(let j=1;j<=N-i;j++) {
			answer += " ";
		}

		for(let j=1;j<=2*i-1;j++) {
			answer += "*";
		}

		answer += "\n";
	}

	for(let i=N-1;i>=1;i--) {
		for(let j=1;j<=N-i;j++) {
			answer += " ";
		}

		for(let j=1;j<=2*i-1;j++) {
			answer += "*";
		}

		answer += "\n";
	}

	console.log(answer);
	rl.close();
}