const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    name: "canvas",
    category: "test",
    description: "creates a simple canvas",
    usage: "canvas",
    run: async (client, message, args) => {

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        
        const background = await Canvas.loadImage('https://i.imgur.com/P7zwPjQ.jpg');

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(`Canvas`, attachment)

    }
}
