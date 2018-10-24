# {{ cookiecutter.project_name }}

{{ cookiecutter.description }}

## Requirements:

- Node 8.11.1
- [nvm](https://github.com/creationix/nvm)
- [yarn](http://yarnpkg.com/)

## Installation

```
$ nvm use
$ yarn
```

#### Using a pre-processor
Should you wish to use SCSS instead of styled-components,
SASS comes pre-included in this package.

**Generally this is desired should javacript being required on the front-end not be necessary for the application**

1. Replace 'import './global.css';' with 'import './styles/scss/app.scss';' in index.js
2. You're done! Go forth and write your SCSS.

## Quick Start

```
$ yarn start
```

## Build

```
$ yarn build
```
