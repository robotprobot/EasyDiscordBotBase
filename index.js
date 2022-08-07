// Require the necessary libraries
const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const packagejson = require('./package.json')
const dotenv = require('dotenv')

// Check for and load in the dotenv configuration file
if (fs.existsSync(path.join(__dirname, '.env'))) {
  dotenv.config()
} else {
  console.log(`No .env file found.
  Please create a .env file in the root directory with the following format:
    DISCORD_TOKEN=<YOUR_DISCORD_TOKEN>
    DISCORD_CLIENTID=<YOUR_DISCORD_CLIENTID>
  `)
  process.exit(9)
}

// Announce the start of the program
console.log(`==============================  System wake up requested  ==============================
Software base and default modules created by Oasis#8211 and licenced under the CC0-1.0 licence.
Custom/installed modules are created by other individuals (or the user) and may be subject to different licences.
Initializing ${packagejson.name} v${packagejson.version}...`)

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Load in the events
const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file)
  const event = require(filePath)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

// Load in the modules
client.modules = new Collection()
const modulesPath = path.join(__dirname, 'modules')
const moduleFiles = fs.readdirSync(modulesPath).filter(file => file.endsWith('.js'))

for (const file of moduleFiles) {
  const filePath = path.join(modulesPath, file)
  const module = require(filePath)
  // Set a new item in the Collection
  // With the key as the module name and the value as the exported module
  client.modules.set(module.data.name, module)
}

// Exit logic
process.on('exit', () => {
  console.log('Program termination request detected. Goodbye.')
})
process.on('SIGHUP', () => process.exit(128 + 1))
process.on('SIGINT', () => process.exit(128 + 2))
process.on('SIGTERM', () => process.exit(128 + 15))

// Unhandled error logic
process.on('unhandledRejection', (error) => {
  console.log('Unhandled rejection: ' + error)
})

// Login to Discord with token
client.login(process.env.DISCORD_TOKEN)
