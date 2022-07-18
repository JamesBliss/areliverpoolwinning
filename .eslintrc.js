module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@next/next/recommended',
    "prettier"
  ],
  "root": true,
  "plugins": [
    "prettier"
  ],
  "rules": {
    "import/no-unresolved": [
      2,
      {
        "ignore": [
          "^~/"
        ]
      }
    ]
  },
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
}