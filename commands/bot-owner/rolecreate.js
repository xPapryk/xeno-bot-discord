module.exports = {
    name: "rolecreate",
    category: "bot-owner",
    description: "create a specific role",
    usage: "rolecreate",
    run: async (client, message, args) => {

        let isBotOwner = message.author.id == '342333088573161472';

        if(!isBotOwner) {
        return message.channel.send("You cannot execute this command.")
        .then(msg => {msg.delete({ timeout: 5000 })})
        }
      

        message.guild.roles.create({ data: { name: 'Moderator', permissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'] } });   
        console.log("Role successfully created.")     
    }
}