const { Message, MessageEmbed } = require('discord.js');
const moment = require('moment');
let db = require("quick.db");

module.exports = {
    name: "userinfo",
    category: "server_and_user",
    description: "Returns some information about the mentionned user",
    usage: "userinfo [@user]",
    run: async (client, message, args) => {

        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member || message.author;

        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = 'Online';
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'Offline';

        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        let status = member.presence.status;
        let color = member.color;

        let whoEmbed = new MessageEmbed()
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setThumbnail(member.user.displayAvatarURL())
        .setColor("RANDOM")
        .addField("User", member.user.tag, true)
        .addField("User ID", member.user.id, true)
        .addField('\u200b', '\u200b', true)
        .addField("Account Creation", moment.utc(member.user.createdAt).format("MMMM Do YYYY"), true)
        .addField("Joined On", joineddate, true)
        .addField('\u200b', '\u200b', true)
        .addField("Status", status, true)
        .addField("Highest Role", member.roles.highest, true)
        .addField('\u200b', '\u200b', true)

        if(db.get(`_yt_${member.user.id}`)) {

            let channel = db.get(`_yt_${member.user.id}`)

            whoEmbed.addField('Youtube Channel', channel, true)

        }

        message.channel.send(whoEmbed);

    }  
}