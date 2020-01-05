class YargsViewController {

  static name = 'default';
  static description = 'Default description';

  command() {

    console.log('running command!')

  }

  constructor() {

    return [
      this.constructor.name,
      this.constructor.description,
      this.setup.bind(this),
      this.process.bind(this),
    ];

  }

  process(argv) {

    try {

      this.command()

    }
    catch(e) {
      console.error('Could not process command')
      console.error(e)
    }

  }

  setup(yargs) {

    console.log('setting up!')

  }

}

module.exports = YargsViewController;
