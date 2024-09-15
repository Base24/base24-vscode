
========================= No Longer Supported =========================

**This project has reached the end of development and is no longer
supported**

## What Does This Mean Now?

- The repository, including issues, pull requests, labels, milestones, projects,
  wiki, releases, commits, tags, branches, reactions, and comments, has
  transitioned into a read-only state.
- While active contributions and changes are no longer accepted, you can still
  fork and clone the repository. The project's original license remains in effect.

## What Does This Mean for the Future?

- The repository is scheduled for permanent deletion on 31/06/2025. We
  encourage you to download any materials or resources you may need from the
  repository before this date.
- While this project is unlikely to be un-archived, the possibility remains open,
  albeit with minimal probability.

## What to use instead?

https://github.com/tinted-theming/tinted-vscode

========================= No Longer Supported =========================




[![Github top language](https://img.shields.io/github/languages/top/Base24/base24-vscode.svg?style=for-the-badge&cacheSeconds=28800)](../../)
[![Codacy grade](https://img.shields.io/codacy/grade/[codacy-proj-id].svg?style=for-the-badge&cacheSeconds=28800)](https://www.codacy.com/manual/Base24/base24-vscode)
[![Issues](https://img.shields.io/github/issues/Base24/base24-vscode.svg?style=for-the-badge&cacheSeconds=28800)](../../issues)
[![License](https://img.shields.io/github/license/Base24/base24-vscode.svg?style=for-the-badge&cacheSeconds=28800)](/LICENSE.md)
[![Commit activity](https://img.shields.io/github/commit-activity/m/Base24/base24-vscode.svg?style=for-the-badge&cacheSeconds=28800)](../../commits/master)
[![Last commit](https://img.shields.io/github/last-commit/Base24/base24-vscode.svg?style=for-the-badge&cacheSeconds=28800)](../../commits/master)

<!-- omit in TOC -->
# base24-vscode

<img src="https://raw.githubusercontent.com/Base24/base24-vscode/master/readme-assets/icons/name.png" alt="Project Icon" width="750">

Base 24 themes for VSCode https://code.visualstudio.com/

- [base24-vscode](#base24-vscode)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Screenshots](#screenshots)
		- [Atom One Dark](#atom-one-dark)
		- [Atom One Light](#atom-one-light)
		- [Atom One Black](#atom-one-black)
	- [Community Files](#community-files)
		- [Licence](#licence)
		- [Changelog](#changelog)
		- [Code of Conduct](#code-of-conduct)
		- [Contributing](#contributing)
		- [Security](#security)
	- [Developer Notes](#developer-notes)

## Installation

1. Go to your Extensions view in VSCode File -> Preferences ->
   Extensions or `CTRL + SHIFT + x`
2. Search for `fredhappyface.base24` and install

## Usage

1. To open the list of themes available: Search for `Color Theme` in
   your Command Pallet, or `CTRL + K, CTRL + T` or File -> Preferences
  -> Themes -> Color Theme
2. Filter and select the theme you want to use.

## Screenshots

### Atom One Dark
<img src="readme-assets/screenshots/one-dark.PNG" width="600">

### Atom One Light
<img src="readme-assets/screenshots/one-light.PNG" width="600">

### Atom One Black
<img src="readme-assets/screenshots/one-black.PNG" width="600">

## Community Files

### Licence
MIT License; multiple authors.

(See the [LICENSE](/LICENSE.md) for more information.)

### Changelog
See the [Changelog](/CHANGELOG.md) for more information.

### Code of Conduct
In the interest of fostering an open and welcoming environment, we
as contributors and maintainers pledge to make participation in our
project and our community a harassment-free experience for everyone.
Please see the
[Code of Conduct](https://github.com/Base24/.github/blob/master/CODE_OF_CONDUCT.md) for more information.

### Contributing
Contributions are welcome, please see the [Contributing Guidelines](https://github.com/Base24/.github/blob/master/CONTRIBUTING.md) for more information.

### Security
Thank you for improving the security of the project, please see the [Security Policy](https://github.com/Base24/.github/blob/master/SECURITY.md) for more information.


## Developer Notes

Install the theme and keep up to date by cloning the repo:


```bash
./dropin.py
base24.py --online --verbose --config .\templates\config.yaml
npm run update:packagejson:themes
```
