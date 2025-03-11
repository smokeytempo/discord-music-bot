module.exports = (client) => {
    client.player.on('error', (queue, error) => {
      if (queue.metadata) queue.metadata.channel.send(`Error: ${error.message}`)
    })
    client.player.on('connectionError', (queue, error) => {
      if (queue.metadata) queue.metadata.channel.send(`Connection error: ${error.message}`)
    })
    client.player.on('playerStart', (queue, track) => {
      if (queue.metadata) queue.metadata.channel.send(`Now playing: ${track.title}`)
    })
  }
  