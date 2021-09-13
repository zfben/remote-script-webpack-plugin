const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

let remotes = 0

function remoteScript(origin, url) {
  remotes++
  return new ModuleFederationPlugin({
    name: origin,
    remotes: {
      [remotes]: `promise new Promise(function (resolve) {
        var script = document.createElement('script')
        script.src = '${url}'
        script.onload = function () {
          resolve({
            get () {
              return function () {
                return window['${origin}']
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
