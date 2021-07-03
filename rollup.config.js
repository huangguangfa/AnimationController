import serve from 'rollup-plugin-serve'

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// rollup 可以帮我们打包es6的模块化语法
export default {
    input: './src/index.js',

    output: {
        file: "./dist/animationController.js",
        format: 'iife',
        sourcemap: true
    },

    plugins: [
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
            presets: ["@babel/preset-env"]
        }),
        resolve(),
        commonjs()
    ]

}
