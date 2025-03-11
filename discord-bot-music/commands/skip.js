const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'skip',
  data: new SlashCommandBuilder().setName('skip').setDescription('Skip the current song'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue) return message.reply('No music is playing.')
    const success = queue.skip()
    message.reply(success ? 'Skipped the song.' : 'Could not skip the song.')
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue) return interaction.reply('No music is playing.')
    const success = queue.skip()
    interaction.reply(success ? 'Skipped the song.' : 'Could not skip the song.')
  }
}
