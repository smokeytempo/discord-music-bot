module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
      if (!interaction.isChatInputCommand()) return
      const command = client.slashCommands.get(interaction.commandName)
      if (command) command.runSlash(interaction, client)
    }
  }
  