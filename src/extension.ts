'use strict';
/// <reference path="opn.d.ts" />

import * as vscode from 'vscode';
import * as opn from 'opn';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {
    let openChrome = vscode.commands.registerCommand('extension.openChrome', () => {
        viewInCrome(context);
    });

    let openChromeFromMenu = vscode.commands.registerCommand('extension.openChromeFromMenu', () => {
        viewInCrome(context);
    });

    context.subscriptions.push(openChrome);
}

export function deactivate() {}

function viewInCrome(context: vscode.ExtensionContext) {
    let editor = vscode.window.activeTextEditor;
    if(!editor) {
        return;
    }
    
    let doc = editor.document;
    if(!doc) {
        vscode.window.showInformationMessage('Open an HTML file to continue.');
    }

    let isFocused: boolean = !!vscode.window.activeTextEditor
    let isHtml: boolean = vscode.window.activeTextEditor.document.languageId == 'html';

    let appName: string, docName: string;
    if(os.platform() === 'win32') {
        appName = 'chrome';
    }
    else if(os.platform() === 'darwin') {
        appName = 'google chrome';
    } else {
        appName = 'google-chrome';
    }
    if(!isFocused) { return; }
    if(!isHtml) {
        vscode.window.showInformationMessage('Open an HTML file to continue.');
        return;
    }
    opn(doc.fileName, { app: appName });
}