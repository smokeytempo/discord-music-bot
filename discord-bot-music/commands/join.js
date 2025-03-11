const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'join',
  data: new SlashCommandBuilder().setName('join').setDescription('Join your voice channel'),
  run: async (message, args, client) => {
    const channel = message.member.voice.channel
    if (!channel) return message.reply('Join a voice channel first.')
    const queue = client.player.createQueue(message.guild, { metadata: { channel: message.channel } })
    try {
      await queue.connect(channel)
      message.reply('Joined the voice channel.')
    } catch (e) {
      client.player.deleteQueue(message.guild.id)
      message.reply('Could not join your channel.')
    }
  },
  runSlash: async (interaction, client) => {
    const channel = interaction.member.voice.channel
    if (!channel) return interaction.reply('Join a voice channel first.')
    const queue = client.player.createQueue(interaction.guild, { metadata: { channel: interaction.channel } })
    try {
      await queue.connect(channel)
      interaction.reply('Joined the voice channel.')
    } catch (e) {
      client.player.deleteQueue(interaction.guild.id)
      interaction.reply('Could not join your channel.')
    }
  }
}
