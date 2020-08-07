const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "stop", 
    category: "bot-owner",
    description: "Only Bot Owner Command",
    usage: "stop",
    run: async (client, message, args) => {

      let isBotOwner = message.author.id == '342333088573161472';

      if(!isBotOwner) {
        return message.channel.send("You cannot execute this command.")
        .then(msg => {msg.delete({ timeout: 5000 })})
      }

      client.destroy();

  }
}
 