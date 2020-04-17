const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const file = process.argv.slice(2)[0];

const THEME_DIR = path.join(__dirname, '..', 'theme');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const { base } = await generate(file);

    return Promise.all([
        fs.promises.writeFile(
            path.join(THEME_DIR, 'base24.json'),
            JSON.stringify(base, null, 4)
        ),
    ]);
};

if (require.main === module) {
    module.exports();
}
