# Jandy

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [Bower](https://bower.io/) installed.
* [Gulp.js](http://gulpjs.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/jandy.git
```
* Navigate to the project directory.
```
cd jandy
```
* Install node modules.
```
npm install
```
* Install bower dependencies.
```
bower install
```
* Run the project.
```
npm run build
```
* Open with a browser the ```index.html``` inside the ```dist``` directory.
* Run in dev mode.
```
npm run dev
```

## Gulp Tasks
* ```gulp``` - clean all the dist directory files and run all build tasks.
* ```gulp --production``` - clean all the dist directory files and run all build tasks for production.
* ```gulp clean``` - clean all the dist directory files.
* ```gulp fonts``` - outputs all fonts in a flattened directory structure.
* ```gulp images``` - minify all images.
* ```gulp views``` - compile all Pug templates into HTML.
* ```gulp views --production``` - compile all Pug templates into HTML for production.
* ```gulp bower``` - inject SCSS bower dependencies automatically.
* ```gulp styles``` - compiles, combines, and optimizes Bower CSS and project CSS.
* ```gulp styles --production``` - compiles, combines, and optimizes bower CSS and project CSS for production.
* ```gulp lint``` -  lints configuration JSON and project JS.
* ```gulp scripts``` -  compiles, combines, and optimizes bower JS and project JS.
* ```gulp scripts --production``` - compiles, combines, and optimizes bower JS and project JS for production.
* ```gulp build``` - run all build tasks.
* ```gulp build --production``` - run all build tasks for production.
* ```gulp webserver``` - create a local webserver.
* ```gulp watch``` - create a proxy to the dev server and synchronize code changes across devices.
* ```gulp deploy``` - deploy the dist directory files to github pages.

## NPM Scripts
* ```npm start``` - start the project.
* ```npm run build``` - run the project in production mode.
* ```npm run dev``` - run the project in dev mode.

## License
Licensed under [MIT](https://opensource.org/licenses/mit-license.php).