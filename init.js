const yargs = require('yargs');

function init (ViewControllers = []) {

  for(let i = 0, l = ViewControllers.length; i < l; i++) {

    const ViewController = ViewControllers[i];

    yargs.command(...new ViewController());

  }

  yargs
    .option('verbose', {
      alias: 'v',
      type: 'boolean',
      description: 'Run with verbose logging'
    })
    .help()
    .argv

}

module.exports = init;
