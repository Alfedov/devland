const Command = require('../../structures/Command');
const fetch = require('node-fetch');
const Guild = require('../../database/schemas/Guild');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'parker',
        description: 'Я тут на чиле, на раслабоне!',
        category: 'Fun',
        cooldown: 30
      });
    }

    async run(message, args) {

        message.channel.send(`https://vk.com/alfedovdev`).catch(() => {});
        message.react('790133942095183873').catch(() => {});

    }
};