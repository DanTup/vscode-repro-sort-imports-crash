import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {

	vscode.languages.registerDocumentSemanticTokensProvider(
		{ language: "danny" },
		{
			provideDocumentSemanticTokens(document, token) {
				return new vscode.SemanticTokens(new Uint32Array([0, 0, 6, 1, 0, 0, 7, 33, 15, 0, 1, 0, 6, 1, 0, 0, 7, 23, 15, 0, 1, 0, 6, 1, 0, 0, 7, 22, 15, 0, 1, 0, 6, 1, 0, 0, 7, 21, 15, 0, 1, 0, 6, 1, 0, 0, 7, 26, 15, 0, 1, 0, 6, 1, 0, 0, 7, 20, 15, 0, 1, 0, 6, 1, 0, 0, 7, 30, 15, 0, 0, 31, 6, 1, 0, 0, 7, 22, 15, 0]), undefined);
			},
		},
		{
			"tokenModifiers": ["documentation", "constructor", "declaration", "importPrefix", "instance", "static", "escape", "annotation", "control", "label", "interpolation", "void"],
			"tokenTypes": ["annotation", "keyword", "class", "comment", "method", "variable", "parameter", "enum", "enumMember", "type", "source", "property", "namespace", "boolean", "number", "string", "function", "typeParameter"]
		},
	);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const content1 = "export 'interior_material_selector.dart';\nexport 'mileage_selector.dart';\nexport 'owners_selector.dart';\nexport 'price_selector.dart';\nexport 'seat_count_selector.dart';\nexport 'year_selector.dart';\nexport 'winter_options_selector.dart';export 'camera_selector.dart';";
	const content2 = "export 'camera_selector.dart';\nexport 'interior_material_selector.dart';\nexport 'mileage_selector.dart';\nexport 'owners_selector.dart';\nexport 'price_selector.dart';\nexport 'seat_count_selector.dart';\nexport 'winter_options_selector.dart';\nexport 'year";

	const doc = await vscode.workspace.openTextDocument({ language: 'danny', content: content1 });
	const editor = await vscode.window.showTextDocument(doc);
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const edit = new vscode.WorkspaceEdit();
	edit.replace(doc.uri, new vscode.Range(new vscode.Position(0, 0), new vscode.Position(6, 52)), content2);
	await vscode.workspace.applyEdit(edit);
}

export function deactivate() { }
