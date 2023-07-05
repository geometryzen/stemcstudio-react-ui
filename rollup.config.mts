import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
//import { sync } from 'glob';
//import * as fs from 'node:fs';
import { RollupOptions } from 'rollup';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss-modules';
import pkg from './package.json' assert { type: 'json' };

/* initialize CSS files because of a catch-22 situation:
   https://github.com/rollup/rollup/issues/1404 */
//for (const css of sync('src/**/*.css')) {
//    const definition = `${css}.d.ts`;
//    if (!fs.existsSync(definition))
//        fs.writeFileSync(
//            definition,
//            'const mod: { [cls: string]: string }\nexport default mod\n'
//        );
//}

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/**
* ${pkg.name} ${pkg.version}
* (c) ${pkg.author.name} ${pkg.author.email}
* Released under the ${pkg.license} License.
*/
`.trim();

const options: RollupOptions[] = [
    {
        input: './src/index.ts',
        output: [
            {
                banner,
                file: './dist/esm/index.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: './dist/esm/index.min.js',
                format: 'esm',
                sourcemap: true,
                plugins: [terser()],
            },
            {
                banner,
                file: './dist/system/index.js',
                format: 'system',
                sourcemap: true,
            },
            {
                file: './dist/system/index.min.js',
                format: 'system',
                sourcemap: true,
                plugins: [terser()],
            },
            {
                banner,
                file: './dist/commonjs/index.js',
                format: 'commonjs',
                sourcemap: true,
            },
        ],
        // using script tags instead of more rollup plugins for this demo
        external: ['react', 'react-dom'],
        plugins: [
            // Allows us to consume libraries that are CommonJS.
            commonjs(),
            peerDepsExternal() as unknown as Plugin,
            postcss({
                // extract: true,
                plugins: [autoprefixer()],
                // writeDefinitions causes the build to hang. What is going on?
                // writeDefinitions: true,
                // modules: { ... }
            }),
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            copy({
                targets: [
                    {
                        src: 'src/index.css',
                        dest: 'dist',
                        rename: 'index.css',
                    },
                ],
            }),
        ],
    },
    // Bundle the generated ESM type definitions.
    {
        input: './dist/esm/types/src/index.d.ts',
        output: [{ file: './dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
];

export default options;
