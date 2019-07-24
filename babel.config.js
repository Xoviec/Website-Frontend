const presets = [
  'next/babel'
]

const plugins = [
  [
    'styled-components',
    {
      ssr: true,
      displayName: true,
      preprocess: false
    }
  ],
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        components: './components',
        pages: './pages',
        utilities: './utilities'
      }
    }
  ]
]

const env = {
  test: {
    presets: [
      [
        'next/babel',
        { env: { modules: 'commonjs' } }
      ]
    ]
  }
}

module.exports = {
  presets,
  plugins,
  env
}
