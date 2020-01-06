# `yargs`

`yargs-vc`, or a `yargs` ViewController, is just a logical class for organizing the information a `yargs` command would receive.

## Install

```sh
npm install yargs-vc
```

## Usage

### View Controller

An example:

```js
const YargsVC = require('yargs-vc');

class RegisterVC extends YargsVC {

  static command = 'example1';
  static description = 'Example command';

  async controller(argv) {

    if (argv.verbose) {
      console.log('Ran command in verbose mode.');
    }
  
  }

}

module.exports = RegisterVC;
```

#### Command parameters (yargs positionals)

```js
const YargsVC = require('yargs-vc');

class RegisterVC extends YargsVC {

  static command = 'example2 [level]';
  static description = 'Example command';

  async controller(argv) {

    if (argv.verbose) {
      console.log('Ran command in verbose mode.');
    }

    if (argv.level) {
      console.log('Ran command with verbose level', argv.level);
    }
  
  }

  setup(yargs) {

    yargs
      .positional('level', {
        describe: 'What level of super verbosity you want',
        default: 1,
      });

  }

}

module.exports = RegisterVC;
```

### Init `yargs` with ViewController

Just pass the ViewController to the `init` function and it will start `yargs` with the ViewController(s).

```js
const init = require('yargs-vc/init');

const ExampleVC = require('./commands/example');

init([
  ExampleVC,
])
```
