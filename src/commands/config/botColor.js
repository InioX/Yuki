const Discord = require("discord.js");
const colorSchema = require("../../schemas/botColor.js");

module.exports.run = async (client, message, args) => {
  
  let data = await colorSchema.findOne({ guild_id: message.guild.id });
  
  let colorname;
  let colorcode;
  let successMessage = "";

  const successEmbed = new Discord.MessageEmbed();
  
  switch(args[0]) {
    
    case("red"):
    colorname = "red"
    colorcode = "#ff0000"
    break;

    case("blue"):
    colorname = "blue"
    colorcode = "#0000FF"
    break;

    default:
    return message.channel.send("invalid color")
    break;

  }

  if(data) {
    let newData = new colorSchema({
      guild_id: message.guild.id,
      color_name: colorname,
      color_code: colorcode
    });

  try {
    newData.save();
  } catch(err) {
    return console.log(err)
  };
  
  successMessage = `Successfully set the color to ${colorname}`;
  
  successEmbed.setDescription(successMessage);
  successEmbed.setColor(colorcode);

  message.channel.send({ embeds: [successEmbed] });

  } else {
    let newData = new colorSchema({
    guild_id: message.guild.id,
    color_name: colorname,
    color_code: colorcode
    });

    try {
    newData.save();
    } catch(err) {
    return console.log(err)
    };
    
    successMessage = `Successfully updated the color to ${colorname}`
    
    successEmbed.setDescription(successMessage);
    successEmbed.setColor(colorname);``
    
    message.channel.send({ embeds: [successEmbed] });
  }

}

module.exports.config = {
  name: "bot-color",
  aliases: ["bc"]
}
