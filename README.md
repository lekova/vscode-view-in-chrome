# view-in-chrome
[![view-in-chrome Logo](view-in-chrome.png)](view-in-chrome.png)

"view-in-chrome" is a Visual Studio Code extension that opens currently active HTML file in Chrome.

## Features

Simple is good! This extension is in existance because I want to write just one word in the command pallete and get the result I want without any extra typing.


> TODO: Create animations on how to use the extension.

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


**Enjoy!**