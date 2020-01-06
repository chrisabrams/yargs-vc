class YargsViewController {

  static command = 'default';
  static description = 'Default description';

  controller() {

    throw new Error('Command must have a controller');

  }

  constructor() {

    return [
      this.constructor.command,
      this.constructor.description,
      this.setup.bind(this),
      this.process.bind(this),
    ];

  }

  process(argv) {

    try {

      this.controller(argv);

    }
    catch(e) {
      console.error('Could not process controller');
      console.error(e);
    }

  }

  setup(yargs) {

  }

}

module.exports = YargsViewController;
