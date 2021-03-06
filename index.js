// Client
const { Client, Collection, MessageEmbed } = require('discord.js');
const fs = require("fs");
const { GiveawaysManager } = require("discord-giveaways");
const db = require("quick.db");
const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.alias = new Collection();
client.categories = fs.readdirSync("./commands/")

let prefix = "x!";

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("message", async message => {


    /* Moderation System */

    /*if (message.content === 'stfu') {
        editedmessage = args.join(" ");

        client.message [message.autor.username] = {
            badword: editedmessage
        }

        fs.writeFile ("./badwords.json", JSON.stringify (client.message, null, 4), err => {
            if(err) throw err;
            message.channel.send("Word added to badwords list.")
        });
    }*/


    /* Commands Stuff*/

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);

    if(command)
    command.run(client, message, args);
    
});

const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});

client.giveawaysManager = manager;

;


client.on('ready', s => {
    console.log(`Ready! Connected as ${client.user.username} with prefix '${prefix}'`);
    client.user.setActivity(`x!help`, { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to '${presence.activities[0].name}'`))
        .catch(console.error);
});

client.on('guildMemberAdd', (member) => {

    let chx = db.get(`welchannel_${member.guild.id}`);

    if(chx === null) {
        return
    }

    let embed = new MessageEmbed()
    .setColor("#2980b9")
    .setDescription(`**${member.user.tag}** joined the server`)

    client.channels.cache.get(chx).send(embed)

})

client.on('guildMemberRemove', (member) => {

    let chx = db.get(`welchannel_${member.guild.id}`);

    if(chx === null) {
        return
    }

    let embed = new MessageEmbed()
    .setColor("#c0392b")
    .setDescription(`**${member.user.tag}** left the server`)

    client.channels.cache.get(chx).send(embed)

})

client.login(process.env.token); 