const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { DISCORD_TOKEN } = process.env;

const client = new Client(
  {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  },
);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
  if (msg.content === '!ping') {
    
    msg.reply('pong');
  } else if (msg.content === '!time') {
    msg.reply(new Date().toString());
  }
});

client.login(DISCORD_TOKEN);
