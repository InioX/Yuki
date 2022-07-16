const chalk = require("chalk")
const mongoose = require("mongoose")

require("dotenv").config();

module.exports = async (bot) => {
    console.log(`${chalk.bold.green('[BOT]')} Logged in as ${bot.user.username}#${bot.user.discriminator}.`);
    await mongoose.connect(
      process.env.MONGO_URI || '',
      {
        keepAlive: true
      }
    ) 
    console.log(`${chalk.bold.green('[MONGODB]')} Succesfully connected to MongoDB.`);
}
