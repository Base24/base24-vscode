const fs = require('fs');
const files = fs.readdirSync('output/src');
const prompt = require('prompt-sync')();

for(let index = 0; index < files.length; index ++){
	if(index % 25 == 0){
		prompt("next page >")
		console.log("page " + (index / 25 + 1))
	}
	console.log(files[index].replace(".yml", ""));
}
