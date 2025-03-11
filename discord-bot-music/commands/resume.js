const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'resume',
  data: new SlashCommandBuilder().setName('resume').setDescription('Resume the current song'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue || !queue.playing) return message.reply('No music is playing.')
    queue.setPaused(false)
    message.reply('Resumed the music.')
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.playing) return interaction.reply('No music is playing.')
    queue.setPaused(false)
    interaction.reply('Resumed the music.')
  }
}
