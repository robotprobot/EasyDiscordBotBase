module.exports = {
  name: 'interactionCreate',
  execute (interaction) {
    if (!interaction.isChatInputCommand()) return

    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) return

    try {
      console.log(`Executing command "${command.data.name}" - requested by ${interaction.user.username}#${interaction.user.discriminator} in guild "${interaction.member.guild.name}"`)
      command.execute(interaction)
    } catch (error) {
      console.error(error)
      interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
  }
}
