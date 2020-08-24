const { Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

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
        /*.addField("Status", status)
        .addField(`Roles`, `<@&${member._roles.join('> <@&')}>`)
        .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")} `, true) 
        .addField('Joined the server At', `${joineddate}\n \u200b`, true)*/
        .addField(`${member.user.tag}'s information`, [
            `**• Status** ${status}`,
            `**• Nickname** ${member.nickname}`,
            `**• Roles:** <@&${member._roles.join('> <@&')}>`,
            `**• Account Created On:** ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`,
            `**• Joined At:** ${joineddate}`
            ])

        message.channel.send(whoEmbed);

    }  
}