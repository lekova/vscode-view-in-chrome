'use strict';
/// <reference path="opn.d.ts" />
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as opn from 'opn';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "view-in-chrome" is now active!');
    
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.openChrome', () => {
        opn(doc.fileName, { app: 'google chrome' });

        vscode.window.showInformationMessage('Chrome is opening for you');
    });

    context.subscriptions.push(disposable);
}
