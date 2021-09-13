# Remote Script Webpack Plugin

Load remote script to webpack module base on ModuleFederationPlugin

## Installation

    npm install --save-dev remote-script-webpack-plugin

## Usage

```js
// webpack.config.js
const remoteScriptWebpackPlugin = require('remote-script-webpack-plugin')

module.exports = {
  ...
  plugins: [
    remoteScriptWebpackPlugin('lodash', 'https://cdn.jsdelivr.net/npm/lodash'),
    remoteScriptWebpackPlugin('XLSX', 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js'),
  ]
}
```
