const config = require("../utils/config.json");
const colorSchema = require("../schemas/botColor.js");
module.exports = async (bot, message) => {

  let data = await colorSchema.findOne({ guild_id: message.guild.id });
  let color = data ? data.color_code : config.default_color 

  if (message.author.bot) return;
  
  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  if (message.author.bot || message.channel.type === 'dm') return;

  const prefix = config.default_prefix

  if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) return message.channel.send(`${message.guild.name}'s Prefix is \`${prefix}\`\n\nTo get a list of commands, say \`${config.default_prefix}help\``);

  if (!message.content.startsWith(prefix)) return;
  const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
  if (commandfile) {
          commandfile.run(bot, message, args, color);
  }
}
