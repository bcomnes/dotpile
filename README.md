# dotpiles

[![Greenkeeper badge](https://badges.greenkeeper.io/bcomnes/dotpiles.svg)](https://greenkeeper.io/)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/dotpiles.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dotpiles
[travis-image]: https://img.shields.io/travis/bcomnes/dotpiles.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/dotpiles
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Put your dotfiles into a pile.

`dotpiles` automatically sets up an `init.d` style configuration snippet system for `bash`.  It boostraps the system, or noops if its already set up.  It can also collect stats on the status and health of the snippet system.  Composes well with other tools and strategies.

# Description

Dotfiles are a massive source of configuration entropy.  Rather than try to serve every possible dotfile management strategy, `dotpiles` bootstraps a simple [`~/bashrc.d/` style management system](https://gist.github.com/bcomnes/5053fca2d7be573c0abd).

`dotpiles` has a few small jobs:

1. Collect info on the current state of `~/.bash_profile` and `~/.bashrc` and `~/bashrc.d/`.
2. Determine boostrap state from step 1.
3. If the user is not boostraped, handle existing `~/.bash_profile` and `~/.bashrc` files and boostrap the new rc files and `~/bashrc.d/` directory.
4. If the user is already boostraped, do nothing.  (Details exposed via API or flag).

At this point, the script/process of your choice can compose the contents of `~/bashrc.d/`.

## Install

```
npm install dotpiles
```

## Usage

```js
var dotpiles = require('dotpiles')
```

## References

- [archlinux.org: Bash - Configuration Files](https://wiki.archlinux.org/index.php/Bash#Configuration_files)

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
