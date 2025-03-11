const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'queue',
  data: new SlashCommandBuilder().setName('queue').setDescription('Show the current queue'),
  run: async (message, args, client) => {
    const queue = client.player.getQueue(message.guild.id)
    if (!queue || !queue.tracks.length) return message.reply('The queue is empty.')
    const queueString = queue.tracks.map((t, i) => `${i + 1}. ${t.title}`).join('\n')
    message.reply(`Queue:\n${queueString}`)
  },
  runSlash: async (interaction, client) => {
    const queue = client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.tracks.length) return interaction.reply('The queue is empty.')
    const queueString = queue.tracks.map((t, i) => `${i + 1}. ${t.title}`).join('\n')
    interaction.reply(`Queue:\n${queueString}`)
  }
}
