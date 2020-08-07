const { MessageEmbed } = require("discord.js");
const Client = require('fortnite');
const ft = new Client('c4360d5a-add4-4946-a3b4-78b058ede296');

module.exports = {
    name: "fortnite",
    category: "games",
    description: "Get the statistics of a fortnite player",
    usage: "fortnite <player> <platform>",
    run: async (client, message, args) => {
        
        const platforms = ["pc", "xb1", "psn"];

        const lastWord = args[args.length - 1].toLowerCase();

        let platform, username;

        if(platforms.includes(lastWord)) {
            username = args.slice(0, args.length - 1).join(" ");
            platform = lastWord;
        } else {
            username = args.join(" ");
            platforms = "pc";
        }

        const search = await ft.user(username, platform);

        if(!search.username) {
            return message.channel.send("Couldn't find that user...")
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        const lifetime = search.stats.lifetime;
        const solo = search.stats.solo;
        const duo = search.stats.duo;
        const squad = search.stats.squad;

        let fnEmbed = new MessageEmbed()  
        .setColor("RANDOM") 
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setTimestamp()
        .setTitle(`${search.username} (${search.platform})`)
        .setURL(search.url)
        .addField("Solo:", [
            `**• Wins:** ${solo.wins}`,
            `**• KD:** ${solo.kd}`,
            `**• Kills:** ${solo.kills}`,
            `**• Kills per match:** ${solo.kills_per_match}`
        ], true)
        .addField("Duo:", [
            `**• Wins:** ${duo.wins}`,
            `**• KD:** ${duo.kd}`,
            `**• Kills:** ${duo.kills}`,
            `**• Kills per match:** ${duo.kills_per_match}`
        ], true)
        .addField("Squad:", [
            `**• Wins:** ${squad.wins}`,
            `**• KD:** ${squad.kd}`,
            `**• Kills:** ${squad.kills}`,
            `**• Kills per match:** ${squad.kills_per_match}`
        ], true)
        .addField("Lifetime:", [
            `**• Wins:** ${lifetime.wins}`,
            `**• KD:** ${lifetime.kd}`,
            `**• Kills:** ${lifetime.kills}`
        ], true)

        message.channel.send(fnEmbed);
    }
}