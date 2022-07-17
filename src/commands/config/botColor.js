const Discord = require("discord.js");
const colorSchema = require("../../schemas/botColor.js");

module.exports.run = async (bot, message, args) => {
  
  let data = await colorSchema.findOne({ guild_id: message.guild.id });
  
  let colorname;
  let colorcode;
  let successMessage = "";

  const successEmbed = new Discord.MessageEmbed();
  
  switch(args[0]) {
    
    case("blue"):
    colorname = "blue"
    colorcode = "#0000FF"
    break;

    case("green"):
    colorname = "green"
    colorcode = "#00FF00"
    break;

    case("red"):
    colorname = "red"
    colorcode = "#ff0000"
    break;

    case("orange"):
    colorname = "orange"
    colorcode = "#FF5733"
    break;

    case("yelllow"):
    colorname = "yellow"
    colorcode = "#FFFF00"
    break; 
    
    case("purple"):
    colorname = "purple"
    colorcode = "#800080"
    break;
    
    default:
    return message.channel.send("invalid color")
    break;

  }

  if(!data) {
   await new colorSchema({
      guild_id: message.guild.id,
      color_name: colorname,
      color_code: colorcode
    }).save();

  successMessage = `Successfully set the color to ${colorname}`;
  
  successEmbed.setDescription(successMessage);
  successEmbed.setColor(colorcode);

  message.channel.send({ embeds: [successEmbed] });

  } else {
    await colorSchema.updateOne({
    guild_id: message.guild.id,
    color_name: colorname,
    color_code: colorcode
    })

    successMessage = `Successfully updated the color to ${colorname}`
    
    successEmbed.setDescription(successMessage);
    successEmbed.setColor(colorcode);
    
    message.channel.send({ embeds: [successEmbed] });
  }

}

module.exports.config = {
  name: "change-color",
  aliases: ["cc"]
}
