const { MessageEmbed } = require("discord.js");
const { parse } = require("psl");

module.exports = {
    name: "purge",
    category: "moderation",
    description: "Deletes a selected amout of messages",
    usage: "purge <number of message>",
    run: async (client, message, args) => {

        if(message.deletable) {
            message.delete();
        }

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        if(!message.member.hasPermission("MANAGE_MESSAGES"))usage.addField("Your Missing the ``MANAGE_MESSAGES`` Permission", "You can't delete messages.")
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))usage.addField("I am Missing the ``MANAGE_MESSAGES`` Permission", "I can't delete messages")
        if(isNaN(args[0]) || parseInt(args[0]) <= 0)usage.addField("Unvalid number", "Usage: purge <number of messages>")

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })});
        }

        if(!message.guild.me.hasPermission("MANAGE_MESSAGE")) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })});
        }

        if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })});
        }
        
        let deleteAmout;

        if(parseInt(args[0]) > 100) {
            deleteAmout = 100;
        } else {
            deleteAmout = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmout, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`)).then(msg => {msg.delete({ timeout: 5000 })})
            .catch(err => message.reply(`Something went wrong ${err}`));

    }
} 