// Require the necessary libraries
const { SlashCommandBuilder,  EmbedBuilder } = require('discord.js')
const fs = require('fs');
const readline = require('readline');

/** 
 * MODULE NAME: Changelog
 * MODULE CREATOR: robotprobot#8211
 * MODULE DESCRIPTION: Prints the custom changelog for the version to the user.
 * 
 * ADDITIONAL REQUIREMENT: Changelog.json file in the root directory using the following format:
 *  {
 *   "CHANGE_NAME": "CHANGE_DESCRIPTION",
 *   "CHANGE_NAME": "CHANGE_DESCRIPTION"
 *  }
*/

var embed = null;

// Module logic
module.exports = {
  data: new SlashCommandBuilder()
    .setName('changelog')
    .setDescription('See whats updated with the bot!'),

  async execute (interaction) {
    
    await interaction.reply(
        
    );
  }
}