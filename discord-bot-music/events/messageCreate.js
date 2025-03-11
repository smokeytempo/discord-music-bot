module.exports = {
    name: 'messageCreate',
    execute(message, client) {
      if (!message.content.startsWith('!') || message.author.bot) return
      const args = message.content.slice(1).trim().split(/ +/)
      const commandName = args.shift().toLowerCase()
      const command = client.commands.get(commandName)
      if (command) command.run(message, args, client)
    }
  }
  