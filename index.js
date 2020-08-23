// Client
const { Client, Message, Discord, RichEmbed, Collection } = require('discord.js');
const fs = require("fs");
const { GiveawaysManager } = require("discord-giveaways");
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
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = console.log(`This command doesn't exist: ${args[0]}`);    

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

    const updateUsers = guild => {
        const channel = guild.channels.cache.get('741195266132279296')
        channel.setName(`User Count: ${guild.members.cache.filter(member => !member.user.bot).size}`)
    }

client.on('guildMemberAdd', (member) => updateUsers(member.guild))
client.on('guildMemberRemove', (member) => updateUsers(member.guild))


client.on('ready', s => {
    console.log(`Ready! Connected as ${client.user.username} with prefix '${prefix}'`);
    client.user.setActivity(`x!help`, { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to '${presence.activities[0].name}'`))
        .catch(console.error);
});

client.login(process.env.token); 