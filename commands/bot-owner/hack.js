module.exports = {
    name: "hack",
    category: "bot-owner",
    description: "hacks a user on the server",
    usage: "hack <@user>",
    run: async (client, message, args) => {

        let isBotOwner = message.author.id == '342333088573161472';



        if(!isBotOwner) {
            return message.channel.send("You cannot execute this command.")
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

       message.channel.send(`Hacking ${args[0]}.`)
       .then(msg => {setTimeout(function () {msg.edit(`Hacking ${args[0]}..`)})})
       .then(msg => {setTimeout(function () {msg.edit(`Hacking ${args[0]}..`)})})

    }
}