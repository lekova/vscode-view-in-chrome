# view-in-chrome
<p align="center">
	<img src="view-html-in-chrome.ico" alt="view-in-chrome-icon" />
</p>
"view-in-chrome" is a Visual Studio Code extension that opens currently active HTML file in Chrome.

## Features

Simple is good! This extension is in existance because I want to write just one word in the command pallete and get the result I want without any extra typing.
You can open an HTML file through calling the the extension from the `Command Pallette` and `View in Chrome`, by selecting `View in Chrome` in the context menu, or by using `Ctrl + Cmd + H` shortcut keys.

<p align="center">
	<img src="view-in-chrome-usage.gif" alt="view-in-chrome-usage" />
</p>

<p align="center">
	<img src="view-in-chrome-context-menu.png" alt="view-in-chrome-context-menu" />
</p>

## How Tos

### Install [opn](https://github.com/sindresorhus/opn) library
`npm install --save opn`

### Install [typings](https://www.npmjs.com/package/typings)
`npm install typings --global`

### Install typed definitions for the `opn` library
`typings install dt~opn --save`

### Install publishing tool

`npm install -g vsce`

### Generate .vsix file

`vsce package`

### Install from [.vsix](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix) file

`Cmd+Shift+P and Install from VSIX`

### Pusblish extension to marketplace

[link](https://code.visualstudio.com/docs/extensions/publish-extension#_publishing-extensions) to Visual Studio Code website

### Release Notes 0.0.3
Version 0.0.3 changed icon from <img src="view-in-chrome-logo.png" alt="view-in-chrome-logo" height="36px" width="36"/> to <img src="view-html-in-chrome.ico" alt="view-in-chrome-icon" height="36px" width="36"/>

### Release Notes 0.0.2
Version 0.0.2 has the following updates
* Added shortcuts
* Added "View in Chrome" context menu

**Enjoy!**