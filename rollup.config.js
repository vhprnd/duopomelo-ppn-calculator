const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs', format: 'cjs' },
    { file: 'dist/index.mjs', format: 'es' }
  ],
  plugins: [resolve(), commonjs()]
};
