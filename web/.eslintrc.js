module.exports = {
  extends: [
    'next',
    'standard',
    'standard-react',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': 0,
    '@next/next/no-img-element': 0,
     // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx",".ts"]}] 
  },
}
