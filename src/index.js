const Discord = require('discord.js');
const client = new Discord.Client();
const getenv = require('getenv');
const neededMessage = require('./utils');

client.on('ready', () => {
    console.log('Кулёк проснулся.');
});

client.on('message', msg => {
    if (neededMessage(msg.content)) {
        msg.channel.send('кулёк');
    }
});

client.login(getenv('TOKEN'));