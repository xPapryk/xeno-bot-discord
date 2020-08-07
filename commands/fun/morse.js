const { Message, MessageEmbed } = require('discord.js');
const giphy = require('giphy-api')("vjU03D8UkS9I2XyURKX4SWiq6DxkCyvM");

module.exports = {
    name: "morse",
    category: "fun",
	description: "Transforms your text into morse",
	usage: "morse <text>",
    run: async (client, message, args) => {

		message.delete();
		
		let usage = new MessageEmbed()
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter("Powered By Xeno", client.user.avatarURL())
		.addField("Missing Text", "Usage: morse <text>")

		if(!args.join(" ")) {
			return message.channel.send(usage)
			.then(msg => {msg.delete({ timeout: 5000 })})
		}

        let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
				morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
				text = args.join(" ").toUpperCase();
			while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
				text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
			}
			if (text.startsWith(".") || text.startsWith("-")) {
				text = text.split(" ");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text[i] = alpha[morse.indexOf(text[i])];
				}
				text = text.join("");
			} else {
				text = text.split("");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text [i] = morse[alpha.indexOf(text[i])];
				}
				text = text.join(" ");
			}
			return message.channel.send("```"+text+"```");

    }
}