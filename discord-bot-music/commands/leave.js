const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'leave',
  data: new SlashCommandBuilder().setName('leave').setDescription('Leave the voice channel'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue || !queue.connection) return message.reply('Not connected to a voice channel.')
    queue.connection.disconnect()
    client.player.deleteQueue(message.guild.id)
    message.reply('Left the voice channel.')
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.connection) return interaction.reply('Not connected to a voice channel.')
    queue.connection.disconnect()
    client.player.deleteQueue(interaction.guild.id)
    interaction.reply('Left the voice channel.')
  }
}
