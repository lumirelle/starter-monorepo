# pkg-placeholder

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [!Note]
>
> `main` branch of this starter is currently migrate to [bun](https://bun.com/), if you want to use `nodejs` version, please check out the [`nodejs` branch](https://github.com/lumirelle/starter-monorepo/tree/nodejs).
>
> Why? Because Bun has much better performance than Node.js, see some simple benchmark results under [the `/benchmark` folder in ts starter project](https://github.com/lumirelle/starter-ts/tree/main/benchmark), or just visit [Bun's official documentation](https://bun.com/docs).
>
> Want to know if the `Bun` runtime is being used? Add following into the code:
>
> ```ts
> console.log(process.execPath)
> console.log('Node.js version:', process.version)
> console.log('Bun detected:', typeof Bun !== 'undefined')
> ```

> [!Note]
>
> This is a personal fork of [antfu/starter-monorepo](https://github.com/antfu/starter-monorepo) with some customizations.

_description_

## Note for Developers

This starter recommends using [NPM Trusted Publisher](https://github.com/e18e/ecosystem-issues/issues/201), where the release is done on CI to ensure the security of the packages.

To do so, you need to run `bun run build && bun pm pack --filename <your-package-name>.tgz && bunx npm publish <your-package-name>.tgz` manually **for each package** the very first time to create it on npm (you can also refer to [this helpful Bash script](https://github.com/lumirelle/workflows/blob/v3/.github/workflows/release.yml#L51-L55), `packages` in that script is a path regex to the folder contains your packages).

Then, you should go to `https://www.npmjs.com/package/<your-package-name>/access` to set the connection to your GitHub repo. There also a useful cli tool can help you open your packages at once called [`open-packages-on-npm`](https://github.com/antfu/open-packages-on-npm).

Then for the future releases, you can run `bun run release` to do the release and the GitHub Actions will take care of the release process.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](../../LICENSE.md) License © [Lumirelle](https://github.com/Lumirelle)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/pkg-placeholder
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/pkg-placeholder
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=pkg-placeholder
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/pkg-placeholder
[codecov-src]: https://img.shields.io/codecov/c/gh/lumirelle/pkg-placeholder/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/lumirelle/pkg-placeholder
[license-src]: https://img.shields.io/github/license/lumirelle/pkg-placeholder.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/lumirelle/pkg-placeholder/blob/main/LICENSE.md
