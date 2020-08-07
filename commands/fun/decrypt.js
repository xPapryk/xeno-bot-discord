const { MessageEmbed } = require("discord.js");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const hastebin = require('hastebin-gen');

module.exports = {
    name: "decrypt",
    category: "utilities",
    description: "Decrypt's your encrypted message",
    usage: "decrypt <message>",
    run: async (client, message, args) => {

        let demsg = args.join(" ");

        let usage = new MessageEmbed()
        if(!message.member.hasPermission("MANAGE_MESSAGES"))usage.addField("Your Missing Permission: ``MANAGE_MESSAGES``", "You do not have the permissions required to make an annoucement.")
        if(!demsg)usage.addField("Missing Encrypted Message", "Usage: decrypt <encrypted message>")

        if(!demsg) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const decryptedString = cryptr.decrypt(demsg);

        hastebin(decryptedString).then(r => {

            message.channel.send("Here's your decrypted message:  " + r);
            }).catch(console.error);

        message.delete(); 
        
    }
}