const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, Schema, load } = require('js-yaml');

/**
 * @typedef {Object} TokenColor - Textmate token color.
 * @prop {string} [name] - Optional name.
 * @prop {string[]} scope - Array of scopes.
 * @prop {Record<'foreground'|'background'|'fontStyle',string|undefined>} settings - Textmate token settings.
 *       Note: fontStyle is a space-separated list of any of `italic`, `bold`, `underline`.
 */

/**
 * @typedef {Object} Theme - Parsed theme object.
 * @prop {Record<'base'|'ansi'|'brightOther'|'other', string[]>} base24 - Base24 color variables.
 * @prop {Record<string, string|null|undefined>} colors - VSCode color mapping.
 * @prop {TokenColor[]} tokenColors - Textmate token colors.
 */

/**
 * @typedef {(yamlContent: string, yamlObj: Theme) => Theme} ThemeTransform
 */

const withAlphaType = new Type('!alpha', {
    kind: 'sequence',
    construct: ([hexRGB, alpha]) => hexRGB + alpha,
    represent: ([hexRGB, alpha]) => hexRGB + alpha,
});

const schema = Schema.create([withAlphaType]);


module.exports = async (file) => {
	let yamlFile;
	try{
		yamlFile = await readFile(
			join(__dirname, '..', 'output/src', file + '.yml'),
			'utf-8'
		);
	}
	catch(error){
		console.log("unknown scheme (be sure to omit the file extension)")
		process.exit()
	}


    /** @type {Theme} */
    const base = load(yamlFile, { schema });

    // Remove nulls and other falsey values from colors
    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    return {
        base
    };
};
