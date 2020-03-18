import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import ts from '@wessberg/rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

const development = process.env.ROLLUP_WATCH;
const buildDir = development ? 'public' : 'build';

function getModuleConfig(moduleName) {
    return {
        input: `./src/${moduleName}.ts`,
        output: {
            file: `${buildDir}/${moduleName}.js`,
            format: 'umd',
            name: moduleName,
            sourcemap: true,
        },
    };
}

const common = {
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        nodeResolve({
            browser: true,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        commonjs({
            include: [/node_modules\/nanoid/],
            ignoreGlobal: false,
            sourceMap: false,
        }),
        ts(),
        json(),
        terser(),
    ],
};

const webPushInstaller = getModuleConfig('web-push-installer');
const serviceWorker = getModuleConfig('service-worker');

export default [
    { ...webPushInstaller, ...common },
    { ...serviceWorker, ...common },
];
