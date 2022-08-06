// Require the necessary libraries
const fs = require('node:fs')
const { Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const dotenv = require('dotenv')

// Initialize the dotenv configuration file
dotenv.config()

// Print information
console.log(`Discord Slash Command API refresher v1.0.0
by robotprobot#8211.
`);

// Check for presence of commands folder
console.log("Started reading commands folder.");
if (!fs.existsSync('./commands')) {
  console.log('No commands folder found. Exiting.');
  process.exit(9);
}

// Start reading commands from the commands folder
const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}
console.log(`Commands folder read successfully (${commands.length} commands).`)

// Use token for authentication to the Discord REST API
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(`Beginning refresh.
Deleting all commands.`)

    // Delete all previous slash commands
    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENTID), { body: [] })
      .then(() => console.log(`Successfully deleted all commands.
Adding new commands.`))
      .catch(console.error)

    await rest.put(
      // Add new slash commands
      Routes.applicationCommands(process.env.DISCORD_CLIENTID),
      { body: commands }
    )

    console.log(`Successfully added commands.
Refreshing of slash commands is complete.`)
  } catch (error) {
    console.error(error)
  }
})()
