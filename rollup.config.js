// rollup.config.mjs
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.cjs', // CommonJS output
            format: 'cjs',
        },
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.mjs', // ES Module output
            format: 'es', // ES module output format
        },
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ]
    }
];