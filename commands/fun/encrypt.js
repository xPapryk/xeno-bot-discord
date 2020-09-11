const { MessageEmbed } = require("discord.js");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const hastebin = require('hastebin-gen');

module.exports = {
    name: "encrypt",
    category: "utilities",
    description: "Encrypt's your message",
    usage: "encrypt <message>",
    run: async (client, message, args) => {

        let msg = args.join(" ");
        const encryptedString = cryptr.encrypt(msg);

        let usage = new MessageEmbed()
        .addField("Missing Text to Encrypt", "Usage: encrypt <text>")

        if(!msg) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        hastebin(encryptedString).then(r => {

            message.channel.send("Here's your encrypted message:  " + r);
            }).catch(console.error);

        message.delete();
        
    }
}