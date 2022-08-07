// Require the necessary libraries
const fs = require('node:fs')
const { Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const dotenv = require('dotenv')

// Initialize the dotenv configuration file
dotenv.config()

// Print information
console.log(`Discord Slash Command API refresher v1.0.0
by Oasis#8211.
`)

// Check for presence of modules folder
console.log('Started reading modules folder.')
if (!fs.existsSync('./modules')) {
  console.log('No modules folder found. Exiting.')
  process.exit(9)
}

// Start reading modules from the modules folder
const modules = []
const moduleFiles = fs.readdirSync('./modules').filter(file => file.endsWith('.js'))

for (const file of moduleFiles) {
  const module = require(`./modules/${file}`)
  modules.push(module.data.toJSON())
}
console.log(`Modules folder read successfully (${modules.length} modules).`)

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
      { body: modules }
    )

    console.log(`Successfully added commands.
Refreshing of slash commands is complete.`)
  } catch (error) {
    console.error(error)
  }
})()
