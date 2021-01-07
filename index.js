class YargsViewController {
  static command = 'default'
  static description = 'Default description'

  constructor() {
    return [
      this.constructor.command,
      this.constructor.description,
      typeof this.setup == 'function' ? this.setup.bind(this) : undefined,
      this.process.bind(this),
    ]
  }

  process(argv) {
    try {
      if (typeof this.controller != 'function') {
        throw new Error('Command must have a controller')
      }

      this.controller(argv)
    } catch (e) {
      console.error('Could not process controller')
      console.error(e)
    }
  }
}

module.exports = YargsViewController
