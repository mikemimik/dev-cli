const { flags } = require('@oclif/command')
const dedent = require('dedent')

const BaseCommand = require('../lib/base')

class HelloCommand extends BaseCommand {
  static flags = {
    name: flags.string({
      char: 'n',
      description: 'name to print',
    }),
  }

  static description = dedent`
    Describe the command here
    ...
    Extra documentation goes here
  `
  async run() {
    const { flags } = this.parse(HelloCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/hello.js`)
  }
}

module.exports = HelloCommand
