Absolute pathing is being employed via jsconfig.json.

This allows for easier refactoring and overall code legibility.
The syntax is as follows: import { example } from '/components/example/example'.

In the example about we imported a named export named 'example' from the file located in 'components/example.js(x)'

Vscode supports a bias towards absolute pathing in the settings.
Open up settings using 'ctrl + ,' or 'cmd + ,' and type in 'js path'.
By default Vscode uses the shortest option which will leverage this feature enabled by the jsconfig.json.

To run this frontend powered by nextjs use the command 'npm run dev' or 'yarn run dev'.
Alternatively you can navigate to the project root(one level up) and run 'npm run fe' or 'yarn run fe'.
