const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEME_DIR = path.join(__dirname, '..', 'output/theme');

if (!fs.existsSync(THEME_DIR)) {
	fs.mkdirSync(THEME_DIR);
}

async function main(){
	const files = fs.readdirSync('output/src');
	for(let index = 0; index < files.length; index ++){
		const file = files[index].replace(".yml", "");
		const { base } = await generate(file);
		fs.writeFileSync(
			path.join(THEME_DIR, file + '.json'),
			JSON.stringify(base, null, 4)
		);
	}
}

main();
