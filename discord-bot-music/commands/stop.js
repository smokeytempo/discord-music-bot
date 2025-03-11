const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'stop',
  data: new SlashCommandBuilder().setName('stop').setDescription('Stop the music'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue) return message.reply('No music is playing.')
    queue.stop()
    message.reply('Stopped the music.')
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue) return interaction.reply('No music is playing.')
    queue.stop()
    interaction.reply('Stopped the music.')
  }
}
