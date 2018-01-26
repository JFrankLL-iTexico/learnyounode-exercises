let sum = 0;

// i like the let keyword in your cycle
for(let i=2; i<process.argv.length; i++) {
	sum += Number(process.argv[i]);
}
console.log(sum);
