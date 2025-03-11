# Discord Music Bot

A feature-rich, multi-source music bot for Discord that supports both prefix and slash commands using Discord.js v14 and discord-player.

## Features

- **Multi-Source Streaming:** Play music from YouTube, Spotify, SoundCloud, Audiomack, and more.
- **Dual Command System:** Use traditional prefix commands (e.g., `!play`) or modern slash commands (e.g., `/play`).
- **Robust Queue System:** Manage playlists and track orders effortlessly.
- **24/7 Operation:** Maintain a persistent connection so your music never stops.
- **Modular Architecture:** Clean separation of commands, events, and handlers for easy maintenance and scalability.
- **Customizable Extractors:** Enable or disable music sources via environment variables.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16.9.0 or higher
- A [Discord Bot Token](https://discord.com/developers/applications)
- API credentials for Spotify, SoundCloud, Audiomack, YouTube (if you plan to use these sources)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/discord-music-bot.git
   cd discord-music-bot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following content:
   ```ini
   TOKEN=YOUR_BOT_TOKEN
   CLIENT_ID=YOUR_CLIENT_ID
   ENABLE_SPOTIFY=true
   SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
   SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
   ENABLE_SOUNDCLOUD=true
   SOUNDCLOUD_CLIENT_ID=YOUR_SOUNDCLOUD_CLIENT_ID
   ENABLE_AUDIOMACK=true
   AUDIOMACK_CLIENT_ID=YOUR_AUDIOMACK_CLIENT_ID
   AUDIOMACK_CLIENT_SECRET=YOUR_AUDIOMACK_CLIENT_SECRET
   ENABLE_YOUTUBE=true
   YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
   ```

4. **Start the Bot**
   ```bash
   npm start
   ```

## Usage

### Inviting the Bot

Generate an invite link from the [Discord Developer Portal](https://discord.com/developers/applications) and add the bot to your server.

### Commands

#### Prefix Commands

- `!play <query>` - Play a song from a URL or search query.
- `!pause` - Pause the current song.
- `!resume` - Resume playback.
- `!skip` - Skip the current song.
- `!stop` - Stop the music.
- `!queue` - Display the current queue.
- `!join` - Join your voice channel.
- `!leave` - Leave the voice channel.

#### Slash Commands

- `/play query:<song>` - Play a song.
- `/pause` - Pause playback.
- `/resume` - Resume playback.
- `/skip` - Skip the current track.
- `/stop` - Stop the music.
- `/queue` - Show the current queue.
- `/join` - Join your voice channel.
- `/leave` - Disconnect from the voice channel.

## Project Structure

```
/discord-music-bot
 ├─ commands/
 │   ├─ play.js
 │   ├─ pause.js
 │   ├─ resume.js
 │   ├─ skip.js
 │   ├─ stop.js
 │   ├─ queue.js
 │   ├─ join.js
 │   └─ leave.js
 ├─ events/
 │   ├─ ready.js
 │   ├─ messageCreate.js
 │   └─ interactionCreate.js
 ├─ handlers/
 │   ├─ commandHandler.js
 │   ├─ eventHandler.js
 │   └─ playerHandler.js
 ├─ .env
 ├─ index.js
 ├─ package.json
 └─ README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [discord.js](https://discord.js.org/)
- [discord-player](https://github.com/Androz2091/discord-player)
- [@discord-player/extractor](https://github.com/Androz2091/discord-player/tree/main/packages/extractor)
