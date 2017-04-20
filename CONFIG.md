## Configuring node-sass
When it is installed locally, then the command can be called
`node_modules/.bin/node-sass` from .vscode tasks.json file.

Creating a package json.
```bash
npm init
# for automatic package creation use --yes or -y
npm init --yes

npm install node-sass
```

[Using package.json](https://docs.npmjs.com/getting-started/using-a-package.json)

---
To configure the Task Runner to use node-sass:
`Ctrl+Shift+P` and search for **Configure Task Runner**,
then select Other.

```
{
    "version": "0.1.0",
    "command": "node_modules/.bin/node-sass",
    "isShellCommand": true,
    "args": ["Mod3Lab/test.scss", "test.css"]
}

# another example of args:
    "args": ["Mod4Lab/scss/styles.scss", 
             "Mod4Lab/css/styles.css"]
```
the command option is where the node-sass module is located
while args denotes where the file is located and where
should the output go.

`npm install --save-dev node-sass`
`npm install --save-dev postcss-cli autoprefixer`

Add in package json to run commands from CLI

```
  "scripts": {
    "scss": "node_modules/.bin/node-sass --output-style compressed -o static/css/ static/css/styles.css",
    "autoprefixer": "node_modules/.bin/postcss -u autoprefixer -r static/css/*"
  },
```
* Since the modules are installed locally, we need to call them as `node_modules/.bin/<package_name>`
    * node-sass
        * node-sass [options] <path_to_file_to_build> <path_from_file_to_build_from>
        * `npm run scss` as per the key_name under scripts

* Postcss:
    * -u: flag means to use [autoprefixer]
    * -r: flag means to replace any '.css' files in 'static/css' with vendor prefixes.

[Article and contains how to compress images](https://css-tricks.com/why-npm-scripts/)

[Node Sass](https://github.com/sass/node-sass#command-line-interface)
