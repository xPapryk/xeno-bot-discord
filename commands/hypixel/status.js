/*const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
var MojangAPI = require('mojang-api');

module.exports = {
    name: "status",
    category: "minecraft",
    description: "Find players status on the hypixel server",
    run: async (client, message, args) => {

        const user = args.join(" ");

        if(!user) {
            return message.channel.reply("Maybe it's usefull to actually search for someone...")
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const link = `https://api.mojang.com/users/profiles/minecraft/${user}`;
        const response = await fetch(link).then(link => link.json());

        if(!response.name) {
            return message.channel.send("I coudn't find that user.")
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        let uuid = `${response.id}`;

        const url = `https://api.hypixel.net/status?key=2441ceef-7c75-4fd8-a6c8-b6f093a2ca94&uuid=${uuid}`;
        const res = await fetch(url).then(url => url.json());

        console.log(res);

        if (res.session.online === 'true');
        if (res.session.online === 'false');

        let statusEmbed = new MessageEmbed()
        .setTitle(`${user}'s Hypixel status`)
        .setURL(`https://namemc.com/search?q={user}`)
        .setThumbnail(`https://visage.surgeplay.com/full/512/${uuid}`)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .addField("Online:", `${res.session.online}`)

        message.channel.send(statusEmbed);
    }
}*/

const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "status",
    category: "hypixel",
    description: "Get's the status of a player on the Hypixel server",
    usage: "status <player>",
    run: async (client, message, args) => {

        const Hypixel = require('hypixel-api-reborn');
        const hypixel = new Hypixel.Client('2441ceef-7c75-4fd8-a6c8-b6f093a2ca94');

        var MojangAPI = require('mojang-api');
        MojangAPI.nameToUuid(`${args[0]}`, function(err, res) {
            if (err)
                console.log(err);
            else {
                console.log(res[0].name + "? No, they're " + res[0].id + " to me.");
            }

            let uuid = `${res[0].id}`;

            hypixel.getPlayer(`${args[0]}`).then(player => {

                let mcPlayer = `${args[0]}`;

                if(player.isOnline) {
                    let onlineEmbed = new MessageEmbed()
                    .setColor("#27ae60")
                    .setTitle(`${mcPlayer}'s Hypixel's status`)
                    .setURL(`https://namemc.com/search?q=${mcPlayer}`)
                    .addField('**Status:**', "Online")
                    .setThumbnail(`https://visage.surgeplay.com/full/512/${uuid}`)
                    .setTimestamp()
                    .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
    
                message.channel.send(onlineEmbed);
                } else {
                    let offlineEmbed = new MessageEmbed()
                    .setColor("#c0392b")
                    .setTitle(`${mcPlayer}'s Hypixel's status`)
                    .setURL(`https://namemc.com/search?q=${mcPlayer}`)
                    .addField('**Status:**', "Offline")
                    .setThumbnail(`https://visage.surgeplay.com/full/512/${uuid}`)
                    .setTimestamp()
                    .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
    
                message.channel.send(offlineEmbed);
                }
    
                })

        });

    }
}