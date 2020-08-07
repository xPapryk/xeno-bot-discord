const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "spam", 
    category: "moderation",
    description: "Spam a user in dm",
    usage: "spam <@user> <message>",
    run: async (client, message, args) => {

      message.delete();

      let dm = args.slice(1).join(" ");
      let isBotOwner = message.author.id == '342333088573161472';
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

      let usage = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter("Powered By Xeno", client.user.avatarURL())
      if(!isBotOwner)usage.addField("Missing Permissions", "Only the Bot Owner can execute this command")
      if(!user)usage.addField("Missing User", "Usage: spam <@user> <message>")
      if(!dm)usage.addField("Missing Message", "Usage: spam <@user> <message>")

      if(!isBotOwner) {
        return message.channel.send(usage)
        .then(msg => {msg.delete({ timeout: 5000 })})
      }

      if(!user) {
        return message.channel.send(usage)
        .then(msg => {msg.delete({ timeout: 5000 })})
      }

      if(!dm) {
        return message.channel.send(usage)
        .then(msg => {msg.delete({ timeout: 5000 })})
      }

      setInterval (function () {
          user.user.send(dm)
        }, 1);    

  } 
}  
         