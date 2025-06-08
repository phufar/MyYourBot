const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('dog')
        .setDescription('Get a dog'),
    async execute(interaction) {
        await interaction.reply(`
   __      _
  o'')}____//
   \`_/      )
   (_(_/-(_/
`);
    }
};