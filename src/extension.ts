'use strict';
/// <reference path="opn.d.ts" />

import * as vscode from 'vscode';
import * as opn from 'opn';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "view-in-chrome" is now active!');

    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    let name;
    if(os.platform() === 'win32') {
        name = 'chrome';
    }
    if(os.platform() === 'darwin') {
        name = 'google chrome';
    } else {
        name = 'google-chrome';
    }

    let disposable = vscode.commands.registerCommand('extension.openChrome', () => {
        opn(doc.fileName, { app: name });
    });

    context.subscriptions.push(disposable);
}