## Different ways of inclding React

1. Using CDN scripts from official documentation

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

2. Installing react and react-dom NPM packages

Then import React and ReactDOM


In index.html:
Add type="module" to <script> which connected to the .js file (Ex: App.js)


## Running App using parcel

For development build:
  npx parcel <entry_ponit>
  EX: npx parcel index.html

For production build :
  npx parcel build <entry_ponit>
  EX: npx parcel build index.html

Parche will create and run the Server running at http://localhost:1234
And also .parcel-cache and dist folder will be created.

Note: If the enty point is index.html then maksure remove   "main": "App.js",  From package.json

## Parcel Features

* Creates Dev and Production Build
* Creates Local Server
* HMR => Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files.
* File Watching Algorithm - written in C++
* Does Caching - Faster Builds
* Error Handling
* Image Optimization
* Minification
* Bundling
* Compressing
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting
* Does Tree shaking - remove unused code

## Types of dependencies
- dependencies (default)
- devDependencies
- transitive dependencies -> The packages which are depend on the other npm package / other dependencies.

## Browser Lists
-To make our app work in specific browsers and their versions

-Add below in package.json below dependencies

  "browsersList": [
    "last 2 versions",
    "last 2 chrome versions",
    "last 2 firefox versions",
  ]

Visit https://browserslist.dev/ for more

## creating script for dev and production build

- For dev: "start": "parcel <entry_point>
  Ex:  "start": "parcel index.html"

- For production: "build": "parcel build <entry_point>
  Ex:  "start": "parcel build index.html"

### Add like below in the scripts inside the package.json

  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },

## Runing dev and production build commands
- For Dev: npm run start (OR) npm start  (Both are one and the same)
- For Production: npm run build
