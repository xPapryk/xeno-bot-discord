const { createCanvas, loadImage } = require('canvas')
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "trash",
    category: "image-manipulation",
    description: "Trash somebody",
    usage: "trash [@member]",
    run: async (client, message, args) => {

        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member || message.author;

        const canvas = createCanvas(200, 200)
        const ctx = canvas.getContext('2d')
        const background = await loadImage('https://i.imgur.com/eMvC55u.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await loadImage(member.user.displayAvatarURL({ format: 'jpg'}));
        ctx.drawImage(avatar, 100, 0.2, 100, 100)

        const attachement = new MessageAttachment(canvas.toBuffer(), 'trash.png');
        message.channel.send(attachement)

    }
} 