const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hum')
		.setDescription('Give you a huge hum'),
	async execute(interaction) {
		await interaction.reply('8=====D~~~');
	},
};