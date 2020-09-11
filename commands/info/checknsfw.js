const db = require("quick.db");

module.exports = {
    name: "checknsfw",
    category: "info",
    description: "Check if NSFW commands are allowed on this server",
    usage: "checknsfw",
    run: async(client, message, args) => {

        let nsfw = db.get(`_nsfw_${message.guild.id}`);

        if(!nsfw) {
            return message.channel.send(`NSFW commands on this server are turned \`\`on\`\`.`)
        } else {
            message.channel.send(`NSFW commands on this server are turned \`\`${nsfw}\`\`.`)
        }
    
    }
}