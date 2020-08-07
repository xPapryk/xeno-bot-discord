const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "utility",
    description: "Make the bot say something",
    usage: "say <message>",
    run: async (client, message, args) => {

        message.delete();

        let say = args.join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Missing Message", "Usage: say <message>")

        if(!say) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        message.channel.send(say);

    }
} 
