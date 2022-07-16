const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 32767 });
const EventHandler = require("./utils/loadEvents");

require("dotenv").config();

module.exports = class BotManager extends Discord.Client {
constructor(options) {
  super(options);
  this.commands = new Discord.Collection();
  this.aliases = new Discord.Collection();
}

setup() {
  this.events = new EventHandler(this);
  this.events.init();

  require("./utils/loadCommands")(this);

  this.login(process.env.TOKEN);
  }

};
