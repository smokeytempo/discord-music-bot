const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'pause',
  data: new SlashCommandBuilder().setName('pause').setDescription('Pause the current song'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue || !queue.playing) return message.reply('No music is playing.')
    queue.setPaused(true)
    message.reply('Paused the music.')
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.playing) return interaction.reply('No music is playing.')
    queue.setPaused(true)
    interaction.reply('Paused the music.')
  }
}
