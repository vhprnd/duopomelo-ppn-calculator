// rollup.config.mjs
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.cjs.js', // CommonJS output
            format: 'cjs',
        },
        plugins: [
            resolve(),
            commonjs() // This will convert CommonJS to ES Module
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.mjs.js', // ES Module output
            format: 'es', // ES module output format
        },
        plugins: [
            resolve(),
            commonjs() // This will convert CommonJS to ES Module
        ]
    }
];