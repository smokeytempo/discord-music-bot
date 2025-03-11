const fs = require('node:fs')
const path = require('node:path')
module.exports = (client) => {
  const commandsPath = path.join(__dirname, '../commands')
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file))
    if (command.data) client.slashCommands.set(command.data.name, command)
    if (command.name) client.commands.set(command.name, command)
  }
}
