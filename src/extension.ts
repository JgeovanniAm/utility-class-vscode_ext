// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import getResources from './get-sources';
import gettingUtilsClass from './getting-utils-class';
import composeFileProps from './compose-file-props';
import writeCustomHtmlData from './write-custom-html-data';
import { SITE } from './const';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  try {
    const url = SITE;
    if (!url) {
      throw Error("SITE env didn't found :(");
    }
    const cssData = await getResources(url, context);
    const arrayUtilsClass = await gettingUtilsClass(cssData);
    if (!arrayUtilsClass) {
      return;
    }
    const customDataHTMLVScode = composeFileProps(arrayUtilsClass);
    writeCustomHtmlData(customDataHTMLVScode);
    vscode.window.showInformationMessage(
      'Congratulations, your extension "vz" is now active!',
    );
  } catch (error) {
    vscode.window.showErrorMessage('Something wrong happened in vz-utils-class extension: ' + error);
  }
}

// This method is called when your extension is deactivated
export function deactivate() { }
