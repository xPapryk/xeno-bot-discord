const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");

module.exports = {
    name: "eval",
    category: "bot-owner",
    description: "Executes some code for you",
    usage: "<code to eval>",
    run: async (client, message, args) => {

        let isBotOwner = message.author.id == '342333088573161472';

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!isBotOwner)usage.addField("Missing Permissions", "You need to be the bot owner to be able to execute this command")

        if(!isBotOwner) {
        return message.channel.send(usage)
        .then(msg => {msg.delete({ timeout: 5000 })})
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }   

            let toEval = args.join(" ");
            let evaluated = eval(toEval);

            let embed = new MessageEmbed()
            .setColor("#2ecc71")
            .setTimestamp()
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTitle("Eval")
            .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\`\`\``)
            .addField("Evaluated:", evaluated)
            .addField("Type of:", typeof(evaluated));

            message.channel.send(embed)

        } catch (e) {

            let embed = new MessageEmbed()
            .setColor("#c0392b")
            .setTimestamp()
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setDescription(e)


            messsage.channel.send(embed)
        }

    }
}