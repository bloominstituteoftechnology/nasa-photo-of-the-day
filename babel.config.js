const PLUGIN_TRANSFORM_RUNTIME = '@babel/plugin-transform-runtime'
const PLUGIN_STYLED_COMPONENTS = 'babel-plugin-styled-components'

const PRESET_REACT = '@babel/preset-react'
const PRESET_ENV = '@babel/preset-env'

module.exports = {
  env: {
    testing: {
      plugins: [
        [PLUGIN_TRANSFORM_RUNTIME],
      ],
      presets: [
        [PRESET_REACT],
        [PRESET_ENV, { modules: 'commonjs', debug: false }]
      ]
    },
    development: {
      plugins: [
        [PLUGIN_STYLED_COMPONENTS],
      ],
      presets: [
        [PRESET_REACT],
        [PRESET_ENV, { targets: { chrome: '110' } }]
      ]
    },
    production: {
      plugins: [
        [PLUGIN_STYLED_COMPONENTS],
      ],
      presets: [
        [PRESET_REACT],
        [PRESET_ENV, { targets: { chrome: '110' } }]
      ]
    },
  }
}
