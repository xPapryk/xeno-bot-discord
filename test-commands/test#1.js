const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "test1", 
    category: "test",
    description: "test#1",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You cannot execute this command.")
            .then(msg => {msg.delte({ timeout: 5000 })})
        }

        message.channel.send("Hello World");

        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 2, time: 30000}).then(collected => {

                let res1 = collected.first(1);
                message.channel.send(res1);
                let res2 = collected.first(2);
                message.channel.send(res2);

            });

  }
}
