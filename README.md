* Browser-Sync

* run scss build
* autoprefixer -> it also compresses the file


* Browser sync command
```
npm install browser-sync --save-dev

// the dots mean watch all files in this directory
./node_modules/browser-sync/bin/browser-sync.js start --server . --files .
```

```
"scss": "node_modules/.bin/node-sass --output-style compressed -o css/ css/style.css",
"autoprefixer": "node_modules/.bin/postcss -u autoprefixer -r css/*"
```

## CSS Grid

```
/* simply define the grid and place each piece of content within it */
/* rows -> top to bottom
   columns -> left to right / horizontal  */
display: grid
```
