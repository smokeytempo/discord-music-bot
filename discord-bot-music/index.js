require('dotenv').config()
if(process.env.ENABLE_SPOTIFY === 'true'){
  const { SpotifyExtractor } = require('@discord-player/extractor')
  require('discord-player').Player.use(SpotifyExtractor)
}
if(process.env.ENABLE_SOUNDCLOUD === 'true'){
  const { SoundCloudExtractor } = require('@discord-player/extractor')
  require('discord-player').Player.use(SoundCloudExtractor)
}
if(process.env.ENABLE_AUDIOMACK === 'true'){
  const { AudiomackExtractor } = require('@discord-player/extractor')
  require('discord-player').Player.use(AudiomackExtractor)
}
const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const { Player } = require('discord-player')
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
})
client.commands = new Collection()
client.slashCommands = new Collection()
client.player = new Player(client, {
  ytdlOptions: { quality: 'highestaudio', highWaterMark: 1 << 25 },
  leaveOnEmpty: false,
  leaveOnEnd: false,
  leaveOnStop: false
})
const commandHandler = require('./handlers/commandHandler')
const eventHandler = require('./handlers/eventHandler')
const playerHandler = require('./handlers/playerHandler')
commandHandler(client)
eventHandler(client)
playerHandler(client)
client.login(process.env.TOKEN)
