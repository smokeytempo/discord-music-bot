module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      client.application.commands.set([...client.slashCommands.values()].map(cmd => cmd.data))
    }
  }
  