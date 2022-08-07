// Require the necessary libraries
const { SlashCommandBuilder } = require('discord.js')

/**
 * MODULE NAME: Ping
 * MODULE CREATOR: robotprobot#8211
 * MODULE DESCRIPTION: Ping the bot to see if it's alive, and obtain the latency to the websocket and round trip.
*/

// Module logic
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check the bot is alive and view its latency.'),
  async execute (interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true, ephemeral: true })
    interaction.editReply(`Pong! \nWebsocket latency: ${interaction.client.ws.ping}ms\nRoundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
  }
}
