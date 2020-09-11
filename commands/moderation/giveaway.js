const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const moment = require("moment");

module.exports = {
    name: "giveaway",
    category: "giveaways",
    description: "Creates a giveaway",
    usage: "giveaway <duration> <channel id> <prize>",
    run: async (client, message, args) => {

        let time = args[0];
        let channel = args[1];
        let prize = args.slice(2).join(" ");
        let hostedBy = message.author;

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        if(!time)usage.addField("Missing Giveaway Duration", "Usage: x!giveaway <duration> <channel> <prize>")
        if(!channel)usage.addField("Missing Channel ID", "Usage: x!giveaway <duration> <channel> <prize>")
        if(!prize)usage.addField("Missing Giveaway Prize", "Usage: x!giveaway <duration> <channel> <prize>")
        if(!message.member.hasPermission("MANAGE_MESSAGES"))usage.addField("Missing Permission", "``MANAGE_MESSAGES``")

        if(!time) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!channel) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })}) 
        }

        if(!prize) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }
        
        message.channel.send(`**New Giveaway Created In <#${channel}>**`)

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp(Date.now()+ms(args[0]))
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setTitle(`**${prize}**`)
        .setDescription(`React with 🎉 to enter the giveaway!\nHosted By: ${message.author}`)
        
        let m = await client.channels.cache.get(channel).send(embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.size <= 0) return message.channel.send("**The giveaway was cancelled because no one reacted.**")
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            message.channel.send(`The winner of the giveaway for **${prize}** is ${winner}`)
            /*m => {m.delete()}

            let embed2 = new MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTitle(`**GIVEAWAY ENDED**`)
            .setDescription(`Prize: ${prize}\nWinner: ${winner}\nHosted By: ${hostedBy}`)

            message.channel.send(embed2)*/

        }, ms(args[0]));

    }
}