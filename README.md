# Remote Script Webpack Plugin

Load remote script like externals.

## Difference from `externals`

Use `externals` to load script for all page.

Use `remoteScriptWebpackPlugin` to load script for page when it need the special remote script.

## Installation

    npm install --save-dev remote-script-webpack-plugin

## Usage

```js
// webpack.config.js
const remoteScript = require('remote-script-webpack-plugin')

module.exports = {
  ...
  plugins: [
    remoteScript('lodash', '_', 'https://cdn.jsdelivr.net/npm/lodash'),
    remoteScript('xlsx', 'XLSX', 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js'),
  ]
}
```
