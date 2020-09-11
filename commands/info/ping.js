const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "utilities",
    description: "Returns the latency of the bot",
    usage: "ping",
    run: async (client, message, args) => {

        return message.channel.send('Ping?').then(msg => {
            msg.edit(`Latency is \`${msg.createdTimestamp - message.createdTimestamp}\`ms.\nAPI Latency is \`${Math.round(client.ws.ping)}ms\``);
        }).catch((e) => {
            client.logger.error(`Error : ${e}`);
            return false;
        }); 

    }   
}