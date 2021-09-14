const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

/**
 * Load remote script like externals
 * 
 * @param {string} packageName npm package name
 * @param {string} globalVariable name of global variable from remote script
 * @param {string} url remote script's url
 * 
 * @example
 * remoteScriptWebpackPlugin('lodash', '_', 'https://cdn.jsdelivr.net/npm/lodash')
 * remoteScriptWebpackPlugin('xlsx', 'XLSX', 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js')
 */
function remoteScript(packageName, globalVariable, url) {
  return new ModuleFederationPlugin({
    name: packageName,
    remotes: {
      [packageName]: `promise new Promise(function (resolve) {
        var script = document.createElement('script')
        script.src = '${url}'
        script.onload = function () {
          resolve({
            get () {
              return function () {
                return window['${globalVariable}']
              }
            }
          })
        }
        document.head.appendChild(script);
      })`
    }
  })
}

module.exports = remoteScript
