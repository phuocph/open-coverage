// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const workspace = vscode.workspace;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "open-coverage" is now active!');

	let disposable = vscode.commands.registerCommand('open-coverage.open', function () {
    let currentFolder = workspace.workspaceFolders[0]
    let coverageIndexFile = vscode.Uri.file(`${currentFolder.uri.path}/coverage/index.html`)
    console.log(coverageIndexFile)
		vscode.commands.executeCommand("extension.openInDefaultBrowser", coverageIndexFile)
	});
  context.subscriptions.push(disposable);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
