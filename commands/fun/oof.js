const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const oofs = [
    'https://media.giphy.com/media/S3Qafn57JDnsfRfbFc/giphy.gif',
    'https://media1.tenor.com/images/e556a6c1248d94b01793085d5faaa47e/tenor.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c0bc8e0-037d-4877-878f-d62d5d3f43b9/dbd010i-ee9297b2-947e-4ed9-bb00-8b901be6dd21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2MwYmM4ZTAtMDM3ZC00ODc3LTg3OGYtZDYyZDVkM2Y0M2I5XC9kYmQwMTBpLWVlOTI5N2IyLTk0N2UtNGVkOS1iYjAwLThiOTAxYmU2ZGQyMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.W6Wo3o3pQBb_itmRWhMX86ULNlChvrc_m_LfpxuP3kk',
    'https://media.giphy.com/media/1BeoMfd2fFuoOXdr8e/giphy.gif',
    'https://gfycat.com/activewearyeastrussiancoursinghounds'
]

module.exports = {
    name: "oof",
    category: "fun",
    description: "Random OOF gif",
    usage: "oof",
    run: async (client, message, args) => {

        message.delete();

        let oofEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(oofs[Math.floor(Math.random() * oofs.length)])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        message.channel.send(oofEmbed)

    }
}