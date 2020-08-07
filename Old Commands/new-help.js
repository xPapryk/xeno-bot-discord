const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help2",
    category: "help",
    description: "help command",
    run: async (client, message, args) => {

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setTitle("Help")
        .setDescription("This is a list of commands you can use. You can get more info about a specific command by using ``x!help <command>`` ``(e.g. x!help say)``.\n The prefix of this bot is ``x!``.")
        .addField("Hypixel Commands", "``bedwars`` ``skywars`` ``status``")
        .addField("Game Commands", "``fortnite`` ``server``")
        .addField("Fun Commands", "``8ball`` ``advice`` ``asciify`` ``clyde`` ``didumean`` ``emoji`` ``fact`` ``flip`` ``fml`` ``gayrate`` ``howdumb`` ``kill`` ``meme`` ``morse`` ``oof`` ``phtext`` ``programming`` ``slap`` ``supreme`` ``yomama``")
        .addField("Server and User Commands", "``avatar`` ``botinfo`` ``serverinfo`` ``userinfo``")
        .addField("Utility Commands", "``calc`` ``covid-19`` ``dm`` ``bin`` ``encrypt`` ``decrypt`` ``length`` ``ping`` ``say`` ``support`` ``instagram`` ``gif`` ``weather``")
        .addField("Moderation Commands", "``announce`` ``ban`` ``kick`` ``purge``")
        
        if(!args[0]) {
            return message.channel.send(embed)
        }

        /* Hypixel Commands */ 

        if(args[0] === "bedwars") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "bedwars", true)
            .addField("Description", "General bedwars player statistics", true)
            .addField("Usage:", "``x!bedwars <player>``")

            return message.channel.send(bedwars)

        }

        if(args[0] === "skywars") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "skywars", true)
            .addField("Description", "General skywars player statistics", true)
            .addField("Usage:", "``x!skywars <player>``")

            return message.channel.send(bedwars)

        }

        if(args[0] === "status") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "status", true)
            .addField("Description", "Checks if a player is online or not", true)
            .addField("Usage:", "``x!status <player>``")

            return message.channel.send(bedwars)

        }

        /* Game Commands */
        
        if(args[0] === "fortnite") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "fortnite", true)
            .addField("Description", "Gets the Fortnite statistics of a player", true)
            .addField("Usage:", "``x!fortnite <player> <platform>``")

            return message.channel.send(bedwars)

        }

        if(args[0] === "server") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "server", true)
            .addField("Description", "Server information of a minecraft server", true)
            .addField("Usage:", "``x!server <ip adress>``")

            return message.channel.send(bedwars)

        }

        /* Fun Commands */

        if(args[0] === "8ball") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "8ball", true)
            .addField("Description", "Ask the bot a question and it will respong", true)
            .addField("Usage:", "``x!8ball <question>``")

            return message.channel.send(bedwars)

        }

        if(args[0] === "advice") {

            let bedwars = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "advice", true)
            .addField("Description", "Gives you an advice", true)
            .addField("Usage:", "``x!advice``")

            return message.channel.send(bedwars)

        }

        if(args[0] === "asciify") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "asciify", true)
            .addField("Description", "Makes your text look cooler", true)
            .addField("Usage:", "``x!asciify <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "clyde") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "clyde", true)
            .addField("Description", "Your own Clyde message", true)
            .addField("Usage:", "``x!clyde <message>``")

            return message.channel.send(embed)

        }

        if(args[0] === "decrypt") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "decrypt", true)
            .addField("Description", "Descrypt your encrypted message", true)
            .addField("Usage:", "``x!decrypt <encrypted message>``")

            return message.channel.send(embed)

        }

        if(args[0] === "dum") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "dum", true)
            .addField("Description", "Make you own google did you mean message", true)
            .addField("Usage:", "``x!didumean <text1> <text2>``")

            return message.channel.send(embed)

        }

        if(args[0] === "emoji") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "emoji", true)
            .addField("Description", "Sends you a random emoji", true)
            .addField("Usage:", "``x!emoji``")

            return message.channel.send(embed)

        }

        if(args[0] === "encrypt") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "encrypt", true)
            .addField("Description", "Encrypts your message", true)
            .addField("Usage:", "``x!encrypt message>``")

            return message.channel.send(embed)

        }

        if(args[0] === "fact") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "fact", true)
            .addField("Description", "Gives you a random fact", true)
            .addField("Usage:", "``x!fact``")

            return message.channel.send(embed)

        }

        if(args[0] === "flip") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "flip", true)
            .addField("Description", "Flips your text", true)
            .addField("Usage:", "``x!flip <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "fml") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "fml", true)
            .addField("Description", "Sends you a random FML joke", true)
            .addField("Usage:", "``x!fml``")

            return message.channel.send(embed)

        }

        if(args[0] === "gayrate") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "gayrate", true)
            .addField("Description", "How gay are you friends?", true)
            .addField("Usage:", "``x!gayrate <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "homdumb") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "howdumb", true)
            .addField("Description", "How dumb are your friends?", true)
            .addField("Usage:", "``x!howdumb <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "kill") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "kill", true)
            .addField("Description", "Kill a user with a simple command (Warning: Do not try this at home)", true)
            .addField("Usage:", "``x!kill <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "meme") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "meme", true)
            .addField("Description", "Gives you a random meme", true)
            .addField("Usage:", "``x!meme``")

            return message.channel.send(embed)

        }

        if(args[0] === "morse") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "morse", true)
            .addField("Description", "Transforms your text into morse", true)
            .addField("Usage:", "``x!morse <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "oof") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "off", true)
            .addField("Description", "Random oof gif", true)
            .addField("Usage:", "``x!oof``")

            return message.channel.send(embed)

        }

        if(args[0] === "phtext") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "phtext", true)
            .addField("Description", "Your own PH type logo", true)
            .addField("Usage:", "``x!ph <text1> <text2>``")

            return message.channel.send(embed)

        }

        if(args[0] === "programming") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "programming", true)
            .addField("Description", "Sends you a random programming quote", true)
            .addField("Usage:", "``x!programming``")

            return message.channel.send(embed)

        }

        if(args[0] === "rate") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "rate", true)
            .addField("Description", "Rates a user on your server", true)
            .addField("Usage:", "``x!rate <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "slap") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "slap", true)
            .addField("Description", "Slaps the mentionned user", true)
            .addField("Usage:", "``x!slap <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "supreme") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "supreme", true)
            .addField("Description", "Your own supreme type logo", true)
            .addField("Usage:", "``x!supreme <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "trump") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "trump", true)
            .addField("Description", "Gives you a random quote of Trump", true)
            .addField("Usage:", "``x!trump``")

            return message.channel.send(embed)

        }

        if(args[0] === "yomama") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "yomama", true)
            .addField("Description", "Gives you a random yomama joke", true)
            .addField("Usage:", "``x!yomama``")

            return message.channel.send(embed)

        }

        /* Utility Commands */

        if(args[0] === "calc") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "calc", true)
            .addField("Description", "Calculates your math expression for you", true)
            .addField("Usage:", "``x!calc <math expression>``")

            return message.channel.send(embed)

        }

        if(args[0] === "covid-19") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "covid-19", true)
            .addField("Description", "Sends you some statistics about the covid-19", true)
            .addField("Usage:", "``x!covid-19``")

            return message.channel.send(embed)

        }

        if(args[0] === "dm") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "dm", true)
            .addField("Description", "Sends a private message to the mentionned user", true)
            .addField("Usage:", "``x!dm <@user> <message>``")

            return message.channel.send(embed)

        }

        if(args[0] === "bin") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "bin", true)
            .addField("Description", "Quick method to get your code/text into a link", true)
            .addField("Usage:", "``x!bin <code/text > ``")

            return message.channel.send(embed)

        }

        if(args[0] === "length") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "length-1", true)
            .addField("Description", "Gives you the length of your text", true)
            .addField("Usage:", "``x!length <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "ping") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "ping", true)
            .addField("Description", "Gives you your ping", true)
            .addField("Usage:", "``x!ping``")

            return message.channel.send(embed)

        }

        if(args[0] === "say") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "say", true)
            .addField("Description", "Tell the bot to say something", true)
            .addField("Usage:", "``x!say <text>``")

            return message.channel.send(embed)

        }

        if(args[0] === "support") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "support", true)
            .addField("Description", "Get support links for this bot", true)
            .addField("Usage:", "``x!support``")

            return message.channel.send(embed)

        }

        if(args[0] === "weather") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "weather", true)
            .addField("Description", "Gives you the current weather of the selected country", true)
            .addField("Usage:", "``x!weather <country>``")

            return message.channel.send(embed)

        }

        if(args[0] === "gif") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "gif", true)
            .addField("Description", "Sends you a random gif with the selected theme", true)
            .addField("Usage:", "``x!gif <theme>``")

            return message.channel.send(embed)

        }

        if(args[0] === "covid-instagram") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "instagram", true)
            .addField("Description", "Sends you some information from a selected instagram profile", true)
            .addField("Usage:", "``x!instagram <user>``")

            return message.channel.send(embed)

        }

        /* User and Server Commands */

        if(args[0] === "botinfo") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "botinfo", true)
            .addField("Description", "Sends you some information about the bot", true)
            .addField("Usage:", "``x!botinfo``")

            return message.channel.send(embed)

        }

        if(args[0] === "serverinfo") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "serverinfo", true)
            .addField("Description", "Sends you some information about the current server", true)
            .addField("Usage:", "``x!serverinfo``")

            return message.channel.send(embed)

        }

        if(args[0] === "userinfo") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "userinfo", true)
            .addField("Description", "Sends you some information about the specified user", true)
            .addField("Usage:", "``x!userinfo <@user>``")

            return message.channel.send(embed)

        }

        if(args[0] === "avatar") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "avatar", true)
            .addField("Description", "Gives you the avatar of the specified user", true)
            .addField("Usage:", "``x!avatar <@user>``")

            return message.channel.send(embed)

        }

        /* Moderation Commands*/

        if(args[0] === "announce") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "announce", true)
            .addField("Description", "Make an announcement in the specified channel", true)
            .addField("Usage:", "``x!annouce <channel id> <announcement>``")

            return message.channel.send(embed)

        }

        if(args[0] === "ban") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "ban", true)
            .addField("Description", "Bans the specified user", true)
            .addField("Usage:", "``x!ban <@user> <reason>``")

            return message.channel.send(embed)

        }

        if(args[0] === "kick") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "kick", true)
            .addField("Description", "Kicks the specified user", true)
            .addField("Usage:", "``x!kick <@user> <reason>``")

            return message.channel.send(embed)

        }

        if(args[0] === "purge") {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setTimestamp()
            .addField("Command", "purge", true)
            .addField("Description", "Deletes the specified amout of message", true)
            .addField("Usage:", "``x!purge <number of messages>``")

            return message.channel.send(embed)

        }

    }   
}