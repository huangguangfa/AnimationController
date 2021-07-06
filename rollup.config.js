import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'

// rollup 可以帮我们打包es6的模块化语法
export default {
    input: './src/index.js',

    output: {
        file: "./dist/animationController.js",
        format: 'umd',
        sourcemap: true,
        name:"AnimationController"
    },

    plugins: [
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
            presets: ["@babel/preset-env"]
        }),
        postcss({
            extract: true,
            plugins: [
               require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
            ],
            extensions: [ '.css' ]
        }),
        resolve(),
        commonjs()
    ]

}
