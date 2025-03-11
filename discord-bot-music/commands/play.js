const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'play',
  data: new SlashCommandBuilder().setName('play').setDescription('Play a song').addStringOption(option => option.setName('query').setDescription('Song URL or search').setRequired(true)),
  run: async (message, args, client) => {
    const query = args.join(' ')
    const channel = message.member.voice.channel
    if (!channel) return message.reply('Join a voice channel first.')
    let queue = client.player.getQueue(message.guild.id)
    if (!queue) queue = client.player.createQueue(message.guild, { metadata: { channel: message.channel } })
    try {
      if (!queue.connection) await queue.connect(channel)
    } catch (e) {
      client.player.deleteQueue(message.guild.id)
      return message.reply('Could not join your channel.')
    }
    const track = await client.player.search(query, { requestedBy: message.author }).then(x => x.tracks[0])
    if (!track) return message.reply(`No results found for ${query}`)
    queue.addTrack(track)
    if (!queue.playing) await queue.play()
    message.reply(`Added ${track.title} to the queue.`)
  },
  runSlash: async (interaction, client) => {
    const query = interaction.options.getString('query')
    const channel = interaction.member.voice.channel
    if (!channel) return interaction.reply('Join a voice channel first.')
    let queue = client.player.getQueue(interaction.guild.id)
    if (!queue) queue = client.player.createQueue(interaction.guild, { metadata: { channel: interaction.channel } })
    try {
      if (!queue.connection) await queue.connect(channel)
    } catch (e) {
      client.player.deleteQueue(interaction.guild.id)
      return interaction.reply('Could not join your channel.')
    }
    const track = await client.player.search(query, { requestedBy: interaction.user }).then(x => x.tracks[0])
    if (!track) return interaction.reply(`No results found for ${query}`)
    queue.addTrack(track)
    if (!queue.playing) await queue.play()
    interaction.reply(`Added ${track.title} to the queue.`)
  }
}
