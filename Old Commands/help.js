const { Message, MessageEmbed } = require('discord.js');
let days = 0;
let week = 0;

module.exports = {
    name: "old-help",
    category: "utilities",
    description: "Help command",
    run: async (client, message, args) => {

        let helpEmbed = new MessageEmbed()
        .setTitle("Help")
        .setColor("RANDOM")
        .setDescription("The prefix for your server is: ``x!``")
        .addField("Hypixel Commands", [
            "``bedwars <player>`` -  General bedwars player statistics",
            "``skywars <player>`` -  General skywars player statistics", 
            "``status <player>`` -  Checks if a player is online or not" 
        ])
        .addField("Game Commands", [
            "``fortnite <player>`` -  General fortnite player statistics",
            "``server <server adrees>`` -  Gives you the status of a server with some nice statistics."
        ])
        .addField("Fun Commands", [
            "``8ball <question>`` - Bot will respond to your question by yes or by no",
            "``advice`` - Gives you a random advice",
            "``asciify <text>`` - :/",
            "``clyde <text>`` - Your own clyde message",
            "``dum <text#1> <text#2>`` - Did u mean type of meme",
            "``emoji`` - Sends you a radnom emoji",
            "``fact`` -  Sends you a random fact",
            "``flip <text>`` - Flips your text upside down",
            "``fml`` -  Random FML joke",
            "``gayrate <@user>`` - Are you gay?",
            "``howdumb <@user>`` - Are your friends actually dumb?",
            "``kill <member>`` -  If someone bother's you can now kill them with this command (Warning: Do not try this at home)",
            "``meme`` -  Sends you a random meme",
            "``morse <text>`` -  Transforms your text into morse",
            "``oof`` -  Ooof",
            "``phtext <text1> <text2>`` -  Your own custom made PH text",
            "``programming`` - Sends you a random programming fact/quote",
            "``slap <@user>`` - Slaps the mentionned user",
            "``supreme <text>`` -  Your own custom made Supreme type logo",
            "``yomama`` - Yo mama insult" 
        ])
        .addField("Server and User Information", [
            "``avatar <@user>`` - Sends you the avatar of the mentionned user",
            "``botinfo`` -  Sends you some infomation about the bot",
            "``serverinfo`` -  Sends you some information about the server",
            "``userinfo <@user>`` -  Sends you some information about a user"
        ])
        .addField("Utility Commands", [
            "``calc <expression>`` - Calcutates your math expressions",
            "``covid-19`` - Sends you some statistics about the covid-19",
            "``dm <@user> <message>`` - DM a user on the server",
            "``bin <text/code>`` -  Quick method too get your code into a link",
            "``encrypt <message>`` - Encrypts your message",
            "``decrypt <encrypted message>`` - Decrypts your encrypted message",
            "``length <text>`` - Sends you the length of the given text",
            "``ping`` - Pong!",
            "``say <text>`` -  Say cheese...",
            "``support`` -  Invite Xeno to your own server",
            "``instagram <user>`` -  Sends information from a selected instagram profile",
            "``gif <theme>`` -  Sends you a random gif with the selected theme",
            "``weather <city>`` -  Gives you the weather of a selected place",
        ])
        .addField("Moderation Commands", [
            "``announce <channel id> <message>`` - Announces your message in the specified channel",
            "``ban <@user> <reason>`` - Ban the specified user from the server",
            "``kick <@user> <reason>`` - Kicks the specified user from the server",
            "``purge <number>`` -  Deletes a selected amout of messages"
        ])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)

        message.channel.send(helpEmbed);
        
    }  
}