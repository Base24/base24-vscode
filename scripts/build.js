const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const file = process.argv.slice(2)[0];

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const TEMPLATE_YML = path.join(TEMPLATES_DIR, 'default.mustache.yaml');
const TEMPLATE_OUT = path.join(TEMPLATES_DIR, 'default.mustache');

module.exports = async () => {
	const { base } = await generate(TEMPLATE_YML);

	return Promise.all([
		fs.promises.writeFile(
			TEMPLATE_OUT,
			JSON.stringify(base, null, 4)
		),
	]);
};

if (require.main === module) {
	module.exports();
}
