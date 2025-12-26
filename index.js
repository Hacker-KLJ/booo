const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.BOT_TOKEN || 'PUT_YOUR_TOKEN_HERE';

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return;

  const cmd = message.content.trim();

  if (cmd === '!r') {
    return message.reply('(DRY-RUN) Would delete all channels');
  }

  if (cmd.startsWith('!n')) {
    return message.reply('(DRY-RUN) Would rename all channels');
  }

  if (cmd === '!b') {
    return message.reply('(DRY-RUN) Would ban members one by one');
  }

  if (cmd === '!rrole') {
    return message.reply('(DRY-RUN) Would rename all roles');
  }

  if (cmd === '!bb') {
    return message.reply('(DRY-RUN) Would run all actions + create 40 channels + send messages');
  }
});

client.login(TOKEN);
