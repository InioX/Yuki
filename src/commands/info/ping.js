const Discord = require("discord.js")

module.exports.run = async (bot, message, args, color) => {
   const pingEmbed = new Discord.MessageEmbed()
         .setColor(color)
         .setDescription("This is a test :)")
   
   message.channel.send({embeds: [pingEmbed]})
}

module.exports.config = {
    name: "ping",
    aliases: []
}
