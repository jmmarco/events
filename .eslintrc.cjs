module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'react-refresh'],
  rules: {
    'import/no-unresolved': 'error',
    'import/newline-after-import': ['error', { 'count': 2 }],
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-multi-spaces': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "parent", "sibling", "index"]
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    react: {
      version: 'detect',
    },
    "import/resolver": {
      "typescript": true,
      "node": true
    }
  },


}
