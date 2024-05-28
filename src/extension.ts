// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "batch-create-azure-devops-wits" is now active!'
	)

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		'batch-create-azure-devops-wits.helloWorld',
		() => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage(
				'Hello World from batch-create-azure-devops-wits!'
			)
		}
	)

	let openConfigSettings = vscode.commands.registerCommand(
		'batch-create-azure-devops-wits.open-config-settings',
		() => {
			vscode.commands.executeCommand(
				'workbench.action.openSettings',
				'batch-create-azure-devops-wits'
			)
		}
	)

	// vscode.commands.registerCommand(
	// 	'batch-create-azure-devops-wits.set-iteration',
	// 	async () => {
	// 		await setSystemAreaPaths(context.globalState)
	// 		setCurrentIteration()
	// 	}
	// )

	context.subscriptions.push(disposable)
	context.subscriptions.push(openConfigSettings)
}

// This method is called when your extension is deactivated
export function deactivate() {}
