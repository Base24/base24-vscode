
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
var cjson = require('strip-json-comments');

console.log("hit file ")

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log("hit activate")
	let activateThemeCommand = vscode.commands.registerCommand('base24.activateTheme', function () {
		activateTheme();
	});
	let deactivateThemeCommand = vscode.commands.registerCommand('base24.deactivateTheme', function() {
		deactivateTheme();
	});

	context.subscriptions.push(activateThemeCommand);
	context.subscriptions.push(deactivateThemeCommand);
}

// this method is called when your extension is deactivated
function deactivate() {}



/**
 * Link to a theme under output/theme
 */
async function activateTheme() {
	let themesDir = path.resolve(__dirname, './output/theme');
	let themes = fs.readdirSync(themesDir);
	// Define the list of themes for the end user to select from
	let themesList = themes.map(t => {
		let loadedTheme = parseJson(fs.readFileSync(path.join(themesDir, t), 'utf8'));
		let item = {
			label: "B" + t.substring(1, 6) + " " + loadedTheme.name,
			description: t
		};
		return item;
	});
	// Define additional options to ease usability for the QuickPickOptions
	// widget
	let options = {
		ignoreFocusOut: false,
		matchOnDescription: false,
		matchOnDetail: false,
		placeHolder: 'Base24 One Dark'
	};
	// Prompt the user to select a theme. Abort if no theme selected
	let selectedTheme = await vscode.window.showQuickPick(themesList, options);
	if (!selectedTheme) {
		return;
	}
	let packageInfo = getPackageInfo();
	let theme = {
		label: selectedTheme.label,
		uiTheme: 'vs-dark', // It may well be a light theme but base24 doesn't provide the means to identify this
		path: './output/theme/' + selectedTheme.description
	};
	if (packageInfo.contributes.themes.length == 1) {
		packageInfo.contributes.themes.push(theme);
	} else {
		packageInfo.contributes.themes[1] = theme;
	}
	writePackageInfo(packageInfo);
	await promptRestart(`${selectedTheme.label} has been activated. Please restart VSCode and then go to Preferences: Color Theme.`);
}


/**
 * Void the added theme... We always want Base24 to support git install
 */
async function deactivateTheme() {
	let packageInfo = getPackageInfo();
	if (packageInfo.contributes.themes.length > 1) {
		packageInfo.contributes.themes = [{
			"label": "Base24",
			"uiTheme": "vs-dark",
			"path": "./theme/base24.json"
		}];
		writePackageInfo(packageInfo);
	}
	await promptRestart('Active Base24 theme has been deactivated. Please restart VSCode.');
}

/**
 * Get package information from package.json
 */
function getPackageInfo() {
	return parseJson(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf8'));
}

/**
 * Write the package information back to package.json
 *
 * @param packageInfo json
 */
function writePackageInfo(packageInfo) {
	fs.writeFileSync(path.resolve(__dirname, './package.json'), JSON.stringify(packageInfo, null, 4));
}

/**
 * Prompt the end user to restart vscode
 * @param informationMessage
 */
async function promptRestart(informationMessage) {
	let reloadAction = {title: 'Reload Now'};
	let selectedAction = await vscode.window.showInformationMessage(informationMessage, reloadAction);
	if (!selectedAction) {
		return;
	}
	if (selectedAction.title == reloadAction.title) {
		vscode.commands.executeCommand('workbench.action.reloadWindow');
	}
}

// Shortcut to parse json
function parseJson(text) {
	return JSON.parse(cjson(text));
}

module.exports = {
	activate,
	deactivate
}
